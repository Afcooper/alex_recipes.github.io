/* The Recipe File — recipe data.
   This is the ONLY file you edit to add/change a recipe.
   It's plain data assigned to window.RECIPES; the engine (assets/engine.js) renders it.
   Loaded via <script src> so the page works opened from disk (file://) and on GitHub Pages.
   Schema per object: id, title, source, courses[], tags[], difficulty ("Easy"|"Medium"|"Hard"|null),
   time, servingsLabel, baseServings (int|null), servingsEstimated (bool),
   nutrition {calories,protein,carbs,fat} per serving (estimated) | null,
   desc, ingredients[{id,amount(num|null),unit(str|null),name}],
   steps[{title,content,timer(sec|null)}], notes.  See README.md for the full guide. */
window.RECIPES = [
 {
  "id": "alfredo-sauce",
  "title": "Alfredo Sauce",
  "source": "",
  "courses": [
   "Sauce"
  ],
  "tags": [
   "vegetarian",
   "stovetop",
   "pasta",
   "italian",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 90,
   "protein": 6,
   "carbs": 5,
   "fat": 4
  },
  "desc": "A lighter Alfredo sauce with Parmesan, sour cream, spinach, and nutritional yeast for pasta.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "spray butter"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": "cup",
    "name": "freshly grated Parmesan"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "sour cream, fat free"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "chopped spinach"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "clove",
    "name": "freshly grated garlic (1-2 cloves)"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "nutritional yeast (Braggs for B12)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Use spray butter (or real butter) to generously coat a fry pan. On low to medium, heat spinach, then add garlic. Remove from heat.",
    "timer": null
   },
   {
    "title": "",
    "content": "Stir in sour cream and Parmesan. Add a little pasta water from boiled linguine (boil quinoa linguine with oil for 7 minutes) to the cream sauce. Stir in nutritional yeast.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "apple-crisp",
  "title": "Apple Crisp",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "vegetarian",
   "baked"
  ],
  "difficulty": "Medium",
  "time": "~1.5 hrs",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 700,
   "protein": 6,
   "carbs": 108,
   "fat": 30
  },
  "desc": "Honeycrisp apples baked under a buttery cinnamon oat crumble until tender.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 10,
    "unit": null,
    "name": "Honeycrisp or Golden Delicious apples (peel, slice)"
   },
   {
    "id": "0002",
    "amount": 0.75,
    "unit": "cup",
    "name": "butter (plus 2 tbsp)"
   },
   {
    "id": "0003",
    "amount": 1.75,
    "unit": "cup",
    "name": "flour"
   },
   {
    "id": "0004",
    "amount": 1.75,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0005",
    "amount": 1.75,
    "unit": "cup",
    "name": "quick cooking oats"
   },
   {
    "id": "0006",
    "amount": 3,
    "unit": "tbsp",
    "name": "cinnamon (plus 1 1/2 tsp)"
   },
   {
    "id": "0007",
    "amount": 0.25,
    "unit": "cup",
    "name": "butter cut into pieces (plus 3 tbsp)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Heat oven to 350˚.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a bowl combine 3/4 cup plus 2 tbsp butter, flour, sugar, oats, and 2 tbsp cinnamon to form a crumble mixture. Peel and slice the apples.",
    "timer": null
   },
   {
    "title": "",
    "content": "Sprinkle the mixture over the apples in a 9x13 pan. Dot with the remaining 1/4 cup butter and sprinkle with the remaining 1 tbsp cinnamon. Bake about 1.5 hrs until apples are tender.",
    "timer": 5400
   }
  ],
  "notes": ""
 },
 {
  "id": "asian-sweet-chili-marinade",
  "title": "Asian Sweet Chili Marinade",
  "source": "",
  "courses": [
   "Marinade"
  ],
  "tags": [
   "asian",
   "marinade",
   "make-ahead",
   "vegetarian",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~5 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 165,
   "protein": 1,
   "carbs": 26,
   "fat": 7
  },
  "desc": "A whisked-together sweet chili, honey, and lime marinade that doubles as a finishing glaze.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.25,
    "unit": "cup",
    "name": "Asian sweet chili sauce (Mae Ploy)"
   },
   {
    "id": "0002",
    "amount": 0.25,
    "unit": "cup",
    "name": "honey"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "cup",
    "name": "lime juice (or less)"
   },
   {
    "id": "0004",
    "amount": 3,
    "unit": "tbsp",
    "name": "reduced sodium soy sauce"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "tbsp",
    "name": "olive oil"
   },
   {
    "id": "0006",
    "amount": 3,
    "unit": "clove",
    "name": "garlic cloves or garlic powder"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Whisk all ingredients together.",
    "timer": null
   },
   {
    "title": "",
    "content": "Use half to marinate (shrimp, etc.); discard that marinade after using on meat. Use the remaining half as a glaze when finished cooking.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "avalanche-no-bake-clusters",
  "title": "Avalanche Clusters (No Bake)",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "candy",
   "no-bake",
   "vegetarian"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Pieces",
  "baseServings": 24,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 135,
   "protein": 3,
   "carbs": 12,
   "fat": 8
  },
  "desc": "No-bake white chocolate clusters with peanut butter, peanuts, marshmallows and Rice Krispies.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 12,
    "unit": "oz",
    "name": "white chocolate chips or vanilla almond bark (12-16 oz)"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": "cup",
    "name": "peanut butter"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "peanuts (1/2-3/4 c)"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "cup",
    "name": "Rice Krispies cereal"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "cup",
    "name": "miniature marshmallows"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Line a cookie sheet with parchment paper. Set aside.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix cereal, marshmallows (tear in half), and peanuts in a bowl.",
    "timer": null
   },
   {
    "title": "",
    "content": "Melt chocolate in the microwave, heating for 1 minute, then stirring, and repeat at 30-second intervals until melted.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add peanut butter to the melted chocolate and stir.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour the melted chocolate and PB mixture over the cereal mixture; stir until well mixed.",
    "timer": null
   },
   {
    "title": "",
    "content": "Drop mixture using a tablespoon onto the prepared sheets.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place in the refrigerator until set.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "bacon-in-oven",
  "title": "Bacon in Oven",
  "source": "",
  "courses": [
   "Basics",
   "Breakfast"
  ],
  "tags": [
   "bacon",
   "pork",
   "baked",
   "freezer-friendly",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 100,
   "protein": 8,
   "carbs": 0,
   "fat": 8
  },
  "desc": "Oven-baked bacon on parchment, with a method for freezing portions.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "bacon"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Line a baking sheet with parchment paper.",
    "timer": null
   },
   {
    "title": "",
    "content": "Heat oven to 375˚.",
    "timer": null
   },
   {
    "title": "",
    "content": "Lay bacon flat without touching each other.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake for 15 minutes.",
    "timer": 900
   }
  ],
  "notes": "To Freeze: Cut freezer paper or parchment paper strips. Lay 1 strip of bacon in each and roll up. Place all in a freezer bag."
 },
 {
  "id": "bacon-wrapped-water-chestnuts",
  "title": "Bacon-Wrapped Water Chestnuts",
  "source": "",
  "courses": [
   "Appetizer"
  ],
  "tags": [
   "bacon",
   "baked",
   "party",
   "potluck",
   "holiday",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Medium",
  "time": "~55 min",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 140,
   "protein": 6,
   "carbs": 16,
   "fat": 6
  },
  "desc": "Bacon-wrapped water chestnuts baked and glazed in a sweet-tangy ketchup sauce.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "can",
    "name": "whole water chestnuts, drained"
   },
   {
    "id": "0002",
    "amount": 1.5,
    "unit": "lb",
    "name": "bacon slices"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0004",
    "amount": 0.25,
    "unit": "cup",
    "name": "vinegar"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "cup",
    "name": "catsup"
   },
   {
    "id": "0006",
    "amount": 0.25,
    "unit": "tsp",
    "name": "celery seed"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Wrap bacon around each chestnut. Use toothpicks to hold.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 350° for 35 minutes. Drain grease.",
    "timer": 2100
   },
   {
    "title": "",
    "content": "Mix the last 4 ingredients (sugar, vinegar, catsup, celery seed) and pour over chestnuts. Bake 20 minutes.",
    "timer": 1200
   }
  ],
  "notes": ""
 },
 {
  "id": "banana-cake-cream-cheese-filled",
  "title": "Banana Cake (Cream Cheese Filled)",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "cake",
   "baked",
   "vegetarian"
  ],
  "difficulty": "Medium",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 9,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 305,
   "protein": 4,
   "carbs": 40,
   "fat": 11
  },
  "desc": "Boxed banana bread layered with a sweet cream cheese filling and baked in an 8x8 pan.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "box",
    "name": "Pillsbury banana bread mix"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": null,
    "name": "large egg (filling)"
   },
   {
    "id": "0003",
    "amount": 4,
    "unit": "oz",
    "name": "cream cheese (filling)"
   },
   {
    "id": "0004",
    "amount": 0.25,
    "unit": "cup",
    "name": "granulated sugar (filling)"
   },
   {
    "id": "0005",
    "amount": 3,
    "unit": "tbsp",
    "name": "flour (filling)"
   }
  ],
  "steps": [
   {
    "title": "Batter",
    "content": "Mix the banana muffin recipe from the box.",
    "timer": null
   },
   {
    "title": "Filling",
    "content": "Combine the egg, cream cheese, granulated sugar, and flour to make the cream cheese filling.",
    "timer": null
   },
   {
    "title": "Assemble & Bake",
    "content": "Spray an 8 x 8 pan. Layer half the batter, then the cream cheese filling, then the remaining batter. Bake at 325-350.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "beans-bbq",
  "title": "BBQ Beans",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "beans",
   "bacon",
   "stovetop",
   "freezer-friendly",
   "make-ahead",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 10,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 215,
   "protein": 6,
   "carbs": 28,
   "fat": 6
  },
  "desc": "Mixed beans simmered with sauteed onions, bacon, mustard and Sweet Baby Ray's BBQ sauce.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "can",
    "name": "butter beans or Great Northern beans"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "can",
    "name": "chili beans w/ sauce"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "can",
    "name": "pork 'n beans"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "can",
    "name": "kidney beans"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tbsp",
    "name": "yellow mustard"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "cup",
    "name": "Sweet Baby Ray's BBQ/Honey BBQ sauce"
   },
   {
    "id": "0007",
    "amount": 1.5,
    "unit": null,
    "name": "medium yellow onions, chopped"
   },
   {
    "id": "0008",
    "amount": 6,
    "unit": "slice",
    "name": "bacon (6–8 slices)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Cook bacon in the oven or skillet, set aside.",
    "timer": null
   },
   {
    "title": "",
    "content": "Saute onions in a large skillet with oil until translucent and a bit brown on the edges.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add drained butter and kidney beans, undrained pork 'n beans and chili beans, and reduce heat.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add the other ingredients and stir.",
    "timer": null
   }
  ],
  "notes": "Can freeze within 3 days in a freezer bag or glass jar."
 },
 {
  "id": "bbq-meatballs",
  "title": "BBQ Meatballs",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "beef",
   "baked",
   "comfort-food"
  ],
  "difficulty": "Medium",
  "time": "~50 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 450,
   "protein": 24,
   "carbs": 29,
   "fat": 25
  },
  "desc": "Oatmeal-bound beef meatballs baked then finished in BBQ sauce.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "lb",
    "name": "ground beef"
   },
   {
    "id": "0002",
    "amount": 0.75,
    "unit": "cup",
    "name": "oatmeal"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "onion (as desired)"
   },
   {
    "id": "0004",
    "amount": 1.5,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0005",
    "amount": 0.25,
    "unit": "tsp",
    "name": "pepper"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "cup",
    "name": "milk"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "BBQ sauce"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix and form into walnut-size balls.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place on an aluminum foil lined and sprayed baking sheet.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 350 degrees for 20 minutes.",
    "timer": 1200
   },
   {
    "title": "",
    "content": "Cover with BBQ sauce and bake an additional 30 minutes.",
    "timer": 1800
   }
  ],
  "notes": ""
 },
 {
  "id": "compote",
  "title": "Blueberry Compote",
  "source": "",
  "courses": [
   "Sauce",
   "Breakfast"
  ],
  "tags": [
   "fruit",
   "vegetarian",
   "no-bake",
   "freezer-friendly",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~20 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 95,
   "protein": 1,
   "carbs": 24,
   "fat": 0
  },
  "desc": "A quick five-ingredient berry sauce that turns jammy as it cools — perfect over pancakes, yogurt, French toast, or ice cream.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "cup",
    "name": "fresh or frozen blueberries"
   },
   {
    "id": "0002",
    "amount": 0.25,
    "unit": "cup",
    "name": "maple syrup"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "tbsp",
    "name": "water"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tbsp",
    "name": "fresh lemon juice"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "tsp",
    "name": "vanilla extract"
   }
  ],
  "steps": [
   {
    "title": "Simmer the base",
    "content": "Add half the blueberries (about 1 cup) to a small saucepan with the {0002}, {0003}, {0004}, and {0005}. Bring to a simmer over medium heat and cook 10 minutes, stirring occasionally.",
    "timer": 600
   },
   {
    "title": "Add the rest of the berries",
    "content": "Stir in the remaining blueberries and cook another 8 minutes, stirring occasionally, until the berries burst and the sauce looks glossy.",
    "timer": 480
   },
   {
    "title": "Cool to thicken",
    "content": "Pull it off the heat. The compote keeps thickening into a jammy sauce as it cools, so give it a few minutes before serving.",
    "timer": 300
   }
  ],
  "notes": "Keeps in the fridge up to 5 days and freezes well — try freezing it in an ice cube tray for single servings to drop on oatmeal or pancakes later.\n\nFor a thicker, brighter sauce, whisk in a pinch of cornstarch partway through and add a little lemon zest in the last few minutes."
 },
 {
  "id": "broccoli-casserole",
  "title": "Broccoli Casserole",
  "source": "",
  "courses": [
   "Side",
   "Dinner"
  ],
  "tags": [
   "vegetarian",
   "baked",
   "casserole",
   "rice",
   "comfort-food"
  ],
  "difficulty": "Medium",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 500,
   "protein": 11,
   "carbs": 46,
   "fat": 29
  },
  "desc": "Cheesy baked broccoli and rice casserole with cream of mushroom soup and Cheese Whiz.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "stick",
    "name": "butter (1/2 c)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "box",
    "name": "chopped frozen broccoli"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "cup",
    "name": "chopped onion (white)"
   },
   {
    "id": "0004",
    "amount": 2.25,
    "unit": "cup",
    "name": "Minute rice"
   },
   {
    "id": "0005",
    "amount": 2.25,
    "unit": "cup",
    "name": "water"
   },
   {
    "id": "0006",
    "amount": 2,
    "unit": "can",
    "name": "cream of mushroom soup"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "jar",
    "name": "Cheese Whiz (16 oz)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Melt butter in a sauce pan over medium-low heat, add broccoli and onion.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cook rice and water.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a 9x13 casserole dish add rice, soup and Cheese Whiz. Mix in broccoli.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake for 20-25 minutes at 350°.",
    "timer": 1500
   }
  ],
  "notes": "Option: add a can of mushrooms."
 },
 {
  "id": "broccoli-casserole-healthier",
  "title": "Broccoli Casserole (Healthier Version)",
  "source": "",
  "courses": [
   "Side",
   "Dinner"
  ],
  "tags": [
   "vegetarian",
   "baked",
   "casserole",
   "rice",
   "comfort-food"
  ],
  "difficulty": "Medium",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 200,
   "protein": 8,
   "carbs": 15,
   "fat": 12
  },
  "desc": "Lighter broccoli casserole with sauteed onions and mushrooms, brown rice and quinoa, and sharp cheddar.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "box",
    "name": "chopped frozen chopped broccoli"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": null,
    "name": "small onion, chopped (yellow or white)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "bag",
    "name": "Seeds of Change brown rice & quinoa (90 sec)"
   },
   {
    "id": "0004",
    "amount": 0.667,
    "unit": "can",
    "name": "cream of mushroom soup"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "cup",
    "name": "shredded sharp cheddar cheese"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "mushrooms (crimini)"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "butter and oil (for sauteing)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Saute onions in butter and oil until transparent and browning, add broccoli and mushrooms.",
    "timer": null
   },
   {
    "title": "",
    "content": "Stir together skillet items with soup and cheese and the prepared Seeds of Change grains in a casserole dish.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake for 20-25 minutes at 350°.",
    "timer": 1500
   }
  ],
  "notes": ""
 },
 {
  "id": "broccoli-slaw-salad",
  "title": "Broccoli Slaw Salad",
  "source": "",
  "courses": [
   "Salad",
   "Side"
  ],
  "tags": [
   "salad",
   "slaw",
   "vegetarian",
   "make-ahead",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 135,
   "protein": 3,
   "carbs": 23,
   "fat": 3
  },
  "desc": "Creamy broccoli slaw with red onion, craisins and a sweet-tangy yogurt dressing.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 12,
    "unit": "oz",
    "name": "broccoli slaw, pkg"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": null,
    "name": "small red onion (chopped)"
   },
   {
    "id": "0003",
    "amount": 0.333,
    "unit": "cup",
    "name": "miracle whip"
   },
   {
    "id": "0004",
    "amount": 0.333,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "tbsp",
    "name": "apple cider vinegar"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "cup",
    "name": "plain Greek yogurt (Chobani)"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "craisins (50% less sugar)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Chop the red onion.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix together in a bowl the miracle whip, sugar, apple cider vinegar and yogurt.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add the slaw, red onion, and craisins to the bowl and mix. Chill in the refrigerator.",
    "timer": null
   }
  ],
  "notes": "Options: Add bacon and sesame seeds."
 },
 {
  "id": "brownie-cookies",
  "title": "Brownie Cookies",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "cookie",
   "baked",
   "vegetarian",
   "chocolate"
  ],
  "difficulty": "Easy",
  "time": "~45 min",
  "servingsLabel": "Cookies",
  "baseServings": 24,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 190,
   "protein": 2,
   "carbs": 23,
   "fat": 8
  },
  "desc": "Fudgy cookies made from boxed brownie mix with espresso and semi-sweet chocolate chips.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 20,
    "unit": "oz",
    "name": "brownie mix (Duncan Hines)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": null,
    "name": "eggs"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "butter, unsalted, room temp"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "tbsp",
    "name": "brewed cooled espresso"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "salt (pinch)"
   },
   {
    "id": "0006",
    "amount": 1.25,
    "unit": "cup",
    "name": "semi-sweet chocolate chips"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Preheat oven to 375 degrees.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix all ingredients together.",
    "timer": null
   },
   {
    "title": "",
    "content": "Refrigerate for a minimum of 1/2 hour.",
    "timer": 1800
   },
   {
    "title": "",
    "content": "Line a cookie sheet with parchment paper.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake ~12 minutes.",
    "timer": 720
   }
  ],
  "notes": "Options: add a pinch of salt; oil the parchment with bacon drippings."
 },
 {
  "id": "brownie-topping",
  "title": "Brownie Topping",
  "source": "",
  "courses": [
   "Dessert",
   "Sauce"
  ],
  "tags": [
   "vegetarian",
   "frosting",
   "no-bake",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 285,
   "protein": 1,
   "carbs": 40,
   "fat": 14
  },
  "desc": "A glossy chocolate topping cooked on the stovetop and poured over brownies.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.5,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0002",
    "amount": 6,
    "unit": "tbsp",
    "name": "milk"
   },
   {
    "id": "0003",
    "amount": 6,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "bag",
    "name": "chocolate chips"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix sugar, milk, and butter in a saucepan over medium heat until it boils.",
    "timer": null
   },
   {
    "title": "",
    "content": "Remove from heat.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add the bag of chocolate chips.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour over brownies.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "smash-burger",
  "title": "Burger (Smash)",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "beef",
   "burger",
   "stovetop",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~5 min",
  "servingsLabel": "Patties",
  "baseServings": 6,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 195,
   "protein": 13,
   "carbs": 0,
   "fat": 15
  },
  "desc": "Thin, crispy-edged smash burgers cooked on a hot cast iron or stainless skillet.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "lb",
    "name": "ground beef 80/20 (1-1.5 lbs)"
   }
  ],
  "steps": [
   {
    "title": "Form balls",
    "content": "Make 6 balls with 1 lb 80/20 ground beef. Refrigerate; keep cold before moving to skillet. Cut squares of parchment to place on top of the balls when heating.",
    "timer": null
   },
   {
    "title": "Smash",
    "content": "Heat skillet to medium-high. Place a ball on the skillet, set parchment on top, and smash to desired thickness with a spatula (smash the sides more than the middle).",
    "timer": null
   },
   {
    "title": "Cook",
    "content": "Cook 2 minutes. Turn, salt and pepper, and cook 1 minute more. Remove from skillet.",
    "timer": 120
   }
  ],
  "notes": "Use a cast iron skillet or stainless steel frying pan."
 },
 {
  "id": "burger-gumbo",
  "title": "Burger Gumbo",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "beef",
   "stovetop",
   "one-pan",
   "comfort-food"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 400,
   "protein": 19,
   "carbs": 23,
   "fat": 20
  },
  "desc": "A quick skillet of ground beef simmered with chicken gumbo soup, brown sugar, ketchup, and oatmeal.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "can",
    "name": "Chicken Gumbo soup"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "lb",
    "name": "ground beef"
   },
   {
    "id": "0003",
    "amount": 3,
    "unit": "tbsp",
    "name": "brown sugar"
   },
   {
    "id": "0004",
    "amount": 3,
    "unit": "tbsp",
    "name": "ketchup"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "tsp",
    "name": "mustard"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "handful oatmeal (instant or minute)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "In a skillet, brown the beef and drain.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add the remaining ingredients over medium-low heat, until the oatmeal is soft.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "buttercream-frosting-classic",
  "title": "Buttercream Frosting (Classic, Butter & Cream)",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "frosting",
   "vegetarian",
   "no-bake",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 24,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 280,
   "protein": 1,
   "carbs": 33,
   "fat": 16
  },
  "desc": "Classic American buttercream beaten smooth with vanilla and cream for piping or spreading.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 7,
    "unit": "cup",
    "name": "powdered sugar"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "cup",
    "name": "unsalted butter (room temp)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tbsp",
    "name": "vanilla"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0005",
    "amount": 3,
    "unit": "tbsp",
    "name": "heavy cream or half n half"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Beat the butter on medium speed for 30 seconds until smooth.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix in vanilla extract and salt.",
    "timer": null
   },
   {
    "title": "",
    "content": "Slowly add powdered sugar, alternating with splashes of cream.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix until fully incorporated.",
    "timer": null
   },
   {
    "title": "",
    "content": "If frosting is too thick add additional cream (1 tbsp at a time). If frosting is too thin add more powdered sugar.",
    "timer": null
   }
  ],
  "notes": "Store frosting in the fridge for a month, freezer up to 3 months."
 },
 {
  "id": "buttercream-frosting-piping",
  "title": "Buttercream Frosting (Shortening, Piping-Stable)",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "frosting",
   "vegetarian",
   "no-bake",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 310,
   "protein": 1,
   "carbs": 35,
   "fat": 19
  },
  "desc": "A light, fluffy buttercream that holds up well for piping decorations.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.5,
    "unit": "cup",
    "name": "butter"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": "cup",
    "name": "shortening"
   },
   {
    "id": "0003",
    "amount": 3.75,
    "unit": "cup",
    "name": "powdered sugar"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla or almond extract"
   },
   {
    "id": "0005",
    "amount": 5,
    "unit": "tbsp",
    "name": "heavy whipping cream"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Beat together butter and shortening until light and fluffy.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add in confectioners sugar a cup at a time, beating well after each addition.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add the heavy cream and your flavoring of choice and beat for 1-2 minutes on high.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "calabacitas",
  "title": "Calabacitas",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "vegetarian",
   "mexican",
   "stovetop",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 110,
   "protein": 3,
   "carbs": 14,
   "fat": 5
  },
  "desc": "A sautéed Mexican medley of squash, zucchini, corn, peppers, and tomato.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "yellow squash (parboiled), cut in small cubes"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "zucchini (parboiled), cut in small cubes"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "red bell pepper (roasted)"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "cauliflower (parboiled)"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "sweet corn (cooked)"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "red onion (diced small)"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "tomato (cut in small cubes)"
   },
   {
    "id": "0008",
    "amount": null,
    "unit": null,
    "name": "olive oil"
   },
   {
    "id": "0009",
    "amount": null,
    "unit": null,
    "name": "cilantro (fresh), cut up"
   },
   {
    "id": "0010",
    "amount": null,
    "unit": null,
    "name": "garlic powder"
   },
   {
    "id": "0011",
    "amount": null,
    "unit": null,
    "name": "salt and black pepper"
   },
   {
    "id": "0012",
    "amount": null,
    "unit": null,
    "name": "oregano (dried)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "In a large skillet add olive oil and sauté onion for 2 minutes.",
    "timer": 120
   },
   {
    "title": "",
    "content": "Then add the rest of the ingredients.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "cannelloni",
  "title": "Cannelloni",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "vegetarian",
   "italian",
   "pasta",
   "baked",
   "casserole"
  ],
  "difficulty": "Medium",
  "time": "~40 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 630,
   "protein": 29,
   "carbs": 46,
   "fat": 35
  },
  "desc": "Manicotti or cannelloni tubes stuffed with a ricotta-spinach cheese filling, baked in marinara.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 4,
    "unit": "cup",
    "name": "spinach (optional)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": null,
    "name": "eggs"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tsp",
    "name": "garlic powder"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tsp",
    "name": "black pepper"
   },
   {
    "id": "0006",
    "amount": 2,
    "unit": "tbsp",
    "name": "olive oil"
   },
   {
    "id": "0007",
    "amount": 17,
    "unit": "oz",
    "name": "ricotta cheese"
   },
   {
    "id": "0008",
    "amount": 1,
    "unit": "cup",
    "name": "shredded cheese (mozzarella, cheddar, gruyere)"
   },
   {
    "id": "0009",
    "amount": 11,
    "unit": null,
    "name": "manicotti (cooked al dente) or cannelloni tubes"
   },
   {
    "id": "0010",
    "amount": null,
    "unit": null,
    "name": "marinara (store bought or homemade)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Heat oven to 400 degrees.",
    "timer": null
   },
   {
    "title": "Filling",
    "content": "Mix the filling ingredients in a bowl, then transfer to a gallon baggie and cut a hole in the corner.",
    "timer": null
   },
   {
    "title": "",
    "content": "Fill the tubes with the filling.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour half the marinara in the bottom of a 9x9 casserole dish.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place tubes flat in the casserole. Pour remaining marinara over top and top with parmesan/mozzarella. Bake 20-25 minutes.",
    "timer": 1500
   }
  ],
  "notes": ""
 },
 {
  "id": "caramel-candies",
  "title": "Caramel Candies",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "candy",
   "no-bake",
   "holiday",
   "vegetarian",
   "gluten-free"
  ],
  "difficulty": "Hard",
  "time": "~12 min + cooling",
  "servingsLabel": "Pieces",
  "baseServings": 60,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 95,
   "protein": 1,
   "carbs": 15,
   "fat": 4
  },
  "desc": "Homemade soft caramels cooked with brown sugar, corn syrup, butter, and sweetened condensed milk.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2.25,
    "unit": "cup",
    "name": "dark brown sugar"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "cup",
    "name": "light corn syrup"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "cup",
    "name": "butter (2 sticks)"
   },
   {
    "id": "0005",
    "amount": 14,
    "unit": "oz",
    "name": "sweetened condensed milk"
   },
   {
    "id": "0006",
    "amount": 0.25,
    "unit": "tsp",
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Line a 9x13 pan with parchment paper. Spray with vegetable oil.",
    "timer": null
   },
   {
    "title": "",
    "content": "Melt the butter in a non-stick sauce pan over medium heat.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add the sugar and salt. Stir. Stir in the corn syrup. Gradually add the milk, stirring constantly.",
    "timer": null
   },
   {
    "title": "",
    "content": "Continue to stir over medium heat to 240-245º, about 12 minutes.",
    "timer": 720
   },
   {
    "title": "",
    "content": "Remove from heat. Stir in the vanilla. Pour into the pan and let cool.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place in the fridge. Take out and cut ¾\" lines vertically, then horizontally into 5 rows. Wrap in wax paper (cut to 4x5\"). Yields 60+.",
    "timer": null
   }
  ],
  "notes": "Helpful tools: digital thermometer, long wood spoon, rubber spatula.\n\nYields 60+ caramels."
 },
 {
  "id": "sweet-cooked-carrots",
  "title": "Carrots (Sweet Cooked)",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "vegetarian",
   "stovetop",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 135,
   "protein": 1,
   "carbs": 22,
   "fat": 4
  },
  "desc": "Tender baby carrots glazed in a brown sugar, butter, and Dijon mustard sauce.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "lb",
    "name": "baby carrots"
   },
   {
    "id": "0002",
    "amount": 0.25,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "packed light brown sugar"
   },
   {
    "id": "0004",
    "amount": 3,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "tbsp",
    "name": "Dijon mustard"
   },
   {
    "id": "0006",
    "amount": 0.25,
    "unit": "tsp",
    "name": "white pepper"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Put carrots in a saucepan, sprinkle with salt, and cover with water. Bring to a boil, cover with a lid, and simmer on low until tender. Drain.",
    "timer": null
   },
   {
    "title": "",
    "content": "In the saucepan put the remaining ingredients, stir, and add the carrots.",
    "timer": null
   },
   {
    "title": "",
    "content": "Stir over low heat until well coated.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "green-beans",
  "title": "Charred Green Beans",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "vegetarian",
   "stovetop",
   "roasted",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~25 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 65,
   "protein": 2,
   "carbs": 7,
   "fat": 4
  },
  "desc": "Blistered, smoky green beans cooked hard and fast in a screaming-hot cast iron pan.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "lb",
    "name": "green beans"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tbsp",
    "name": "avocado oil (or olive oil)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tsp",
    "name": "paprika"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tsp",
    "name": "onion powder"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tsp",
    "name": "garlic powder"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0007",
    "amount": 0.5,
    "unit": "tsp",
    "name": "black pepper"
   }
  ],
  "steps": [
   {
    "title": "Get the pan ripping hot",
    "content": "Set a cast iron skillet over high heat and let it get properly hot, about 3–4 minutes. Add the {0002} and give it a few seconds to heat up.",
    "timer": 240
   },
   {
    "title": "Char the beans",
    "content": "Add the {0001} in a single layer — make sure they're trimmed and patted dry so they char instead of steam. Cook 10–15 minutes, stirring only occasionally, until blistered and charred to your liking.",
    "timer": 720
   },
   {
    "title": "Season at the end",
    "content": "In the last 3–5 minutes, sprinkle in the {0003}, {0004}, {0005}, {0006}, and {0007}. Toss to coat and let the spices toast against the hot beans, then pull from the heat.",
    "timer": 240
   }
  ],
  "notes": "Dry beans are non-negotiable — any surface water steams them and kills the char.\n\nAvocado oil is the move here because it takes high heat without burning, unlike butter or olive oil. Want extra richness? Toss with a small knob of butter off the heat at the very end."
 },
 {
  "id": "chex-mix",
  "title": "Chex Mix",
  "source": "",
  "courses": [
   "Snack"
  ],
  "tags": [
   "snack",
   "vegetarian",
   "party",
   "potluck"
  ],
  "difficulty": "Easy",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 200,
   "protein": 4,
   "carbs": 18,
   "fat": 12
  },
  "desc": "Buttery, Worcestershire-and-garlic seasoned mix of Chex cereals, pretzels and peanuts made in the microwave.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 7,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0002",
    "amount": 2.25,
    "unit": "tbsp",
    "name": "Worcestershire sauce"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tbsp",
    "name": "garlic powder"
   },
   {
    "id": "0004",
    "amount": 0.75,
    "unit": "tsp",
    "name": "sugar"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "tsp",
    "name": "onion powder"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0007",
    "amount": 2.5,
    "unit": "cup",
    "name": "Rice Chex cereal"
   },
   {
    "id": "0008",
    "amount": 2.5,
    "unit": "cup",
    "name": "Corn Chex cereal"
   },
   {
    "id": "0009",
    "amount": 2,
    "unit": "cup",
    "name": "Wheat Chex cereal"
   },
   {
    "id": "0010",
    "amount": 1,
    "unit": "cup",
    "name": "stick pretzels"
   },
   {
    "id": "0011",
    "amount": 1,
    "unit": "cup",
    "name": "peanuts"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Melt butter in the microwave in a 9 x 13 glass dish. Stir in Worcestershire, garlic powder, onion powder, salt, and sugar. Mix well.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add cereals, peanuts, and pretzels. Mix well to coat all ingredients.",
    "timer": null
   },
   {
    "title": "",
    "content": "Microwave a total of 5-6 minutes, 2 minutes at a time, stirring in between. Pour onto paper towels to dry.",
    "timer": 300
   }
  ],
  "notes": ""
 },
 {
  "id": "bbq-shredded-chicken-slow-cooker",
  "title": "Chicken (Shredded, BBQ Slow Cooker)",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "chicken",
   "slow-cooker",
   "american",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "Low 6-7 hrs or High 3-4 hrs",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 460,
   "protein": 25,
   "carbs": 45,
   "fat": 13
  },
  "desc": "Slow-cooker chicken thighs in honey BBQ sauce, shredded for sandwiches or bowls.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 4,
    "unit": null,
    "name": "chicken thighs (skin and fat removed)"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": null,
    "name": "onion, medium (grated with juices)"
   },
   {
    "id": "0003",
    "amount": 1.5,
    "unit": "cup",
    "name": "Sweet Baby Ray's Honey BBQ Sauce"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "tbsp",
    "name": "light brown sugar"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tsp",
    "name": "olive oil"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "tsp",
    "name": "garlic powder"
   },
   {
    "id": "0007",
    "amount": 0.25,
    "unit": "tsp",
    "name": "paprika"
   },
   {
    "id": "0008",
    "amount": 0.25,
    "unit": "tsp",
    "name": "chili powder"
   },
   {
    "id": "0009",
    "amount": 0.25,
    "unit": "tsp",
    "name": "black or white pepper"
   },
   {
    "id": "0010",
    "amount": 1,
    "unit": "tbsp",
    "name": "Worcestershire sauce"
   }
  ],
  "steps": [
   {
    "title": "Add chicken",
    "content": "Pat chicken dry with paper towels. Place chicken in slow cooker on Low.",
    "timer": null
   },
   {
    "title": "Make sauce",
    "content": "In a bowl, combine all other ingredients and stir to combine. Pour the BBQ sauce mixture into the slow cooker over the chicken.",
    "timer": null
   },
   {
    "title": "Cook",
    "content": "Cover and cook on Low (6-7 hrs), or High (3-4 hrs).",
    "timer": 21600
   },
   {
    "title": "Shred",
    "content": "When chicken is tender and can pull apart easily, it is ready to shred. Shred chicken and mix the BBQ sauce together.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "shredded-chicken",
  "title": "Chicken (Shredded)",
  "source": "",
  "courses": [
   "Dinner",
   "Basics"
  ],
  "tags": [
   "chicken",
   "stovetop",
   "slow-cooker",
   "freezer-friendly",
   "make-ahead",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 210,
   "protein": 20,
   "carbs": 2,
   "fat": 13
  },
  "desc": "Simply simmered chicken thighs shredded and moistened with reduced cooking broth.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 3,
    "unit": "lb",
    "name": "chicken thighs (skinless & boneless)"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": null,
    "name": "onion, medium (peeled and sliced)"
   },
   {
    "id": "0003",
    "amount": 4,
    "unit": "clove",
    "name": "garlic"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "tsp",
    "name": "ground black pepper"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "In a heavy-bottomed saucepan combine all ingredients. Add just enough water to cover the chicken. Turn heat to high. Bring to a boil. Remove any scum or foam that floats to the top. Adjust heat to a gentle simmer. Cook for 30 minutes or until chicken is very tender and 175 degrees.",
    "timer": 1800
   },
   {
    "title": "",
    "content": "Transfer to cutting board, use 2 forks to shred the chicken.",
    "timer": null
   },
   {
    "title": "",
    "content": "After removing chicken, boil the liquid until it has reduced to 1/3rd. Spoon about 1 cup over the shredded chicken. Eat within 2-3 days.",
    "timer": null
   }
  ],
  "notes": "Chicken & broth will keep in fridge up to 3 days or frozen for 1 month.\n\nCan be cooked in slow cooker on LOW for 4-6 hours."
 },
 {
  "id": "chicken-broth-soup",
  "title": "Chicken Broth Soup",
  "source": "",
  "courses": [
   "Soup",
   "Dinner"
  ],
  "tags": [
   "chicken",
   "soup",
   "stovetop",
   "one-pan",
   "dairy-free"
  ],
  "difficulty": "Medium",
  "time": "~45 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 170,
   "protein": 15,
   "carbs": 5,
   "fat": 10
  },
  "desc": "A hearty soup of seared chicken thighs simmered with onion, celery and beef-boosted broth.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 3,
    "unit": null,
    "name": "chicken thighs (30 min on counter from fridge)"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": null,
    "name": "yellow onion (small, chopped)"
   },
   {
    "id": "0003",
    "amount": 4,
    "unit": "stalk",
    "name": "celery stalks (4-5, chopped)"
   },
   {
    "id": "0004",
    "amount": 32,
    "unit": "oz",
    "name": "chicken broth, organic"
   },
   {
    "id": "0005",
    "amount": 1.5,
    "unit": "tbsp",
    "name": "Better Than Bouillon Roasted Beef base"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "salt & pepper"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Line a baking sheet with foil. Heat oven to 375.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pat chicken dry and season with salt & pepper. Heat a dutch oven to medium-high on the stovetop, add ~1 tbsp olive oil, and wait until it shimmers.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add chicken skin side down. Leave alone for 5 minutes, then flip and cook ~2-3 minutes. Place on baking sheet in oven until temp reaches 175, ~15 minutes.",
    "timer": 900
   },
   {
    "title": "",
    "content": "Scrape fond on bottom of dutch oven. Add onions and cook ~2-3 minutes until opaque. Add celery and cook another 2 minutes.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add beef bouillon to 2 cups hot water and mix thoroughly. Add chicken broth and the bouillon mixture.",
    "timer": null
   },
   {
    "title": "",
    "content": "After reaching a simmer, add chopped chicken thighs (salt & pepper them first).",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "chicken-chalupas",
  "title": "Chicken Chalupas",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "chicken",
   "baked",
   "mexican",
   "tex-mex"
  ],
  "difficulty": "Medium",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 400,
   "protein": 25,
   "carbs": 30,
   "fat": 18
  },
  "desc": "Crisp baked tortillas layered with Caesar-dressed shredded chicken, melted cheese and romaine.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "chicken thighs (cooked and shredded)"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "tortillas (very thin, handmade) or tortilla chips (restaurant style)"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "Brianna's asiago Caesar dressing (or your favorite Caesar dressing)"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "mozzarella (shredded) + Parmesan"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "romaine lettuce (shredded)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Heat oven to 400. Line baking sheets with foil and spray with non-stick spray. Lay down tortillas and spray the tops. Bake for 3-4 minutes until they just start to turn a bit golden brown.",
    "timer": 180
   },
   {
    "title": "",
    "content": "Mix a little dressing with the shredded chicken.",
    "timer": null
   },
   {
    "title": "",
    "content": "Lay some chicken, then shredded mozzarella and Parmesan, then top with another warm tortilla. Press the edges together.",
    "timer": null
   },
   {
    "title": "",
    "content": "Lay another thin layer of cheese on top. Place back in the oven until cheese is melted to your liking.",
    "timer": null
   },
   {
    "title": "",
    "content": "Top with lettuce drizzled with Caesar dressing.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "chicken-cordon-bleu",
  "title": "Chicken Cordon Bleu",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "chicken",
   "ham",
   "baked",
   "casserole"
  ],
  "difficulty": "Medium",
  "time": "~1 hr",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 350,
   "protein": 35,
   "carbs": 8,
   "fat": 18
  },
  "desc": "Baked chicken breasts layered with mushrooms, ham, and Swiss cheese under a creamy soup topping.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "chicken breasts"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "mushrooms"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": "slice",
    "name": "ham, sliced"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": "slice",
    "name": "Swiss cheese slices"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "can",
    "name": "cream of chicken soup"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "can",
    "name": "cream of mushroom soup"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "In a baking dish, cover the chicken with mushrooms, ham, and Swiss cheese.",
    "timer": null
   },
   {
    "title": "",
    "content": "Spread the soup over the top.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake 1 hour at 350 degrees.",
    "timer": 3600
   }
  ],
  "notes": ""
 },
 {
  "id": "chicken-noodle-soup",
  "title": "Chicken Noodle Soup",
  "source": "",
  "courses": [
   "Soup",
   "Dinner"
  ],
  "tags": [
   "chicken",
   "soup",
   "stovetop",
   "comfort-food"
  ],
  "difficulty": "Medium",
  "time": "~1 hr",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 340,
   "protein": 22,
   "carbs": 30,
   "fat": 12
  },
  "desc": "Hearty chicken noodle soup with bone-in thighs, frozen egg noodles, and vegetables.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 5,
    "unit": "pc",
    "name": "chicken (bone-in skin-on thighs) (5-6), set out 1/2 hr"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "box",
    "name": "chicken broth (32 oz each)"
   },
   {
    "id": "0003",
    "amount": 3,
    "unit": "cup",
    "name": "hot water + Better Than Bullion (roast beef flavor) mixed (3-4 c)"
   },
   {
    "id": "0004",
    "amount": 16,
    "unit": "oz",
    "name": "Reames egg noodles (frozen)"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": null,
    "name": "medium onion (chopped small)"
   },
   {
    "id": "0006",
    "amount": 0.333,
    "unit": null,
    "name": "cabbage (optional)"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "carrots (optional)"
   },
   {
    "id": "0008",
    "amount": 2,
    "unit": null,
    "name": "celery stalks (chopped small) (2-3)"
   },
   {
    "id": "0009",
    "amount": 1,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0010",
    "amount": null,
    "unit": null,
    "name": "salt & pepper"
   }
  ],
  "steps": [
   {
    "title": "Cook chicken",
    "content": "Pat chicken dry with paper towels and salt and pepper them. Cook chicken in dutch oven on stovetop on medium-high until they reach a temp of 175, or cook in oven on a sheet pan at 425. When done, cut into chunks in a bowl and set aside to add at the end.",
    "timer": null
   },
   {
    "title": "Saute vegetables",
    "content": "In dutch oven add 1 Tbsp butter and chopped onions, cook about 2 minutes on medium heat. Add carrots and celery, cook for another minute or 2, season with a little salt & pepper. Add all broth including water with bullion mix.",
    "timer": null
   },
   {
    "title": "Noodles",
    "content": "Next add about 3/4 package frozen egg noodles. Cook on medium-low to low until noodles are done, about 20 min. Add chicken and simmer for 5-10 min.",
    "timer": 1200
   }
  ],
  "notes": ""
 },
 {
  "id": "chicken-taco-meat-crock-pot",
  "title": "Chicken Taco Meat (Crock Pot)",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "chicken",
   "slow-cooker",
   "crock-pot",
   "mexican",
   "tex-mex",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~4 hrs",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 180,
   "protein": 20,
   "carbs": 3,
   "fat": 10
  },
  "desc": "Shredded chicken thighs slow-cooked with taco seasoning, salsa and broth.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 4,
    "unit": null,
    "name": "chicken thighs (4-5)"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "pkt",
    "name": "taco seasoning"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "salsa"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "chicken broth"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Empty the taco seasoning into a zip lock bag with the chicken thighs. Pour about ½ can of chicken broth in crock pot. Place a heaping large spoonful of salsa on top of each thigh. Set on low for 4 hours. Shred when done.",
    "timer": 14400
   }
  ],
  "notes": ""
 },
 {
  "id": "chili",
  "title": "Chili",
  "source": "",
  "courses": [
   "Soup",
   "Dinner"
  ],
  "tags": [
   "beef",
   "beans",
   "stew",
   "tex-mex",
   "stovetop",
   "freezer-friendly",
   "comfort-food",
   "dairy-free",
   "gluten-free"
  ],
  "difficulty": "Medium",
  "time": "~45 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 300,
   "protein": 18,
   "carbs": 26,
   "fat": 12
  },
  "desc": "Hearty beef chili with fire-roasted tomatoes, kidney beans and warm spices, made for freezing.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "tbsp",
    "name": "olive oil"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tbsp",
    "name": "garlic powder"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": null,
    "name": "yellow onion, medium (diced)"
   },
   {
    "id": "0004",
    "amount": 1.5,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0005",
    "amount": 0.75,
    "unit": "lb",
    "name": "ground beef 80-85%"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "tsp",
    "name": "pepper"
   },
   {
    "id": "0007",
    "amount": 2.5,
    "unit": "tbsp",
    "name": "chili powder"
   },
   {
    "id": "0008",
    "amount": 0.25,
    "unit": "tsp",
    "name": "cayenne pepper"
   },
   {
    "id": "0009",
    "amount": 2,
    "unit": "tbsp",
    "name": "cumin"
   },
   {
    "id": "0010",
    "amount": 1.5,
    "unit": "cup",
    "name": "beef broth / Better Than Bouillon roast beef"
   },
   {
    "id": "0011",
    "amount": 1,
    "unit": "tbsp",
    "name": "sugar"
   },
   {
    "id": "0012",
    "amount": 2,
    "unit": "can",
    "name": "fire-roasted diced tomatoes (15 oz each)"
   },
   {
    "id": "0013",
    "amount": 2,
    "unit": "tbsp",
    "name": "tomato paste"
   },
   {
    "id": "0014",
    "amount": 8,
    "unit": "oz",
    "name": "tomato sauce (8–15 oz)"
   },
   {
    "id": "0015",
    "amount": 16,
    "unit": "oz",
    "name": "red kidney or black beans (drained & rinsed)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Add olive oil to a large pot over medium-high heat for 2 min.",
    "timer": 120
   },
   {
    "title": "",
    "content": "Add onion, cook for 3-5 min, stirring occasionally.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add beef to pot. Break apart with a wooden spoon. Cook about 6 min.",
    "timer": 360
   },
   {
    "title": "",
    "content": "Add chili powder, cumin, sugar, tomato paste, garlic powder, salt, pepper and cayenne. Stir.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add broth, diced tomatoes with juice, beans and tomato sauce. Stir. Bring to a low boil, reduce heat to low/medium-low and cook uncovered for 20-25 min, stirring occasionally.",
    "timer": 1500
   },
   {
    "title": "",
    "content": "Freeze leftovers in quart freezer bags.",
    "timer": null
   }
  ],
  "notes": "Makes 6-8 servings."
 },
 {
  "id": "vegetarian-chili",
  "title": "Chili (Vegetarian)",
  "source": "",
  "courses": [
   "Soup",
   "Dinner"
  ],
  "tags": [
   "vegetarian",
   "beans",
   "chili",
   "soup",
   "slow-cooker",
   "crock-pot",
   "comfort-food"
  ],
  "difficulty": "Easy",
  "time": "~2 hr",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 245,
   "protein": 14,
   "carbs": 35,
   "fat": 4
  },
  "desc": "A hearty meatless chili made with Morning Star crumbles, beans, and vegetables in the crock pot.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "Morning Star Crumbles"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "can",
    "name": "chili beans in sauce"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "can",
    "name": "red kidney beans"
   },
   {
    "id": "0004",
    "amount": 14,
    "unit": "oz",
    "name": "diced fire roasted tomatoes"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": null,
    "name": "red onion (chopped)"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": null,
    "name": "carrot (chopped)"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": null,
    "name": "zucchini (chopped)"
   },
   {
    "id": "0008",
    "amount": 0.5,
    "unit": "cup",
    "name": "edamame"
   },
   {
    "id": "0009",
    "amount": 0.5,
    "unit": "cup",
    "name": "corn"
   },
   {
    "id": "0010",
    "amount": 1,
    "unit": "pkg",
    "name": "chili mix"
   },
   {
    "id": "0011",
    "amount": null,
    "unit": null,
    "name": "garlic powder"
   },
   {
    "id": "0012",
    "amount": null,
    "unit": null,
    "name": "chili powder"
   },
   {
    "id": "0013",
    "amount": 1,
    "unit": "tsp",
    "name": "sugar"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Combine all ingredients and cook in a crock pot for about 2 hours on low.",
    "timer": 7200
   },
   {
    "title": "",
    "content": "Add sour cream or sharp cheddar cheese to individual bowls.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "chinese-brown-sauce",
  "title": "Chinese Brown Sauce (Plain)",
  "source": "",
  "courses": [
   "Sauce"
  ],
  "tags": [
   "asian",
   "chinese",
   "sauce",
   "stovetop",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~10 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 20,
   "protein": 1,
   "carbs": 4,
   "fat": 0
  },
  "desc": "A glossy stir-fry style brown sauce thickened with cornstarch from beef broth, oyster and soy sauce.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.5,
    "unit": "cup",
    "name": "beef broth"
   },
   {
    "id": "0002",
    "amount": 1.5,
    "unit": "tbsp",
    "name": "oyster sauce"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "tsp",
    "name": "soy sauce (low sodium)"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "tsp",
    "name": "sugar"
   },
   {
    "id": "0005",
    "amount": 1.25,
    "unit": "tbsp",
    "name": "cornstarch (corn flour or potato starch)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Add broth, oyster sauce, soy sauce and cornstarch to a saucepan.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix until no lumps of cornstarch remain.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bring to a boil while stirring, then simmer until sauce reaches desired thickness.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "chinese-garlic-brown-sauce",
  "title": "Chinese Garlic Brown Sauce",
  "source": "",
  "courses": [
   "Sauce"
  ],
  "tags": [
   "chinese",
   "asian",
   "sauce",
   "stovetop",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 30,
   "protein": 1,
   "carbs": 6,
   "fat": 0
  },
  "desc": "A thicker version of Chinese brown sauce built on beef broth, oyster sauce, and minced garlic.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "cup",
    "name": "beef broth"
   },
   {
    "id": "0002",
    "amount": 1.25,
    "unit": "tbsp",
    "name": "oyster sauce"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tsp",
    "name": "soy sauce (low sodium)"
   },
   {
    "id": "0004",
    "amount": 0.75,
    "unit": "tsp",
    "name": "sugar"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "tbsp",
    "name": "cornstarch (corn flour or potato starch)"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "clove",
    "name": "garlic (minced)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Add broth, oyster sauce, soy sauce, and cornstarch to a saucepan.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix until there are no lumps of cornstarch.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bring to a boil while stirring.",
    "timer": null
   },
   {
    "title": "",
    "content": "Simmer, add the minced garlic, and simmer until it reaches desired thickness.",
    "timer": null
   }
  ],
  "notes": "A thicker version of Chinese brown sauce."
 },
 {
  "id": "chocolate-chip-cookies",
  "title": "Chocolate Chip Cookies",
  "source": "ATK",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "cookie",
   "baked",
   "freezer-friendly",
   "vegetarian"
  ],
  "difficulty": "Medium",
  "time": "~30 min",
  "servingsLabel": "Cookies",
  "baseServings": 24,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 190,
   "protein": 2,
   "carbs": 25,
   "fat": 10
  },
  "desc": "Brown-butter chocolate chip cookies with a chewy, nutty toffee flavor.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.75,
    "unit": "cup",
    "name": "flour"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "tsp",
    "name": "baking soda"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "tsp",
    "name": "vanilla extract"
   },
   {
    "id": "0005",
    "amount": 14,
    "unit": "tbsp",
    "name": "unsalted butter"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": null,
    "name": "large egg + 1 large egg yolk"
   },
   {
    "id": "0007",
    "amount": 0.5,
    "unit": "cup",
    "name": "white sugar"
   },
   {
    "id": "0008",
    "amount": 1.75,
    "unit": "cup",
    "name": "semisweet chocolate chips"
   },
   {
    "id": "0009",
    "amount": 0.75,
    "unit": "cup",
    "name": "dark brown sugar (packed)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Whisk flour and baking soda together, set aside.",
    "timer": null
   },
   {
    "title": "",
    "content": "Heat 10 tbsp butter in a skillet (not a nonstick) over medium-high heat until melted. Continue cooking, swirling the pan constantly, until butter is dark golden brown and has a nutty aroma.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a large heatproof bowl add 4 tbsp butter. Transfer the melted butter to this bowl and mix until all is melted.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add both sugars, salt, and vanilla to the bowl with butter and whisk until fully incorporated. Add egg and yolk and whisk until smooth with no lumps. Let mixture stand 3 minutes, then whisk for 30 seconds; repeat the process 2 more times until the mix is thick, smooth and shiny.",
    "timer": 180
   },
   {
    "title": "",
    "content": "Stir in flour mixture until combined.",
    "timer": null
   },
   {
    "title": "",
    "content": "Stir in chocolate chips.",
    "timer": null
   },
   {
    "title": "",
    "content": "Set covered mixture in the refrigerator.",
    "timer": null
   },
   {
    "title": "",
    "content": "Scoop into balls with a flat bottom. Place on a baking sheet lined with parchment paper.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake 8-12 minutes in a 375F oven. Or place in the freezer for 45 minutes, then place in a freezer-safe baggie and back in the freezer to enjoy whenever!",
    "timer": 720
   }
  ],
  "notes": "Freeze unbaked dough balls for 45 minutes, then store in a freezer-safe baggie to bake whenever."
 },
 {
  "id": "chocolate-cookies",
  "title": "Chocolate Cookies",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "cookie",
   "baked",
   "vegetarian"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Cookies",
  "baseServings": 24,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 160,
   "protein": 2,
   "carbs": 21,
   "fat": 8
  },
  "desc": "Easy chocolate cookies made from a dark chocolate fudge cake mix with chocolate chips.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "pkg",
    "name": "Duncan Hines Dark Chocolate Fudge Cake Mix"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": null,
    "name": "eggs"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "butter or margarine (melted)"
   },
   {
    "id": "0004",
    "amount": 0.25,
    "unit": "cup",
    "name": "brown sugar (packed)"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "cup",
    "name": "semi-sweet chocolate chips"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Stir together all ingredients, leaving the chocolate chips for last. Drop on a sprayed parchment-lined cookie sheet. Bake in a 325° oven.",
    "timer": null
   }
  ],
  "notes": "Frost with Oreo filling or mocha frosting."
 },
 {
  "id": "chuck-roast-seared",
  "title": "Chuck Roast (Crock Pot, Seared, 4 hr)",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "beef",
   "slow-cooker",
   "crock-pot",
   "freezer-friendly",
   "comfort-food",
   "dairy-free",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "~4 hrs",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 315,
   "protein": 30,
   "carbs": 2,
   "fat": 20
  },
  "desc": "A simple chuck roast slow-cooked over onions in beef broth until tender.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.5,
    "unit": "lb",
    "name": "chuck roast (1.5-1.75 lb)"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": null,
    "name": "small yellow onion, chopped in medium chunks"
   },
   {
    "id": "0003",
    "amount": 1.5,
    "unit": "cup",
    "name": "water or beef broth (BTB paste)"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "salt and pepper"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Pat roast dry and leave out for 20 minutes (optional: sear brown in hot cast iron skillet).",
    "timer": 1200
   },
   {
    "title": "",
    "content": "Salt and pepper the roast.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place onions on the bottom of the crock pot, then place roast on top of the onions.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour in water/broth.",
    "timer": null
   },
   {
    "title": "",
    "content": "Set to LOW for ~4 hours.",
    "timer": 14400
   }
  ],
  "notes": "Freeze leftovers in a freezer bag with some broth."
 },
 {
  "id": "chuck-roast-two-broth",
  "title": "Chuck Roast (Crock Pot, Two-Broth, 5 hr)",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "beef",
   "slow-cooker",
   "crock-pot",
   "comfort-food",
   "dairy-free",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "~5 hrs",
  "servingsLabel": "Servings",
  "baseServings": 5,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 330,
   "protein": 30,
   "carbs": 2,
   "fat": 20
  },
  "desc": "A chuck roast slow-cooked over a bed of onions with chicken and beef broth.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "lb",
    "name": "chuck roast"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": null,
    "name": "onion (white or yellow), medium"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "cup",
    "name": "chicken broth (1/4-1/2 c)"
   },
   {
    "id": "0004",
    "amount": 0.25,
    "unit": "cup",
    "name": "beef broth (Better Than Bouillon roast beef) (1/4-1/2 c)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Slice the onions and place on the bottom of the pot.",
    "timer": null
   },
   {
    "title": "",
    "content": "Dry the roast with paper towels. Salt and pepper.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place the roast on top of the bed of onions.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add the broths.",
    "timer": null
   },
   {
    "title": "",
    "content": "Set on LOW for about 5 hours. Remove excess broth if it rises more than a quarter of the way up the roast.",
    "timer": 18000
   }
  ],
  "notes": ""
 },
 {
  "id": "chunky-black-bean-corn-salsa",
  "title": "Chunky Black Bean & Corn Salsa",
  "source": "",
  "courses": [
   "Dip",
   "Appetizer"
  ],
  "tags": [
   "vegetarian",
   "beans",
   "salsa",
   "mexican",
   "no-bake",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 80,
   "protein": 3,
   "carbs": 15,
   "fat": 1
  },
  "desc": "A fresh chunky salsa of corn, black beans or edamame, tomatoes, and cilantro.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "red onion"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "corn"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "edamame or black beans"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "tomatoes"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "cilantro"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "salt and pepper"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "garlic powder"
   }
  ],
  "steps": [
   {
    "title": "Combine",
    "content": "Chop the red onion, tomatoes, and cilantro. Combine with corn and edamame or black beans. Season with salt, pepper, and garlic powder to taste.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "cinnabon-clone",
  "title": "Cinnabon Clone",
  "source": "",
  "courses": [
   "Bread",
   "Dessert"
  ],
  "tags": [
   "rolls",
   "baked",
   "vegetarian",
   "make-ahead"
  ],
  "difficulty": "Hard",
  "time": "~1 hr 30 min rise + ~15 min bake",
  "servingsLabel": "Rolls",
  "baseServings": 12,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 490,
   "protein": 7,
   "carbs": 78,
   "fat": 17
  },
  "desc": "Homemade cinnamon rolls with a soft yeast dough, cinnamon-sugar filling, and cream cheese frosting.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2.5,
    "unit": "tsp",
    "name": "yeast"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "cup",
    "name": "warm milk"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": null,
    "name": "eggs (room temp)"
   },
   {
    "id": "0006",
    "amount": 0.333,
    "unit": "cup",
    "name": "margarine (melted)"
   },
   {
    "id": "0007",
    "amount": 4.5,
    "unit": "cup",
    "name": "bread flour"
   },
   {
    "id": "0008",
    "amount": 1,
    "unit": "cup",
    "name": "brown sugar (filling)"
   },
   {
    "id": "0009",
    "amount": 2.5,
    "unit": "tbsp",
    "name": "cinnamon, ground (filling)"
   },
   {
    "id": "0010",
    "amount": 0.333,
    "unit": "cup",
    "name": "butter, softened (filling)"
   },
   {
    "id": "0011",
    "amount": 3,
    "unit": "oz",
    "name": "cream cheese, softened (frosting)"
   },
   {
    "id": "0012",
    "amount": 0.25,
    "unit": "cup",
    "name": "butter, softened (frosting)"
   },
   {
    "id": "0013",
    "amount": 1.5,
    "unit": "cup",
    "name": "powdered sugar (frosting)"
   },
   {
    "id": "0014",
    "amount": 0.5,
    "unit": "tsp",
    "name": "vanilla extract (frosting)"
   },
   {
    "id": "0015",
    "amount": 0.125,
    "unit": "tsp",
    "name": "salt (frosting)"
   }
  ],
  "steps": [
   {
    "title": "Make dough",
    "content": "Dissolve yeast in warm milk in a large bowl. Mix in sugar, salt, eggs, and margarine. Add flour and mix well. Knead dough into a large ball.",
    "timer": null
   },
   {
    "title": "First rise",
    "content": "Place in a large bowl, cover, and let rise in a warm place for 1 hour (doubling in size).",
    "timer": 3600
   },
   {
    "title": "Filling",
    "content": "In a small bowl combine brown sugar and cinnamon.",
    "timer": null
   },
   {
    "title": "Shape rolls",
    "content": "Roll dough into a 16 x 21\" rectangle. Spread dough with 1/3 cup butter. Sprinkle with the cinnamon/sugar mixture. Roll up dough and cut into 12 rolls.",
    "timer": null
   },
   {
    "title": "Second rise",
    "content": "Place rolls in a 9 x 13\" glass baking pan. Cover and let rise ~30 minutes.",
    "timer": 1800
   },
   {
    "title": "Bake",
    "content": "Preheat oven to 400°. Bake until golden brown, ~15 minutes.",
    "timer": 900
   },
   {
    "title": "Frost",
    "content": "Beat together the cream cheese, butter, powdered sugar, vanilla, and salt for the frosting. Spread frosting on warm rolls.",
    "timer": null
   }
  ],
  "notes": "Sooo Yummy! Enjoy!"
 },
 {
  "id": "kfc-coleslaw",
  "title": "Coleslaw (KFC)",
  "source": "KFC (copycat)",
  "courses": [
   "Salad",
   "Side"
  ],
  "tags": [
   "slaw",
   "salad",
   "vegetarian",
   "make-ahead",
   "overnight",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "Overnight + ~15 min",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 130,
   "protein": 1,
   "carbs": 10,
   "fat": 10
  },
  "desc": "Copycat KFC coleslaw with a creamy, sweet-tangy mayonnaise dressing.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.5,
    "unit": "cup",
    "name": "mayonnaise (Hellmans)"
   },
   {
    "id": "0002",
    "amount": 0.25,
    "unit": "cup",
    "name": "granulated sugar"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "cup",
    "name": "milk + 3/4 tsp lemon (or buttermilk)"
   },
   {
    "id": "0004",
    "amount": 1.5,
    "unit": "tbsp",
    "name": "lemon juice"
   },
   {
    "id": "0005",
    "amount": 4,
    "unit": "cup",
    "name": "cabbage (about 1/2 head) finely shredded + carrot, or 15-16 oz shredded cabbage coleslaw bag"
   },
   {
    "id": "0006",
    "amount": 0.25,
    "unit": null,
    "name": "medium yellow onion (minced)"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0008",
    "amount": 0.25,
    "unit": "tsp",
    "name": "black pepper"
   },
   {
    "id": "0009",
    "amount": 1.5,
    "unit": "tbsp",
    "name": "apple cider vinegar"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Shred cabbage and carrot in a food processor, then add the minced onion.",
    "timer": null
   },
   {
    "title": "",
    "content": "Combine all other ingredients in a large mixing bowl. Whisk together.",
    "timer": null
   },
   {
    "title": "",
    "content": "Combine the dressing and veggies.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cover the bowl, place in the fridge, and marinate at least 4 hours, preferably overnight.",
    "timer": 43200
   }
  ],
  "notes": ""
 },
 {
  "id": "cookie-day-sugar-cookies",
  "title": "Cookie Day Sugar Cookies (Nana's)",
  "source": "Nana's",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "cookie",
   "baked",
   "holiday",
   "kid-friendly",
   "vegetarian"
  ],
  "difficulty": "Medium",
  "time": "7-10 min",
  "servingsLabel": "Cookies",
  "baseServings": 36,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 155,
   "protein": 2,
   "carbs": 19,
   "fat": 8
  },
  "desc": "Nana's classic roll-and-cut sugar cookies, perfect for decorating on cookie day.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.333,
    "unit": "cup",
    "name": "shortening"
   },
   {
    "id": "0002",
    "amount": 1.5,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": null,
    "name": "eggs"
   },
   {
    "id": "0005",
    "amount": 8,
    "unit": "tsp",
    "name": "milk"
   },
   {
    "id": "0006",
    "amount": 4,
    "unit": "cup",
    "name": "flour"
   },
   {
    "id": "0007",
    "amount": 3,
    "unit": "tsp",
    "name": "baking powder"
   },
   {
    "id": "0008",
    "amount": 0.5,
    "unit": "tsp",
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix the shortening and sugar. Add the vanilla, eggs, and milk.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a separate bowl, mix the flour, baking powder, and salt.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add the dry ingredients to the wet ingredients.",
    "timer": null
   },
   {
    "title": "",
    "content": "Roll and cut.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 375º on an ungreased cookie sheet for 7-10 minutes.",
    "timer": 600
   }
  ],
  "notes": ""
 },
 {
  "id": "creamed-corn",
  "title": "Corn (Creamed)",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "corn",
   "vegetarian",
   "slow-cooker",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "Crockpot 2-4 hrs (high) or stovetop ~20-30 min",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 225,
   "protein": 4,
   "carbs": 15,
   "fat": 16
  },
  "desc": "Rich creamed corn with cream cheese and butter, made in the crockpot or on the stovetop.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 20,
    "unit": "oz",
    "name": "frozen corn (20-30 oz, ~5 cups / 8-9 ears sweet corn from cob)"
   },
   {
    "id": "0002",
    "amount": 8,
    "unit": "oz",
    "name": "cream cheese"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "cup",
    "name": "butter"
   },
   {
    "id": "0004",
    "amount": 0.25,
    "unit": "cup",
    "name": "milk + half and half"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tbsp",
    "name": "sugar (optional)"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "tsp",
    "name": "salt (or to taste)"
   },
   {
    "id": "0007",
    "amount": 0.5,
    "unit": "tsp",
    "name": "pepper (or to taste)"
   }
  ],
  "steps": [
   {
    "title": "Crockpot method",
    "content": "Put all the ingredients in the crockpot. Cook on high 2-4 hours or low 4-6 hours. Stir after about an hour.",
    "timer": 7200
   },
   {
    "title": "Stovetop method",
    "content": "Alternatively, cook on the stovetop in a dutch oven or deep skillet until corn is tender and butter and cream cheese are melted (~20-30 min).",
    "timer": 1200
   }
  ],
  "notes": ""
 },
 {
  "id": "cream-cheese-chicken-enchiladas",
  "title": "Cream Cheese Chicken Enchiladas",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "chicken",
   "mexican",
   "tex-mex",
   "baked",
   "casserole",
   "comfort-food"
  ],
  "difficulty": "Medium",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 590,
   "protein": 27,
   "carbs": 39,
   "fat": 28
  },
  "desc": "Flour tortillas filled with creamy chicken, rolled with red enchilada sauce and cheese, and baked.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "tbsp",
    "name": "olive oil"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": "cup",
    "name": "chopped yellow or white onion"
   },
   {
    "id": "0003",
    "amount": 3,
    "unit": "clove",
    "name": "fresh garlic, chopped"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": null,
    "name": "fresh jalapeno or fresno chile, chopped (optional)"
   },
   {
    "id": "0005",
    "amount": 5,
    "unit": null,
    "name": "chicken thighs (about 5)"
   },
   {
    "id": "0006",
    "amount": 8,
    "unit": "oz",
    "name": "cream cheese, softened at room temp"
   },
   {
    "id": "0007",
    "amount": 4,
    "unit": "oz",
    "name": "sour cream"
   },
   {
    "id": "0008",
    "amount": 0.5,
    "unit": "tsp",
    "name": "kosher salt"
   },
   {
    "id": "0009",
    "amount": 10,
    "unit": null,
    "name": "flour tortillas, soft taco size (10-12)"
   },
   {
    "id": "0010",
    "amount": 2,
    "unit": "can",
    "name": "red enchilada sauce (10 oz each)"
   },
   {
    "id": "0011",
    "amount": 8,
    "unit": "oz",
    "name": "block cheese, shredded, cheddar (about 3 cups total)"
   },
   {
    "id": "0012",
    "amount": 1,
    "unit": "can",
    "name": "refried beans"
   }
  ],
  "steps": [
   {
    "title": "Cook aromatics and chicken",
    "content": "Heat olive oil and saute onion, garlic, and jalapeno (if using). Cook the chicken thighs through, then shred or chop.",
    "timer": null
   },
   {
    "title": "Make filling",
    "content": "Mix the chicken with softened cream cheese, sour cream, and kosher salt.",
    "timer": null
   },
   {
    "title": "Assemble",
    "content": "Spread refried beans and filling onto flour tortillas, roll up, and place seam-side down in a baking dish over a layer of red enchilada sauce. Top with remaining enchilada sauce and shredded cheddar cheese.",
    "timer": null
   },
   {
    "title": "Bake",
    "content": "Bake until heated through and the cheese is melted and bubbly.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "creme-brulee",
  "title": "Creme Brulee",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "eggs",
   "baked",
   "make-ahead",
   "vegetarian",
   "gluten-free"
  ],
  "difficulty": "Hard",
  "time": "~45 min + chill",
  "servingsLabel": "Servings",
  "baseServings": 5,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 465,
   "protein": 5,
   "carbs": 22,
   "fat": 40
  },
  "desc": "Classic baked vanilla custard with a torched golden sugar crust.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "cup",
    "name": "heavy cream"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": "cup",
    "name": "sugar (½ c+)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": null,
    "name": "vanilla bean or 1 t vanilla extract"
   },
   {
    "id": "0004",
    "amount": 5,
    "unit": null,
    "name": "egg yolks"
   },
   {
    "id": "0005",
    "amount": 0.25,
    "unit": "tsp",
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Heat oven to 300 degrees.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a saucepan combine cream, vanilla bean and salt over low heat (just less than medium) just until hot. Do not boil; gentle simmer for 2 minutes. Remove from heat. Let sit for 10 minutes, discard vanilla bean (if using vanilla extract add it now).",
    "timer": 120
   },
   {
    "title": "",
    "content": "Place sugar and yolks in a bowl, gently whisk to combine.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add a little at a time some of the warm cream to the egg yolk mixture. Add remaining cream gradually, whisking until combined.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour into 5 6-oz ramekins. Add a drop or 2 of extra vanilla extract to each ramekin.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake 42-45 minutes. Cool completely. Refrigerate up to a couple days.",
    "timer": 2520
   },
   {
    "title": "",
    "content": "Add 1 t sugar to each ramekin and blow torch tops until golden brown.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "croutons-italian-oven",
  "title": "Croutons (Baguette, Italian Herb, Oven)",
  "source": "",
  "courses": [
   "Basics",
   "Side"
  ],
  "tags": [
   "vegetarian",
   "baked",
   "bread"
  ],
  "difficulty": "Easy",
  "time": "~10 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 120,
   "protein": 2,
   "carbs": 10,
   "fat": 8
  },
  "desc": "Cubed baguette tossed in seasoned garlic butter and baked crisp.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 4,
    "unit": "cup",
    "name": "cubed baguette"
   },
   {
    "id": "0002",
    "amount": 0.25,
    "unit": "cup",
    "name": "butter, melted"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "tsp",
    "name": "Italian seasoning (4 tsp in 1 pkg)"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0005",
    "amount": 1.5,
    "unit": "tsp",
    "name": "garlic powder"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Preheat oven to 375˚.",
    "timer": null
   },
   {
    "title": "",
    "content": "Line baking sheet with parchment paper.",
    "timer": null
   },
   {
    "title": "",
    "content": "Slice baguette into cubes.",
    "timer": null
   },
   {
    "title": "",
    "content": "In small bowl whisk melted butter and seasonings.",
    "timer": null
   },
   {
    "title": "",
    "content": "Toss bread cubes with seasoned butter.",
    "timer": null
   },
   {
    "title": "",
    "content": "Spread evenly on lined baking sheet.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake for 7-10 min.",
    "timer": 600
   }
  ],
  "notes": "Store for up to 2 weeks."
 },
 {
  "id": "croutons-skillet-garlic",
  "title": "Croutons (Baguette, Skillet Garlic)",
  "source": "",
  "courses": [
   "Basics",
   "Side"
  ],
  "tags": [
   "vegetarian",
   "baked",
   "bread"
  ],
  "difficulty": "Easy",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 105,
   "protein": 2,
   "carbs": 10,
   "fat": 6
  },
  "desc": "Buttery garlic baguette cubes toasted in a skillet then baked until crispy.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.5,
    "unit": null,
    "name": "baguette (cut in small cubes)"
   },
   {
    "id": "0002",
    "amount": 3,
    "unit": "tbsp",
    "name": "butter (or more)"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "clove",
    "name": "garlic (minced)"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Preheat oven to 300˚ and line a baking sheet with parchment.",
    "timer": null
   },
   {
    "title": "",
    "content": "Melt butter in a large skillet over medium heat. Add garlic and stir for about 1 minute. Add salt and bread cubes and toss until thoroughly coated.",
    "timer": null
   },
   {
    "title": "",
    "content": "Transfer to the baking sheet in a single layer.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake in the oven 12-15 minutes until crispy.",
    "timer": 900
   }
  ],
  "notes": ""
 },
 {
  "id": "croutons-pf-garlic-oven",
  "title": "Croutons (Pepperidge Farm, Garlic Butter, Oven)",
  "source": "",
  "courses": [
   "Basics",
   "Side"
  ],
  "tags": [
   "vegetarian",
   "baked",
   "bread"
  ],
  "difficulty": "Easy",
  "time": "~20 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 220,
   "protein": 2,
   "carbs": 16,
   "fat": 14
  },
  "desc": "Pepperidge Farm bread cubes tossed in garlic butter and olive oil, then baked crisp.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 7,
    "unit": "slice",
    "name": "Butter Farmhouse Pepperidge Farm bread"
   },
   {
    "id": "0002",
    "amount": 3,
    "unit": "tbsp",
    "name": "olive oil"
   },
   {
    "id": "0003",
    "amount": 4,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tbsp",
    "name": "garlic powder"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "tsp",
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "Prep",
    "content": "Preheat oven to 350 degrees. Line a baking sheet with parchment paper. Slice PF Butter bread into 3/4-inch cubes and place in a large bowl.",
    "timer": null
   },
   {
    "title": "Coat",
    "content": "In another bowl combine olive oil and melted butter. Slowly drizzle butter mix over bread cubes, tossing and stirring. Sprinkle with garlic powder and salt to coat.",
    "timer": null
   },
   {
    "title": "Bake",
    "content": "Spread in a single layer on the baking sheet. Bake 10-15 min.",
    "timer": 900
   }
  ],
  "notes": ""
 },
 {
  "id": "french-toast",
  "title": "Custardy French Toast",
  "source": "",
  "courses": [
   "Breakfast"
  ],
  "tags": [
   "bread",
   "eggs",
   "vegetarian"
  ],
  "difficulty": "Medium",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 435,
   "protein": 13,
   "carbs": 48,
   "fat": 14
  },
  "desc": "Thick challah or brioche soaked in vanilla-cinnamon custard and cooked low and slow in butter — crisp edges, custardy center.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": null,
    "name": "loaf challah or brioche bread, thick-sliced"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "cup",
    "name": "half-and-half or heavy cream"
   },
   {
    "id": "0003",
    "amount": 4,
    "unit": null,
    "name": "large eggs"
   },
   {
    "id": "0004",
    "amount": 0.25,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "tsp",
    "name": "vanilla extract"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "tsp",
    "name": "cinnamon"
   },
   {
    "id": "0007",
    "amount": 3,
    "unit": "tbsp",
    "name": "salted butter, for the pan (plus more as needed)"
   }
  ],
  "steps": [
   {
    "title": "Slice the bread",
    "content": "Cut the {0001} into ~1-inch slices. Day-old or slightly stale is best — sturdier, and soaks up more custard without falling apart.",
    "timer": null
   },
   {
    "title": "Make the custard",
    "content": "Whisk the {0002}, {0003}, {0004}, {0005}, and {0006} until combined. For the smoothest custard with no streaks, blitz it with an immersion blender so the cinnamon fully blends in.",
    "timer": null
   },
   {
    "title": "Soak the slices",
    "content": "Dip each slice, soaking about 20 seconds per side, then let the excess drip off.",
    "timer": 40
   },
   {
    "title": "Cook low and slow",
    "content": "Melt a generous amount of {0007} in a skillet over medium-low heat. Cook each slice 3–5 minutes per side until deeply golden — keep it low and slow so the custardy center cooks through before the outside over-browns. Drop to low if it's coloring too fast.",
    "timer": 300
   },
   {
    "title": "Check and serve",
    "content": "Press the center gently: firm means done, jiggly means it needs longer. Serve right away with powdered sugar, a pat of butter, and real maple syrup.",
    "timer": null
   }
  ],
  "notes": "Cooking in batches? Hold finished slices in a 180°F oven so everything stays warm and crisp. Pairs perfectly with the blueberry compote above.\n\nThe bread is the star — sturdy challah or brioche makes all the difference."
 },
 {
  "id": "deviled-eggs-garlic",
  "title": "Deviled Eggs (Garlic)",
  "source": "",
  "courses": [
   "Appetizer",
   "Side"
  ],
  "tags": [
   "eggs",
   "vegetarian",
   "party",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 130,
   "protein": 6,
   "carbs": 1,
   "fat": 12
  },
  "desc": "Classic deviled eggs with mayo, mustard, butter and garlic powder, garnished with paprika and chives.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "eggs"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "mayonnaise"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "mustard + pinch of Dijon"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tbsp",
    "name": "softened butter"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "sugar"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "garlic powder"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Boil eggs for 5 minutes on medium-high, then take off heat for 12 minutes. Run under cold water. Tap the ends first, then the sides to loosen the shells. Start at the hollowest end and dip in water to loosen the membrane.",
    "timer": 300
   },
   {
    "title": "",
    "content": "Cut eggs in half, place yolks in a bowl and mash with a fork.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add remaining ingredients and fill the egg halves.",
    "timer": null
   },
   {
    "title": "",
    "content": "Garnish with paprika, pepper and chives (optional).",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "dill-dip",
  "title": "Dill Dip",
  "source": "",
  "courses": [
   "Dip",
   "Appetizer"
  ],
  "tags": [
   "vegetarian",
   "make-ahead",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "Overnight",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 75,
   "protein": 1,
   "carbs": 2,
   "fat": 7
  },
  "desc": "Creamy sour cream and mayo dip seasoned with dill, celery salt, and onion.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.5,
    "unit": "cup",
    "name": "sour cream (full fat)"
   },
   {
    "id": "0002",
    "amount": 0.25,
    "unit": "cup",
    "name": "mayo (full fat, includes sugar)"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "dry dill weed"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "celery salt"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "dried chopped onion"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "garlic powder (less than other seasonings)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix all in a bowl. Let sit overnight or several hours to marinate and thicken.",
    "timer": 43200
   }
  ],
  "notes": ""
 },
 {
  "id": "dorothys-5pm-rolls",
  "title": "Dorothy's 5PM Rolls",
  "source": "",
  "courses": [
   "Bread"
  ],
  "tags": [
   "rolls",
   "bread",
   "baked",
   "overnight",
   "make-ahead",
   "vegetarian",
   "dairy-free"
  ],
  "difficulty": "Hard",
  "time": "Overnight + ~bake",
  "servingsLabel": "Rolls",
  "baseServings": 36,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 175,
   "protein": 3,
   "carbs": 32,
   "fat": 3
  },
  "desc": "Overnight crescent dinner rolls started at 5PM and baked the next morning.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 3,
    "unit": "cup",
    "name": "real warm water"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": "cup",
    "name": "shortening"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": null,
    "name": "beaten eggs"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "tsp",
    "name": "dry yeast"
   },
   {
    "id": "0007",
    "amount": 10,
    "unit": "cup",
    "name": "bread flour (10-12 c)"
   }
  ],
  "steps": [
   {
    "title": "5PM",
    "content": "Dissolve shortening in warm water. Add sugar, salt, and eggs, then mix.",
    "timer": null
   },
   {
    "title": "",
    "content": "Sprinkle dry yeast over and mix.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add 2 cups flour at a time. Keep adding flour until you have a soft, non-sticky dough. Knead in the last few cups of flour.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place dough in a greased bowl and cover.",
    "timer": null
   },
   {
    "title": "",
    "content": "Punch down every hour until 10 PM.",
    "timer": null
   },
   {
    "title": "",
    "content": "Roll out dough, cut into triangles with a pizza cutter, roll into crescent rolls, and place on parchment sheets.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cover gently with flour sack towels and let set all night on the counter.",
    "timer": 43200
   },
   {
    "title": "8 AM",
    "content": "Bake at 350 degrees. You can brush tops with cream, butter, or beaten egg.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "egg-casserole",
  "title": "Egg Casserole",
  "source": "",
  "courses": [
   "Breakfast"
  ],
  "tags": [
   "eggs",
   "sausage",
   "baked",
   "casserole",
   "overnight",
   "make-ahead",
   "comfort-food"
  ],
  "difficulty": "Medium",
  "time": "Overnight + ~1.5 hr",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 485,
   "protein": 25,
   "carbs": 18,
   "fat": 30
  },
  "desc": "Overnight strata of bread, sharp cheddar and sausage baked in an egg and milk custard.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 8,
    "unit": "slice",
    "name": "bread (cubed)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "cup",
    "name": "sharp cheddar cheese"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "lb",
    "name": "brown & serve sausage"
   },
   {
    "id": "0004",
    "amount": 7,
    "unit": null,
    "name": "eggs"
   },
   {
    "id": "0005",
    "amount": 2.5,
    "unit": "cup",
    "name": "milk"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "can",
    "name": "cream of mushroom soup"
   },
   {
    "id": "0007",
    "amount": 0.5,
    "unit": "cup",
    "name": "milk"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Spread bread cubes in a greased 9x13 pan. Sprinkle with cheese. Spread sausage.",
    "timer": null
   },
   {
    "title": "",
    "content": "Beat eggs. Add 2 1/2 c milk. Beat well. Pour over mixture. Refrigerate overnight.",
    "timer": 43200
   },
   {
    "title": "",
    "content": "Blend soup and 1/2 c milk. Pour over.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 300° for 1 1/2 hours.",
    "timer": 5400
   }
  ],
  "notes": ""
 },
 {
  "id": "eggs-hard-soft-boiled",
  "title": "Eggs (hard/soft-boiled)",
  "source": "",
  "courses": [
   "Basics"
  ],
  "tags": [
   "eggs",
   "stovetop",
   "vegetarian",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 70,
   "protein": 6,
   "carbs": 0,
   "fat": 5
  },
  "desc": "Method for boiling eggs to soft or hard doneness, then peeling cleanly under water.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "eggs"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "water"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Fill a saucepan with water 1\" higher than the eggs.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bring to a boil.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add eggs.",
    "timer": null
   },
   {
    "title": "",
    "content": "Reduce heat to a gentle boil. Cook 4-5 minutes for soft-boiled or 8-10 minutes for hard-boiled.",
    "timer": 480
   },
   {
    "title": "",
    "content": "Empty the boiling water and run eggs under cold water.",
    "timer": null
   },
   {
    "title": "",
    "content": "Crack eggs gently on the ends and roll lengthwise on the side of the pan to crack.",
    "timer": null
   },
   {
    "title": "",
    "content": "Peel under water.",
    "timer": null
   }
  ],
  "notes": "4-5 minutes = soft-boiled egg.\n\n8-10 minutes = hard-boiled egg."
 },
 {
  "id": "enchilada-sauce-quick",
  "title": "Enchilada Sauce (Quick, No-Roux)",
  "source": "",
  "courses": [
   "Sauce"
  ],
  "tags": [
   "vegetarian",
   "mexican",
   "sauce",
   "stovetop",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 10,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 35,
   "protein": 1,
   "carbs": 3,
   "fat": 3
  },
  "desc": "Quick stovetop enchilada sauce built from toasted spices, tomato paste, and stock.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "tbsp",
    "name": "olive oil"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "cup",
    "name": "vegetable or chicken stock"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "tsp",
    "name": "onion powder"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "tsp",
    "name": "salt (to taste)"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tsp",
    "name": "garlic powder"
   },
   {
    "id": "0006",
    "amount": 3,
    "unit": "tbsp",
    "name": "chili powder"
   },
   {
    "id": "0007",
    "amount": 2,
    "unit": "tsp",
    "name": "cumin, ground"
   },
   {
    "id": "0008",
    "amount": 1.5,
    "unit": "tsp",
    "name": "oregano, dried"
   },
   {
    "id": "0009",
    "amount": 3,
    "unit": "tbsp",
    "name": "tomato paste"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix all spices together in a small bowl.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a sauce pan, heat oil over medium-low heat.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add spices and tomato paste. Whisk for 1 min to toast.",
    "timer": null
   },
   {
    "title": "",
    "content": "Slowly whisk in stock, continuing until all is incorporated.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bring to a simmer for 5-10 minutes. Add salt as needed.",
    "timer": 300
   },
   {
    "title": "",
    "content": "Cool completely before storing in a mason jar.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "enchilada-sauce-roux",
  "title": "Enchilada Sauce (Red, Roux-Based)",
  "source": "",
  "courses": [
   "Sauce"
  ],
  "tags": [
   "mexican",
   "sauce",
   "stovetop",
   "chicken"
  ],
  "difficulty": "Medium",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 45,
   "protein": 1,
   "carbs": 2,
   "fat": 3
  },
  "desc": "A homemade red enchilada sauce built from a spiced roux and chicken broth.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tbsp",
    "name": "vegetable oil"
   },
   {
    "id": "0003",
    "amount": 3,
    "unit": "tbsp",
    "name": "flour"
   },
   {
    "id": "0004",
    "amount": 1.5,
    "unit": "tbsp",
    "name": "chili powder"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "tbsp",
    "name": "paprika"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "tsp",
    "name": "onion powder"
   },
   {
    "id": "0007",
    "amount": 2,
    "unit": "tsp",
    "name": "garlic powder"
   },
   {
    "id": "0008",
    "amount": 1,
    "unit": "tsp",
    "name": "cumin"
   },
   {
    "id": "0009",
    "amount": 3,
    "unit": "cup",
    "name": "chicken broth"
   },
   {
    "id": "0010",
    "amount": 0.5,
    "unit": "tsp",
    "name": "Mexican oregano"
   },
   {
    "id": "0011",
    "amount": 2,
    "unit": "tsp",
    "name": "tomato paste"
   },
   {
    "id": "0012",
    "amount": 1.5,
    "unit": "tsp",
    "name": "chicken bouillon"
   },
   {
    "id": "0013",
    "amount": 0.5,
    "unit": "tsp",
    "name": "sugar"
   },
   {
    "id": "0014",
    "amount": 0.5,
    "unit": "tsp",
    "name": "salt or to taste"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "In a deep skillet on medium-low heat, melt butter, add oil, then add flour and make a roux until golden brown, stirring constantly.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add each spice from chili powder to cumin one at a time to the skillet on low, then add ½ of the chicken broth. Stir constantly. Use a whisk or rubber spatula.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add oregano, tomato paste, bouillon, sugar, and salt, adding broth throughout. Let simmer 10-25 minutes.",
    "timer": 1500
   }
  ],
  "notes": ""
 },
 {
  "id": "freezing-basics",
  "title": "Freezing (Bread, Meat, Garlic, Lemons, Cookie Dough)",
  "source": "",
  "courses": [
   "Basics"
  ],
  "tags": [
   "freezer-friendly",
   "make-ahead"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 1,
  "servingsEstimated": true,
  "nutrition": null,
  "desc": "How to freeze bread, meat, garlic, lemon juice and cookie dough for long storage.",
  "ingredients": [],
  "steps": [
   {
    "title": "Bread",
    "content": "Wrap in plastic wrap, then wrap in aluminum foil, place in a freezer bag, and label (good for 6 months).",
    "timer": null
   },
   {
    "title": "Meat",
    "content": "Wrap individually in plastic wrap, then wrap in aluminum foil, place in a freezer bag, and label.",
    "timer": null
   },
   {
    "title": "Garlic",
    "content": "Microplane or finely mince garlic cloves. Measure per teaspoon. Add double the olive or avocado oil to the garlic, 1:2 (garlic to oil). Scoop into an ice cube tray.",
    "timer": null
   },
   {
    "title": "Lemons",
    "content": "Squeeze juice out of lemons. Pour into ice cube trays.",
    "timer": null
   },
   {
    "title": "Cookie dough",
    "content": "Form into a tube and wrap in plastic wrap, or flash freeze individually formed balls and place in a freezer bag.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "french-toast-challah",
  "title": "French Toast (Challah)",
  "source": "",
  "courses": [
   "Breakfast"
  ],
  "tags": [
   "eggs",
   "vegetarian",
   "baked"
  ],
  "difficulty": "Medium",
  "time": "~17 min",
  "servingsLabel": "Servings",
  "baseServings": 10,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 385,
   "protein": 12,
   "carbs": 50,
   "fat": 12
  },
  "desc": "Oven-baked French toast made with thick-cut challah dipped in a cinnamon egg custard.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "tbsp",
    "name": "butter, room temp"
   },
   {
    "id": "0002",
    "amount": 0.125,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0003",
    "amount": 12,
    "unit": null,
    "name": "large eggs"
   },
   {
    "id": "0004",
    "amount": 1.5,
    "unit": "tsp",
    "name": "ground cinnamon"
   },
   {
    "id": "0005",
    "amount": 0.75,
    "unit": "cup",
    "name": "milk"
   },
   {
    "id": "0006",
    "amount": 2,
    "unit": "tbsp",
    "name": "dark-brown sugar"
   },
   {
    "id": "0007",
    "amount": 2,
    "unit": "loaf",
    "name": "challah bread, cut 1\" thick slices"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Preheat oven to 400 degrees.",
    "timer": null
   },
   {
    "title": "",
    "content": "Generously butter 2 nonstick sheet pans.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a bowl, beat eggs, milk, cinnamon, salt, and sugar. One by one, dip bread slices in the egg mixture, turning to coat both sides well. Place on the sheet in a single layer.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake for 9 minutes, turn slices, then bake for 8 more minutes. Serve with maple syrup.",
    "timer": 540
   }
  ],
  "notes": ""
 },
 {
  "id": "frito-casserole",
  "title": "Frito Casserole",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "beef",
   "mexican",
   "tex-mex",
   "casserole",
   "beans"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 520,
   "protein": 22,
   "carbs": 40,
   "fat": 30
  },
  "desc": "A layered Tex-Mex casserole of ground beef, refried beans, enchilada sauce, and Fritos.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "lb",
    "name": "ground beef"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "can",
    "name": "enchilada sauce (mild)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "can",
    "name": "refried beans"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "pkg",
    "name": "Fritos"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "lettuce, tomatoes & shredded cheddar (optional)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Brown the meat. Drain.",
    "timer": null
   },
   {
    "title": "",
    "content": "Heat the enchilada sauce and beans.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cover the bottom of a casserole dish with Fritos.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add meat, then beans, then sauce.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cover with lettuce, tomatoes, and cheese.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "frosted-jello-salad",
  "title": "Frosted Jello Salad",
  "source": "",
  "courses": [
   "Dessert",
   "Salad"
  ],
  "tags": [
   "no-bake",
   "vegetarian",
   "make-ahead"
  ],
  "difficulty": "Medium",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 10,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 240,
   "protein": 3,
   "carbs": 38,
   "fat": 9
  },
  "desc": "A chilled lemon jello salad with pineapple and bananas topped with a cooked custard whipped-cream frosting.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "pkg",
    "name": "lemon Jello, small package, prepared"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "can",
    "name": "crushed pineapple, large (save juice)"
   },
   {
    "id": "0003",
    "amount": 12,
    "unit": null,
    "name": "large marshmallows, cut up (or ~2 cups minis)"
   },
   {
    "id": "0004",
    "amount": 3,
    "unit": null,
    "name": "bananas"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "cup",
    "name": "pineapple juice"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "tbsp",
    "name": "flour"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": null,
    "name": "egg"
   },
   {
    "id": "0008",
    "amount": 0.5,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0009",
    "amount": 1,
    "unit": "cup",
    "name": "heavy whipping cream (1/2 pint)"
   },
   {
    "id": "0010",
    "amount": null,
    "unit": null,
    "name": "powdered sugar, to taste"
   }
  ],
  "steps": [
   {
    "title": "Jello base",
    "content": "Stir together the prepared lemon jello, crushed pineapple, marshmallows, and bananas; refrigerate.",
    "timer": null
   },
   {
    "title": "Cooked sauce",
    "content": "In a saucepan over medium-low heat, cook the pineapple juice, flour, egg, and sugar until thick.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cool the sauce in the refrigerator while making the whip topping.",
    "timer": null
   },
   {
    "title": "Whip topping",
    "content": "Whip the heavy whipping cream with a mixer until peaks appear, adding powdered sugar to taste.",
    "timer": null
   },
   {
    "title": "",
    "content": "Stir the cooled sauce and whip topping together, then frost the jello.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "peanut-butter-frosting",
  "title": "Frosting (Peanut Butter)",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "frosting",
   "vegetarian",
   "no-bake",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 14,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 235,
   "protein": 3,
   "carbs": 21,
   "fat": 12
  },
  "desc": "Creamy peanut butter frosting made with powdered sugar, butter, and milk.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "cup",
    "name": "powdered sugar"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "stick",
    "name": "butter (softened, unsalted)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "cup",
    "name": "creamy peanut butter"
   },
   {
    "id": "0005",
    "amount": 3,
    "unit": "tbsp",
    "name": "milk"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Beat the powdered sugar, softened butter, vanilla, and peanut butter together until smooth, adding milk to reach a spreadable consistency.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "fudge-chocolate",
  "title": "Fudge (Chocolate Chip)",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "fudge",
   "candy",
   "no-bake",
   "vegetarian",
   "gluten-free"
  ],
  "difficulty": "Medium",
  "time": "~10 min + chill",
  "servingsLabel": "Servings",
  "baseServings": 16,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 265,
   "protein": 2,
   "carbs": 40,
   "fat": 12
  },
  "desc": "Classic semi-sweet chocolate fudge made in an 8x8 pan and chilled to set.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2.25,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0002",
    "amount": 0.667,
    "unit": "cup",
    "name": "evaporated milk (2/3 c + T)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tbsp",
    "name": "vanilla"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "stick",
    "name": "unsalted butter (8 T)"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "bag",
    "name": "semi-sweet chocolate chips"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Line an 8x8 pan with aluminum foil and butter it.",
    "timer": null
   },
   {
    "title": "",
    "content": "Boil sugar and milk in a saucepan over medium heat for 4 minutes, stirring constantly.",
    "timer": 240
   },
   {
    "title": "",
    "content": "Remove from heat.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add chocolate chips and butter. Stir. Add vanilla.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour fudge and let cool in the refrigerator.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "fudge-nanas-peanut-butter",
  "title": "Fudge (Nana's Brown Sugar Peanut Butter)",
  "source": "Nana's",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "vegetarian",
   "candy",
   "fudge",
   "no-bake",
   "gluten-free"
  ],
  "difficulty": "Medium",
  "time": "~5 min cook",
  "servingsLabel": "Servings",
  "baseServings": 36,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 105,
   "protein": 2,
   "carbs": 18,
   "fat": 3
  },
  "desc": "Nana's brown sugar peanut butter fudge with marshmallow creme, beaten smooth and cut into squares.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "cup",
    "name": "brown sugar"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "evaporated milk"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0005",
    "amount": 0.75,
    "unit": "cup",
    "name": "peanut butter"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "pt",
    "name": "marshmallow creme"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix sugars, milk, and butter in a 2-quart pan.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bring to a boil and cook for 5 minutes, stirring constantly.",
    "timer": 300
   },
   {
    "title": "",
    "content": "Remove from heat and add peanut butter and marshmallow creme.",
    "timer": null
   },
   {
    "title": "",
    "content": "Beat until smooth and pour into a buttered square pan.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cool. Cut into square pieces.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "fudge-peanut-butter",
  "title": "Fudge (Peanut Butter, Marshmallow Crème)",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "vegetarian",
   "candy",
   "fudge",
   "no-bake",
   "gluten-free"
  ],
  "difficulty": "Hard",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 36,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 100,
   "protein": 2,
   "carbs": 15,
   "fat": 4
  },
  "desc": "Creamy peanut butter fudge made with marshmallow creme, cut into squares.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0002",
    "amount": 0.667,
    "unit": "cup",
    "name": "milk"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "cup",
    "name": "marshmallow creme"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "cup",
    "name": "peanut butter, creamy"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Cook sugar and milk to soft ball stage (234 degrees).",
    "timer": null
   },
   {
    "title": "",
    "content": "Add the other ingredients and mix well (Hint: add marshmallow creme before peanut butter).",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour into a buttered 9 x 9 pan.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cool and cut into squares.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "garlic-bread-chips",
  "title": "Garlic Bread Chips",
  "source": "",
  "courses": [
   "Snack",
   "Side"
  ],
  "tags": [
   "vegetarian",
   "baked",
   "bread"
  ],
  "difficulty": "Easy",
  "time": "~7 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 245,
   "protein": 3,
   "carbs": 21,
   "fat": 15
  },
  "desc": "Thin baguette slices brushed with garlic butter and baked until crisp.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": null,
    "name": "Panera baguette"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": "cup",
    "name": "butter"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "salt"
   },
   {
    "id": "0004",
    "amount": 6,
    "unit": "clove",
    "name": "large garlic cloves (minced)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Preheat oven to 350. Line baking sheet with parchment paper.",
    "timer": null
   },
   {
    "title": "",
    "content": "Slice baguette into 1/8\" thin slices.",
    "timer": null
   },
   {
    "title": "",
    "content": "Lay slices in single layer on cookie sheet.",
    "timer": null
   },
   {
    "title": "",
    "content": "Heat butter in microwave.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mince garlic, the smaller the better.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add minced garlic and salt to butter, mix.",
    "timer": null
   },
   {
    "title": "",
    "content": "Using a pastry brush, brush butter mixture on each slice.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake in oven ~7 minutes, store chips in airtight container.",
    "timer": 420
   }
  ],
  "notes": ""
 },
 {
  "id": "garlic-knots",
  "title": "Garlic Knots",
  "source": "",
  "courses": [
   "Bread"
  ],
  "tags": [
   "bread",
   "rolls",
   "italian",
   "baked",
   "party",
   "vegetarian"
  ],
  "difficulty": "Medium",
  "time": "~45 min",
  "servingsLabel": "Servings",
  "baseServings": 16,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 120,
   "protein": 3,
   "carbs": 22,
   "fat": 2
  },
  "desc": "Soft yeast dough rolled into ropes, tied into knots, baked, and brushed with garlic spread and parmesan.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.5,
    "unit": "cup",
    "name": "water (warm)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "tbsp",
    "name": "sugar"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tbsp",
    "name": "yeast"
   },
   {
    "id": "0004",
    "amount": 3.5,
    "unit": "cup",
    "name": "flour"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tbsp",
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix warm water, sugar, and yeast together. Let sit 5 min.",
    "timer": 300
   },
   {
    "title": "",
    "content": "Add flour and salt to the water mix. Mix until smooth. Let rise for 10 min.",
    "timer": 600
   },
   {
    "title": "",
    "content": "On a floured surface, roll dough 1/2\" thick. Use a pizza cutter to cut the dough in half, then into strips (8-10\").",
    "timer": null
   },
   {
    "title": "",
    "content": "Roll strips in your hands to look like ropes, then tie into knots.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place knots on a greased baking sheet and let rise 10 min.",
    "timer": 600
   },
   {
    "title": "",
    "content": "Bake at 400 degrees for 15-20 minutes.",
    "timer": 1200
   },
   {
    "title": "",
    "content": "Brush baked knots with garlic spread and sprinkle with parmesan.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "german-chocolate-cake-frosting",
  "title": "German Chocolate Cake Frosting",
  "source": "Ina Gearhart",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "vegetarian",
   "frosting",
   "gluten-free"
  ],
  "difficulty": "Medium",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 170,
   "protein": 2,
   "carbs": 27,
   "fat": 6
  },
  "desc": "A cooked butterscotch-chocolate frosting thickened with egg yolk for German chocolate cake.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "cup",
    "name": "brown sugar"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "cup",
    "name": "evaporated milk"
   },
   {
    "id": "0003",
    "amount": 0.667,
    "unit": "cup",
    "name": "butterscotch & chocolate chips"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "cup",
    "name": "water"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tbsp",
    "name": "Karo syrup"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": null,
    "name": "egg yolk, beaten"
   },
   {
    "id": "0007",
    "amount": 2,
    "unit": "tbsp",
    "name": "butter"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Combine in a saucepan: brown sugar, evaporated milk, butterscotch & chocolate chips, water, and Karo syrup.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add 1 beaten egg yolk.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cook over medium heat, stirring until thick.",
    "timer": null
   },
   {
    "title": "",
    "content": "Remove from heat and add 2 tbsp butter.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "guacamole",
  "title": "Guacamole",
  "source": "",
  "courses": [
   "Dip",
   "Appetizer"
  ],
  "tags": [
   "vegetarian",
   "mexican",
   "no-bake",
   "dip",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~10 min",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 95,
   "protein": 1,
   "carbs": 5,
   "fat": 8
  },
  "desc": "A fresh avocado dip with red onion, cilantro, lime, and jalapeño.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 3,
    "unit": null,
    "name": "avocados"
   },
   {
    "id": "0002",
    "amount": 0.25,
    "unit": "cup",
    "name": "red onion (finely diced)"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "cup",
    "name": "cilantro (chopped)"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tbsp",
    "name": "lime or lemon juice (1-2 tbsp)"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": null,
    "name": "jalapeño, finely minced (optional)"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "tsp",
    "name": "salt or more to taste"
   },
   {
    "id": "0007",
    "amount": 0.5,
    "unit": "tsp",
    "name": "garlic powder"
   },
   {
    "id": "0008",
    "amount": null,
    "unit": null,
    "name": "black pepper, pinch"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mash avocados, then add remaining ingredients.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cover with plastic wrap to prevent browning. Refrigerate.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "honey-butter-sauce-spice-rub-for-ribs",
  "title": "Honey Butter Sauce & Spice Rub for Ribs",
  "source": "",
  "courses": [
   "Sauce",
   "Marinade"
  ],
  "tags": [
   "pork",
   "sauce",
   "marinade",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 65,
   "protein": 0,
   "carbs": 4,
   "fat": 6
  },
  "desc": "A whisked honey butter sauce paired with a paprika-cayenne spice rub for ribs.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 4,
    "unit": "tbsp",
    "name": "unsalted butter (melted) (honey butter)"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tbsp",
    "name": "brown sugar (honey butter)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tbsp",
    "name": "honey (honey butter)"
   },
   {
    "id": "0004",
    "amount": 0.25,
    "unit": "tsp",
    "name": "cayenne pepper (honey butter)"
   },
   {
    "id": "0005",
    "amount": 1.5,
    "unit": "tsp",
    "name": "paprika (spice rub)"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "tsp",
    "name": "cumin (spice rub)"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "tsp",
    "name": "garlic powder (spice rub)"
   },
   {
    "id": "0008",
    "amount": 0.5,
    "unit": "tsp",
    "name": "onion powder (spice rub)"
   },
   {
    "id": "0009",
    "amount": 0.5,
    "unit": "tsp",
    "name": "cayenne pepper (spice rub)"
   },
   {
    "id": "0010",
    "amount": 0.25,
    "unit": "tsp",
    "name": "ground mustard (spice rub)"
   }
  ],
  "steps": [
   {
    "title": "Honey Butter",
    "content": "Whisk the melted butter, brown sugar, honey, and cayenne pepper all together.",
    "timer": null
   },
   {
    "title": "Spice Rub",
    "content": "Combine the paprika, cumin, garlic powder, onion powder, cayenne pepper, and ground mustard.",
    "timer": null
   }
  ],
  "notes": "See www.tablefortwoblog.com (Pinterest) for full instructions."
 },
 {
  "id": "honey-garlic-shrimp",
  "title": "Honey Garlic Shrimp",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "shrimp",
   "seafood",
   "stovetop",
   "asian",
   "make-ahead",
   "dairy-free"
  ],
  "difficulty": "Medium",
  "time": "15 min marinate + ~5 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 195,
   "protein": 23,
   "carbs": 14,
   "fat": 4
  },
  "desc": "Shrimp marinated in a honey, soy, and garlic sauce, then quickly seared in a skillet.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.333,
    "unit": "cup",
    "name": "honey"
   },
   {
    "id": "0002",
    "amount": 0.25,
    "unit": "cup",
    "name": "soy sauce"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "clove",
    "name": "garlic"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "mirin (splash, optional)"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "lb",
    "name": "medium uncooked shrimp, peeled & deveined"
   },
   {
    "id": "0006",
    "amount": 2,
    "unit": "tsp",
    "name": "oil"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "green onion (for garnish)"
   }
  ],
  "steps": [
   {
    "title": "Make marinade",
    "content": "Whisk honey, soy sauce, mirin, and garlic in a bowl. Half the marinade is used to marinate the shrimp in the fridge, half for serving with the shrimp.",
    "timer": null
   },
   {
    "title": "Marinate",
    "content": "Place shrimp in a sealable container with 1/2 the marinade, shake, and allow to marinate in refrigerator for 15 min or up to 8-12 hrs. Cover and refrigerate remaining marinade.",
    "timer": 900
   },
   {
    "title": "Cook",
    "content": "Heat oil in skillet over medium-high heat, place shrimp in skillet (discard used marinade). Cook shrimp on one side for 45 sec, flip shrimp over and pour in remaining marinade for about another 2 minutes.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "pizza",
  "title": "Hot Honey Italian Sausage Pizza",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "pork",
   "sausage",
   "italian",
   "baked",
   "pizza",
   "overnight"
  ],
  "difficulty": "Hard",
  "time": "Overnight + ~45 min active",
  "servingsLabel": "Pizzas",
  "baseServings": 2,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 1240,
   "protein": 60,
   "carbs": 120,
   "fat": 58
  },
  "desc": "King Arthur '00' Neapolitan dough topped with a quick seasoned tomato sauce, mozzarella and parmesan, Italian sausage, and a finishing drizzle of hot honey. Makes two 10–12\" pies.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "cup",
    "name": "King Arthur '00' pizza flour"
   },
   {
    "id": "0002",
    "amount": 0.125,
    "unit": "tsp",
    "name": "instant or active dry yeast"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "tsp",
    "name": "granulated sugar"
   },
   {
    "id": "0004",
    "amount": 1.25,
    "unit": "tsp",
    "name": "table salt"
   },
   {
    "id": "0005",
    "amount": 0.75,
    "unit": "cup",
    "name": "lukewarm water (105–115°F)"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "cup",
    "name": "tomato sauce"
   },
   {
    "id": "0007",
    "amount": 0.5,
    "unit": "tsp",
    "name": "garlic powder"
   },
   {
    "id": "0008",
    "amount": 0.5,
    "unit": "tsp",
    "name": "onion powder"
   },
   {
    "id": "0009",
    "amount": 0.25,
    "unit": "tsp",
    "name": "salt (for the sauce)"
   },
   {
    "id": "0010",
    "amount": 0.25,
    "unit": "tsp",
    "name": "black pepper"
   },
   {
    "id": "0011",
    "amount": 1,
    "unit": "tsp",
    "name": "Italian seasoning"
   },
   {
    "id": "0012",
    "amount": 2,
    "unit": "cup",
    "name": "shredded mozzarella"
   },
   {
    "id": "0013",
    "amount": 0.5,
    "unit": "cup",
    "name": "grated parmesan"
   },
   {
    "id": "0014",
    "amount": 0.5,
    "unit": "lb",
    "name": "Italian sausage, casings removed"
   },
   {
    "id": "0015",
    "amount": 2,
    "unit": "tbsp",
    "name": "hot honey, for drizzling"
   }
  ],
  "steps": [
   {
    "title": "Mix the dough (night before)",
    "content": "The night before, whisk the {0001}, {0002}, {0003}, and {0004} in a medium bowl. Add the {0005} and stir until it comes together into a rough, shaggy dough.",
    "timer": null
   },
   {
    "title": "Rise overnight (12–24 hrs)",
    "content": "Cover the bowl and let it rise at room temperature at least 12 hours and up to 24. It won't double — it'll just get a bit puffy.",
    "timer": 43200
   },
   {
    "title": "Preheat the oven + stone",
    "content": "When you're ready to bake, set a baking steel or stone on a center rack and preheat the oven as hot as it goes (500–550°F) for at least 30 minutes. A fully preheated stone is what gives you a crisp bottom.",
    "timer": 1800
   },
   {
    "title": "Divide and shape into balls",
    "content": "Divide the dough in half (about 200g each). On a well-floured surface, stretch-and-fold each piece: grab both ends, pull apart, fold back over itself, and repeat on all four sides. Then tuck the edges under into a smooth ball, seam-side down.",
    "timer": null
   },
   {
    "title": "Second rise (45–60 min)",
    "content": "Set each ball seam-side down in a floured bowl, cover, and let rise 45–60 minutes while the oven heats.",
    "timer": 2700
   },
   {
    "title": "Make the sauce",
    "content": "Stir together the {0006}, {0007}, {0008}, {0009}, {0010}, and {0011}. That's your pizza sauce — taste and adjust.",
    "timer": null
   },
   {
    "title": "Prep the sausage",
    "content": "Pinch the {0014} into small, thin pieces (about ½ inch) so they cook through in the short, hot bake — or brown it in a skillet first if you'd rather be sure.",
    "timer": null
   },
   {
    "title": "Shape the crust",
    "content": "Move one ball to a floured surface, seam-side down. Press the center with your fingertips, leaving the outer rim untouched (that's what puffs into the crust). Using your knuckles and gravity, stretch it into a 10–12\" round — if it fights you, rest it 5–10 minutes and try again. Transfer to a well-floured peel or a sheet of parchment.",
    "timer": null
   },
   {
    "title": "Sauce and top",
    "content": "Spread a thin layer of sauce over the crust, leaving a border. Scatter on the {0012} and {0013}, then top with the sausage pieces.",
    "timer": null
   },
   {
    "title": "Bake hot and fast",
    "content": "Slide the pizza onto the hot stone and bake 6–8 minutes, until the crust is golden and the cheese is bubbling. For extra char, finish under the top broiler 2–3 minutes — but only with at least 8\" between the stone and the broiler, and watch it closely.",
    "timer": 480
   },
   {
    "title": "Finish with hot honey",
    "content": "Pull it out and immediately drizzle with {0015}. Cool a minute, then slice and serve. Reshape and top the second ball while the stone comes back up to temp, and repeat.",
    "timer": null
   }
  ],
  "notes": "Makes two 10–12\" pizzas — this is King Arthur's '00' dough straight off the bag, with your sauce, sausage, and hot-honey build. For best results, weigh the dough: 232g flour and 170g water.\n\nShort on time? Use the bag's faster method: bump the yeast to ½ tsp, rest the mixed dough 20–30 minutes (with one round of stretch-and-folds), then rise at room temperature about 8 hours instead of overnight.\n\nSalt note: 1¼ tsp in 2 cups of flour runs a touch salty — dial it back toward 1 tsp if you prefer. No pizza stone? A preheated upside-down baking sheet or cast iron skillet works; just give it the full 30-minute preheat. Hot honey: store-bought is easy, or warm honey with a pinch of chili flakes and let it steep."
 },
 {
  "id": "ina-gearharts-cinnamon-rolls",
  "title": "Ina Gearhart's Cinnamon Rolls",
  "source": "Ina Gearhart",
  "courses": [
   "Bread",
   "Breakfast"
  ],
  "tags": [
   "vegetarian",
   "baked",
   "rolls",
   "bread"
  ],
  "difficulty": "Hard",
  "time": "Rise time + ~20 min bake",
  "servingsLabel": "Rolls",
  "baseServings": 18,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 310,
   "protein": 6,
   "carbs": 49,
   "fat": 10
  },
  "desc": "Soft yeast-raised cinnamon rolls rolled with butter, sugar and cinnamon and finished with buttercream frosting.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "cup",
    "name": "milk"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "pkg",
    "name": "dry yeast"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "cup",
    "name": "butter"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "cup",
    "name": "warm water"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": null,
    "name": "eggs"
   },
   {
    "id": "0006",
    "amount": 0.25,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0008",
    "amount": 5,
    "unit": "cup",
    "name": "flour (5–6 c)"
   },
   {
    "id": "0009",
    "amount": 0.5,
    "unit": "cup",
    "name": "sugar (for filling)"
   },
   {
    "id": "0010",
    "amount": 1.5,
    "unit": "tsp",
    "name": "cinnamon (for filling)"
   },
   {
    "id": "0011",
    "amount": null,
    "unit": null,
    "name": "raisins (optional)"
   },
   {
    "id": "0012",
    "amount": null,
    "unit": null,
    "name": "buttercream frosting"
   }
  ],
  "steps": [
   {
    "title": "Dough",
    "content": "Scald milk. Add butter to milk. Cool. Add sugar and yeast to warm water until dissolved. Mix all together.",
    "timer": null
   },
   {
    "title": "Dough",
    "content": "Stir in as much flour as you can with a spoon. Place on a floured board and knead in the rest of the flour. Knead well until a soft, shiny ball is formed.",
    "timer": null
   },
   {
    "title": "Rise",
    "content": "Place in a lightly greased bowl. Grease top of dough. Cover with waxed paper and cloth. Place in a warm spot. Let double in size, punch down, let rise again.",
    "timer": null
   },
   {
    "title": "Shape & fill",
    "content": "Roll dough out. Spread with butter. Sprinkle generously with sugar and cinnamon, add raisins (optional). Roll up, pinch together. Cut 1\" thick. Place on pan, let rise.",
    "timer": null
   },
   {
    "title": "Bake",
    "content": "Bake at 400° until golden. Make buttercream frosting.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "jiffy-ginger-cookies",
  "title": "Jiffy Ginger Cookies",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "cookie",
   "vegetarian",
   "baked"
  ],
  "difficulty": "Easy",
  "time": "~10 min",
  "servingsLabel": "Servings",
  "baseServings": 36,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 145,
   "protein": 1,
   "carbs": 17,
   "fat": 8
  },
  "desc": "Spiced molasses ginger cookies rolled in granulated sugar with chocolate chips mixed in.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.75,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tsp",
    "name": "ginger"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "cup",
    "name": "shortening"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "tsp",
    "name": "ground cloves"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": null,
    "name": "egg"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "tsp",
    "name": "cinnamon"
   },
   {
    "id": "0007",
    "amount": 0.25,
    "unit": "cup",
    "name": "Brer Rabbit molasses, dark"
   },
   {
    "id": "0008",
    "amount": 1,
    "unit": "tsp",
    "name": "soda"
   },
   {
    "id": "0009",
    "amount": 0.25,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0010",
    "amount": 2,
    "unit": "cup",
    "name": "flour"
   },
   {
    "id": "0011",
    "amount": null,
    "unit": "bag",
    "name": "chocolate chips"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix in order given.",
    "timer": null
   },
   {
    "title": "",
    "content": "Roll into walnut-size balls. Roll each ball in granulated sugar.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place on ungreased cookie sheet.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake 10 minutes at 350ºF.",
    "timer": 600
   }
  ],
  "notes": ""
 },
 {
  "id": "kale-chips",
  "title": "Kale Chips",
  "source": "",
  "courses": [
   "Snack"
  ],
  "tags": [
   "vegetarian",
   "baked"
  ],
  "difficulty": "Easy",
  "time": "~10 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 55,
   "protein": 2,
   "carbs": 5,
   "fat": 3
  },
  "desc": "Crispy oven-baked kale chips tossed with popcorn seasoning and salt.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "bunch",
    "name": "kale"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "vegetable or canola oil"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "popcorn seasoning (Sour Cream & Onion or Ranch)"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Wash kale bunch, shake off moisture, lay to dry on paper towels, pat dry.",
    "timer": null
   },
   {
    "title": "",
    "content": "Preheat oven to 350. Line parchment on cookie sheet.",
    "timer": null
   },
   {
    "title": "",
    "content": "When dry, rip off large pieces from main stem just enough to eat that day.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place in large bowl, drizzle with about 1 tbsp oil. Massage thoroughly so oil is on all pieces, but not soggy; add more kale if it is too soggy.",
    "timer": null
   },
   {
    "title": "",
    "content": "Sprinkle popcorn seasoning and a bit of salt, mix with hands until mixed well. Repeat until desired flavor.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place kale pieces spaced apart on single layer.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake for about 10 minutes.",
    "timer": 600
   }
  ],
  "notes": "3 stalks yield ~2 batches."
 },
 {
  "id": "marinated-mushrooms",
  "title": "Marinated Mushrooms",
  "source": "",
  "courses": [
   "Appetizer",
   "Side"
  ],
  "tags": [
   "vegetarian",
   "make-ahead",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Medium",
  "time": "Overnight + ~30 min",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 90,
   "protein": 4,
   "carbs": 4,
   "fat": 7
  },
  "desc": "White button mushrooms boiled then steeped in a tangy vinegar-garlic marinade overnight.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.5,
    "unit": "cup",
    "name": "white vinegar (marinade)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "tsp",
    "name": "salt (marinade)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tsp",
    "name": "sugar (marinade)"
   },
   {
    "id": "0004",
    "amount": 3,
    "unit": "clove",
    "name": "garlic, finely chopped (marinade)"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "tsp",
    "name": "ground pepper (marinade)"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "jar",
    "name": "pimentos (or 1 red pepper chopped) (marinade)"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "tsp",
    "name": "oregano, ground, or dill (1-2 tsp) (marinade)"
   },
   {
    "id": "0008",
    "amount": 2,
    "unit": "cup",
    "name": "water (marinade)"
   },
   {
    "id": "0009",
    "amount": 0.5,
    "unit": "cup",
    "name": "vegetable or sunflower oil (marinade)"
   },
   {
    "id": "0010",
    "amount": 2,
    "unit": "lb",
    "name": "white button mushrooms (quartered or halved)"
   },
   {
    "id": "0011",
    "amount": 16,
    "unit": "cup",
    "name": "water (for boiling mushrooms)"
   },
   {
    "id": "0012",
    "amount": 3,
    "unit": "tbsp",
    "name": "vinegar (for boiling mushrooms)"
   }
  ],
  "steps": [
   {
    "title": "Make the marinade first",
    "content": "In a medium saucepan, combine vinegar, salt, sugar, garlic, bay leaves, ground black pepper, red pepper and oregano. Simmer marinade for 5 minutes.",
    "timer": 300
   },
   {
    "title": "Finish marinade",
    "content": "Add 2 cups water, bring to a boil and simmer another 5 minutes. Lastly, add oil and turn off the heat.",
    "timer": 300
   },
   {
    "title": "Boil water",
    "content": "Boil 16 cups (4 quarts) water with 3 Tbsp vinegar (or juice from 1 lemon) to prevent browning of mushrooms.",
    "timer": null
   },
   {
    "title": "Cook mushrooms",
    "content": "Rinse mushrooms (immediately after rinsing, cut into quarters, halves, or even whole if small) and place in boiling water. Stir, cover and cook 3 minutes.",
    "timer": 180
   },
   {
    "title": "Marinate",
    "content": "Drain mushrooms and pour marinade over them. Boil another 2-3 minutes in the marinade.",
    "timer": 180
   },
   {
    "title": "Chill",
    "content": "Cool to room temp and refrigerate overnight, then enjoy for 1.5 months sealed in a jar in the refrigerator.",
    "timer": 43200
   }
  ],
  "notes": "Keeps up to 1.5 months sealed in a jar in the refrigerator."
 },
 {
  "id": "marry-me-chicken-pasta",
  "title": "Marry Me Chicken Pasta",
  "source": "The Recipe Critic",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "chicken",
   "pasta",
   "italian",
   "stovetop",
   "comfort-food",
   "make-ahead"
  ],
  "difficulty": "Medium",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 646,
   "protein": 41,
   "carbs": 51,
   "fat": 31
  },
  "desc": "Creamy sun-dried tomato parmesan chicken tossed with penne — the famous Marry Me Chicken, made a full meal.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.5,
    "unit": "lb",
    "name": "boneless skinless chicken, cut into 1-inch pieces"
   },
   {
    "id": "0002",
    "amount": 10,
    "unit": "oz",
    "name": "penne pasta"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0004",
    "amount": 0.25,
    "unit": "tsp",
    "name": "black pepper"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tbsp",
    "name": "olive oil"
   },
   {
    "id": "0006",
    "amount": 3,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0007",
    "amount": 2,
    "unit": "tsp",
    "name": "garlic, minced"
   },
   {
    "id": "0008",
    "amount": 3,
    "unit": "tbsp",
    "name": "flour"
   },
   {
    "id": "0009",
    "amount": 2,
    "unit": "cup",
    "name": "chicken broth"
   },
   {
    "id": "0010",
    "amount": 1,
    "unit": "cup",
    "name": "heavy cream"
   },
   {
    "id": "0011",
    "amount": 1,
    "unit": "cup",
    "name": "parmesan cheese, grated"
   },
   {
    "id": "0012",
    "amount": 1,
    "unit": "cup",
    "name": "sun-dried tomatoes, drained"
   },
   {
    "id": "0013",
    "amount": 1,
    "unit": "tsp",
    "name": "paprika"
   },
   {
    "id": "0014",
    "amount": 2,
    "unit": "tsp",
    "name": "dried Italian seasoning"
   },
   {
    "id": "0015",
    "amount": null,
    "unit": null,
    "name": "fresh basil, for garnish"
   }
  ],
  "steps": [
   {
    "title": "Cook the pasta",
    "content": "Cook the {0002} according to package instructions. Drain and set aside.",
    "timer": null
   },
   {
    "title": "Season the chicken",
    "content": "Cut the {0001} into 1-inch pieces and season with the {0003} and {0004}.",
    "timer": null
   },
   {
    "title": "Sear the chicken",
    "content": "Heat the {0005} in a large skillet over medium-high heat. Add the chicken and cook 6-8 minutes until no longer pink and cooked through (165°F). Transfer to a plate and set aside.",
    "timer": 480
   },
   {
    "title": "Start the sauce",
    "content": "In the same skillet, melt the {0006}. Saute the {0007} about 30 seconds until fragrant, then add the {0008} and stir into a paste.",
    "timer": null
   },
   {
    "title": "Build the sauce",
    "content": "Whisk in the {0009}, {0010}, and {0011}. Stir in the {0012}, {0013}, and {0014}; season with extra salt and pepper if needed. Simmer a few minutes to thicken.",
    "timer": null
   },
   {
    "title": "Combine and serve",
    "content": "Return the chicken to the skillet with the cooked pasta and stir to coat in the sauce. Garnish with chopped fresh basil and extra parmesan.",
    "timer": null
   }
  ],
  "notes": "Check the chicken with a meat thermometer — 165°F — so it stays juicy. Add red pepper flakes for heat, and use freshly grated parmesan for better melting.\n\nStore leftovers covered up to 4 days; reheat gently on the stovetop or in the microwave with a splash of cream."
 },
 {
  "id": "mascarpone-cream-cheese-frosting",
  "title": "Mascarpone Cream Cheese Frosting",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "frosting",
   "vegetarian",
   "no-bake",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 16,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 145,
   "protein": 1,
   "carbs": 22,
   "fat": 6
  },
  "desc": "Rich, lightly sweet frosting made from mascarpone, cream cheese and sifted powdered sugar.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 4,
    "unit": "oz",
    "name": "mascarpone cheese (room temp)"
   },
   {
    "id": "0002",
    "amount": 4,
    "unit": "oz",
    "name": "cream cheese (room temp)"
   },
   {
    "id": "0003",
    "amount": 3,
    "unit": "cup",
    "name": "powdered sugar (sifted)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Beat the room-temperature mascarpone and cream cheese together until smooth, then gradually add the sifted powdered sugar and beat until fluffy.",
    "timer": null
   }
  ],
  "notes": "So yummy!"
 },
 {
  "id": "mashed-cauliflower",
  "title": "Mashed Cauliflower",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "vegetarian",
   "low-carb",
   "stovetop",
   "comfort-food",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 125,
   "protein": 5,
   "carbs": 7,
   "fat": 9
  },
  "desc": "Creamy mashed cauliflower blended with cream cheese, sour cream and cheddar.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "head",
    "name": "cauliflower"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": "cup",
    "name": "shredded cheddar cheese"
   },
   {
    "id": "0003",
    "amount": 15,
    "unit": "oz",
    "name": "vegetable broth (Full Circle) or water"
   },
   {
    "id": "0004",
    "amount": 0.25,
    "unit": "cup",
    "name": "green onions, white & green parts, sliced (optional)"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "oz",
    "name": "cream cheese"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "salt & pepper to taste"
   },
   {
    "id": "0007",
    "amount": 0.333,
    "unit": "cup",
    "name": "sour cream"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Place cauliflower florets in a large saucepan. Add broth and bring to a boil. Cover and simmer until very tender, about 20 minutes.",
    "timer": 1200
   },
   {
    "title": "",
    "content": "Drain thoroughly through a fine sieve. Mash cauliflower in a bowl with a fork or hand masher.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add cream cheese, sour cream, cheddar cheese, salt and pepper. Use a mixer to blend to desired consistency. Reheat before serving.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "vegetarian-meatballs",
  "title": "Meatballs (Vegetarian)",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "vegetarian",
   "baked"
  ],
  "difficulty": "Easy",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 140,
   "protein": 13,
   "carbs": 7,
   "fat": 7
  },
  "desc": "Meatless meatballs made with Morning Star crumbles, baked until set.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "pkg",
    "name": "Morning Star Crumbles"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": null,
    "name": "egg"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": null,
    "name": "medium sweet onion (yellow), small diced"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tbsp",
    "name": "Worcestershire sauce"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "oregano"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "salt & pepper"
   },
   {
    "id": "0007",
    "amount": 0.125,
    "unit": "cup",
    "name": "half and half"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Place crumbles in the microwave for 2 minutes (until thawed). Small dice the yellow onion.",
    "timer": 120
   },
   {
    "title": "",
    "content": "Add all ingredients to a bowl and combine. Form into balls with a scoop and place on a parchment-lined cookie sheet.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 350F for about 15 minutes.",
    "timer": 900
   }
  ],
  "notes": ""
 },
 {
  "id": "meatloaf",
  "title": "Meatloaf",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "beef",
   "baked",
   "comfort-food",
   "american"
  ],
  "difficulty": "Medium",
  "time": "~1 hr",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 460,
   "protein": 22,
   "carbs": 30,
   "fat": 24
  },
  "desc": "A classic baked meatloaf with a sweet brown sugar, mustard, and ketchup topping.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.5,
    "unit": "cup",
    "name": "ketchup"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": null,
    "name": "egg, beaten"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "milk"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "lb",
    "name": "ground beef or meatless crumbles"
   },
   {
    "id": "0005",
    "amount": 0.25,
    "unit": "cup",
    "name": "scallions"
   },
   {
    "id": "0006",
    "amount": 0.75,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0007",
    "amount": 0.125,
    "unit": "tsp",
    "name": "pepper"
   },
   {
    "id": "0008",
    "amount": 1,
    "unit": "tbsp",
    "name": "worcestershire"
   },
   {
    "id": "0009",
    "amount": null,
    "unit": null,
    "name": "handful of oatmeal or crushed saltines"
   },
   {
    "id": "0010",
    "amount": 5,
    "unit": "tbsp",
    "name": "brown sugar (topping)"
   },
   {
    "id": "0011",
    "amount": 1,
    "unit": "tsp",
    "name": "mustard (topping)"
   },
   {
    "id": "0012",
    "amount": 0.333,
    "unit": "cup",
    "name": "ketchup (topping)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix the meatloaf ingredients with your hands. Form into a loaf.",
    "timer": null
   },
   {
    "title": "Topping",
    "content": "Combine the brown sugar, mustard, and ketchup and pour over the loaf.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 350º for 1 hour, uncovered.",
    "timer": 3600
   }
  ],
  "notes": ""
 },
 {
  "id": "mexican-chip-dip",
  "title": "Mexican Chip Dip",
  "source": "",
  "courses": [
   "Dip",
   "Appetizer"
  ],
  "tags": [
   "beans",
   "vegetarian",
   "mexican",
   "tex-mex",
   "baked",
   "party"
  ],
  "difficulty": "Easy",
  "time": "~25 min",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 180,
   "protein": 6,
   "carbs": 12,
   "fat": 10
  },
  "desc": "Baked layered bean and cheese dip topped with guacamole, tomatoes and green onions for chips.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "can",
    "name": "refried beans (16 oz)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": null,
    "name": "tomatoes, diced"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "sour cream"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "bunch",
    "name": "green onions"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "pkg",
    "name": "taco seasoning"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "cilantro"
   },
   {
    "id": "0007",
    "amount": 0.25,
    "unit": "cup",
    "name": "cheddar cheese, shredded"
   },
   {
    "id": "0008",
    "amount": 0.75,
    "unit": "cup",
    "name": "pepper jack cheese, shredded"
   },
   {
    "id": "0009",
    "amount": null,
    "unit": null,
    "name": "guacamole (avocado, red onion, salt, garlic powder, lemon)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Preheat oven to 375°. Line an approx. 8x8 baking dish with oil.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix refried beans, cheese, sour cream and taco mix in a bowl.",
    "timer": null
   },
   {
    "title": "",
    "content": "Spread bean mixture evenly to the bottom of the pan. Bake for 25 min, or until cheese is bubbly and slightly browned on the edges.",
    "timer": 1500
   },
   {
    "title": "",
    "content": "Garnish with guacamole, green onions, cilantro, tomatoes and chips.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "cream-cheese-mints",
  "title": "Mints (Cream Cheese)",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "candy",
   "no-bake",
   "vegetarian",
   "party",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Pieces",
  "baseServings": 48,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 50,
   "protein": 0,
   "carbs": 10,
   "fat": 1
  },
  "desc": "Soft cream cheese mints flavored with almond and shaped in molds or cutters.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 4,
    "unit": "oz",
    "name": "cream cheese (room temp)"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0003",
    "amount": 4,
    "unit": "cup",
    "name": "powdered sugar"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "tsp",
    "name": "almond extract"
   },
   {
    "id": "0005",
    "amount": 0.125,
    "unit": "tsp",
    "name": "vanilla"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "granulated sugar"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "food coloring"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Place cream cheese in a mixing bowl. Using an electric mixer, start adding powdered sugar until you reach the consistency of play dough (use just less than a 2 lb bag of powdered sugar). Add more powdered sugar if too sticky.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add a drop or two of flavoring and mix to incorporate. Add food coloring and knead into the dough.",
    "timer": null
   },
   {
    "title": "",
    "content": "Roll dough in granulated sugar and press into a mint mold or cut with mini cookie cutters. Store in the fridge.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "easy-mints",
  "title": "Mints (Easy)",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "candy",
   "vegetarian",
   "no-bake",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 24,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 85,
   "protein": 0,
   "carbs": 17,
   "fat": 2
  },
  "desc": "Quick almond-flavored mints kneaded smooth and molded or sliced.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.25,
    "unit": "cup",
    "name": "butter"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "tbsp",
    "name": "water"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "tsp",
    "name": "almond extract"
   },
   {
    "id": "0005",
    "amount": 3.5,
    "unit": "cup",
    "name": "powdered sugar"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "food coloring (optional)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Combine butter and water. Place over low heat until butter melts. Remove from heat.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add salt and extract.",
    "timer": null
   },
   {
    "title": "",
    "content": "Gradually add sugar.",
    "timer": null
   },
   {
    "title": "",
    "content": "Knead until smooth.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mold into individual candies or form small rolls to slice.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "mirin-sauce",
  "title": "Mirin Sauce",
  "source": "",
  "courses": [
   "Sauce"
  ],
  "tags": [
   "vegetarian",
   "asian",
   "japanese",
   "stovetop",
   "vegan",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~5 min",
  "servingsLabel": "Servings",
  "baseServings": 2,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 80,
   "protein": 1,
   "carbs": 16,
   "fat": 0
  },
  "desc": "A quick sweet-savory mirin and soy sauce thickened with cornstarch for meat, veg, rice, or sushi.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "clove",
    "name": "garlic, minced/grated"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tsp",
    "name": "cornstarch"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tbsp",
    "name": "sugar"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "tbsp",
    "name": "mirin"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "tbsp",
    "name": "soy sauce"
   }
  ],
  "steps": [
   {
    "title": "Combine",
    "content": "Place all ingredients in a bowl and whisk until well combined.",
    "timer": null
   },
   {
    "title": "Thicken",
    "content": "Transfer to a saucepan on medium heat. Heat until bubbles, reduce to low, stir frequently (watch closely) until thickened (consistency of oil), about 3-5 minutes.",
    "timer": 180
   }
  ],
  "notes": "Double recipe to yield 1/3-1/2 cup.\n\nAdd to meat, veg, rice, sushi."
 },
 {
  "id": "miso-sauce-marinade",
  "title": "Miso Sauce/Marinade",
  "source": "Chef Ramsay",
  "courses": [
   "Sauce",
   "Marinade"
  ],
  "tags": [
   "asian",
   "japanese",
   "sauce",
   "marinade",
   "vegetarian",
   "vegan",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~5 min",
  "servingsLabel": "Servings",
  "baseServings": 2,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 185,
   "protein": 2,
   "carbs": 12,
   "fat": 14
  },
  "desc": "A quick creamy miso sauce whisked in a hot skillet for marinating steaks or serving as a sauce.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "tbsp",
    "name": "miso paste"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tbsp",
    "name": "sugar"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "tbsp",
    "name": "rice wine"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "tbsp",
    "name": "olive oil"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "salt & pepper"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Whisk all ingredients in a heated skillet for a minute until creamy. Marinate steaks in it or use as a sauce.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "mocha-frosting",
  "title": "Mocha Frosting",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "frosting",
   "vegetarian",
   "no-bake",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 175,
   "protein": 0,
   "carbs": 31,
   "fat": 5
  },
  "desc": "Coffee-and-Nesquik buttercream frosting flavored with brewed coffee and vanilla.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.333,
    "unit": "cup",
    "name": "Nesquik mix"
   },
   {
    "id": "0002",
    "amount": 3,
    "unit": "cup",
    "name": "powdered sugar"
   },
   {
    "id": "0003",
    "amount": 0.333,
    "unit": "cup",
    "name": "strong hot brewed coffee (cooled in fridge)"
   },
   {
    "id": "0004",
    "amount": 0.333,
    "unit": "cup",
    "name": "softened butter"
   },
   {
    "id": "0005",
    "amount": 0.125,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Cool the brewed coffee in the fridge before using.",
    "timer": null
   },
   {
    "title": "",
    "content": "Beat softened butter with powdered sugar, Nesquik mix, salt and vanilla, then add the cooled coffee and mix until smooth and spreadable.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "mushroom-soup",
  "title": "Mushroom Soup",
  "source": "",
  "courses": [
   "Soup"
  ],
  "tags": [
   "soup",
   "stovetop",
   "mushroom"
  ],
  "difficulty": "Easy",
  "time": "~45 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 115,
   "protein": 3,
   "carbs": 8,
   "fat": 6
  },
  "desc": "A savory portabella mushroom soup built on beef and chicken stock with sauteed onion, carrot and celery.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "cup",
    "name": "onion, chopped"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "carrot"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "cup",
    "name": "celery"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tbsp",
    "name": "garlic, minced"
   },
   {
    "id": "0006",
    "amount": 8,
    "unit": "oz",
    "name": "Portabella mushrooms (2)"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "red pepper flakes (dash)"
   },
   {
    "id": "0008",
    "amount": 3,
    "unit": "cup",
    "name": "beef stock"
   },
   {
    "id": "0009",
    "amount": 2,
    "unit": "cup",
    "name": "chicken stock"
   },
   {
    "id": "0010",
    "amount": 2,
    "unit": "tbsp",
    "name": "soy sauce"
   },
   {
    "id": "0011",
    "amount": 0.5,
    "unit": "tsp",
    "name": "worcestershire sauce"
   },
   {
    "id": "0012",
    "amount": null,
    "unit": null,
    "name": "salt & pepper"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Melt butter in a stock pot.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add onion, carrot and celery; cook over medium heat until translucent.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add garlic and mushrooms. Cook 5 minutes on medium-low heat.",
    "timer": 300
   },
   {
    "title": "",
    "content": "Add stocks, worcestershire sauce and red pepper flakes. Season with salt and pepper.",
    "timer": null
   },
   {
    "title": "",
    "content": "Reduce to low and simmer for 30 minutes.",
    "timer": 1800
   }
  ],
  "notes": ""
 },
 {
  "id": "oatmeal-raisin-cookies",
  "title": "Oatmeal Raisin Cookies",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "cookie",
   "baked",
   "vegetarian"
  ],
  "difficulty": "Easy",
  "time": "~30 min",
  "servingsLabel": "Cookies",
  "baseServings": 48,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 115,
   "protein": 1,
   "carbs": 18,
   "fat": 4
  },
  "desc": "Soft oatmeal cookies loaded with plumped raisins and Quaker quick oats.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.5,
    "unit": "cup",
    "name": "raisins (place in boiling water 10 min, then dry)"
   },
   {
    "id": "0002",
    "amount": 1.5,
    "unit": "cup",
    "name": "flour"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "tsp",
    "name": "baking powder"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tsp",
    "name": "cinnamon powder"
   },
   {
    "id": "0006",
    "amount": 8,
    "unit": "oz",
    "name": "butter (room temp ~30 min)"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "cup",
    "name": "brown sugar (packed)"
   },
   {
    "id": "0008",
    "amount": 1,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0009",
    "amount": 3,
    "unit": null,
    "name": "eggs (large)"
   },
   {
    "id": "0010",
    "amount": 3,
    "unit": "cup",
    "name": "Quaker Quick 1 min Oats"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Preheat oven to 350 on convection bake.",
    "timer": null
   },
   {
    "title": "",
    "content": "Sift flour, salt and baking powder into a bowl.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cream butter and sugar, then add eggs.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix in the flour mixture, then stir in oats and raisins.",
    "timer": null
   },
   {
    "title": "",
    "content": "Roll and flatten the dough. Bake 11 minutes, rotate, and bake 3-4 minutes more.",
    "timer": 660
   }
  ],
  "notes": "Makes 3 trays of 16."
 },
 {
  "id": "caramelized-onions",
  "title": "Onions (Caramelized)",
  "source": "",
  "courses": [
   "Basics"
  ],
  "tags": [
   "vegetarian",
   "stovetop",
   "gluten-free"
  ],
  "difficulty": "Medium",
  "time": "~45 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 75,
   "protein": 1,
   "carbs": 5,
   "fat": 6
  },
  "desc": "Vidalia onions cooked low and slow in butter until deeply caramelized.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": null,
    "name": "Vidalia onions, medium, sliced"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Slice onions. Heat a cast iron skillet to medium.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add oil and butter, then onions. Add a pinch of salt. Reduce heat if butter starts to brown.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cook onions low and slow for up to 45 minutes depending on texture preference, turning frequently. Deglaze pan with balsamic vinegar or water if needed.",
    "timer": 2700
   }
  ],
  "notes": ""
 },
 {
  "id": "red-pickled-onions",
  "title": "Onions (Red Pickled)",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "vegetarian",
   "make-ahead",
   "overnight",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "Overnight + ~15 min",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 35,
   "protein": 0,
   "carbs": 8,
   "fat": 0
  },
  "desc": "Quick-pickled red onions in a sweet-tangy cider vinegar brine.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "cup",
    "name": "apple cider vinegar"
   },
   {
    "id": "0002",
    "amount": 0.25,
    "unit": "cup",
    "name": "water"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": null,
    "name": "medium red onions"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "garlic (sliced), optional"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Bring water to a boil. Add water, vinegar, sugar, and salt. Stir until the sugar is dissolved. Let sit off heat for 10 minutes.",
    "timer": 600
   },
   {
    "title": "",
    "content": "Place thinly sliced red onions in a glass mason jar. Pour the liquid mixture over, add garlic (optional).",
    "timer": null
   },
   {
    "title": "",
    "content": "Place in the refrigerator. Let marinate at least overnight.",
    "timer": 43200
   }
  ],
  "notes": ""
 },
 {
  "id": "roasted-onions",
  "title": "Onions (Roasted)",
  "source": "",
  "courses": [
   "Basics"
  ],
  "tags": [
   "vegetarian",
   "roasted",
   "baked",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "~50 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 80,
   "protein": 1,
   "carbs": 7,
   "fat": 6
  },
  "desc": "Sweet onions roasted with butter and balsamic until golden and tender.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": null,
    "name": "sweet onions, large (yellow or vidalia)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "tbsp",
    "name": "butter, melted"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tsp",
    "name": "balsamic vinegar"
   },
   {
    "id": "0004",
    "amount": 0.125,
    "unit": "tsp",
    "name": "salt, kosher"
   },
   {
    "id": "0005",
    "amount": 0.125,
    "unit": "tsp",
    "name": "pepper, fresh ground"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Preheat oven to 400 degrees.",
    "timer": null
   },
   {
    "title": "",
    "content": "Whisk melted butter and balsamic vinegar.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cut onion into 1/2 inch slices.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place onions in a greased 9x13 baking dish (glass or ceramic). Brush with butter mixture.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour water into the casserole dish. Season with salt and pepper.",
    "timer": null
   },
   {
    "title": "",
    "content": "Roast 40-50 minutes until golden and tender.",
    "timer": 2400
   }
  ],
  "notes": ""
 },
 {
  "id": "oreo-filling",
  "title": "Oreo Filling",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "frosting",
   "vegetarian",
   "no-bake",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 205,
   "protein": 0,
   "carbs": 31,
   "fat": 9
  },
  "desc": "Fluffy marshmallow-and-shortening filling that mimics the creme center of an Oreo.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "jar",
    "name": "marshmallow cream (7 oz jars)"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": "cup",
    "name": "shortening"
   },
   {
    "id": "0003",
    "amount": 0.667,
    "unit": "cup",
    "name": "powdered sugar"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla extract (1–1.5 tsp)"
   },
   {
    "id": "0005",
    "amount": 4,
    "unit": "tsp",
    "name": "very hot water (makes easier to spread)"
   },
   {
    "id": "0006",
    "amount": 0.25,
    "unit": "tsp",
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Combine marshmallow cream, shortening, powdered sugar, and vanilla in a bowl and mix well with an electric mixer on high until fluffy.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a separate small bowl, combine the salt with the hot water and stir until dissolved. Add to the fluff mixture.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix on high until combined.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "oven-baked-chicken-thighs",
  "title": "Oven Baked Chicken Thighs",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "chicken",
   "baked",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "Overnight + ~35 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 320,
   "protein": 25,
   "carbs": 0,
   "fat": 24
  },
  "desc": "Crispy skin-on, bone-in chicken thighs baked skin-side down then flipped to finish.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "chicken thighs (skin on, bone in)"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "salt or other seasonings"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Thaw chicken thighs in refrigerator overnight.",
    "timer": null
   },
   {
    "title": "",
    "content": "Trim excess fat and skin with scissors. Let sit out for about 20 minutes. Pat dry with paper towels.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place on a rimmed cookie sheet in oven. Heat oven to 350 degrees.",
    "timer": null
   },
   {
    "title": "",
    "content": "Poke skin side multiple times with the tip of a sharp knife. Salt and season each side.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place thighs skin side down on sheet pan. Bake at 350-375 degrees for 25 minutes. Flip and bake an additional 10 minutes. Safe to eat at a temp of 175 degrees.",
    "timer": 1500
   }
  ],
  "notes": ""
 },
 {
  "id": "peach-upside-down-cake",
  "title": "Peach Upside-Down Cake",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "cake",
   "vegetarian",
   "baked"
  ],
  "difficulty": "Medium",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 16,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 250,
   "protein": 3,
   "carbs": 38,
   "fat": 10
  },
  "desc": "Yellow cake baked over spiraled peaches and dark brown sugar for a caramelized upside-down finish.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "can",
    "name": "sliced peaches (drained), Bettergoods amaretto"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "box",
    "name": "yellow cake mix, Pillsbury (prepare)"
   },
   {
    "id": "0003",
    "amount": 0.75,
    "unit": "stick",
    "name": "butter"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "dark brown sugar, to cover peaches and bottom"
   }
  ],
  "steps": [
   {
    "title": "Prep pans",
    "content": "Use two 8\" round cake pans. Cut parchment to fit the bottom, spray the bottom with oil, place parchment on the bottom, then grease with butter on the bottom and sides.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place peaches on the bottom in a spiral pattern.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cover all with brown sugar.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour prepared cake batter over the top, divided evenly.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake per cake instructions.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "peanut-butter-cookies",
  "title": "Peanut Butter Cookies",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "cookie",
   "baked",
   "vegetarian"
  ],
  "difficulty": "Easy",
  "time": "~10 min",
  "servingsLabel": "Cookies",
  "baseServings": 36,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 110,
   "protein": 3,
   "carbs": 14,
   "fat": 5
  },
  "desc": "Soft peanut butter cookies sweetened with dark brown sugar and a touch of honey.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.667,
    "unit": "cup",
    "name": "all-purpose flour"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tsp",
    "name": "baking soda"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0004",
    "amount": 1.5,
    "unit": "cup",
    "name": "dark brown sugar"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "cup",
    "name": "creamy peanut butter"
   },
   {
    "id": "0006",
    "amount": 2,
    "unit": "tbsp",
    "name": "honey"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla extract"
   },
   {
    "id": "0008",
    "amount": 4,
    "unit": "tbsp",
    "name": "melted butter"
   },
   {
    "id": "0009",
    "amount": 2,
    "unit": null,
    "name": "eggs"
   }
  ],
  "steps": [
   {
    "title": "Mix",
    "content": "Mix dry ingredients and set aside. Mix wet ingredients. Add dry ingredients to wet.",
    "timer": null
   },
   {
    "title": "Shape",
    "content": "Line a cookie sheet with parchment paper. Scoop into balls and flatten to ~2 inch diameter.",
    "timer": null
   },
   {
    "title": "Bake",
    "content": "Bake at 350 degrees for 10 minutes.",
    "timer": 600
   }
  ],
  "notes": ""
 },
 {
  "id": "pineapple-roasted",
  "title": "Pineapple (Roasted)",
  "source": "",
  "courses": [
   "Basics"
  ],
  "tags": [
   "vegetarian",
   "roasted",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 80,
   "protein": 1,
   "carbs": 18,
   "fat": 1
  },
  "desc": "Sliced pineapple roasted until beginning to brown and caramelized.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "pineapple"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "canola oil (spray)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Slice pineapple.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cover baking sheet with parchment.",
    "timer": null
   },
   {
    "title": "",
    "content": "Heat oven to 400˚.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place on baking sheet.",
    "timer": null
   },
   {
    "title": "",
    "content": "Spray lightly with canola oil.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake 15 minutes.",
    "timer": 900
   },
   {
    "title": "",
    "content": "Flip.",
    "timer": null
   },
   {
    "title": "",
    "content": "Spray lightly again (optional).",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake another 15 minutes or until beginning to brown.",
    "timer": 900
   },
   {
    "title": "",
    "content": "Let cool.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "pizza-crust-ny-style",
  "title": "Pizza Crust (NY Style)",
  "source": "",
  "courses": [
   "Bread"
  ],
  "tags": [
   "bread",
   "pizza",
   "italian",
   "make-ahead",
   "overnight",
   "baked",
   "vegetarian",
   "vegan",
   "dairy-free"
  ],
  "difficulty": "Hard",
  "time": "Overnight (24 hrs) + ~15 min",
  "servingsLabel": "Pizzas",
  "baseServings": 4,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 540,
   "protein": 13,
   "carbs": 107,
   "fat": 4
  },
  "desc": "A bread-flour New York style pizza dough that chills at least 24 hours before shaping into four crusts.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.75,
    "unit": "cup",
    "name": "water (lukewarm)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "tsp",
    "name": "active dry yeast (1 pkg)"
   },
   {
    "id": "0003",
    "amount": 4.5,
    "unit": "cup",
    "name": "bread flour"
   },
   {
    "id": "0004",
    "amount": 1.5,
    "unit": "tsp",
    "name": "kosher salt"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "tbsp",
    "name": "olive oil"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "In a large bowl, whisk water and yeast; let sit for 10 minutes.",
    "timer": 600
   },
   {
    "title": "",
    "content": "Gradually add flour and salt, stopping when the dough is slightly sticky.",
    "timer": null
   },
   {
    "title": "",
    "content": "Sprinkle 2 T flour on the surface and knead the dough with both hands until it bounces back slowly to the touch (about 5 min).",
    "timer": 300
   },
   {
    "title": "",
    "content": "Shape dough into a ball, transfer to a bowl greased with 1 T olive oil, cover with plastic, and chill in the fridge for at least 24 hrs.",
    "timer": 86400
   },
   {
    "title": "",
    "content": "An hour before baking, take the dough out and cover at room temperature.",
    "timer": 3600
   },
   {
    "title": "",
    "content": "Divide into 4 equal pieces. Shape and flatten each to a disk.",
    "timer": null
   },
   {
    "title": "",
    "content": "Roll dough on parchment sprinkled with cornmeal, or a combo of cornmeal and spray oil (about 8\" diameter).",
    "timer": null
   },
   {
    "title": "",
    "content": "Transfer from parchment to a cornmeal-sprayed dark baking sheet.",
    "timer": null
   },
   {
    "title": "",
    "content": "Assemble with sauce and other ingredients.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "plum-glaze",
  "title": "Plum Glaze",
  "source": "",
  "courses": [
   "Sauce"
  ],
  "tags": [
   "sauce",
   "glaze",
   "vegetarian",
   "asian",
   "vegan",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 100,
   "protein": 0,
   "carbs": 25,
   "fat": 0
  },
  "desc": "A sweet-tangy plum jam glaze with soy sauce and balsamic, thickened with cornstarch.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.75,
    "unit": "cup",
    "name": "plum jam"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "cup",
    "name": "water"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "tbsp",
    "name": "brown sugar (2-3 T)"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tbsp",
    "name": "soy sauce"
   },
   {
    "id": "0005",
    "amount": 3,
    "unit": "tbsp",
    "name": "balsamic vinegar"
   },
   {
    "id": "0006",
    "amount": 2,
    "unit": "tbsp",
    "name": "cornstarch"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Combine plum jam, water, brown sugar, soy sauce, and balsamic vinegar in a saucepan.",
    "timer": null
   },
   {
    "title": "",
    "content": "Stir in cornstarch and cook, stirring, until the glaze thickens.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "poached-shredded-chicken",
  "title": "Poached Shredded Chicken",
  "source": "",
  "courses": [
   "Basics"
  ],
  "tags": [
   "chicken",
   "stovetop",
   "slow-cooker",
   "freezer-friendly",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 250,
   "protein": 31,
   "carbs": 0,
   "fat": 14
  },
  "desc": "Chicken gently simmered until tender, shredded, and finished with a reduced broth.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "chicken"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "water (enough to cover chicken)"
   }
  ],
  "steps": [
   {
    "title": "Simmer",
    "content": "In a heavy-bottomed saucepan combine all ingredients. Add just enough water to cover the chicken. Turn heat to high and bring to a boil. Remove any scum or foam that floats to the top. Adjust heat to a gentle simmer and cook for 30 minutes or until chicken is very tender.",
    "timer": 1800
   },
   {
    "title": "Shred",
    "content": "Transfer to a cutting board and use 2 forks to shred the chicken.",
    "timer": null
   },
   {
    "title": "Reduce broth",
    "content": "After removing chicken, boil the liquid until it has reduced to one third. Spoon about 1 cup over the shredded chicken. Eat within 2-3 days.",
    "timer": null
   }
  ],
  "notes": "Chicken & broth will keep in the fridge up to 3 days or frozen for 1 month.\n\nCan be cooked in slow cooker on LOW for 4-6 hours."
 },
 {
  "id": "pot-pie",
  "title": "Pot Pie",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "chicken",
   "baked",
   "casserole",
   "comfort-food"
  ],
  "difficulty": "Medium",
  "time": "~60 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 530,
   "protein": 16,
   "carbs": 38,
   "fat": 33
  },
  "desc": "A classic chicken pot pie with cream of chicken soup, mixed vegetables, and a double Pillsbury crust.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 3,
    "unit": null,
    "name": "chicken thighs (skin, bone-in)"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "Pillsbury pie crusts"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "frozen peas, corn, carrots"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "can",
    "name": "cream of chicken soup"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Coat chicken thighs with olive oil, salt, and pepper.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 400 degrees for 30 minutes or until done. Cool and cut into small pieces.",
    "timer": 1800
   },
   {
    "title": "",
    "content": "Cook peas, corn, and carrots in the microwave.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a bowl, mix together the soup, veggies, and chicken.",
    "timer": null
   },
   {
    "title": "",
    "content": "Line the bottom of a pie pan with pie crust and pour in the mixture.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cover with the top crust. Pinch top and bottom crusts together (optional: brush on egg wash). Cut slits in the top center.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 400 for 20-30 minutes.",
    "timer": 1500
   }
  ],
  "notes": ""
 },
 {
  "id": "baked-potato",
  "title": "Potato (Baked)",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "potato",
   "vegetarian",
   "baked",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~45-60 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 300,
   "protein": 7,
   "carbs": 60,
   "fat": 4
  },
  "desc": "Oven-baked russet potato rubbed with oil and Kosher salt for a crisp, fluffy result.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "Idaho russet potato"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "high heat olive oil"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "Kosher salt"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Wash potatoes and allow to dry completely.",
    "timer": null
   },
   {
    "title": "",
    "content": "Heat oven to 450°.",
    "timer": null
   },
   {
    "title": "",
    "content": "Poke 6-8 holes in each potato.",
    "timer": null
   },
   {
    "title": "",
    "content": "Drench in oil and rub all over.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place on a plate and sprinkle Kosher salt very liberally all over.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place on a baking sheet and cook until internal temp reaches 205° (45-60 min).",
    "timer": 2700
   },
   {
    "title": "",
    "content": "Remove excess salt.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cut immediately in an 'X', then open and fluff.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "potato-salad",
  "title": "Potato Salad",
  "source": "",
  "courses": [
   "Salad",
   "Side"
  ],
  "tags": [
   "salad",
   "potato",
   "eggs",
   "vegetarian",
   "make-ahead",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~25 min + 3 hr chill",
  "servingsLabel": "Servings",
  "baseServings": 10,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 350,
   "protein": 4,
   "carbs": 30,
   "fat": 22
  },
  "desc": "Creamy potato salad with boiled eggs, onion, and a tangy Miracle Whip dressing.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 8,
    "unit": null,
    "name": "yellow gold potatoes (or 3 lbs, skin on)"
   },
   {
    "id": "0002",
    "amount": 4,
    "unit": null,
    "name": "boiled eggs"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": null,
    "name": "small-medium yellow onion"
   },
   {
    "id": "0004",
    "amount": 1.5,
    "unit": "tbsp",
    "name": "vegetable oil"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "cup",
    "name": "Miracle Whip, full fat (or 15 oz)"
   },
   {
    "id": "0006",
    "amount": 0.667,
    "unit": "tbsp",
    "name": "yellow mustard"
   },
   {
    "id": "0007",
    "amount": 0.667,
    "unit": "tbsp",
    "name": "Lawry's seasoned salt"
   },
   {
    "id": "0008",
    "amount": 2,
    "unit": "tbsp",
    "name": "sugar"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Place potatoes in cold salted water. Boil on high, then simmer until tender, about 10-12 minutes. Place in cold water immediately and peel.",
    "timer": 720
   },
   {
    "title": "",
    "content": "Boil the eggs: fill water 1 inch above eggs, place eggs in, turn off heat, cover, and let sit for 10 minutes. Place in cold water, crack all around on the side of the pan, let sit, and peel.",
    "timer": 600
   },
   {
    "title": "",
    "content": "Cube the potatoes and slice eggs thin (or chop), then add the onion.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a separate dish, mix the oil, Miracle Whip, mustard, seasoned salt, and sugar until well blended.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour the dressing over the potatoes, eggs, and onion and toss. Chill at least 3 hours.",
    "timer": 10800
   }
  ],
  "notes": ""
 },
 {
  "id": "garlic-red-potatoes",
  "title": "Potatoes - Garlic Red",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "potato",
   "vegetarian",
   "baked",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 10,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 435,
   "protein": 5,
   "carbs": 38,
   "fat": 27
  },
  "desc": "Cubed red potatoes baked in garlic butter until tender.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 5,
    "unit": "lb",
    "name": "red potatoes"
   },
   {
    "id": "0002",
    "amount": 3,
    "unit": "stick",
    "name": "butter"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "garlic powder (1 tbsp+)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Melt butter, add garlic.",
    "timer": null
   },
   {
    "title": "",
    "content": "Wash potatoes, cut into cubes.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place cubes in a 9x13\" pan. Pour melted butter and garlic over potatoes. Stir so all are covered.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 350ºF until tender.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "cheesy-potatoes-jan-kuba",
  "title": "Potatoes (Cheesy, Jan Kuba)",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "vegetarian",
   "potato",
   "baked",
   "casserole",
   "comfort-food",
   "potluck"
  ],
  "difficulty": "Medium",
  "time": "~45 min - 1 hr",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 465,
   "protein": 7,
   "carbs": 35,
   "fat": 30
  },
  "desc": "A creamy baked hashbrown casserole with two cream soups, sharp cheddar, and a crunchy cornflake topping.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "lb",
    "name": "thawed frozen hashbrowns"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "tsp",
    "name": "pepper"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "can",
    "name": "cream of mushroom soup"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "can",
    "name": "cream of celery soup"
   },
   {
    "id": "0006",
    "amount": 2,
    "unit": "cup",
    "name": "sharp cheddar cheese, shredded"
   },
   {
    "id": "0007",
    "amount": 0.5,
    "unit": "cup",
    "name": "melted butter"
   },
   {
    "id": "0008",
    "amount": 0.5,
    "unit": "cup",
    "name": "white onion (chopped)"
   },
   {
    "id": "0009",
    "amount": 2,
    "unit": "cup",
    "name": "crushed cornflakes (topping)"
   },
   {
    "id": "0010",
    "amount": 0.25,
    "unit": "cup",
    "name": "melted butter (topping)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "In a large mixing bowl, combine the hashbrowns, salt, pepper, cream of mushroom soup, cream of celery soup, cheddar cheese, melted butter, and white onion.",
    "timer": null
   },
   {
    "title": "Topping",
    "content": "Mix together the crushed cornflakes and melted butter and sprinkle over the top.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 350º for 45 minutes to 1 hour.",
    "timer": 2700
   }
  ],
  "notes": ""
 },
 {
  "id": "mashed-potatoes",
  "title": "Potatoes (Mashed)",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "potato",
   "vegetarian",
   "freezer-friendly",
   "comfort-food",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 10,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 310,
   "protein": 6,
   "carbs": 40,
   "fat": 12
  },
  "desc": "Creamy Yukon gold mashed potatoes with butter and cream cheese.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 5,
    "unit": "lb",
    "name": "Yukon gold potatoes, peeled & diced"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "2% or whole milk"
   },
   {
    "id": "0003",
    "amount": 6,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0004",
    "amount": 4,
    "unit": "oz",
    "name": "cream cheese"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Place potatoes in a pot, cover with water an inch or 2 above the potatoes, add a bit of Land O'Lakes butter or margarine (reduces the overspill) and salt.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bring to a boil, then reduce to a simmer.",
    "timer": null
   },
   {
    "title": "",
    "content": "Simmer until cooked through (tender when pierced with a knife), about 12 minutes.",
    "timer": 720
   },
   {
    "title": "",
    "content": "When done, drain in a colander.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add butter and cream cheese to a large bowl, then add the potatoes and milk.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mash together until smooth (use a mixer); can leave chunks.",
    "timer": null
   },
   {
    "title": "",
    "content": "Season with salt and pepper to taste.",
    "timer": null
   },
   {
    "title": "",
    "content": "Freeze extra in freezer-safe baggies, remove all air, and label.",
    "timer": null
   }
  ],
  "notes": "Freeze extra in freezer-safe baggies with all air removed, labeled."
 },
 {
  "id": "nanas-seasoned-pretzels",
  "title": "Pretzels (Nana's Seasoned)",
  "source": "",
  "courses": [
   "Snack"
  ],
  "tags": [
   "snack",
   "vegetarian",
   "no-bake",
   "party"
  ],
  "difficulty": "Easy",
  "time": "~2 hr",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 270,
   "protein": 3,
   "carbs": 30,
   "fat": 14
  },
  "desc": "Tiny twist pretzels tossed with ranch mix and buttery oil until the seasoning is fully absorbed.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "pkg",
    "name": "tiny unsalted twist pretzels"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "pkg",
    "name": "Ranch dressing mix"
   },
   {
    "id": "0003",
    "amount": 0.75,
    "unit": "cup",
    "name": "Orville Redenbacher buttery oil topping"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "In a large bowl, cover pretzels with dressing mix.",
    "timer": null
   },
   {
    "title": "",
    "content": "Dribble oil over all and mix with a large spoon.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix every 15 minutes for at least 2 hours to absorb the oil.",
    "timer": 7200
   }
  ],
  "notes": ""
 },
 {
  "id": "puffed-wheat-caramels",
  "title": "Puffed Wheat Caramels",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "candy",
   "vegetarian",
   "no-bake"
  ],
  "difficulty": "Medium",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 24,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 185,
   "protein": 1,
   "carbs": 32,
   "fat": 7
  },
  "desc": "Chewy homemade caramels cooked to soft-ball stage and studded with puffed wheat.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2,
    "unit": "cup",
    "name": "brown sugar"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "light corn syrup"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "cup",
    "name": "cream"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "cup",
    "name": "milk"
   },
   {
    "id": "0006",
    "amount": 0.333,
    "unit": "cup",
    "name": "butter"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla"
   },
   {
    "id": "0008",
    "amount": 0.333,
    "unit": "pkg",
    "name": "puffed wheat"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix all ingredients except puffed wheat and vanilla in a sauce pan.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cook slowly until it reaches soft ball stage (230-235ºF).",
    "timer": null
   },
   {
    "title": "",
    "content": "Remove from heat, add vanilla and puffed wheat. Turn into greased pan immediately. Cut when cool.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "punch",
  "title": "Punch",
  "source": "",
  "courses": [
   "Drink"
  ],
  "tags": [
   "party",
   "vegetarian",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 140,
   "protein": 1,
   "carbs": 35,
   "fat": 0
  },
  "desc": "A fruity party punch with raspberry Kool-Aid, lemonade, soda, and frozen strawberries.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "qt",
    "name": "water"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "pkg",
    "name": "raspberry Kool-Aid"
   },
   {
    "id": "0003",
    "amount": 6,
    "unit": "oz",
    "name": "frozen lemonade"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0005",
    "amount": 16,
    "unit": "oz",
    "name": "7-Up"
   },
   {
    "id": "0006",
    "amount": 16,
    "unit": "oz",
    "name": "Squirt"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "pt",
    "name": "frozen strawberries"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix water, Kool-Aid, lemonade, and sugar.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add 7-Up, Squirt, and strawberries at serving time.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "red-peppers-roasted",
  "title": "Red Peppers (Roasted)",
  "source": "",
  "courses": [
   "Basics"
  ],
  "tags": [
   "vegetarian",
   "roasted",
   "freezer-friendly",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 40,
   "protein": 1,
   "carbs": 7,
   "fat": 0
  },
  "desc": "Broiler-roasted red peppers charred, peeled, and ready to use or freeze.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "red peppers"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Line rimmed baking sheet with foil.",
    "timer": null
   },
   {
    "title": "",
    "content": "Heat oven to broil or 500˚ (place rack 4\" from top).",
    "timer": null
   },
   {
    "title": "",
    "content": "Place baking sheet in oven.",
    "timer": null
   },
   {
    "title": "",
    "content": "Wash/dry and cut peppers in half, remove seeds/ribs.",
    "timer": null
   },
   {
    "title": "",
    "content": "When oven is done preheating, remove baking sheet.",
    "timer": null
   },
   {
    "title": "",
    "content": "Place peppers skin side up, lay flat, and place in oven.",
    "timer": null
   },
   {
    "title": "",
    "content": "Roast (5-10 min) until black/charred.",
    "timer": 600
   },
   {
    "title": "",
    "content": "Flip and roast another 5 min.",
    "timer": 300
   },
   {
    "title": "",
    "content": "Remove, place in a bowl, cover with plastic wrap.",
    "timer": null
   },
   {
    "title": "",
    "content": "Let cool, remove skin.",
    "timer": null
   },
   {
    "title": "",
    "content": "To freeze: place 2 pieces in freezer zip lock bags.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "red-velvet-cookies-cream-cheese-frosting",
  "title": "Red Velvet Cookies (with Cream Cheese Frosting)",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "vegetarian",
   "cookie",
   "baked",
   "frosting"
  ],
  "difficulty": "Medium",
  "time": "~10 min",
  "servingsLabel": "Cookies",
  "baseServings": 24,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 180,
   "protein": 2,
   "carbs": 25,
   "fat": 7
  },
  "desc": "Cake-mix red velvet cookies topped with whipped cream cheese frosting.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "box",
    "name": "red velvet cake mix (Duncan Hines)"
   },
   {
    "id": "0002",
    "amount": 0.333,
    "unit": "cup",
    "name": "oil"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": null,
    "name": "eggs"
   },
   {
    "id": "0004",
    "amount": 4,
    "unit": "tbsp",
    "name": "butter, softened (frosting)"
   },
   {
    "id": "0005",
    "amount": 4,
    "unit": "oz",
    "name": "cream cheese (frosting)"
   },
   {
    "id": "0006",
    "amount": 2,
    "unit": "cup",
    "name": "powdered sugar (frosting)"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla (frosting)"
   }
  ],
  "steps": [
   {
    "title": "Cookies",
    "content": "Preheat oven to 350. Line cookie sheet with parchment. With electric mixer beat eggs, oil, and cake mix.",
    "timer": null
   },
   {
    "title": "Cookies",
    "content": "Roll into balls. Place on cookie sheet, flatten with palm of hand.",
    "timer": null
   },
   {
    "title": "Cookies",
    "content": "Bake for 10 min.",
    "timer": 600
   },
   {
    "title": "Cream Cheese Frosting",
    "content": "Whip everything but powdered sugar first (butter, cream cheese, vanilla). Add powdered sugar.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "rice-basic",
  "title": "Rice (Basic Rinsed White, Stovetop)",
  "source": "",
  "courses": [
   "Basics",
   "Side"
  ],
  "tags": [
   "vegetarian",
   "rice",
   "stovetop",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~35 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 170,
   "protein": 3,
   "carbs": 37,
   "fat": 1
  },
  "desc": "Basic stovetop white rice, rinsed and simmered until tender.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "cup",
    "name": "uncooked white rice, well rinsed"
   },
   {
    "id": "0002",
    "amount": 1.25,
    "unit": "cup",
    "name": "water (1 1/4 - 1 1/2 cups)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Combine the rinsed rice and water in a pot and bring to a boil. Cover, reduce the heat, and simmer for 15-25 minutes.",
    "timer": 1500
   },
   {
    "title": "",
    "content": "Remove from the heat and let it sit, covered, for 10 more minutes. Fluff with a fork.",
    "timer": 600
   }
  ],
  "notes": ""
 },
 {
  "id": "rice-buttered-onion",
  "title": "Rice (Buttered Onion, Minute Rice)",
  "source": "",
  "courses": [
   "Basics",
   "Side"
  ],
  "tags": [
   "rice",
   "vegetarian",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "~35 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 185,
   "protein": 3,
   "carbs": 24,
   "fat": 8
  },
  "desc": "Minute rice cooked in buttery sauteed onion and chicken broth.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.333,
    "unit": "cup",
    "name": "onion"
   },
   {
    "id": "0002",
    "amount": 3,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "cup",
    "name": "Minute Rice (white)"
   },
   {
    "id": "0004",
    "amount": 12,
    "unit": "oz",
    "name": "chicken broth or water (12-14 oz)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Finely dice onion.",
    "timer": null
   },
   {
    "title": "",
    "content": "Melt butter and onion on medium heat in a saucepan.",
    "timer": null
   },
   {
    "title": "",
    "content": "After onions are soft and translucent, remove from heat and add the rice. Pour into a bowl.",
    "timer": null
   },
   {
    "title": "",
    "content": "In the same saucepan heat the broth until boiling, add the rice mixture to the broth and boil for 5 minutes or so. Reduce heat to a simmer and cover for about 25 minutes or until broth is absorbed.",
    "timer": 1500
   }
  ],
  "notes": ""
 },
 {
  "id": "rice-foolproof",
  "title": "Rice (Foolproof Stove-Top, 13 min)",
  "source": "",
  "courses": [
   "Basics",
   "Side"
  ],
  "tags": [
   "rice",
   "vegetarian",
   "stovetop",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~25 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 170,
   "protein": 3,
   "carbs": 37,
   "fat": 0
  },
  "desc": "Foolproof stove-top long grain white rice cooked, rested, and fluffed.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.25,
    "unit": "cup",
    "name": "water (1 1/4 to 1/2 cup)"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "cup",
    "name": "long grain white rice (do NOT rinse)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Place water and rice in a saucepan, stir, and bring to a simmer (small bubbles boiling gently).",
    "timer": null
   },
   {
    "title": "",
    "content": "Turn heat down and cover with lid.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cook for 13 minutes. Do not stir or remove lid. Water should now be absorbed; tilt to check.",
    "timer": 780
   },
   {
    "title": "",
    "content": "Rest: remove from stove with lid on for 10 minutes.",
    "timer": 600
   },
   {
    "title": "",
    "content": "Fluff: remove lid, fluff and serve.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "rice-krispie-treats",
  "title": "Rice Krispie Treats",
  "source": "",
  "courses": [
   "Dessert",
   "Snack"
  ],
  "tags": [
   "no-bake",
   "vegetarian",
   "kid-friendly"
  ],
  "difficulty": "Easy",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 135,
   "protein": 1,
   "carbs": 26,
   "fat": 3
  },
  "desc": "Classic no-bake marshmallow and butter cereal treats cut into squares.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 3,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "pkg",
    "name": "miniature marshmallows (approx. 4 cups)"
   },
   {
    "id": "0003",
    "amount": 6,
    "unit": "cup",
    "name": "Kellogg's Rice Krispie cereal"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Melt butter in a saucepan over low heat.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add marshmallows and stir until completely melted.",
    "timer": null
   },
   {
    "title": "",
    "content": "Remove from heat.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add cereal and stir until well coated.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour into a buttered pan and cut into squares.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "roasted-brussels-sprouts-sweet-chili",
  "title": "Roasted Brussels Sprouts with Sweet Chili Sauce",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "vegetarian",
   "roasted",
   "asian",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 140,
   "protein": 3,
   "carbs": 18,
   "fat": 7
  },
  "desc": "Brussels sprouts roasted until nearly charred, then tossed with sweet chili sauce.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "Brussels sprouts (cut ends, halve or quarter)"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "oil"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "garlic powder"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "onion powder"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "paprika"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "salt/pepper"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "Lawry's season salt"
   },
   {
    "id": "0008",
    "amount": null,
    "unit": null,
    "name": "sweet chili sauce (to your liking)"
   }
  ],
  "steps": [
   {
    "title": "Prep",
    "content": "Cut ends off Brussels sprouts and halve or quarter them. Coat in oil and seasonings (garlic powder, onion powder, paprika, salt/pepper, Lawry's season salt).",
    "timer": null
   },
   {
    "title": "Roast",
    "content": "Spread in an even layer on a baking sheet. Roast in oven at 400 degrees until they look almost burnt (20-30 min), tossing halfway through.",
    "timer": 1800
   },
   {
    "title": "Finish",
    "content": "Remove from oven, place in a bowl and add sweet chili sauce to your liking.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "rotini-pasta-salad",
  "title": "Rotini Pasta Salad",
  "source": "",
  "courses": [
   "Salad",
   "Side"
  ],
  "tags": [
   "vegetarian",
   "pasta",
   "salad",
   "italian",
   "make-ahead",
   "potluck"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 270,
   "protein": 4,
   "carbs": 32,
   "fat": 13
  },
  "desc": "Boiled rotini tossed with fresh veggies and a sweet-tangy Italian oil and vinegar dressing.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 8,
    "unit": "oz",
    "name": "rotini noodles, boiled (1 box)"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "cut-up veggies: carrots, tomatoes, cauliflower"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "cheese, cubed (optional)"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "cup",
    "name": "vegetable oil (dressing)"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "cup",
    "name": "apple cider vinegar (dressing)"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "cup",
    "name": "sugar (dressing)"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "pkg",
    "name": "Good Seasons Italian dressing, dry (dressing)"
   }
  ],
  "steps": [
   {
    "title": "Dressing",
    "content": "Whisk together vegetable oil, apple cider vinegar, sugar and dry Good Seasons Italian dressing.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour dressing over noodles and veggies and mix.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "salad-falcon",
  "title": "Salad (Falcon)",
  "source": "",
  "courses": [
   "Salad"
  ],
  "tags": [
   "vegetarian",
   "beans",
   "salad",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 180,
   "protein": 6,
   "carbs": 30,
   "fat": 5
  },
  "desc": "Butter lettuce salad with sweet corn, kidney beans, tomatoes, and craisins tossed in creamy balsamic.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "butter lettuce"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "sweet corn"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "craisins (low sugar)"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "kidney beans (strain, rinse)"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "tomatoes"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "balsamic dressing (Brianna's Homestyle Creamy Balsamic New American)"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "oranges (optional)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Strain and rinse the kidney beans.",
    "timer": null
   },
   {
    "title": "",
    "content": "Combine butter lettuce, sweet corn, craisins, kidney beans, and tomatoes in a bowl. Add oranges if desired.",
    "timer": null
   },
   {
    "title": "",
    "content": "Toss with creamy balsamic dressing.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "salmon-pan-seared",
  "title": "Salmon (Pan Seared)",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "salmon",
   "seafood",
   "fish",
   "stovetop",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Medium",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 335,
   "protein": 34,
   "carbs": 0,
   "fat": 22
  },
  "desc": "Crisp-skinned pan-seared salmon fillets, optionally finished with butter or soy garlic sauce.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "salmon, thick center cut"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "canola spray"
   },
   {
    "id": "0003",
    "amount": null,
    "unit": null,
    "name": "salt"
   }
  ],
  "steps": [
   {
    "title": "Bring to temp",
    "content": "Remove the salmon from the fridge and let stand at room temperature for 10 minutes. With a paper towel, pat the fillets very dry on both sides.",
    "timer": 600
   },
   {
    "title": "Heat the pan",
    "content": "Heat a skillet over medium heat, about 3-5 minutes. It's important the pan is hot before you add the salmon, or it won't crisp properly.",
    "timer": null
   },
   {
    "title": "Season",
    "content": "Just before adding salmon to the pan, spray the pan with canola oil spray and season the flesh side of the salmon with 1/2 teaspoon salt.",
    "timer": null
   },
   {
    "title": "Sear first side",
    "content": "Place the fillets in the skillet, skin-side up. Press down firmly with a spatula to ensure good browning. Let the salmon cook on the first side on medium to medium-low, undisturbed, until the flesh appears cooked about 3/4 of the way up the fillet, about 3 to 5 minutes (depends on thickness).",
    "timer": null
   },
   {
    "title": "Finish",
    "content": "Reduce the pan heat. Cook the salmon on the other side until it is done to your liking, about 30 seconds. Remove from pan and use a spatula to remove the skin. Add 1 tbsp butter (optional) or soy garlic sauce (see recipe).",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "salsa-restaurant-style",
  "title": "Salsa (Restaurant Style)",
  "source": "",
  "courses": [
   "Sauce",
   "Dip"
  ],
  "tags": [
   "salsa",
   "sauce",
   "mexican",
   "vegetarian",
   "no-bake",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 16,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 20,
   "protein": 1,
   "carbs": 4,
   "fat": 0
  },
  "desc": "A smooth restaurant-style salsa of fire-roasted tomatoes, onion, chili, cilantro and cumin.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.75,
    "unit": "cup",
    "name": "red onion (finely diced)"
   },
   {
    "id": "0002",
    "amount": 28,
    "unit": "oz",
    "name": "fire-roasted diced tomatoes"
   },
   {
    "id": "0003",
    "amount": 10,
    "unit": "oz",
    "name": "diced fire-roasted tomatoes with chilies (can)"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "cup",
    "name": "fresh cilantro"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": null,
    "name": "lemon, juiced"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": null,
    "name": "red chili pepper or Serrano"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "tbsp",
    "name": "cumin"
   },
   {
    "id": "0008",
    "amount": 1,
    "unit": "tsp",
    "name": "salt (or to taste)"
   },
   {
    "id": "0009",
    "amount": 1,
    "unit": "clove",
    "name": "garlic (or 1 tsp powder)"
   },
   {
    "id": "0010",
    "amount": null,
    "unit": "pinch",
    "name": "sugar"
   }
  ],
  "steps": [
   {
    "title": "Chop aromatics",
    "content": "Add the onion, garlic, and pepper to a food processor and pulse a few times to chop until the onion pieces are about 1/4-inch size. Or chop all by hand.",
    "timer": null
   },
   {
    "title": "Prep tomatoes",
    "content": "Drain off excess liquid from the cans of diced tomatoes. Pour into a mixing bowl and use your hands to crush up the tomatoes.",
    "timer": null
   },
   {
    "title": "Combine",
    "content": "Add the remaining salsa ingredients. Chop cilantro and stir in. Pulse or mix until the salsa reaches your desired consistency.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "scotcharoos",
  "title": "Scotcharoos",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "no-bake",
   "candy",
   "kid-friendly",
   "vegetarian"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 24,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 290,
   "protein": 5,
   "carbs": 40,
   "fat": 14
  },
  "desc": "No-bake peanut butter Rice Krispie bars topped with melted chocolate and butterscotch chips.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "cup",
    "name": "white Karo syrup"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0003",
    "amount": 1.5,
    "unit": "cup",
    "name": "peanut butter"
   },
   {
    "id": "0004",
    "amount": 5.5,
    "unit": "cup",
    "name": "Rice Krispie cereal"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "bag",
    "name": "chocolate chips"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "bag",
    "name": "butterscotch chips"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "In a sauce pan over medium heat, melt the syrup, sugar, and peanut butter until creamy.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a large mixing bowl, pour the melted mixture over the Rice Krispies. Mix.",
    "timer": null
   },
   {
    "title": "",
    "content": "Line a 9 x 13 pan with aluminum foil and spray. Pour the mixture in the pan and even it out. Place in the refrigerator.",
    "timer": null
   },
   {
    "title": "",
    "content": "In the microwave, melt the chips and pour over the krispies. Refrigerate.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "sea-scallops",
  "title": "Sea Scallops",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "scallops",
   "seafood",
   "stovetop",
   "gluten-free"
  ],
  "difficulty": "Medium",
  "time": "~10 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 185,
   "protein": 27,
   "carbs": 1,
   "fat": 5
  },
  "desc": "Pan-seared sea scallops with a golden crust and translucent center.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 16,
    "unit": null,
    "name": "sea scallops (about 1 – 1 ¼ lbs)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "tsp",
    "name": "butter"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "tsp",
    "name": "canola oil"
   },
   {
    "id": "0004",
    "amount": null,
    "unit": null,
    "name": "kosher salt"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "pepper"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Remove the small muscle from the scallop, rinse with cold water and thoroughly pat dry.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add the oil to a saute pan on medium-high heat.",
    "timer": null
   },
   {
    "title": "",
    "content": "Once the fat begins to smoke, gently add the scallops, making sure they don't touch each other. After you flip, add the butter, salt and pepper.",
    "timer": null
   },
   {
    "title": "",
    "content": "Sear the scallops for 2 ½ minutes on each side. Scallops should have a ¼\" golden crust on each side while still translucent in the center.",
    "timer": 150
   }
  ],
  "notes": ""
 },
 {
  "id": "seafood-thaw-from-freezer",
  "title": "Seafood Thaw from Freezer",
  "source": "",
  "courses": [
   "Basics"
  ],
  "tags": [
   "seafood",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 1,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 90,
   "protein": 18,
   "carbs": 0,
   "fat": 1
  },
  "desc": "Quick method for thawing frozen seafood under cool running water.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "frozen seafood"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Run under cool water. Pat dry immediately.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "shrimp-dip",
  "title": "Shrimp Dip",
  "source": "",
  "courses": [
   "Dip",
   "Appetizer"
  ],
  "tags": [
   "shrimp",
   "seafood",
   "no-bake",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 240,
   "protein": 15,
   "carbs": 8,
   "fat": 16
  },
  "desc": "A creamy cream cheese and shrimp dip served with potato chips or crackers.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "tub",
    "name": "cream cheese (large)"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": null,
    "name": "Hoffman House shrimp sauce"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "lb",
    "name": "shrimp"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "With a mixer, combine cream cheese and shrimp sauce.",
    "timer": null
   },
   {
    "title": "",
    "content": "Drain canned shrimp and mix into the sauce with a spoon.",
    "timer": null
   },
   {
    "title": "",
    "content": "Serve with thick potato chips or Ritz crackers.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "snickerdoodles",
  "title": "Snickerdoodles",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "cookie",
   "dessert",
   "baked",
   "vegetarian"
  ],
  "difficulty": "Medium",
  "time": "~8-10 min bake",
  "servingsLabel": "Cookies",
  "baseServings": 24,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 130,
   "protein": 2,
   "carbs": 19,
   "fat": 6
  },
  "desc": "Soft cinnamon-sugar cookies leavened with cream of tartar and baking soda.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "cup",
    "name": "butter (or 1/2 c butter + 1/4 c LOL butter spread with canola or olive oil + 1/4 c shortening)"
   },
   {
    "id": "0002",
    "amount": 1.5,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": null,
    "name": "eggs"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0006",
    "amount": 2.75,
    "unit": "cup",
    "name": "flour"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "tsp",
    "name": "baking soda"
   },
   {
    "id": "0008",
    "amount": 2,
    "unit": "tsp",
    "name": "cream of tartar"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix the first 3 ingredients (butter, sugar, eggs), then sift and stir in the rest.",
    "timer": null
   },
   {
    "title": "",
    "content": "Roll into balls and roll in a cinnamon-sugar mixture. Place on a cookie sheet. Place a divot in the middle if you want flatter cookies.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 350 degrees for 8-10 minutes. Makes 2 dozen.",
    "timer": 600
   }
  ],
  "notes": ""
 },
 {
  "id": "soy-garlic-sauce",
  "title": "Soy Garlic Sauce",
  "source": "",
  "courses": [
   "Sauce"
  ],
  "tags": [
   "sauce",
   "asian",
   "vegetarian",
   "stovetop"
  ],
  "difficulty": "Medium",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 70,
   "protein": 1,
   "carbs": 10,
   "fat": 3
  },
  "desc": "A sticky soy-garlic glaze finished with butter and Dijon, great over salmon or chicken.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.25,
    "unit": "cup",
    "name": "low-sodium soy sauce"
   },
   {
    "id": "0002",
    "amount": 0.25,
    "unit": "cup",
    "name": "soy sauce"
   },
   {
    "id": "0003",
    "amount": 0.333,
    "unit": "cup",
    "name": "brown sugar"
   },
   {
    "id": "0004",
    "amount": 1.5,
    "unit": "tbsp",
    "name": "lemon juice"
   },
   {
    "id": "0005",
    "amount": 6,
    "unit": "clove",
    "name": "garlic, medium (minced by hand)"
   },
   {
    "id": "0006",
    "amount": 2,
    "unit": "tbsp",
    "name": "unsalted butter"
   },
   {
    "id": "0007",
    "amount": 1.5,
    "unit": "tbsp",
    "name": "Dijon mustard"
   }
  ],
  "steps": [
   {
    "title": "Make the glaze",
    "content": "In a small saucepan over medium heat add soy sauce, brown sugar, lemon juice, and garlic. Allow to cook on medium-low until the sugar has melted, the liquid has reduced by half, and it has made a sticky glaze.",
    "timer": null
   },
   {
    "title": "Add butter",
    "content": "Add half the butter and swirl until it has melted, then remove from heat. Add in the rest of the butter and swirl until it has melted.",
    "timer": null
   },
   {
    "title": "Finish",
    "content": "Add Dijon mustard and stir to combine.",
    "timer": null
   }
  ],
  "notes": "Makes about 1 cup. Store in the refrigerator."
 },
 {
  "id": "spaghetti-bowl",
  "title": "Spaghetti Bowl",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "vegetarian",
   "pasta",
   "baked",
   "casserole",
   "italian"
  ],
  "difficulty": "Medium",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 715,
   "protein": 46,
   "carbs": 62,
   "fat": 26
  },
  "desc": "A layered baked spaghetti casserole with chunky tomato sauce, a creamy cheese blend, and lots of mozzarella.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": null,
    "name": "Ragu Chunky Tomato/Onion/Garlic sauce, large (+garlic, 1 tsp sugar, grape wine, sautéed diced vidalia onion)"
   },
   {
    "id": "0002",
    "amount": 0.75,
    "unit": "lb",
    "name": "spaghetti"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "cup",
    "name": "sour cream/cottage cheese"
   },
   {
    "id": "0004",
    "amount": 4,
    "unit": "oz",
    "name": "cream cheese"
   },
   {
    "id": "0005",
    "amount": 3,
    "unit": "cup",
    "name": "mozzarella, shredded"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "cup",
    "name": "extra sharp cheddar, shredded"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "Parmesan (for top layer)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Cook spaghetti in boiling water with 1 tbsp oil. Rinse and lightly mix with olive oil to cover all the spaghetti.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a large oven-safe bowl, layer the following: sauce, spaghetti, the mixture of cream cheese, sour cream & cottage cheese, mozzarella cheese, and Parmesan cheese. Continue layering.",
    "timer": null
   },
   {
    "title": "",
    "content": "Warm in oven at 275º until cheese is melted in the center.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "spaghetti-with-anchovies",
  "title": "Spaghetti w/ Anchovies",
  "source": "Jacque Pepin",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "fish",
   "pasta",
   "italian",
   "stovetop"
  ],
  "difficulty": "Easy",
  "time": "~20 min",
  "servingsLabel": "Servings",
  "baseServings": 2,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 415,
   "protein": 16,
   "carbs": 44,
   "fat": 19
  },
  "desc": "Spaghetti tossed with a no-cook sauce of anchovies, garlic, chili, and parmesan.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.25,
    "unit": "lb",
    "name": "spaghetti (¼-½ lb)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "oz",
    "name": "anchovies"
   },
   {
    "id": "0003",
    "amount": 3,
    "unit": "clove",
    "name": "garlic, minced"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": null,
    "name": "serrano or jalapeño"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "tbsp",
    "name": "parmesan, grated"
   },
   {
    "id": "0006",
    "amount": 2,
    "unit": "tbsp",
    "name": "olive oil"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Cook spaghetti. Drain, reserving ½ cup pasta water.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a bowl, combine the oil of the anchovies, finely diced anchovies, minced garlic, grated parmesan, and olive oil. Microwave for 1-1.5 minutes before serving.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add spaghetti to the sauce, stir, adding some extra pasta water if needed, and garnish with parmesan.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "spicy-shell-pasta",
  "title": "Spicy Shell Pasta",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "vegetarian",
   "pasta",
   "italian",
   "stovetop",
   "comfort-food"
  ],
  "difficulty": "Medium",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 680,
   "protein": 15,
   "carbs": 43,
   "fat": 47
  },
  "desc": "Medium shell pasta in a creamy, spicy tomato sauce with parmesan and mozzarella.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 4,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": null,
    "name": "onion (chopped)"
   },
   {
    "id": "0003",
    "amount": 3,
    "unit": "clove",
    "name": "garlic (minced)"
   },
   {
    "id": "0004",
    "amount": 3,
    "unit": "tbsp",
    "name": "tomato paste"
   },
   {
    "id": "0005",
    "amount": 1.25,
    "unit": "cup",
    "name": "heavy cream"
   },
   {
    "id": "0006",
    "amount": 0.333,
    "unit": "cup",
    "name": "pasta water"
   },
   {
    "id": "0007",
    "amount": 0.5,
    "unit": "cup",
    "name": "parmesan (shredded)"
   },
   {
    "id": "0008",
    "amount": 0.5,
    "unit": "cup",
    "name": "mozzarella (shredded)"
   },
   {
    "id": "0009",
    "amount": null,
    "unit": null,
    "name": "shell pasta (medium)"
   },
   {
    "id": "0010",
    "amount": 1,
    "unit": "tsp",
    "name": "paprika"
   },
   {
    "id": "0011",
    "amount": 1,
    "unit": "tsp",
    "name": "black pepper"
   },
   {
    "id": "0012",
    "amount": 1,
    "unit": "tsp",
    "name": "red chili flakes"
   },
   {
    "id": "0013",
    "amount": 1,
    "unit": "tsp",
    "name": "chili powder"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Melt butter. Add onions and garlic and sauté until they shrink.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add tomato paste, then add heavy cream and seasonings. Mix until sauce forms.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add pasta water and cheese. Mix. Then mix in the pasta with more cheese.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "spinach-strawberry-salad",
  "title": "Spinach & Strawberry Salad",
  "source": "",
  "courses": [
   "Salad"
  ],
  "tags": [
   "vegetarian",
   "salad",
   "dressing",
   "no-bake",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~1 hr chill",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 215,
   "protein": 3,
   "carbs": 19,
   "fat": 15
  },
  "desc": "Baby spinach and strawberries tossed with a sweet sesame-poppy style dressing.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.5,
    "unit": "cup",
    "name": "sugar (dressing)"
   },
   {
    "id": "0002",
    "amount": 0.5,
    "unit": "cup",
    "name": "oil (dressing)"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "cup",
    "name": "apple cider vinegar (dressing)"
   },
   {
    "id": "0004",
    "amount": 0.25,
    "unit": "tsp",
    "name": "Worcestershire sauce (dressing)"
   },
   {
    "id": "0005",
    "amount": 2,
    "unit": "tbsp",
    "name": "sesame seeds (dressing)"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "tbsp",
    "name": "minced onion (dressing)"
   },
   {
    "id": "0007",
    "amount": 0.25,
    "unit": "tsp",
    "name": "paprika (dressing)"
   },
   {
    "id": "0008",
    "amount": 1,
    "unit": "qt",
    "name": "strawberries (salad)"
   },
   {
    "id": "0009",
    "amount": 12,
    "unit": "oz",
    "name": "baby spinach (salad)"
   }
  ],
  "steps": [
   {
    "title": "Make dressing",
    "content": "Combine the sugar, oil, apple cider vinegar, Worcestershire sauce, sesame seeds, minced onion, and paprika. Chill dressing for 1 hour.",
    "timer": 3600
   },
   {
    "title": "Toss",
    "content": "Toss the dressing with the spinach and strawberries just before serving.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "steak-cold-pan-no-smoke",
  "title": "Steak (Cold Pan) – No Smoke",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "beef",
   "stovetop",
   "gluten-free"
  ],
  "difficulty": "Medium",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 1,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 1000,
   "protein": 75,
   "carbs": 2,
   "fat": 80
  },
  "desc": "A pan-seared steak started in a cold skillet and basted with butter and garlic to minimize smoke.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": null,
    "name": "steak, 1 ½\" thick"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "pepper and salt (salt overnight or after cooking)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tbsp",
    "name": "butter (1-2 tbsp, optional)"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "clove",
    "name": "garlic (1-2 cloves, optional)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Take steak out of the refrigerator 20 minutes prior.",
    "timer": 1200
   },
   {
    "title": "",
    "content": "Pat steak dry with paper towels.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pepper the steak (DO NOT salt just prior to searing).",
    "timer": null
   },
   {
    "title": "",
    "content": "Place steak in skillet, then turn heat to high.",
    "timer": null
   },
   {
    "title": "",
    "content": "Sear for 2 minutes, flip, and sear for another 2 minutes.",
    "timer": 120
   },
   {
    "title": "",
    "content": "Reduce heat to medium (lower if you see smoke or splatter). Flip and sear for another 2 minutes.",
    "timer": 120
   },
   {
    "title": "",
    "content": "Flip and sear for another 1 minute, or until 125˚ (medium-rare).",
    "timer": 60
   },
   {
    "title": "",
    "content": "Add butter and mashed garlic cloves, spoon to baste, tilting the pan.",
    "timer": null
   },
   {
    "title": "",
    "content": "Temp from the side to the middle, rest 5 minutes, then salt.",
    "timer": 300
   }
  ],
  "notes": ""
 },
 {
  "id": "fried-rice",
  "title": "Steak Fried Rice",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "beef",
   "rice",
   "asian",
   "stir-fry",
   "one-pan"
  ],
  "difficulty": "Medium",
  "time": "~25 min + marinate",
  "servingsLabel": "Servings",
  "baseServings": 3,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 510,
   "protein": 23,
   "carbs": 53,
   "fat": 17
  },
  "desc": "A fast one-pan dinner: seared marinated sirloin, day-old jasmine rice, and veggies in a savory soy-oyster sauce.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.5,
    "unit": "lb",
    "name": "sirloin steak"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "tbsp",
    "name": "soy sauce"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "tbsp",
    "name": "oyster sauce"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "tsp",
    "name": "sesame oil"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "tsp",
    "name": "white or black pepper"
   },
   {
    "id": "0006",
    "amount": 1,
    "unit": "tbsp",
    "name": "garlic, minced"
   },
   {
    "id": "0007",
    "amount": 3,
    "unit": "tbsp",
    "name": "onion, diced"
   },
   {
    "id": "0008",
    "amount": 3,
    "unit": "cup",
    "name": "cooked jasmine rice (preferably day-old)"
   },
   {
    "id": "0009",
    "amount": 1,
    "unit": "cup",
    "name": "frozen mixed vegetables (peas, corn, carrots)"
   },
   {
    "id": "0010",
    "amount": 1,
    "unit": null,
    "name": "large egg"
   },
   {
    "id": "0011",
    "amount": 2,
    "unit": "tbsp",
    "name": "butter, for stir-frying"
   },
   {
    "id": "0012",
    "amount": 2,
    "unit": null,
    "name": "scallions, sliced (for garnish)"
   }
  ],
  "steps": [
   {
    "title": "Make the sauce",
    "content": "Stir together the {0002}, {0003}, {0004}, and {0005} in a small bowl.",
    "timer": null
   },
   {
    "title": "Marinate the steak",
    "content": "Cube the {0001} into 1-inch pieces; toss with half the sauce and set the rest aside. Marinate about 30 minutes if you have time.",
    "timer": 1800
   },
   {
    "title": "Prep your station",
    "content": "Mince the {0006}, dice the {0007}, and fluff the {0008} to break up clumps. Have everything within arm's reach — stir-frying moves fast.",
    "timer": null
   },
   {
    "title": "Sear the steak",
    "content": "Melt half the {0011} in a wok or large skillet over high heat. Sear the steak in a single layer 2–4 minutes, just shy of done (it goes back in later). Remove and set aside. Butter browns fast on high heat — keep it moving and lower the heat if it darkens too quickly.",
    "timer": 240
   },
   {
    "title": "Fry aromatics and rice",
    "content": "Add the rest of the {0011}, then the {0006} and {0007}; stir 30–60 seconds until the onion is slightly golden. Add the {0008} and stir-fry 1–2 minutes.",
    "timer": 120
   },
   {
    "title": "Bring it together",
    "content": "Add the {0009}, the reserved sauce, and the steak. Stir-fry about a minute to combine and heat through.",
    "timer": 60
   },
   {
    "title": "Scramble in the egg",
    "content": "Push the rice aside, crack the {0010} into the gap, scramble it lightly, then pile the rice back over it for a few seconds before stirring it through. Cook about a minute more.",
    "timer": 60
   },
   {
    "title": "Garnish and serve",
    "content": "Pull it off the heat promptly — don't overcook. Garnish with {0012} and serve hot.",
    "timer": null
   }
  ],
  "notes": "Day-old cold rice is the secret — it's drier and fries up with the right texture instead of going mushy. No leftovers? Cook a fresh batch, spread it out to cool and dry, or just fry it a little longer in the pan.\n\nCut the steak across the grain so it stays tender, and keep the pan hot and uncrowded (cook in two batches if you double it). The butter replaces the usual neutral oil and adds hibachi-style richness. Swap in chicken, shrimp, or tofu; add sriracha for heat."
 },
 {
  "id": "stew",
  "title": "Stew",
  "source": "",
  "courses": [
   "Soup",
   "Dinner"
  ],
  "tags": [
   "beef",
   "slow-cooker",
   "soup",
   "stew",
   "comfort-food",
   "freezer-friendly"
  ],
  "difficulty": "Easy",
  "time": "~4-5 hrs",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 110,
   "protein": 3,
   "carbs": 11,
   "fat": 4
  },
  "desc": "A slow-cooker beef and cabbage stew with fire-roasted tomatoes, celery, and onion.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 3,
    "unit": "tbsp",
    "name": "Better than Bouillon Roasted Beef paste"
   },
   {
    "id": "0002",
    "amount": 8,
    "unit": "cup",
    "name": "hot water (to mix with the beef paste)"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "cup",
    "name": "chicken broth (or 14 oz can)"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "can",
    "name": "fire-roasted whole tomatoes (28 oz, drained, cut into chunks)"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "can",
    "name": "fire-roasted tomatoes (14.5 oz, drained, cut into chunks)"
   },
   {
    "id": "0006",
    "amount": 3,
    "unit": null,
    "name": "celery stalks (3-5)"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": null,
    "name": "medium onion - white, yellow or vidalia (optional: sauté prior)"
   },
   {
    "id": "0008",
    "amount": 1,
    "unit": "head",
    "name": "green cabbage (chopped in large pieces)"
   },
   {
    "id": "0009",
    "amount": 3,
    "unit": "tbsp",
    "name": "butter (3-4 T)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Chop the onion and celery into pieces.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add the chopped cabbage, tomatoes, onion, salt, pepper, butter, and broth to the slow cooker.",
    "timer": null
   },
   {
    "title": "",
    "content": "Let simmer for 4-5 hours on low in the slow cooker. With 2 hours left, add the celery.",
    "timer": 16200
   }
  ],
  "notes": ""
 },
 {
  "id": "stuffing",
  "title": "Stuffing",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "chicken",
   "baked",
   "thanksgiving",
   "holiday",
   "comfort-food"
  ],
  "difficulty": "Medium",
  "time": "~45 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 245,
   "protein": 4,
   "carbs": 22,
   "fat": 14
  },
  "desc": "Baked Stove Top stuffing enriched with onion, egg, half and half, chicken stock, and optional oysters.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "box",
    "name": "Stove Top Chicken stuffing"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "stick",
    "name": "butter (melt 6 T)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": null,
    "name": "medium sweet yellow onion (chopped)"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": null,
    "name": "egg"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "cup",
    "name": "Half N Half"
   },
   {
    "id": "0006",
    "amount": 0.75,
    "unit": "cup",
    "name": "chicken stock"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": "pt",
    "name": "oysters (optional)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Preheat oven to 350.",
    "timer": null
   },
   {
    "title": "",
    "content": "Heat 2 T butter in a skillet and saute onions until translucent.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix all ingredients (use the Stove Top unprepared) in a large mixing bowl.",
    "timer": null
   },
   {
    "title": "",
    "content": "Transfer to a buttered 8x8 pan.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 350 for 35-40 minutes.",
    "timer": 2100
   }
  ],
  "notes": ""
 },
 {
  "id": "succotash-3-sisters",
  "title": "Succotash – 3 Sisters",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "vegetarian",
   "beans",
   "stovetop",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "~20 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 175,
   "protein": 4,
   "carbs": 24,
   "fat": 6
  },
  "desc": "Butter beans and fresh corn sauteed with onion and red pepper, finished with lemon.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 16,
    "unit": "oz",
    "name": "butter beans & liquid"
   },
   {
    "id": "0002",
    "amount": 3,
    "unit": "ears",
    "name": "corn (cut from cob)"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": null,
    "name": "red pepper (1/4\" diced)"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": null,
    "name": "onion, yellow, small-medium (finely diced)"
   },
   {
    "id": "0005",
    "amount": 3,
    "unit": "tbsp",
    "name": "butter"
   },
   {
    "id": "0006",
    "amount": null,
    "unit": null,
    "name": "garlic"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "cayenne pepper"
   },
   {
    "id": "0008",
    "amount": null,
    "unit": null,
    "name": "lemon"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Drain beans over a bowl, reserving the liquid. Rinse beans with cold water.",
    "timer": null
   },
   {
    "title": "",
    "content": "In a 12\" non-stick skillet over medium-high heat, melt butter, then add onion and red pepper. Cook 4-5 min, stirring frequently, until slightly brown.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add garlic and cayenne pepper. Cook 30 sec.",
    "timer": null
   },
   {
    "title": "",
    "content": "Reduce heat to medium. Add butter beans and corn. Cook 4 min, stirring frequently.",
    "timer": 240
   },
   {
    "title": "",
    "content": "Add butter bean liquid (2 tbsp to 1/4 cup) and squeeze in lemon.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "sugar-cookie-glaze-icing",
  "title": "Sugar Cookie Glaze Icing",
  "source": "",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "frosting",
   "glaze",
   "vegetarian",
   "no-bake",
   "gluten-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 24,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 65,
   "protein": 0,
   "carbs": 16,
   "fat": 0
  },
  "desc": "A glossy corn-syrup glaze icing for decorating sugar cookies, tinted with gel food coloring.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 3,
    "unit": "cup",
    "name": "powdered sugar (sifted)"
   },
   {
    "id": "0002",
    "amount": 3,
    "unit": "tbsp",
    "name": "milk (3–4 tbsp)"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "tbsp",
    "name": "light corn syrup"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "tsp",
    "name": "vanilla"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "gel food coloring"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "If frosting is too thick add additional milk (1 tsp at a time).",
    "timer": null
   },
   {
    "title": "",
    "content": "If frosting is too thin add more powdered sugar.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "sugar-cookies",
  "title": "Sugar Cookies",
  "source": "Grammie's",
  "courses": [
   "Dessert"
  ],
  "tags": [
   "cookie",
   "baked",
   "vegetarian"
  ],
  "difficulty": "Easy",
  "time": "~10 min",
  "servingsLabel": "Cookies",
  "baseServings": 36,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 125,
   "protein": 1,
   "carbs": 12,
   "fat": 8
  },
  "desc": "Classic rolled sugar cookies pressed flat with a sugar-dipped glass and baked.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "tsp",
    "name": "baking soda"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "cup",
    "name": "shortening"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tsp",
    "name": "cream of tartar"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "cup",
    "name": "margarine/butter"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "tsp",
    "name": "salt"
   },
   {
    "id": "0007",
    "amount": 1,
    "unit": null,
    "name": "egg"
   },
   {
    "id": "0008",
    "amount": 2.5,
    "unit": "cup",
    "name": "flour"
   },
   {
    "id": "0009",
    "amount": 1,
    "unit": "tsp",
    "name": "vanilla"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Mix wet ingredients; mix dry ingredients separately. Gradually add the dry to the wet ingredients.",
    "timer": null
   },
   {
    "title": "",
    "content": "Roll dough into balls.",
    "timer": null
   },
   {
    "title": "",
    "content": "Press down with a glass dipped in sugar.",
    "timer": null
   },
   {
    "title": "",
    "content": "Bake at 350 degrees for 8 to 10 minutes.",
    "timer": 600
   }
  ],
  "notes": ""
 },
 {
  "id": "sweet-chili-soy-glaze-sauce",
  "title": "Sweet Chili Soy Glaze Sauce",
  "source": "",
  "courses": [
   "Sauce"
  ],
  "tags": [
   "vegetarian",
   "asian",
   "sauce",
   "glaze",
   "stovetop",
   "vegan",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~10 min",
  "servingsLabel": "Servings",
  "baseServings": 3,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 105,
   "protein": 2,
   "carbs": 14,
   "fat": 4
  },
  "desc": "Glossy sweet chili and soy glaze cooked down with garlic and finished with green onion.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "tbsp",
    "name": "olive oil"
   },
   {
    "id": "0002",
    "amount": 1,
    "unit": "clove",
    "name": "garlic (finely diced)"
   },
   {
    "id": "0003",
    "amount": 0.333,
    "unit": "cup",
    "name": "sweet chili sauce (Pantai)"
   },
   {
    "id": "0004",
    "amount": 3,
    "unit": "tbsp",
    "name": "soy sauce (light sodium, Kikkoman)"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": null,
    "name": "green onion (garnish)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "In a small saucepan, add olive oil over medium heat.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add garlic, stirring, and cook 1 min until golden brown.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add sweet chili sauce and soy sauce. Stir.",
    "timer": null
   },
   {
    "title": "",
    "content": "Cook until the sauce starts to bubble and thicken, semi-sticky.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add to dish and garnish with green onion.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "taco-shell-crispy-tortillas",
  "title": "Taco Shell Crispy Tortillas",
  "source": "",
  "courses": [
   "Dinner"
  ],
  "tags": [
   "mexican",
   "tex-mex",
   "baked",
   "vegetarian",
   "dairy-free"
  ],
  "difficulty": "Medium",
  "time": "~15 min",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 220,
   "protein": 4,
   "carbs": 26,
   "fat": 10
  },
  "desc": "Flour tortillas crisped in the oven then pan-fried into stuffed taco shells.",
  "ingredients": [
   {
    "id": "0001",
    "amount": null,
    "unit": null,
    "name": "6\" flour tortillas"
   },
   {
    "id": "0002",
    "amount": null,
    "unit": null,
    "name": "vegetable or canola or grapeseed oil"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Preheat oven to 400 degrees. Brush each soft tortilla with vegetable oil front and back. Layer on a parchment lined cookie sheet. Bake for 3-5 minutes.",
    "timer": 300
   },
   {
    "title": "",
    "content": "Take out of oven and stack on top of each other.",
    "timer": null
   },
   {
    "title": "",
    "content": "Heat a 12\" non-stick skillet on medium-high heat, add 1/4 c oil. Wait until sizzling. Fill tortilla on one side with meat and/or cheese, fold tortilla over in half. Cook on first side for about 2 minutes or until golden. Use tongs and spatula to flip and cook another 2 minutes. Blot off oil with paper towel.",
    "timer": null
   },
   {
    "title": "",
    "content": "Add all remaining fillings: shredded cheddar, shredded lettuce, tomato and red onion with cilantro, taco sauce, sour cream, guacamole (avocado, sour cream, salt, cilantro). Set oven on 200 degrees to warm tortillas before dressing them.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "tartar-sauce",
  "title": "Tartar Sauce",
  "source": "",
  "courses": [
   "Sauce"
  ],
  "tags": [
   "sauce",
   "vegetarian",
   "make-ahead",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 5,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 150,
   "protein": 0,
   "carbs": 2,
   "fat": 16
  },
  "desc": "A creamy mayonnaise-based tartar sauce with sweet pickles, lemon, and Dijon.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.5,
    "unit": "cup",
    "name": "mayonnaise"
   },
   {
    "id": "0002",
    "amount": 0.125,
    "unit": "cup",
    "name": "sweet pickles (diced finely)"
   },
   {
    "id": "0003",
    "amount": 0.5,
    "unit": "tbsp",
    "name": "lemon juice (fresh squeezed)"
   },
   {
    "id": "0004",
    "amount": 0.5,
    "unit": "tsp",
    "name": "Dijon mustard"
   },
   {
    "id": "0005",
    "amount": 0.25,
    "unit": "tsp",
    "name": "onion powder"
   },
   {
    "id": "0006",
    "amount": 0.25,
    "unit": "tsp",
    "name": "black pepper"
   },
   {
    "id": "0007",
    "amount": null,
    "unit": null,
    "name": "Worcestershire sauce (dash)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Combine in a medium bowl and whisk together: mayonnaise, pickles, lemon juice, mustard, onion powder, and pepper.",
    "timer": null
   },
   {
    "title": "",
    "content": "Chill in the refrigerator. This improves the flavor significantly.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "teriyaki-sauce-sarku",
  "title": "Teriyaki Sauce (Sarku)",
  "source": "Sarku",
  "courses": [
   "Sauce"
  ],
  "tags": [
   "sauce",
   "asian",
   "japanese",
   "chicken",
   "stir-fry"
  ],
  "difficulty": "Medium",
  "time": "~30 min",
  "servingsLabel": "Servings",
  "baseServings": 6,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 380,
   "protein": 20,
   "carbs": 30,
   "fat": 14
  },
  "desc": "A copycat Sarku teriyaki sauce simmered with garlic and thickened with cornstarch, served over chicken and stir-fried vegetables.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 2.5,
    "unit": "cup",
    "name": "unsalted chicken stock"
   },
   {
    "id": "0002",
    "amount": 0.75,
    "unit": "cup",
    "name": "Kikkoman teriyaki sauce"
   },
   {
    "id": "0003",
    "amount": 0.25,
    "unit": "cup",
    "name": "Kikkoman low sodium soy sauce"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "clove",
    "name": "garlic"
   },
   {
    "id": "0005",
    "amount": 0.667,
    "unit": "cup",
    "name": "brown sugar"
   },
   {
    "id": "0006",
    "amount": 2.5,
    "unit": "tbsp",
    "name": "cornstarch"
   },
   {
    "id": "0007",
    "amount": 2.5,
    "unit": "tbsp",
    "name": "cold water"
   },
   {
    "id": "0008",
    "amount": null,
    "unit": null,
    "name": "chicken thighs"
   },
   {
    "id": "0009",
    "amount": null,
    "unit": null,
    "name": "cabbage mix"
   },
   {
    "id": "0010",
    "amount": null,
    "unit": null,
    "name": "broccoli"
   },
   {
    "id": "0011",
    "amount": null,
    "unit": null,
    "name": "yellow onion"
   }
  ],
  "steps": [
   {
    "title": "Chicken",
    "content": "Bake chicken thighs on a lined sheet in the oven with olive oil, salt, and pepper.",
    "timer": null
   },
   {
    "title": "Vegetables",
    "content": "Stir fry the cabbage mix, broccoli, and yellow onion in a large skillet over high heat with olive oil and butter.",
    "timer": null
   },
   {
    "title": "Sauce",
    "content": "First prepare the garlic in chopped pieces.",
    "timer": null
   },
   {
    "title": "Sauce",
    "content": "Place the broth in a pot over medium heat and add the chopped garlic. Let the mixture simmer for about 10 minutes.",
    "timer": 600
   },
   {
    "title": "Sauce",
    "content": "Add the teriyaki sauce, then the soy sauce, then the brown sugar.",
    "timer": null
   },
   {
    "title": "Sauce",
    "content": "Let this cook and reduce a bit, about 8-10 minutes.",
    "timer": 600
   },
   {
    "title": "Sauce",
    "content": "When the broth has simmered and cooked down a bit, remove the garlic with a slotted or mesh spoon.",
    "timer": null
   },
   {
    "title": "Sauce",
    "content": "To thicken the broth, mix cornstarch and cold water until all lumps are dissolved. Add the slurry to the broth slowly, whisking vigorously for at least 1 minute.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "wassail",
  "title": "Wassail (Apple Cider)",
  "source": "",
  "courses": [
   "Drink"
  ],
  "tags": [
   "vegetarian",
   "holiday",
   "christmas",
   "vegan",
   "gluten-free",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~20 min",
  "servingsLabel": "Servings",
  "baseServings": 16,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 145,
   "protein": 0,
   "carbs": 37,
   "fat": 0
  },
  "desc": "Spiced hot apple cider simmered with allspice, cloves, and cinnamon, garnished with clove-studded oranges.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1,
    "unit": "gal",
    "name": "apple juice"
   },
   {
    "id": "0002",
    "amount": 0.667,
    "unit": "cup",
    "name": "sugar"
   },
   {
    "id": "0003",
    "amount": 2,
    "unit": "tsp",
    "name": "allspice"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "tsp",
    "name": "whole cloves"
   },
   {
    "id": "0005",
    "amount": null,
    "unit": null,
    "name": "cinnamon sticks (2-3\")"
   },
   {
    "id": "0006",
    "amount": 2,
    "unit": null,
    "name": "oranges (studded with cloves)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Boil all ingredients except the oranges.",
    "timer": null
   },
   {
    "title": "",
    "content": "Simmer for 20 minutes.",
    "timer": 1200
   },
   {
    "title": "",
    "content": "Strain.",
    "timer": null
   },
   {
    "title": "",
    "content": "Pour into a punch bowl and float the clove-studded oranges on top.",
    "timer": null
   }
  ],
  "notes": ""
 },
 {
  "id": "cream-cheese-wontons",
  "title": "Wontons (Cream Cheese)",
  "source": "",
  "courses": [
   "Appetizer"
  ],
  "tags": [
   "vegetarian",
   "baked",
   "asian",
   "party"
  ],
  "difficulty": "Medium",
  "time": "",
  "servingsLabel": "Servings",
  "baseServings": 12,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 150,
   "protein": 3,
   "carbs": 17,
   "fat": 7
  },
  "desc": "Baked wonton cups filled with a sweet and spicy cream cheese mixture.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 8,
    "unit": "oz",
    "name": "cream cheese, softened"
   },
   {
    "id": "0002",
    "amount": 4,
    "unit": null,
    "name": "green onions, sliced very thin (most white)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tsp",
    "name": "Sriracha and sweet chili sauce (1+ tsp)"
   },
   {
    "id": "0004",
    "amount": 2,
    "unit": "tbsp",
    "name": "powdered sugar (or to taste)"
   },
   {
    "id": "0005",
    "amount": 1,
    "unit": "pkg",
    "name": "wonton wrappers (square or round)"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Preheat oven to 350-400°.",
    "timer": null
   },
   {
    "title": "",
    "content": "Mix all ingredients well in a bowl, except the wrappers.",
    "timer": null
   },
   {
    "title": "Bake cups",
    "content": "Spray a mini muffin pan, place a wonton wrapper in each, and spray with butter spray. Bake until edges are brown, then remove from oven.",
    "timer": null
   },
   {
    "title": "Fill",
    "content": "Put about a teaspoon of the mixture in the center of each wrapper.",
    "timer": null
   },
   {
    "title": "Warm",
    "content": "Heat again for 2-3 minutes until the center mix is warm. Serve with favorite dipping sauce.",
    "timer": 180
   }
  ],
  "notes": "Freeze on parchment uncooked for 2 hrs, then transfer to a freezer bag."
 },
 {
  "id": "yum-yum-sauce",
  "title": "Yum Yum Sauce",
  "source": "",
  "courses": [
   "Sauce",
   "Dip"
  ],
  "tags": [
   "sauce",
   "dip",
   "vegetarian",
   "japanese",
   "make-ahead",
   "dairy-free"
  ],
  "difficulty": "Easy",
  "time": "~5 min",
  "servingsLabel": "Servings",
  "baseServings": 8,
  "servingsEstimated": true,
  "nutrition": {
   "calories": 140,
   "protein": 0,
   "carbs": 4,
   "fat": 15
  },
  "desc": "Creamy mayo-based hibachi-style sauce with ketchup, sweet chili and sriracha.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 0.667,
    "unit": "cup",
    "name": "mayonnaise"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": "tbsp",
    "name": "ketchup"
   },
   {
    "id": "0003",
    "amount": 3,
    "unit": "tbsp",
    "name": "sweet chili sauce"
   },
   {
    "id": "0004",
    "amount": 1,
    "unit": "tsp",
    "name": "Worcestershire sauce"
   },
   {
    "id": "0005",
    "amount": 0.5,
    "unit": "tsp",
    "name": "onion powder"
   },
   {
    "id": "0006",
    "amount": 0.5,
    "unit": "tsp",
    "name": "garlic powder"
   },
   {
    "id": "0007",
    "amount": 0.5,
    "unit": "tsp",
    "name": "paprika"
   },
   {
    "id": "0008",
    "amount": 0.75,
    "unit": "tsp",
    "name": "sriracha"
   },
   {
    "id": "0009",
    "amount": null,
    "unit": null,
    "name": "salt and pepper to taste"
   }
  ],
  "steps": [
   {
    "title": "",
    "content": "Combine all ingredients in a bowl and stir to combine.",
    "timer": null
   },
   {
    "title": "",
    "content": "Keep refrigerated in a sealed jar until ready to use.",
    "timer": null
   }
  ],
  "notes": "Serve with onion rings, sushi, sweet potato fries, shrimp, chicken, hamburgers, etc."
 },
 {
  "id": "zucchini-tomato-gratin",
  "title": "Zucchini-Tomato Gratin",
  "source": "",
  "courses": [
   "Side"
  ],
  "tags": [
   "vegetarian",
   "baked",
   "italian",
   "gluten-free"
  ],
  "difficulty": "Medium",
  "time": "~45 min prep + ~30 min bake",
  "servingsLabel": "Servings",
  "baseServings": 4,
  "servingsEstimated": false,
  "nutrition": {
   "calories": 160,
   "protein": 8,
   "carbs": 7,
   "fat": 11
  },
  "desc": "Layered zucchini and tomatoes with garlic, basil, and Parmesan baked until bubbling.",
  "ingredients": [
   {
    "id": "0001",
    "amount": 1.5,
    "unit": "lb",
    "name": "tomatoes (cut into ¼\" thick slices)"
   },
   {
    "id": "0002",
    "amount": 2,
    "unit": null,
    "name": "medium zucchini (cut into 1/8\" thick diagonal slices)"
   },
   {
    "id": "0003",
    "amount": 1,
    "unit": "tbsp",
    "name": "olive oil (plus 1 tsp)"
   },
   {
    "id": "0004",
    "amount": 4,
    "unit": "clove",
    "name": "garlic, thinly sliced"
   },
   {
    "id": "0005",
    "amount": 0.25,
    "unit": "cup",
    "name": "thinly sliced basil leaves"
   },
   {
    "id": "0006",
    "amount": 0.75,
    "unit": "cup",
    "name": "grated Parmesan cheese"
   }
  ],
  "steps": [
   {
    "title": "Drain tomatoes",
    "content": "Drape tomato slices over a colander, sprinkle with salt, and let drain for 45 minutes.",
    "timer": 2700
   },
   {
    "title": "Sweat zucchini",
    "content": "Spread zucchini on a baking sheet, sprinkle with salt, and let stand for 30 minutes to sweat out excess moisture. Rinse well and pat dry.",
    "timer": 1800
   },
   {
    "title": "Saute zucchini",
    "content": "Preheat oven to 375. Heat 1 tsp oil in a nonstick skillet over medium-high heat. Saute zucchini 3-4 minutes or until golden brown. Transfer to a plate.",
    "timer": null
   },
   {
    "title": "Layer",
    "content": "Layer ½ of the zucchini in an 8\" square baking pan. Top with half of the tomatoes. Sprinkle with half of the garlic, half of the basil, and ¼ cup Parmesan; season with freshly ground pepper. Repeat with remaining zucchini, tomatoes, garlic, and basil. Drizzle the top with 1 tbsp oil and sprinkle with remaining ½ cup cheese.",
    "timer": null
   },
   {
    "title": "Bake",
    "content": "Cover with foil and bake 10 minutes. Remove foil and bake 20 minutes more or until cheese is melted and gratin is bubbling. Let stand 5 minutes before serving.",
    "timer": 1200
   }
  ],
  "notes": "Nutrition (per serving): Calories 165, Protein 9g, Total fat 10g, Fiber 3g."
 }
];
