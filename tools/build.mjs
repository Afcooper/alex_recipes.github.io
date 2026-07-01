/* BUILD: recipes/*.md  ->  recipes.js  (+ assets/recipe-format.global.js)
   This is what the GitHub Action runs. It:
     1. reads every /recipes/*.md file,
     2. parses + VALIDATES + SANITY-CHECKS each recipe (shared validateRecipe),
     3. refuses to write anything if a recipe is unsafe or broken
        (so a bad edit can never blank or poison the live site),
     4. writes a fresh, deterministic recipes.js (window.RECIPES),
     5. regenerates the classic-script twin of the format library that the
        browser editor loads (so editor.html works from file:// too).

   Zero dependencies. Run: node tools/build.mjs   (add --check to validate only)
*/
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse, orderKeys, validateRecipe } from './recipe-format.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'recipes');
const outFile = path.join(root, 'recipes.js');
const twinFile = path.join(root, 'assets', 'recipe-format.global.js');
const checkOnly = process.argv.includes('--check');

const errors = [];
const warnings = [];

/* ---------- read + parse + validate all recipe files ---------- */
if (!fs.existsSync(srcDir)) { console.error('No /recipes directory found.'); process.exit(1); }
const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.md') && !f.startsWith('_')).sort();
if (!files.length) { console.error('No recipe .md files found in /recipes.'); process.exit(1); }

const recipes = [];
const seenIds = new Set();
for (const f of files) {
  const id = f.replace(/\.md$/, '');
  let r;
  try {
    r = orderKeys(parse(fs.readFileSync(path.join(srcDir, f), 'utf8'), id));
  } catch (e) {
    errors.push(`${f}: ${e && e.message ? e.message : e}`);
    continue;
  }
  if (seenIds.has(id)) errors.push(`${id}: duplicate recipe id`);
  seenIds.add(id);
  const v = validateRecipe(r);
  errors.push(...v.errors);
  warnings.push(...v.warnings);
  recipes.push(r);
}

// Locale-independent sort (ids are ASCII) so ordering is identical everywhere.
recipes.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));

/* ---------- report ---------- */
if (warnings.length) {
  console.log(`${warnings.length} warning(s):`);
  warnings.slice(0, 50).forEach((w) => console.log('  ! ' + w));
}
if (errors.length) {
  console.error(`\nBuild FAILED - ${errors.length} error(s). recipes.js was NOT changed:`);
  errors.slice(0, 100).forEach((e) => console.error('  - ' + e));
  process.exit(1);
}

if (checkOnly) {
  console.log(`OK: ${recipes.length} recipes valid (check only - nothing written).`);
  process.exit(0);
}

/* ---------- emit recipes.js (HTML-safe) ---------- */
// Escape anything that could break out of the <script> tag or an attribute once
// this data is embedded in the page (a literal "</script>", or the JS line /
// paragraph separators U+2028 / U+2029).
function safeJSON(data) {
  return JSON.stringify(data, null, 1).replace(/[<>\u2028\u2029]/g,
    (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
}

const header =
`/* The Recipe File - recipe data.
   AUTO-GENERATED from /recipes/*.md by tools/build.mjs - DO NOT EDIT BY HAND.
   To add or change a recipe, edit the matching file in /recipes (or use the
   in-site editor), then the build regenerates this file. See README.md.
   Loaded via <script src> so the page works from disk (file://) and on GitHub Pages. */
window.RECIPES = `;

fs.writeFileSync(outFile, header + safeJSON(recipes) + ';\n', 'utf8');

/* ---------- regenerate the editor's classic-script copy of the lib ---------- */
// The site (and editor) can't use ES-module imports from file:// (CORS), so the
// editor loads this generated classic script instead. One source of truth: strip
// the `export` keywords and expose the API on window.RecipeFormat.
const libSrc = fs.readFileSync(path.join(root, 'tools', 'recipe-format.mjs'), 'utf8');
const twin =
`/* AUTO-GENERATED from tools/recipe-format.mjs by tools/build.mjs - DO NOT EDIT.
   Classic-script build of the format library so editor.html works from file://
   too (ES-module imports are blocked under file://). */
window.RecipeFormat = (function () {
${libSrc.replace(/^export\s+/gm, '')}
  return { serialize, parse, orderKeys, validateRecipe, parseAmount, formatAmount,
    parseTimer, formatTimer, stepContentToFriendly, UNIT_VOCAB, DIFFICULTIES, KNOWN_COURSES };
})();
`;
fs.writeFileSync(twinFile, twin, 'utf8');

console.log(`OK: built recipes.js from ${recipes.length} recipes.` + (warnings.length ? ` (${warnings.length} warning(s))` : ''));
