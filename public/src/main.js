// function takes in search value and checks database for recipes
function getRecipes(e) {
    e.preventDefault()
    console.log('clickced')
    fetch(`/recipe/${e.target.search.value}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)        
        let recipeArray = res.recipe.hits
        $(".recipe-name").empty()
        for (let i = 0; i < recipeArray.length; i++) {
            // set API data to variables
            let dietLabels = recipeArray[i].recipe.dietLabels
            // let healthLabels = recipeArray[i].recipe.healthLabels
            // let ingredients = recipeArray[i].recipe.ingredients
            let recipeName = recipeArray[i].recipe.label
            let recipeDiet = recipeArray[i].recipe.dietLabels[0]
            let recipeCalories = recipeArray[i].recipe.calories
            let recipeServings = recipeArray[i].recipe.yield
            // let recipeHealth = recipeArray[i].recipe.healthLabels[0]
            // let recipeIngredients = recipeArray[i].recipe.ingredients[0]

            // create HTML attributes
            let title = document.createElement('h1')
            let diet = document.createElement('p')
            let calories = document.createElement('p')
            // let servings = document.createElement('p')   
            // let health = document.createElement('p')
            // let ingredients = document.createAttribute('p')         

            // set attributes
            title.setAttribute('class', 'recipe-name')
            diet.setAttribute('class', 'recipe-diet')
            calories.setAttribute('class', 'recipe-calories')
            // servings.setAttribute('class', 'recipe-servings')
            // health.setAttribute('class', 'recipe-health')
            // ingredients.setAttribute('class', 'recipe-ingredient')
            
            // convert calories to calories per serving
            calPerServing = (recipeCalories/recipeServings).toPrecision(4)

            // set innerHTML
            title.innerHTML = recipeName
            calories.innerHTML = calPerServing + ' calories per serving'
            // servings.innerHTML = recipeServings + ' servings'
            // health.innerHTML = recipeHealth
            // ingredients.innerHTML = recipeIngredients

            // only append diet label if available, display diet values
            if (dietLabels.length >= 1) {
                diet.innerHTML = recipeDiet
            } else if (dietLabels.length === 0) {
                diet.innerHTML = 'Diet Type Unavailable'
            }

            // append to container
            $(".container").append(title, diet, calories)
        }
    })
}

// add event listener on form to run above function on submit
function getForm() {
    const form = document.querySelector('#request')
    form.addEventListener('submit', (e) => getRecipes(e))
}

document.addEventListener('DOMContentLoaded', getForm)