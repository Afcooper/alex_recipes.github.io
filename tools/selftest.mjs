/* Self-test for the recipe format library. Zero dependencies.
   Run: node tools/selftest.mjs   (also run in CI)
   Checks the fiddly bits: fractions, timers, the pipe escape, {{refs}},
   servings/nutrition variants, and human-friendly input (plurals, unicode). */
import { parse, serialize, orderKeys, parseAmount, formatAmount, parseTimer, formatTimer, parseIngredient, validateRecipe } from './recipe-format.mjs';

let pass = 0, fail = 0;
function ok(cond, msg) { if (cond) pass++; else { fail++; console.error('  FAIL: ' + msg); } }
function eq(a, b, msg) { ok(JSON.stringify(a) === JSON.stringify(b), `${msg}  (got ${JSON.stringify(a)}, want ${JSON.stringify(b)})`); }
function throws(fn, msg) { let t = false; try { fn(); } catch (e) { t = true; } ok(t, msg + ' (expected an error)'); }

/* amounts */
for (const [s, n] of [['1', 1], ['1/2', 0.5], ['1 1/2', 1.5], ['0.75', 0.75], ['3/4', 0.75], ['½', 0.5], ['1½', 1.5], ['0.333', 0.333]]) {
  eq(parseAmount(s), n, `parseAmount("${s}")`);
}
for (const n of [1, 0.5, 0.25, 0.75, 0.125, 1.5, 2.75, 0.333, 1.333, 10, 0.667]) {
  eq(parseAmount(formatAmount(n)), n, `amount round-trip ${n}`);
}

/* timers */
for (const sec of [40, 60, 150, 480, 2520, 3600, 5400, 16200, 86400]) {
  eq(parseTimer(formatTimer(sec)), sec, `timer round-trip ${sec}`);
}
eq(formatTimer(480), '8m', 'formatTimer(480)');
eq(formatTimer(40), '40s', 'formatTimer(40)');
eq(formatTimer(5400), '1.5h', 'formatTimer(5400)');
eq(parseTimer('8 min'), 480, 'parseTimer("8 min")');

/* full recipe round-trip with every feature */
const recipe = orderKeys({
  id: 'test-dish',
  title: 'Test Dish',
  source: "Grandma's",
  courses: ['Dinner', 'Lunch'],
  tags: ['chicken', 'quick'],
  difficulty: 'Medium',
  time: '~30 min',
  servingsLabel: 'Servings',
  baseServings: 4,
  servingsEstimated: true,
  nutrition: { calories: 500, protein: 30, carbs: 40, fat: 20 },
  desc: 'A tasty test.',
  ingredients: [
    { id: '0001', amount: 1.5, unit: 'cup', name: 'flour' },
    { id: '0002', amount: 3, unit: 'clove', name: 'garlic, minced' },
    { id: '0003', amount: null, unit: null, name: 'salt, to taste' },
    { id: '0004', amount: 1, unit: null, name: 'loaf bread' } // amount+unit-null name collision -> pipe form
  ],
  steps: [
    { title: 'Prep', content: 'Mix the {0001} with the {0002}.', timer: 480 },
    { title: '', content: 'Rest.', timer: 5400 }
  ],
  notes: 'Para one.\n\nPara two.'
});
const rt = parse(serialize(recipe), 'test-dish');
eq(rt, recipe, 'full recipe round-trip');

/* the pipe escape actually engages for the collision case */
ok(serialize(recipe).includes('| loaf bread'), 'ambiguous ingredient uses pipe-escape form');
/* refs serialize to {{name}} and resolve back */
ok(serialize(recipe).includes('{{flour}}'), 'ingredient ref emits as {{flour}}');

/* human-friendly input: plural units, unicode fraction, "makes N label" */
const human = parse(`---
title: Cookies
courses: [Dessert]
servings: ~24 cookies
calories: 120
---

## Ingredients
- 2 cups all-purpose flour
- ½ cup sugar
- 3 cloves garlic

## Steps
1. Mix.
`, 'cookies');
eq(human.servingsLabel, 'Cookies', 'servings label from "24 cookies"');
eq(human.baseServings, 24, 'servings number');
eq(human.servingsEstimated, true, 'servings estimated ~');
eq(human.ingredients[0], { id: '0001', amount: 2, unit: 'cup', name: 'all-purpose flour' }, 'plural "cups" -> cup');
eq(human.ingredients[1], { id: '0002', amount: 0.5, unit: 'cup', name: 'sugar' }, 'unicode ½');
eq(human.ingredients[2], { id: '0003', amount: 3, unit: 'clove', name: 'garlic' }, 'plural "cloves" -> clove');

/* nutrition null when calories absent */
const noNut = parse(`---
title: Technique
courses: [Basics]
---

How to do a thing.
`, 'technique');
eq(noNut.nutrition, null, 'no calories -> nutrition null');
eq(noNut.baseServings, null, 'no servings -> baseServings null');
eq(noNut.desc, 'How to do a thing.', 'intro paragraph -> desc');

/* digit-leading names with null amount are NOT parsed as amounts */
const tricky = parse(`---
title: Milk Test
courses: [Basics]
---

## Ingredients
- 2% or whole milk
- 6" tortillas
`, 'milk-test');
eq(tricky.ingredients[0], { id: '0001', amount: null, unit: null, name: '2% or whole milk' }, '"2%" not read as amount');
eq(tricky.ingredients[1], { id: '0002', amount: null, unit: null, name: '6" tortillas' }, '`6"` not read as amount');

/* --- regression tests for the review-driven hardening --- */

// mistyped section heading that swallowed a list must FAIL loud, not drop data
throws(() => parse(`---
title: Typo
courses: [Dinner]
---

## Ingrediants
- 1 cup flour
`, 'typo'), 'misspelled "## Ingrediants" heading with a list');
// a trailing colon and known synonyms are tolerated
eq(parse(`---
title: Ok
courses: [Dinner]
---

## Ingredients:
- 1 cup flour

## Preparation
1. Mix.
`, 'ok').ingredients.length, 1, '"## Ingredients:" trailing colon tolerated');

// leading **bold** emphasis (no colon) stays in content, not treated as a title
const emphStep = parse(`---
title: Emph
courses: [Dinner]
---

## Steps
1. **Whisk** the eggs vigorously.
`, 'emph').steps[0];
eq(emphStep.title, '', 'leading **bold** is not a title');
eq(emphStep.content, '**Whisk** the eggs vigorously.', 'emphasis stays in content');

// spelled-out units resolve
eq(parseIngredient('- 2 tablespoons sugar'), { amount: 2, unit: 'tbsp', name: 'sugar' }, 'tablespoons -> tbsp');
eq(parseIngredient('- 1 teaspoon salt'), { amount: 1, unit: 'tsp', name: 'salt' }, 'teaspoon -> tsp');
eq(parseIngredient('- 8 ounces cream cheese'), { amount: 8, unit: 'oz', name: 'cream cheese' }, 'ounces -> oz');
eq(parseIngredient('- 1 pound beef'), { amount: 1, unit: 'lb', name: 'beef' }, 'pound -> lb');

// quantity ranges keep amount null (don't feed the scaler a wrong value)
eq(parseIngredient('- 1-2 cloves garlic'), { amount: null, unit: null, name: '1-2 cloves garlic' }, 'range 1-2');
eq(parseIngredient('- 2 to 3 cups flour'), { amount: null, unit: null, name: '2 to 3 cups flour' }, 'range 2 to 3');

// a stray "|" in a normal name is text, not the escape delimiter
eq(parseIngredient('- salt | pepper'), { amount: null, unit: null, name: 'salt | pepper' }, 'stray pipe stays in name');
// the real escape form still works
eq(parseIngredient('- 1 |  | loaf challah bread'), { amount: 1, unit: null, name: 'loaf challah bread' }, 'pipe-escape form');

// new unicode fraction glyphs
ok(Math.abs(parseAmount('⅙') - 1 / 6) < 1e-9, 'parseAmount("⅙")');
ok(Math.abs(parseAmount('⅗') - 0.6) < 1e-9, 'parseAmount("⅗")');

// validateRecipe: the recursive scan catches a "<" in ANY field (unit, time)
const evilUnit = orderKeys({ id: 'x', title: 'X', courses: ['Dinner'], ingredients: [{ id: '0001', amount: 1, unit: '<img onerror=alert(1)>', name: 'flour' }], steps: [] });
ok(validateRecipe(evilUnit).errors.some((e) => /unit/.test(e) || /</.test(e) || /HTML/.test(e)), 'validateRecipe flags "<" in unit');
const evilTime = orderKeys({ id: 'y', title: 'Y', courses: ['Dinner'], time: '<b>fast</b>', ingredients: [], steps: [] });
ok(validateRecipe(evilTime).errors.length > 0, 'validateRecipe flags "<" in time');
// a clean recipe has no errors
ok(validateRecipe(orderKeys({ id: 'z', title: 'Z', courses: ['Dinner'], ingredients: [{ id: '0001', amount: 1, unit: 'cup', name: 'flour' }], steps: [{ title: '', content: 'Mix.', timer: null }] })).errors.length === 0, 'clean recipe passes validateRecipe');

console.log(`\nSelf-test: ${pass} passed, ${fail} failed.`);
process.exit(fail ? 1 : 0);
