# The Recipe File

A self-contained family recipe collection — **150 recipes**, searchable and sortable, with live servings scaling, step timers, and printing to **3.5″ × 5″ index cards**. No build step, no dependencies, no internet required. Open `index.html` in any browser, or publish it free on GitHub Pages.

## What's in the box

```
index.html        ← the page shell (toolbar, layout). You rarely touch this.
recipes.js        ← ALL the recipes. THIS is the file you edit to add/change a recipe.
assets/styles.css ← all styling (screen + both print modes)
assets/engine.js  ← the engine: search, filters, sort, scaling, timers, printing
README.md         ← this file
```

Why split into files? With 150 recipes, keeping the data (`recipes.js`) separate from the code (`engine.js` / `styles.css`) means you edit one small, predictable file to manage recipes, and the git history stays clean. Everything loads with **relative paths via `<script>`/`<link>`**, which is what lets the page work both opened straight from disk (`file://`) *and* on GitHub Pages. (We deliberately don't `fetch()` the data — that breaks under `file://`.)

## Browsing, searching, sorting

- **Search** (top bar, or press `/`): instant, matches recipe names **and ingredients** — type `lemon` to find everything with lemon in it.
- **Course chips**: Breakfast, Lunch, Dinner, Appetizer, Side, Salad, Soup, Bread, Sauce, Dressing, Marinade, Dip, Dessert, Snack, Drink, Basics. Click to filter (multi-select).
- **Filters → tags**: protein (chicken, beef, pork, shrimp…), cuisine (mexican, italian, asian…), method (slow-cooker, no-bake, freezer-friendly…), and more. Stacking tags narrows the results.
- **Sort**: A–Z, by Time, or grouped by Course.
- Every filtered view has a **shareable URL** — e.g. `index.html#course=Dessert&tags=no-bake` — which also lays the groundwork for saved "recipe books" later.
- Cards are collapsed to a summary by default; click **View recipe** (or any index row) to expand the full method.

## Printing

Two print buttons in the toolbar:

- **Print** — the whole page, nicely formatted (recipes won't split across pages).
- **3×5 cards** — each recipe formatted to a **5″ wide × 3.5″ tall index card** (compact two-column layout). In the browser's print dialog, set the paper size to **Index Card (5×3.5 in)** — or print on Letter and cut. Long recipes (e.g. the overnight pizza) flow onto a second card rather than being cut off.

For a PDF, use the browser's **Print → Save as PDF** with either button.

## How to add or edit a recipe

Open `recipes.js`. It's one big list (`window.RECIPES = [ … ]`). Add a recipe by appending one object:

```js
{
  "id": "lemon-bars",                       // unique, lowercase-with-hyphens (used in the URL)
  "title": "Lemon Bars",
  "source": "Nana's",                       // attribution, or "" if none
  "courses": ["Dessert"],                   // one or more of the course names above
  "tags": ["no-bake", "make-ahead"],        // lowercase keywords for filtering/search
  "time": "~45 min",                        // pretty text, or "" if unknown
  "servingsLabel": "Servings",              // or "Cookies", "Rolls", "Pieces", "Pizzas"…
  "baseServings": 9,                        // a number, or null if unknown (hides the +/- scaler)
  "desc": "One-line description under the title.",   // optional ("" to skip)
  "ingredients": [
    { "id": "0001", "amount": 1.5, "unit": "cup",  "name": "all-purpose flour" },
    { "id": "0002", "amount": 4,   "unit": null,   "name": "large eggs" },
    { "id": "0003", "amount": null,"unit": null,   "name": "salt, to taste" }
  ],
  "steps": [
    { "title": "Make the crust", "content": "Press the {0001} into the pan.", "timer": 900 },
    { "title": "Bake",           "content": "Bake until set.",                "timer": 1200 }
  ],
  "notes": "Tips go here. Use a blank line (\\n\\n) to start a new paragraph."
}
```

Rules of the road:
- **`amount`**: a number (decimals are fine — `0.5` shows as `½`, `1.5` as `1½`). Use `null` for "to taste" / unmeasured items — the name carries it.
- **`unit`**: `"cup"`, `"tbsp"`, `"tsp"`, `"lb"`, `"oz"`, `"g"`, or container words like `"can"`, `"pkg"`, `"clove"`. Use `null` for countable things (eggs, onions) — the name carries the noun.
- **`courses`** is a list, so a recipe can live in more than one bucket (e.g. `["Dip","Appetizer"]`).
- **Scale an ingredient inside a step**: write its id in braces — `{0001}` — and the amount auto-scales with the +/- control. The number comes from the ingredients list, so you set each amount only once.
- **`timer`**: seconds, optional. Under an hour it becomes a live countdown; an hour or more shows as a plain time tag (e.g. an overnight rise).
- It's JavaScript, so mind the commas, quotes, and braces. If the page goes blank, open the browser console — it points at the offending line. (The page also shows a friendly "recipes.js failed to load" message in that case.)

## Three ways to make changes

- **Ask Claude (quickest).** Say what you want and Claude hands back the updated files.
- **Claude Code (direct).** Open this repo in Claude Code and Claude edits `recipes.js` and commits for you.
- **By hand.** Edit `recipes.js` in your editor or through GitHub's web editor (pencil icon).

## Publish it as a live page (GitHub Pages)

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` and `/ (root)`, Save.
3. Wait ~1 minute, open the URL it shows. That's your shareable, always-current link.

Update the page by committing a change to `recipes.js` — Pages redeploys automatically.

## Coming later (groundwork already in place)

"Recipe books" — saved collections like *Weeknight Dinners* or *Holiday Baking*. Because every filtered view is already a shareable URL, a book can start as simply a saved link, and grow into named, bookmarkable collections without changing the data model.
