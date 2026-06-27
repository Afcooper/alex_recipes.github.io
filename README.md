[README.md](https://github.com/user-attachments/files/29420591/README.md)
# The Recipe File

A self-contained recipe collection. Open `index.html` in any browser — no internet, no build step, no dependencies. Each card has a live servings scaler (every amount, including the ones inline in the steps, recalculates) and clickable step timers.

## How to edit it

**Everything lives in one place.** Near the top of `index.html` there's a single block:

```html
<script type="application/json" id="recipe-data">
[ ... all recipes ... ]
</script>
```

That JSON array *is* the collection. The rest of the file is styling and the rendering engine — you never touch it. To add, remove, or change a recipe, edit the array. Add a recipe by appending one object:

```json
{
  "id": "lemon-bars",
  "cat": "Dessert",
  "title": "Lemon Bars",
  "time": "~45 min",
  "servingsLabel": "Servings",
  "baseServings": 9,
  "desc": "One-line description shown under the title.",
  "ingredients": [
    { "id": "0001", "amount": 1.5, "unit": "cup", "name": "all-purpose flour" },
    { "id": "0002", "amount": 4,   "unit": null,  "name": "large eggs" }
  ],
  "steps": [
    { "title": "Make the crust", "content": "Press the {0001} into the pan.", "timer": 900 },
    { "title": "Bake", "content": "Bake until set.", "timer": 1200 }
  ],
  "notes": "Tips go here. Use a blank line (\n\n in JSON) to start a new paragraph."
}
```

Rules of the road:
- **`unit`**: use `"cup"`, `"tbsp"`, `"tsp"`, `"lb"`, `"oz"`, `"g"`, etc. Use `null` for countable things (eggs, cloves) — the name carries the noun.
- **Ingredient `id`**: any unique 4-digit string within that recipe (`"0001"`, `"0002"`...).
- **Reference an ingredient inside a step** with its id in curly braces — `{0001}` — and the amount auto-scales with the servings control. The number is pulled from the ingredients list, so you only set each amount once.
- **`timer`**: seconds, optional. Under an hour it becomes a live countdown; an hour or more shows as a plain time tag (e.g. an overnight rise).
- It's JSON, so mind the commas and quotes. If the page goes blank, a stray comma or missing quote is the usual culprit.

## Three ways to make changes

- **Ask Claude (quickest).** Say what you want changed and Claude hands back an updated `index.html`.
- **Claude Code (direct).** Open this repo in Claude Code and Claude edits the JSON and commits for you.
- **By hand / a collaborator.** Edit the JSON block directly — in your editor, or through GitHub's web editor (pencil icon on the file).

## Publish it as a live page (GitHub Pages)

1. Create a repo and add `index.html` (and this README).
2. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` and `/ (root)`, Save.
3. Wait ~1 minute, then open the URL it shows you. That's your shareable, always-current link.

Update the page by committing a change to `index.html` — Pages redeploys automatically.

## Print / PDF

Open the page and use your browser's **Print → Save as PDF**. The layout is print-styled (cards won't split across pages), so the PDF matches what you see.
