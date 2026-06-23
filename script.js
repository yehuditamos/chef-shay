let lastRecipes = [];
let selectedCategory = null;
let currentRecipe = null;
let favorites = JSON.parse(localStorage.getItem("roboChefFavorites") || "[]");

const recipeButton  = document.getElementById("recipeButton");
const findRecipe    = document.getElementById("findRecipe");
const anotherRecipe = document.getElementById("anotherRecipe");
const resetApp      = document.getElementById("resetApp");
const recipeResult  = document.getElementById("recipeResult");
const welcome       = document.getElementById("welcome");
const appHeader     = document.getElementById("appHeader");
const progressBar   = document.getElementById("progressBar");
const progressText  = document.getElementById("progressText");
const favoriteBtn   = document.getElementById("favoriteBtn");
const favoritesBtn  = document.getElementById("favoritesBtn");

function showStep(n) {
    welcome.style.display = "none";
    [1, 2, 3, 4, 5, 6, 7, 8].forEach(function (i) {
        document.getElementById("step" + i).style.display = "none";
    });
    document.getElementById("step" + n).style.display = "block";
    appHeader.style.display = "block";
    if (n <= 5) {
        progressBar.style.display = "block";
        progressText.textContent = "שלב " + n + " מתוך 5";
        [1, 2, 3, 4, 5].forEach(function (i) {
            var dot = document.getElementById("dot" + i);
            if (i <= n) { dot.classList.add("active"); }
            else { dot.classList.remove("active"); }
        });
    } else {
        progressBar.style.display = "none";
    }
}

function showWelcome() {
    welcome.style.display = "block";
    appHeader.style.display = "none";
    progressBar.style.display = "none";
    [1, 2, 3, 4, 5, 6, 7, 8].forEach(function (i) {
        document.getElementById("step" + i).style.display = "none";
    });
    recipeResult.innerHTML = "";
    lastRecipes = [];
    currentRecipe = null;
    selectedCategory = null;
    document.getElementById("haveEverything").checked = false;
    document.querySelectorAll('input[name="category"]').forEach(function (r) { r.checked = false; });
    favoriteBtn.style.display = "none";
    anotherRecipe.style.display = "none";
    resetApp.style.display = "none";
    document.querySelectorAll("#step1 .checkbox-list input[type='checkbox']").forEach(function (cb) { cb.checked = false; });
    document.querySelectorAll("input[name='type']").forEach(function (r) { r.checked = false; });
    document.getElementById("time").selectedIndex = 0;
    document.getElementById("method").selectedIndex = 0;
}

function categoryMatches(recipeCategory) {
    if (!selectedCategory) return 0;
    if (selectedCategory === "meal") {
        return (recipeCategory === "meal" || recipeCategory === "lunch" || recipeCategory === "dinner") ? 1 : 0;
    }
    return recipeCategory === selectedCategory ? 1 : 0;
}

function isFavorite(name) {
    return favorites.indexOf(name) !== -1;
}

function toggleFavorite(name) {
    var idx = favorites.indexOf(name);
    if (idx === -1) { favorites.push(name); }
    else { favorites.splice(idx, 1); }
    localStorage.setItem("roboChefFavorites", JSON.stringify(favorites));
}

function updateFavoriteBtn() {
    if (!currentRecipe) return;
    favoriteBtn.textContent = isFavorite(currentRecipe.name) ? "⭐ במועדפים" : "☆ שמור למועדפים";
}

function showRecipe(recipe, icon, missing) {
    currentRecipe = recipe;
    var stepsHtml = "";
    for (var i = 0; i < recipe.steps.length; i++) {
        stepsHtml += "<li>" + recipe.steps[i] + "</li>";
    }
    var ingredientsHtml = missing.length === 0
        ? '<p class="has-all">✅ יש לך את כל המצרכים</p>'
        : '<p class="missing-msg">⚠️ חסר:<br>' + missing.join("<br>") + '</p>';
    var imageHtml = recipe.image
        ? '<img src="' + recipe.image + '" class="recipe-img" alt="">'
        : '';
    recipeResult.innerHTML =
        '<div class="recipe-card">' +
        imageHtml +
        '<h2>' + (icon || "") + " " + recipe.name + '</h2>' +
        ingredientsHtml +
        '<p>' + recipe.description + '</p>' +
        '<p>⏱️ ' + recipe.time + ' דקות</p>' +
        '<p>🔥 ' + recipe.method + '</p>' +
        '<h3>👨‍🍳 שלבי הכנה</h3>' +
        '<ol>' + stepsHtml + '</ol>' +
        '</div>';
    favoriteBtn.style.display = "inline-block";
    anotherRecipe.style.display = "inline-block";
    resetApp.style.display = "inline-block";
    updateFavoriteBtn();
}

function showFavorites() {
    var favoriteRecipes = recipes.filter(function (r) { return isFavorite(r.name); });
    var listEl = document.getElementById("favoritesList");
    if (favoriteRecipes.length === 0) {
        listEl.innerHTML = '<p class="empty-favorites">עדיין אין מתכונים שמורים 🌟</p>';
    } else {
        var html = "";
        favoriteRecipes.forEach(function (r) {
            html += '<div class="fav-item" data-name="' + r.name.replace(/"/g, "&quot;") + '">' +
                '<span class="fav-name">' + r.name + '</span>' +
                '<span class="fav-remove">✕</span>' +
                '</div>';
        });
        listEl.innerHTML = html;
        listEl.querySelectorAll(".fav-item").forEach(function (el) {
            el.addEventListener("click", function (e) {
                if (e.target.classList.contains("fav-remove")) {
                    var name = el.dataset.name;
                    toggleFavorite(name);
                    showFavorites();
                } else {
                    var name = el.dataset.name;
                    var recipe = recipes.find(function (r) { return r.name === name; });
                    if (recipe) { showRecipe(recipe, null, []); showStep(7); }
                }
            });
        });
    }
    welcome.style.display = "none";
    [1, 2, 3, 4, 5, 6, 7].forEach(function (i) {
        document.getElementById("step" + i).style.display = "none";
    });
    appHeader.style.display = "block";
    progressBar.style.display = "none";
    document.getElementById("step8").style.display = "block";
}

recipeButton.addEventListener("click", function () { showStep(1); });

favoritesBtn.addEventListener("click", function () { showFavorites(); });

findRecipe.addEventListener("click", function () {
    var haveEverything = document.getElementById("haveEverything").checked;
    var selectedIngredients = [];
    document.querySelectorAll("#step1 .checkbox-list input[type='checkbox']").forEach(function (cb) {
        if (cb.checked) { selectedIngredients.push(cb.value); }
    });
    selectedCategory = document.querySelector('input[name="category"]:checked') ?
        document.querySelector('input[name="category"]:checked').value : null;
    var selectedTypeEl = document.querySelector("input[name='type']:checked");
    var selectedType   = selectedTypeEl ? selectedTypeEl.value : null;
    var selectedTime   = Number(document.getElementById("time").value);
    var selectedMethod = document.getElementById("method").value;

    var results = [];
    recipes.forEach(function (recipe) {
        var hasType   = !selectedType   || recipe.type   === selectedType;
        var hasTime   = recipe.time     <= selectedTime;
        var hasMethod = !selectedMethod || recipe.method === selectedMethod;
        if (!hasType || !hasTime || !hasMethod) return;

        if (haveEverything) {
            results.push({ recipe: recipe, missing: [] });
        } else {
            var missing = recipe.ingredients.filter(function (ing) {
                return selectedIngredients.indexOf(ing) === -1;
            });
            if (missing.length <= 2) {
                results.push({ recipe: recipe, missing: missing });
            }
        }
    });

    results.sort(function (a, b) {
        if (a.missing.length !== b.missing.length) { return a.missing.length - b.missing.length; }
        var aCategory = categoryMatches(a.recipe.category);
        var bCategory = categoryMatches(b.recipe.category);
        if (aCategory !== bCategory) { return bCategory - aCategory; }
        var aTaste = selectedType && a.recipe.type === selectedType ? 1 : 0;
        var bTaste = selectedType && b.recipe.type === selectedType ? 1 : 0;
        if (aTaste !== bTaste) { return bTaste - aTaste; }
        return a.recipe.time - b.recipe.time;
    });

    if (results.length === 0) {
        recipeResult.innerHTML =
            '<div class="recipe-card">' +
            '<h2>😢 לא מצאתי מתכון מתאים</h2>' +
            '<p>נסו לשנות את הבחירות שלכם</p>' +
            '</div>';
        lastRecipes = [];
        currentRecipe = null;
        favoriteBtn.style.display = "none";
        anotherRecipe.style.display = "none";
        resetApp.style.display = "inline-block";
        showStep(7);
        return;
    }

    lastRecipes = results;
    showRecipe(results[0].recipe, null, results[0].missing);
    showStep(7);
});

anotherRecipe.addEventListener("click", function () {
    var pool = lastRecipes.length > 0
        ? lastRecipes
        : recipes.map(function (r) { return { recipe: r, missing: [] }; });
    var pick = pool[Math.floor(Math.random() * pool.length)];
    showRecipe(pick.recipe, "🔄", pick.missing);
});

favoriteBtn.addEventListener("click", function () {
    if (!currentRecipe) return;
    toggleFavorite(currentRecipe.name);
    updateFavoriteBtn();
});

resetApp.addEventListener("click", function () { showWelcome(); });
