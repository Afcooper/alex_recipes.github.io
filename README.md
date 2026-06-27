# Alex&rsquo;s Recipes

A small, hand-kept collection of favourite recipes &mdash; weeknight dinners, slow
weekend bakes, and the sauces worth keeping. It&rsquo;s a single static page with
no build step, no framework, and no dependencies, served straight from GitHub
Pages.

🔗 **Live site:** https://afcooper.github.io/alex_recipes.github.io/

## What&rsquo;s here

- **`index.html`** &mdash; the entire site: a hero, a recipe index, and four
  full recipes (Shakshuka, Carbonara, Tarka Dal, Brown Butter Cookies). All
  HTML and CSS live in this one file.
- **`README.md`** &mdash; this file.

## Features

- Responsive layout that works from phone to desktop.
- Light **and** dark mode (follows your system preference).
- Accessible markup: semantic HTML, keyboard-focusable navigation, and visible
  focus rings.
- Print-friendly styles &mdash; the recipes print cleanly without the chrome.
- Display type from Google Fonts (Fraunces / Inter) with full system-font
  fallbacks if the CDN is unavailable.

## Run it locally

It&rsquo;s just a file, so you can open it directly:

```bash
# macOS
open index.html
# Windows
start index.html
```

Or serve it over HTTP (useful for testing as it would behave on Pages):

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Adding a recipe

1. Copy one of the `<article class="recipe">` blocks in `index.html` and give it
   a new `id`.
2. Add a matching card to the `.index-grid` list and a link in the top `.nav`.
3. Commit and push to `main` &mdash; GitHub Pages redeploys automatically.

## Deployment

The site is published with **GitHub Pages** from the `main` branch (root
folder). Every push to `main` triggers a redeploy; no CI configuration is
required.

## License

Released under the [MIT License](https://opensource.org/licenses/MIT) &mdash;
use the recipes, copy the layout, cook the cookies.
