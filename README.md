# The Recipe File

**🔗 Live site: https://afcooper.github.io/alex_recipes.github.io/**

A self-contained family recipe collection — **146 recipes**, searchable and sortable, with per-serving **nutrition estimates**, **difficulty** ratings, live servings scaling, step timers, and printing to **3.5″ × 5″ / 4″ × 6″ index cards**. The site itself needs no build, no dependencies, and no internet: open `index.html` in any browser, or publish it free on GitHub Pages.

Recipes are now written as **one friendly Markdown file per recipe** in [`/recipes`](recipes), and a tiny build compiles them into `recipes.js` (what the site loads). You never have to touch code to add a recipe.

## What's in the box

```
recipes/            ← ★ THE RECIPES. One friendly .md file each. Edit these.
editor.html         ← ★ point-and-click "Add / Edit a Recipe" form (no typing syntax)
recipes.js          ← AUTO-GENERATED from /recipes by the build. Do not edit by hand.
index.html          ← the page shell (toolbar, layout). You rarely touch this.
assets/styles.css   ← all styling (screen + both print modes)
assets/engine.js    ← the engine: search, filters, sort, scaling, timers, printing
tools/              ← the build (build.mjs), the format library, tests, migration
.github/workflows/  ← rebuilds recipes.js automatically when you change a recipe
README.md           ← this file
```

Why this shape? Keeping each recipe in its own small Markdown file means **you edit one short, readable file** to change a recipe, diffs stay clean, and a typo in one recipe can never blank the whole site — the build **refuses to publish** anything broken or unsafe. The site still loads a single `recipes.js` via a plain `<script>` tag, which is what lets the page work both from disk (`file://`) *and* on GitHub Pages. (We deliberately don't `fetch()` the data — that breaks under `file://`.)

## How to add or edit a recipe

Three ways, easiest first. **You never edit `recipes.js` directly.**

### 1. The form editor (easiest — no syntax at all)

Open **`editor.html`** (on the live site: add `editor.html` to the URL). Fill in the boxes — name, courses, ingredients, steps — and press **“Check &amp; build the file.”** Then either:

- **Save to GitHub…** — opens GitHub's own new-file page with everything pre-filled; scroll down and click **Commit changes**. The site rebuilds in ~1 minute. *(You must be signed in to GitHub with access to this repo — no password or token is ever stored in the page.)*
- **Download .md** — saves the file so you can add it to the `/recipes` folder yourself.
- **Copy Markdown** — copies the text to paste wherever you like.

> The editor uses the site's own formatting code, so anything it accepts is guaranteed to build. It needs to be opened over the web (the live site, or a local server) rather than straight from disk.

### 2. Edit the Markdown file by hand (on github.com or in any text editor)

Each recipe is a file in [`/recipes`](recipes) named `its-id.md`. Copy [`recipes/_TEMPLATE.md`](recipes/_TEMPLATE.md) to a new file and fill it in, or edit an existing one with the pencil icon on GitHub. Here's the whole format:

```markdown
---
title: Lemon Bars
source: Nana's                 # optional — delete the line if none
courses: [Dessert]             # one or more: Breakfast, Lunch, Dinner, Appetizer,
                               #   Side, Salad, Soup, Bread, Sauce, Dressing,
                               #   Marinade, Dip, Dessert, Snack, Drink, Basics
tags: [no-bake, make-ahead]    # lowercase keywords for filtering/search
difficulty: Easy               # Easy | Medium | Hard — or delete the line
time: ~45 min                  # free text — or delete the line
servings: 9                    # a number. "~9" shows a ≈ (estimate).
                               #   "24 cookies" sets a custom unit + count.
calories: 210                  # per serving — delete to hide nutrition
protein: 3
carbs: 28
fat: 10
---

One-line description that appears under the title. (Optional — delete it to skip.)

## Ingredients
- 1 1/2 cups all-purpose flour      # amount can be 1, 1/2, or 1 1/2
- 4 large eggs                      # no unit needed for countable things
- salt, to taste                    # no amount for "to taste" items

## Steps
1. **Make the crust:** press the {{all-purpose flour}} into the pan. @timer 15m
2. Bake until set. @timer 20m

## Notes
Tips go here.

Leave a blank line to start a new paragraph.
```

Rules of the road:
- **Amounts** can be whole numbers, decimals, or fractions: `1`, `0.5`, `1/2`, `1 1/2`. Leave the amount off for "to taste" items — the name carries it.
- **Units** are words like `cup`, `tsp`, `tbsp`, `lb`, `oz`, `can`, `clove`, `pkg`. Leave the unit off for countable things (eggs, onions). Plurals are fine (`2 cups`, `3 cloves`).
- **Timers** are optional and go at the end of a step: `@timer 8m`, `@timer 90s`, `@timer 1.5h`. Under an hour they become a live countdown; an hour or more shows as a plain tag.
- **Live scaling inside a step:** write an ingredient in double braces — `{{heavy cream}}` — and its amount appears inline and scales with the +/- control. (Use the ingredient's name as written before any comma.)
- **A step title** is optional — put it in `**bold with a colon:**` at the start of the step.
- The **filename is the recipe's web address** (`recipes/lemon-bars.md` → `#recipe-lemon-bars`). Use lowercase-with-hyphens.

If something's off, the build tells you exactly which recipe and what's wrong, and **leaves the live site unchanged** until it's fixed.

### 3. Ask Claude

Say what you want changed and Claude edits the right file in `/recipes` for you.

## How the build works

`recipes.js` is **generated** from `/recipes/*.md` by `tools/build.mjs` (plain Node, zero dependencies). You don't have to run it — the GitHub Action in `.github/workflows/build-recipes.yml` runs it automatically whenever a recipe changes on `main`, and commits the fresh `recipes.js`. The build **validates and sanitises** every recipe and refuses to publish anything malformed or containing HTML/scripts, so the live site can't be blanked or injected by a bad edit.

To run it yourself (optional):

```bash
node tools/build.mjs        # rebuild recipes.js from /recipes
node tools/build.mjs --check # validate only, don't write
node tools/selftest.mjs     # test the format library
```

(There's also a `package.json` with `npm run build` / `npm test` if you prefer.)

## Browsing, searching, sorting

- **Search** (top bar, or press `/`): instant, matches recipe names **and ingredients** — type `lemon` to find everything with lemon in it.
- **Course chips** and **Filters → tags** (protein, cuisine, method, dietary), plus **Difficulty** and **Calories per serving** (Light / Medium / Hearty). Stacking filters narrows the results.
- **Sort**: A–Z, Time, Course, **Calories**, or **Difficulty**.
- **Nutrition** (calories + protein/carbs/fat per serving) is *estimated from ingredients* — a guide, not a label. Serving counts marked with **≈** were estimated too.
- Every filtered view has a **shareable URL** — e.g. `index.html#course=Dessert&diff=easy&cal=light`.
- Cards are collapsed to a summary by default; click **View recipe** (or any index row) to expand the full method.

## Printing

Three print buttons plus two Download-PDF buttons in the toolbar:

- **Print** — the whole page, nicely formatted (recipes won't split across pages).
- **3×5** / **4×6** — each recipe on a landscape index card of that size.
- **⬇ PDF 4×6** / **⬇ PDF 3×5** — build an exact-size card PDF (best for printing from a phone). The PDF includes **whatever recipes are currently shown**, so search or filter first. (The PDF library loads only the first time you tap a Download-PDF button.)

For cards, pick the matching paper in the print dialog (**Index Card 5×3.5 in** or **6×4 in**, **Landscape**), and set scale to **100% / Default** so the geometry is exact.

## Publish it as a live page (GitHub Pages)

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` and `/ (root)`, Save.
3. Wait ~1 minute, then open **https://afcooper.github.io/alex_recipes.github.io/**.

After that, changing a recipe in `/recipes` (via the editor or by hand) is all it takes — the Action rebuilds `recipes.js` and Pages redeploys automatically.

## Coming later (groundwork already in place)

"Recipe books" — saved collections like *Weeknight Dinners* or *Holiday Baking*. Because every filtered view is already a shareable URL, a book can start as a saved link and grow into named, bookmarkable collections without changing the data model.
