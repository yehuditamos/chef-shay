# רובושף — Project Status

**App:** רובושף (RoboChef)
**Purpose:** Hebrew-language recipe finder for kids. The child selects ingredients they have at home, their taste preference, available time, and cooking method — the app finds the best matching recipe.
**Stack:** Vanilla HTML / CSS / JavaScript. No frameworks. Mobile-first, RTL Hebrew UI.
**Files:** `index.html`, `style.css`, `script.js`, `recipes.js`

---

## ✅ What Currently Works

- Welcome screen with 🤖 רובושף branding; disappears on click
- Persistent small header shown on all screens 1–5
- 5-screen wizard flow: Ingredients → Taste → Time → Method → Result
- Back navigation on screens 2, 3, 4
- Progress indicator (4 dots, fills right to left, RTL-correct)
- 14 ingredient checkboxes on screen 1
- Taste filter: מתוק / מלוח radio buttons
- Time filter: 5 / 10 / 20 / 30+ minute options
- Cooking method filter with "Any Method" (כל שיטה) default option
- Tiered recipe matching system (0–3 missing ingredients; >3 excluded)
- Best available tier shown automatically; exact matches preferred
- Ingredient status in recipe card:
  - 🎉 יש לך הכל! — when all ingredients are available
  - ✅ יש לך + ⚠️ חסר לך — when some are missing
- Surprise recipe button (🎲) — random pick, no ingredient check
- Another recipe button (🔄) — picks from same tier pool
- Reset button (🏠) — returns to full welcome screen, clears all inputs
- RTL alignment throughout:
  - `direction: rtl` on `h2` headings (question marks appear correctly)
  - `direction: rtl` on `ol` (numbered steps align right)
  - `direction: rtl` on `select` (dropdown text right-aligned)
  - `flex-direction: row-reverse` on nav buttons (Next left, Back right)
  - `flex-direction: row-reverse` on progress dots (fills right to left)

---

## 🏗️ Completed This Session

| # | Feature / Fix |
|---|---|
| 1 | Removed corrupted backtick blocks from original HTML and JS |
| 2 | Wired missing event listeners (anotherRecipe, resetApp) |
| 3 | Renamed app to 🤖 רובושף; removed old subtitle |
| 4 | Rebuilt as 5-screen wizard with persistent header and progress bar |
| 5 | Added back navigation on screens 2, 3, 4 |
| 6 | Added "Any Method" option to cooking method dropdown |
| 7 | Replaced binary filter with 4-tier ingredient matching system |
| 8 | Added ingredient status display in recipe card |
| 9 | Fixed RTL alignment: headings, lists, dropdowns, nav buttons, progress dots |

---

## 🐛 Known Issues

- None currently outstanding.
- `#logoPlaceholder` at the bottom of screen 5 is an empty div — reserved for a future RoboChef logo image.

---

## 🔜 Next Priorities

1. Replace `#logoPlaceholder` with the actual RoboChef logo image
2. Expand ingredient list from 14 to 30 core ingredients
3. Expand recipe database from 22 to 50 kid-friendly recipes

---

## 💡 Future Ideas

| Idea | Description |
|---|---|
| 30 core ingredients | Expand the ingredient checklist to cover a broader pantry |
| 50 kid-friendly recipes | Grow the recipe database with realistic, easy recipes for children |
| RoboChef logo | Design and add an official 🤖 RoboChef logo image |
| GitHub Pages deployment | Host the app publicly so Omri can access it from any device |
| Recipe categories | Tag recipes as Breakfast / Lunch / Dinner / Snack for faster filtering |
| Favorite recipes | Let the child save and revisit their favourite recipes |
