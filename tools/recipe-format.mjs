/* ============================================================
   The Recipe File — friendly recipe format (parse + serialize)
   ============================================================
   Converts between:
     • the human-friendly Markdown-with-frontmatter files in /recipes
     • the structured recipe objects the site runs on (window.RECIPES)

   This module is the single source of truth for the format. Both the
   build (recipes/*.md -> recipes.js) and the one-time exporter
   (recipes.js -> recipes/*.md) use it, so emit and parse can never drift.

   Zero dependencies (Node standard library only) — the GitHub Action just
   runs `node tools/build.mjs` with nothing to install.
   ============================================================ */

/* ---------- vocabulary ---------- */

// Canonical (singular) units as stored in the data.
export const UNIT_VOCAB = [
  'cup', 'tsp', 'tbsp', 'oz', 'can', 'lb', 'clove', 'pkg', 'box', 'stick',
  'bag', 'slice', 'pt', 'jar', 'qt', 'head', 'bunch', 'tub', 'stalk', 'pkt',
  'pinch', 'pc', 'loaf', 'gal', 'ears'
];

// Only these full-word units get pluralised when the amount is > 1, purely
// for readable source files. Abbreviations (oz, lb, tsp…) stay as-is. The
// emitter self-checks every line, so nothing here can break a round-trip.
const PLURAL_EMIT = {
  cup: 'cups', clove: 'cloves', can: 'cans', jar: 'jars', box: 'boxes',
  stick: 'sticks', bag: 'bags', slice: 'slices', head: 'heads',
  stalk: 'stalks', tub: 'tubs', loaf: 'loaves', bunch: 'bunches', pinch: 'pinches'
};
// plural -> singular, for reading source files (accepts either form).
const PLURAL_READ = Object.fromEntries(Object.entries(PLURAL_EMIT).map(([s, p]) => [p, s]));

export const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];

export const KNOWN_COURSES = ['Breakfast', 'Lunch', 'Dinner', 'Appetizer', 'Side', 'Salad',
  'Soup', 'Bread', 'Sauce', 'Dressing', 'Marinade', 'Dip', 'Dessert', 'Snack', 'Drink', 'Basics'];

// Serving labels seen in the data; the friendly form uses the lowercased word.
const LABEL_DEFAULT = 'Servings';

const UNICODE_FRAC = {
  '½': 0.5, '⅓': 1 / 3, '⅔': 2 / 3, '¼': 0.25, '¾': 0.75,
  '⅛': 0.125, '⅜': 0.375, '⅝': 0.625, '⅞': 0.875,
  '⅕': 0.2, '⅖': 0.4, '⅗': 0.6, '⅘': 0.8,
  '⅙': 1 / 6, '⅚': 5 / 6, '⅐': 1 / 7, '⅑': 1 / 9, '⅒': 0.1
};
// Single source for the fraction glyphs, so the three places that need them
// can't drift out of sync.
const FRAC_CHARS = Object.keys(UNICODE_FRAC).join('');
const FRAC_CLASS = '[' + FRAC_CHARS + ']';

// Spelled-out unit names a human might type, mapped to the stored abbreviation.
const WORD_UNIT = {
  teaspoon: 'tsp', teaspoons: 'tsp', tablespoon: 'tbsp', tablespoons: 'tbsp',
  ounce: 'oz', ounces: 'oz', pound: 'lb', pounds: 'lb', pint: 'pt', pints: 'pt',
  quart: 'qt', quarts: 'qt', gallon: 'gal', gallons: 'gal',
  package: 'pkg', packages: 'pkg', piece: 'pc', pieces: 'pc',
  cloves: 'clove', cups: 'cup'
};

/* ---------- small helpers ---------- */

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function normalizeUnit(tokenRaw) {
  if (!tokenRaw) return null;
  const t = String(tokenRaw).toLowerCase().replace(/[.,;:]+$/, '');
  if (UNIT_VOCAB.indexOf(t) !== -1) return t;
  if (PLURAL_READ[t]) return PLURAL_READ[t];
  if (WORD_UNIT[t]) return WORD_UNIT[t];
  return null;
}

function pluralizeUnit(unit, amount) {
  if (amount != null && amount > 1 && PLURAL_EMIT[unit]) return PLURAL_EMIT[unit];
  return unit;
}

/* ---------- amounts ---------- */

// Parse a single amount FIELD (may contain a space for a mixed number,
// e.g. "1 1/2"). Returns a number, or null if not a clean amount.
export function parseAmount(strRaw) {
  if (strRaw == null) return null;
  let s = String(strRaw).trim();
  if (!s) return null;

  // mixed number with a space: "1 1/2"
  const mixed = s.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (mixed) return Number(mixed[1]) + Number(mixed[2]) / Number(mixed[3]);

  // whole + unicode fraction, possibly glued: "1½" or "1 ½"
  const uniMixed = s.match(new RegExp('^(\\d+)\\s*(' + FRAC_CLASS + ')$'));
  if (uniMixed) return Number(uniMixed[1]) + UNICODE_FRAC[uniMixed[2]];

  if (UNICODE_FRAC[s] != null) return UNICODE_FRAC[s];

  const frac = s.match(/^(\d+)\/(\d+)$/);
  if (frac) return Number(frac[1]) / Number(frac[2]);

  if (/^\d+$/.test(s)) return Number(s);
  if (/^\d*\.\d+$/.test(s) || /^\d+\.\d*$/.test(s)) return Number(s);

  return null;
}

// True only for a token that is entirely a number (rejects "2%", `6"`).
const PURE_NUMBER_RE = new RegExp('^(\\d+|\\d*\\.\\d+|\\d+\\.\\d*|\\d+/\\d+|' + FRAC_CLASS + '|\\d+' + FRAC_CLASS + ')$');
function isPureNumberToken(tok) {
  return parseAmount(tok) != null && PURE_NUMBER_RE.test(tok);
}

// Pretty amount for a source file. Prefers a common cooking fraction, but
// ONLY if it re-parses to the exact same number; otherwise a plain decimal
// (which JS guarantees round-trips). Integers stay integers.
export function formatAmount(x) {
  if (x == null) return '';
  if (Number.isInteger(x)) return String(x);
  const whole = Math.floor(x);
  const frac = x - whole;
  for (const d of [2, 4, 8, 3, 16]) {
    const n = Math.round(frac * d);
    if (n <= 0 || n >= d) continue;
    const cand = (whole ? whole + ' ' : '') + n + '/' + d;
    if (parseAmount(cand) === x) return cand;
  }
  return String(x); // exact decimal, always round-trips
}

/* ---------- timers ---------- */

export function formatTimer(sec) {
  if (sec == null) return '';
  if (sec >= 3600 && sec % 1800 === 0) return (sec / 3600) + 'h';
  if (sec % 60 === 0) return (sec / 60) + 'm';
  return sec + 's';
}

export function parseTimer(strRaw) {
  const s = String(strRaw).trim().toLowerCase();
  const m = s.match(/^([\d.]+)\s*(h|hr|hours?|m|min|minutes?|s|sec|seconds?)$/);
  if (!m) return null;
  const n = parseFloat(m[1]);
  const u = m[2][0];
  if (u === 'h') return Math.round(n * 3600);
  if (u === 'm') return Math.round(n * 60);
  return Math.round(n);
}

/* ---------- ingredient line ---------- */

export function parseIngredient(lineRaw) {
  let raw = String(lineRaw).replace(/^\s*[-*]\s+/, '').trim();

  // Explicit escape form:  amount | unit | name   (empty field = null).
  // Only engage when the line has EXACTLY the emitter's shape — three
  // pipe-separated fields whose first is empty or a number — so a stray "|"
  // inside a normal ingredient name is treated as text, not a delimiter.
  if (raw.indexOf('|') !== -1) {
    const parts = raw.split('|').map((p) => p.trim());
    if (parts.length === 3 && (parts[0] === '' || parseAmount(parts[0]) != null)) {
      const amount = parts[0] === '' ? null : parseAmount(parts[0]);
      const unit = parts[1] ? normalizeUnit(parts[1]) || parts[1] : null;
      return { amount, unit, name: parts[2] };
    }
    // otherwise fall through and treat the whole line (with its "|") as text
  }

  // Quantity ranges ("1-2 cloves", "2 to 3 cups") have no single amount — keep
  // the whole thing as the name so the scaler isn't fed a misleading value.
  if (/^\d+(?:\.\d+)?\s*[-–—]\s*\d/.test(raw) || /^\d+(?:\.\d+)?\s+to\s+\d/i.test(raw)) {
    return { amount: null, unit: null, name: raw };
  }

  const tokens = raw.split(/\s+/);
  let amount = null;
  let consumed = 0;

  // mixed number across two tokens: "1" "1/2"
  if (tokens.length >= 2 && /^\d+$/.test(tokens[0]) && /^\d+\/\d+$/.test(tokens[1])) {
    amount = Number(tokens[0]) + parseAmount(tokens[1]);
    consumed = 2;
  } else if (isPureNumberToken(tokens[0])) {
    amount = parseAmount(tokens[0]);
    consumed = 1;
  }

  if (amount == null) {
    // no leading amount → the whole line is the name (unmeasured item)
    return { amount: null, unit: null, name: raw };
  }

  const rest = tokens.slice(consumed);
  let unit = null;
  if (rest.length && normalizeUnit(rest[0])) {
    unit = normalizeUnit(rest[0]);
    rest.shift();
  }
  return { amount, unit, name: rest.join(' ') };
}

function emitIngredientFriendly(ing) {
  if (ing.amount == null && ing.unit == null) return '- ' + ing.name;
  if (ing.amount == null) return null; // amount-less with a unit → force explicit form
  const parts = [formatAmount(ing.amount)];
  if (ing.unit) parts.push(pluralizeUnit(ing.unit, ing.amount));
  parts.push(ing.name);
  return '- ' + parts.join(' ');
}

function emitIngredientExplicit(ing) {
  const a = ing.amount == null ? '' : (Number.isInteger(ing.amount) ? String(ing.amount) : formatAmount(ing.amount));
  return '- ' + [a, ing.unit || '', ing.name].join(' | ');
}

export function emitIngredient(ing) {
  const friendly = emitIngredientFriendly(ing);
  if (friendly != null) {
    const rt = parseIngredient(friendly);
    if (sameAmount(rt.amount, ing.amount) && (rt.unit || null) === (ing.unit || null) && rt.name === ing.name) {
      return friendly;
    }
  }
  return emitIngredientExplicit(ing);
}

function sameAmount(a, b) {
  if (a == null || b == null) return a == null && b == null;
  return Math.abs(a - b) < 1e-9;
}

/* ---------- step line ---------- */

export function parseStep(lineRaw) {
  let raw = String(lineRaw).replace(/^\s*(?:\d+\.|[-*])\s+/, '').trim();

  // trailing @timer token
  let timer = null;
  const tm = raw.match(/\s*@timer\s+([\d.]+\s*(?:h|hr|hours?|m|min|minutes?|s|sec|seconds?))\s*$/i);
  if (tm) {
    timer = parseTimer(tm[1].replace(/\s+/g, ''));
    raw = raw.slice(0, tm.index).trimEnd();
  }

  // Leading step title: **Title:** (matching the emitter). The colon is
  // required, so plain **bold** emphasis at the start of a sentence stays in
  // the content instead of being pulled out as a title.
  let title = '';
  const tt = raw.match(/^\*\*(.+?):\*\*\s*/);
  if (tt) {
    title = tt[1].trim();
    raw = raw.slice(tt[0].length).trim();
  }

  return { title, content: raw, timer };
}

// Turn stored {NNNN} ingredient references into the friendly {{short name}}
// (or {{#index}} when a short name is ambiguous). Also used by the editor to
// show existing recipes in an editable form.
export function stepContentToFriendly(content, ingredients) {
  return String(content || '').replace(/\{(\d{4})\}/g, (m, iid) => {
    const idx = ingredients.findIndex((x) => x.id === iid);
    if (idx === -1) return m;
    const short = shortName(ingredients[idx].name);
    const dupes = ingredients.filter((x) => shortName(x.name).toLowerCase() === short.toLowerCase());
    return dupes.length === 1 ? '{{' + short + '}}' : '{{#' + (idx + 1) + '}}';
  });
}

// Emit a step (with {{name}} references resolved back to {NNNN} on build).
export function emitStep(step, recipe) {
  let line = '';
  if (step.title) line += '**' + step.title + ':** ';
  line += stepContentToFriendly(step.content, recipe.ingredients);
  if (step.timer != null) line += ' @timer ' + formatTimer(step.timer);
  return line;
}

function shortName(name) { return String(name).split(/[,(]/)[0].trim(); }

// Resolve {{ref}} tokens in a step's content back to {NNNN}, using the
// recipe's (already-assigned, sequential) ingredient ids.
function resolveRefs(content, ingredients, ctx) {
  return content.replace(/\{\{\s*(.+?)\s*\}\}/g, (m, tokenRaw) => {
    const token = tokenRaw.trim();
    const byIndex = token.match(/^#(\d+)$/);
    if (byIndex) {
      const idx = Number(byIndex[1]) - 1;
      if (idx < 0 || idx >= ingredients.length) throw new Error(`${ctx}: reference {{#${byIndex[1]}}} is out of range`);
      return '{' + ingredients[idx].id + '}';
    }
    const matches = ingredients.filter((x) => shortName(x.name).toLowerCase() === token.toLowerCase());
    if (matches.length === 0) throw new Error(`${ctx}: reference {{${token}}} matches no ingredient`);
    if (matches.length > 1) throw new Error(`${ctx}: reference {{${token}}} is ambiguous — use {{#N}}`);
    return '{' + matches[0].id + '}';
  });
}

/* ---------- frontmatter ---------- */

function needsQuoting(v) {
  return /^[\s>|&*!%@`"'#?,\-\[]/.test(v) || /:\s/.test(v) || /[\n]/.test(v) || v !== v.trim() || v === '';
}
function emitScalar(v) {
  const s = String(v);
  if (needsQuoting(s)) return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  return s;
}
function emitList(arr) {
  return '[' + arr.map((x) => {
    const s = String(x);
    return /[,\[\]"]/.test(s) || s !== s.trim() ? emitScalar(s) : s;
  }).join(', ') + ']';
}
function unquote(v) {
  const s = v.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  return s;
}
function parseList(v) {
  const inner = v.trim().replace(/^\[/, '').replace(/\]$/, '').trim();
  if (!inner) return [];
  // split on commas that are not inside quotes (our data has no quoted commas,
  // but keep it robust)
  const out = [];
  let cur = '', q = null;
  for (const ch of inner) {
    if (q) { if (ch === q) q = null; else cur += ch; }
    else if (ch === '"' || ch === "'") q = ch;
    else if (ch === ',') { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out.map((x) => unquote(x)).filter((x) => x !== '');
}

/* ---------- serialize: recipe object -> markdown ---------- */

export function serialize(recipe) {
  const r = recipe;
  const fm = [];
  fm.push('title: ' + emitScalar(r.title || ''));
  if (r.source) fm.push('source: ' + emitScalar(r.source));
  fm.push('courses: ' + emitList(r.courses || []));
  if (r.tags && r.tags.length) fm.push('tags: ' + emitList(r.tags));
  if (r.difficulty) fm.push('difficulty: ' + r.difficulty);
  if (r.time) fm.push('time: ' + emitScalar(r.time));
  if (r.baseServings != null) {
    let sv = (r.servingsEstimated ? '~' : '') + r.baseServings;
    const label = r.servingsLabel || LABEL_DEFAULT;
    if (label !== LABEL_DEFAULT) sv += ' ' + label.toLowerCase();
    fm.push('servings: ' + sv);
  }
  const n = r.nutrition;
  if (n && n.calories != null) {
    fm.push('calories: ' + n.calories);
    if (n.protein != null) fm.push('protein: ' + n.protein);
    if (n.carbs != null) fm.push('carbs: ' + n.carbs);
    if (n.fat != null) fm.push('fat: ' + n.fat);
  }

  let out = '---\n' + fm.join('\n') + '\n---\n';

  if (r.desc) out += '\n' + r.desc + '\n';

  if (r.ingredients && r.ingredients.length) {
    out += '\n## Ingredients\n' + r.ingredients.map(emitIngredient).join('\n') + '\n';
  }
  if (r.steps && r.steps.length) {
    out += '\n## Steps\n' + r.steps.map((s, i) => (i + 1) + '. ' + emitStep(s, r)).join('\n') + '\n';
  }
  if (r.notes) {
    out += '\n## Notes\n' + r.notes.split('\n\n').map((p) => p.trim()).join('\n\n') + '\n';
  }
  return out;
}

/* ---------- parse: markdown -> recipe object ---------- */

const SECTION_ALIASES = {
  ingredients: 'ingredients', ingredient: 'ingredients',
  steps: 'steps', step: 'steps', method: 'steps', directions: 'steps',
  instructions: 'steps', preparation: 'steps', prep: 'steps',
  notes: 'notes', note: 'notes'
};

export function parse(md, id) {
  const text = String(md).replace(/\r\n/g, '\n').replace(/^﻿/, '');
  const fmMatch = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!fmMatch) throw new Error(`${id}: missing --- frontmatter block`);

  const fm = {};
  for (const line of fmMatch[1].split('\n')) {
    if (!line.trim()) continue;
    const ci = line.indexOf(':');
    if (ci === -1) throw new Error(`${id}: bad frontmatter line "${line}"`);
    const key = line.slice(0, ci).trim().toLowerCase();
    const val = line.slice(ci + 1).trim();
    fm[key] = val;
  }

  const recipe = { id };
  recipe.title = unquote(fm.title || '');
  recipe.source = fm.source != null ? unquote(fm.source) : '';
  recipe.courses = parseList(fm.courses || fm.course || '[]');
  recipe.tags = parseList(fm.tags || fm.tag || '[]');
  recipe.difficulty = fm.difficulty ? cap(fm.difficulty.trim().toLowerCase()) : null;

  recipe.time = fm.time != null ? unquote(fm.time) : '';

  // servings: "~24 cookies" | "6" | "~6"
  recipe.servingsLabel = LABEL_DEFAULT;
  recipe.baseServings = null;
  recipe.servingsEstimated = false;
  const svKey = fm.servings != null ? fm.servings : (fm.makes != null ? fm.makes : (fm.yield != null ? fm.yield : null));
  if (svKey != null && svKey !== '') {
    const sm = svKey.trim().match(/^(~)?\s*([\d.]+)\s*([A-Za-z]+)?\s*$/);
    if (!sm) throw new Error(`${id}: bad servings value "${svKey}"`);
    recipe.servingsEstimated = !!sm[1];
    recipe.baseServings = Number(sm[2]);
    if (sm[3]) recipe.servingsLabel = cap(sm[3].toLowerCase());
  }

  // nutrition
  const num = (k) => (fm[k] != null && fm[k] !== '' ? Number(fm[k]) : null);
  if (fm.calories != null && fm.calories !== '') {
    recipe.nutrition = { calories: Number(fm.calories), protein: num('protein'), carbs: num('carbs'), fat: num('fat') };
  } else {
    recipe.nutrition = null;
  }

  // body
  const body = text.slice(fmMatch[0].length);
  const lines = body.split('\n');
  const sections = { intro: [] };
  let cur = 'intro';
  for (const line of lines) {
    const h = line.match(/^##\s+(.+?)\s*$/);
    if (h) {
      const heading = h[1].trim().replace(/:$/, ''); // tolerate a trailing colon
      const key = SECTION_ALIASES[heading.toLowerCase()];
      cur = key || ('unknown:' + heading);
      sections[cur] = [];
    } else {
      (sections[cur] = sections[cur] || []).push(line);
    }
  }

  // Fail loud on a mistyped heading that swallowed a list — otherwise a typo
  // like "## Ingredient" would silently drop the whole ingredient list.
  for (const k of Object.keys(sections)) {
    if (k.startsWith('unknown:') && sections[k].some((l) => /^\s*(?:\d+\.|[-*])\s+/.test(l))) {
      throw new Error(`${id}: unrecognized section "## ${k.slice(8)}" contains a list — did you mean "## Ingredients" or "## Steps"?`);
    }
  }

  recipe.desc = (sections.intro || []).join('\n').trim();

  recipe.ingredients = [];
  if (sections.ingredients) {
    sections.ingredients.forEach((l) => {
      if (!/^\s*[-*]\s+/.test(l)) return;
      const ing = parseIngredient(l);
      if (ing.name && ing.name.trim()) recipe.ingredients.push(ing); // skip stray empty bullets
    });
  }
  // assign sequential ids AFTER the full list is known
  recipe.ingredients.forEach((ing, i) => { ing.id = String(i + 1).padStart(4, '0'); });

  recipe.steps = [];
  if (sections.steps) {
    sections.steps.forEach((l) => {
      if (/^\s*(?:\d+\.|[-*])\s+/.test(l)) recipe.steps.push(parseStep(l));
    });
  }
  // resolve {{refs}} now that ingredient ids exist
  recipe.steps.forEach((st, i) => {
    st.content = resolveRefs(st.content, recipe.ingredients, `${id} step ${i + 1}`);
  });

  recipe.notes = '';
  if (sections.notes) {
    recipe.notes = sections.notes.join('\n').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean).join('\n\n');
  }

  return orderKeys(recipe);
}

// Emit object keys in the documented schema order (nice, stable JSON).
export function orderKeys(r) {
  const o = {};
  o.id = r.id;
  o.title = r.title;
  o.source = r.source || '';
  o.courses = r.courses || [];
  o.tags = r.tags || [];
  o.difficulty = r.difficulty != null ? r.difficulty : null;
  o.time = r.time || '';
  o.servingsLabel = r.servingsLabel || LABEL_DEFAULT;
  o.baseServings = r.baseServings != null ? r.baseServings : null;
  o.servingsEstimated = !!r.servingsEstimated;
  o.nutrition = r.nutrition || null;
  o.desc = r.desc || '';
  o.ingredients = (r.ingredients || []).map((i) => ({ id: i.id, amount: i.amount == null ? null : i.amount, unit: i.unit == null ? null : i.unit, name: i.name }));
  o.steps = (r.steps || []).map((s) => ({ title: s.title || '', content: s.content || '', timer: s.timer == null ? null : s.timer }));
  o.notes = r.notes || '';
  return o;
}

/* ---------- validation (shared by the build AND the browser editor) ---------- */

// Reject control chars EXCEPT tab (\x09) and newline (\x0a) — notes use
// blank-line-separated paragraphs.
const CTRL_RE = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;

// Returns { errors, warnings }. Errors block publishing; warnings are advisory.
// The site injects recipe text into HTML, so this refuses anything that could
// break out of a tag/attribute — checked across EVERY string via a recursive
// walk, so no field (present or future) can slip past the scan.
export function validateRecipe(r) {
  const errors = [];
  const warnings = [];
  const id = r.id;

  function scan(where, s) {
    if (typeof s !== 'string') return;
    if (s.indexOf('<') !== -1 || s.indexOf('>') !== -1)
      errors.push(`${id}: ${where} contains "<" or ">" (not allowed — could inject HTML)`);
    if (/<\s*script/i.test(s) || /javascript:/i.test(s) || /\son\w+\s*=/i.test(s))
      errors.push(`${id}: ${where} looks like it contains script/HTML`);
    if (CTRL_RE.test(s)) errors.push(`${id}: ${where} contains control characters`);
    if (s.length > 6000) errors.push(`${id}: ${where} is unreasonably long (${s.length} chars)`);
  }
  (function walk(val, path) {
    if (typeof val === 'string') scan(path || 'value', val);
    else if (Array.isArray(val)) val.forEach((v, i) => walk(v, `${path}[${i}]`));
    else if (val && typeof val === 'object') for (const k of Object.keys(val)) walk(val[k], path ? `${path}.${k}` : k);
  })(r, '');

  if (!/^[a-z0-9][a-z0-9-]*$/.test(id || '')) errors.push(`${id}: filename/id must be lowercase-with-hyphens`);
  if (!r.title || !r.title.trim()) errors.push(`${id}: missing title`);
  if (!r.courses || !r.courses.length) warnings.push(`${id}: no courses listed`);
  if (r.difficulty != null && DIFFICULTIES.indexOf(r.difficulty) === -1)
    errors.push(`${id}: difficulty "${r.difficulty}" must be Easy, Medium, or Hard`);
  (r.courses || []).forEach((c) => { if (KNOWN_COURSES.indexOf(c) === -1) warnings.push(`${id}: unusual course "${c}"`); });

  (r.ingredients || []).forEach((ing, i) => {
    if (!ing.name || !ing.name.trim()) warnings.push(`${id}: ingredient ${i + 1} has no name`);
    if (ing.unit != null && UNIT_VOCAB.indexOf(ing.unit) === -1) warnings.push(`${id}: unusual unit "${ing.unit}"`);
    if (ing.amount != null && !(isFinite(ing.amount) && ing.amount >= 0)) errors.push(`${id}: ingredient ${i + 1} has a bad amount`);
  });
  (r.steps || []).forEach((st, i) => {
    if (st.timer != null && !(Number.isInteger(st.timer) && st.timer > 0)) errors.push(`${id}: step ${i + 1} has a bad timer`);
  });
  const n = r.nutrition;
  if (n) ['calories', 'protein', 'carbs', 'fat'].forEach((k) => {
    if (n[k] != null && !(isFinite(n[k]) && n[k] >= 0)) errors.push(`${id}: nutrition.${k} is not a valid number`);
  });

  return { errors, warnings };
}
