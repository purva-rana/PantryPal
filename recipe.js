        // Function to add a recipe
        function addRecipe() {
            // Get input values
            var recipeName = document.getElementById('recipeName').value;
            var ingredients = document.getElementById('ingredients').value;
            var instructions = document.getElementById('instructions').value;

            // Create recipe object
            var recipe = {
                name: recipeName,
                ingredients: ingredients,
                instructions: instructions
            };

            // Get existing recipes from local storage
            var recipes = JSON.parse(localStorage.getItem('recipes')) || [];

            // Add new recipe to the array
            recipes.push(recipe);

            // Save the updated array to local storage
            localStorage.setItem('recipes', JSON.stringify(recipes));

            // Clear the form fields
            document.getElementById('recipeName').value = '';
            document.getElementById('ingredients').value = '';
            document.getElementById('instructions').value = '';

            // Update the displayed recipes
            displayRecipes();
        }

        // Function to display recipes
        function displayRecipes() {
            // Get recipes from local storage
            var recipes = JSON.parse(localStorage.getItem('recipes')) || [];

            // Get the container to display recipes
            var recipesContainer = document.getElementById('recipes');

            // Clear the container
            recipesContainer.innerHTML = '';

            // Loop through the recipes and display each one
            recipes.forEach(function (recipe, index) {
                var recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe');
                recipeDiv.innerHTML = '<strong>' + recipe.name + '</strong><br>' + recipe.ingredients + '</strong><br>' + recipe.instructions + '<br><button onclick="deleteRecipe(' + index + ')">Delete</button>';
                recipesContainer.appendChild(recipeDiv);
            });
        }

        // Function to delete a recipe
        function deleteRecipe(index) {
            // Get recipes from local storage
            var recipes = JSON.parse(localStorage.getItem('recipes')) || [];

            // Remove the recipe at the specified index
            recipes.splice(index, 1);

            // Save the updated array to local storage
            localStorage.setItem('recipes', JSON.stringify(recipes));

            // Update the displayed recipes
            displayRecipes();
        }

        // Display recipes when the page loads
        displayRecipes();
