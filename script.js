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

    const selectedType =
        document.querySelector("input[name='type']:checked")?.value;

    const selectedTime =
        Number(document.getElementById("time").value);

    const selectedMethod =
        document.getElementById("method").value;

    const matchingRecipes = recipes.filter(function (recipe) {

        const hasIngredients =
            recipe.ingredients.every(function (ingredient) {
                return selectedIngredients.includes(ingredient);
            });

        const hasType =
            !selectedType || recipe.type === selectedType;

        const hasTime =
            recipe.time <= selectedTime;

        const hasMethod =
            recipe.method === selectedMethod;

        return hasIngredients &&
               hasType &&
               hasTime &&
               hasMethod;
    });

    if (matchingRecipes.length === 0) {

        document.getElementById("recipeResult").innerHTML = `
            <div class="recipe-card">
                <h2>😢 לא מצאתי מתכון מתאים</h2>
                <p>נסי לשנות את הבחירות שלך.</p>
            </div>
        `;

        return;
    }

    const randomRecipe =
        matchingRecipes[Math.floor(Math.random() * matchingRecipes.length)];

    let stepsHtml = "";

    randomRecipe.steps.forEach(function(step) {
        stepsHtml += `<li>${step}</li>`;
    });

    document.getElementById("recipeResult").innerHTML = `
        <div class="recipe-card">

            <h2>${randomRecipe.name}</h2>

            <p>${randomRecipe.description}</p>

            <p>⏱️ ${randomRecipe.time} דקות</p>

            <p>🔥 ${randomRecipe.method}</p>

            <h3>👨‍🍳 שלבי הכנה</h3>

            <ol>
                ${stepsHtml}
            </ol>

        </div>
    `;
});

document.getElementById("surpriseRecipe").addEventListener("click", function () {

    const randomRecipe =
        recipes[Math.floor(Math.random() * recipes.length)];

    let stepsHtml = "";

    randomRecipe.steps.forEach(function(step) {
        stepsHtml += `<li>${step}</li>`;
    });

    document.getElementById("recipeResult").innerHTML = `
        <div class="recipe-card">

            <h2>🎲 ${randomRecipe.name}</h2>

            <p>${randomRecipe.description}</p>

            <p>⏱️ ${randomRecipe.time} דקות</p>

            <p>🔥 ${randomRecipe.method}</p>

            <h3>👨‍🍳 שלבי הכנה</h3>

            <ol>
                ${stepsHtml}
            </ol>

        </div>
    `;
});
document.getElementById("resetApp").addEventListener("click", function () {

    document
        .querySelectorAll("#ingredients input[type='checkbox']")
        .forEach(function (checkbox) {
            checkbox.checked = false;
        });

    document
        .querySelectorAll("input[name='type']")
        .forEach(function (radio) {
            radio.checked = false;
        });

    document.getElementById("time").selectedIndex = 0;

    document.getElementById("method").selectedIndex = 0;

    document.getElementById("recipeResult").innerHTML = "";

});