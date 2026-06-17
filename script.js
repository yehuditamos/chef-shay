document.getElementById("recipeButton").addEventListener("click", function () {
    document.getElementById("ingredients").style.display = "block";
});

document.getElementById("findRecipe").addEventListener("click", function () {

    const selectedIngredients = [];

    document.querySelectorAll("#ingredients input[type='checkbox']").forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedIngredients.push(checkbox.value);
        }
    });

    const matchingRecipes = recipes.filter(function (recipe) {
        return recipe.ingredients.every(function (ingredient) {
            return selectedIngredients.includes(ingredient);
        });
    });

    if (matchingRecipes.length === 0) {
        document.getElementById("recipeResult").innerHTML =
            "<div class='recipe-card'><h2>😢 לא מצאתי מתכון מתאים</h2><p>נסי לבחור מצרכים אחרים.</p></div>";
        return;
    }

    const randomRecipe =
        matchingRecipes[Math.floor(Math.random() * matchingRecipes.length)];

    document.getElementById("recipeResult").innerHTML =
        "<div class='recipe-card'><h2>" +
        randomRecipe.name +
        "</h2><p>" +
        randomRecipe.description +
        "</p></div>";
});