// send favorites to database
const sendToDB = (recipeFavorite) => {
    console.log(`Saving ${recipeFavorite}`)
    $.ajax({
        url: '/favorite_recipes',
        type: 'POST',
        data: recipeFavorite
    })
    .done((data) => {

        window.location = `/favorite_recipes/`
    })
}

// function takes in search value and checks database for recipes
function getRecipes(e) {
    e.preventDefault()
    console.log('clickced')
    fetch(`/recipe/${e.target.search.value}`)
    .then(res => res.json())
    .then(res => {    
        let recipeArray = res.recipe.hits        
        $(".recipe-name").remove()
        $(".recipe-diet").remove()
        $(".recipe-calories").remove()
        $(".recipe-servings").remove()
        $(".recipe-health").remove()
        $(".recipe-link").remove()
        $(".recipe-img").remove()
        $(".submit-button").remove()
        for (let i = 0; i < recipeArray.length; i++) {
            // create containers
            let resultsContainer = document.createElement('div')
            let resultsInfo = document.createElement('div')
            let resultsImg = document.createElement('div')

            // set class names
            $(resultsContainer).attr('class', 'results-container')
            $(resultsInfo).attr('class', 'results-info')
            $(resultsImg).attr('class', 'results-img')

            // append subdivs
            $(".row").append(resultsContainer)
            $(resultsContainer).append(resultsInfo, resultsImg)
            
            // set API data to variables
            let dietLabels = recipeArray[i].recipe.dietLabels
            let healthLabels = recipeArray[i].recipe.healthLabels
            let ingredients = recipeArray[i].recipe.ingredientLines
            let recipeName = recipeArray[i].recipe.label
            let recipeDiet = recipeArray[i].recipe.dietLabels[0]
            let recipeCalories = recipeArray[i].recipe.calories
            let recipeServings = recipeArray[i].recipe.yield
            let recipeHealth = recipeArray[i].recipe.healthLabels[0]
            let recipeIngredients = ''
            let recipeLink = recipeArray[i].recipe.url
            let recipeImg = recipeArray[i].recipe.image

            // initiate form and set attributes
            let form = document.createElement('form')
            $(form).attr('class', 'add-form')

            // initiate button and set attributes
            let button = document.createElement('input')
            $(button).attr('type', 'submit').attr('value', 'Add Favorite').attr('class', 'submit-button')
            button.addEventListener('click', function() {
                e.preventDefault()
                sendToDB(recipeFavorite)
            })

            // create HTML attributes
            let title = document.createElement('h1')
            let diet = document.createElement('p')
            let calories = document.createElement('p')
            let servings = document.createElement('p')   
            let health = document.createElement('p')
            let link = document.createElement('a') 
            let img = document.createElement('img')    

            // set classes
            $(title).attr('class', 'recipe-name')
            $(diet).attr('class', 'recipe-diet')
            $(calories).attr('class', 'recipe-calories')
            $(servings).attr('class', 'recipe-servings')
            $(health).attr('class', 'recipe-health')
            $(link).attr('class', 'recipe-link').attr('href', recipeLink)
            $(img).attr('class', 'recipe-img').attr('src', recipeImg)
            
            // convert calories to calories per serving
            calPerServing = (recipeCalories/recipeServings).toPrecision(4)

            // set innerHTML
            title.innerHTML = recipeName
            calories.innerHTML = calPerServing + ' calories per serving'
            servings.innerHTML = recipeServings + ' servings'
            health.innerHTML = recipeHealth
            link.innerHTML = 'More Info'

            // only append diet label if available, display diet values
            if (dietLabels.length >= 1) {
                diet.innerHTML = recipeDiet
            } else if (dietLabels.length === 0) {
                diet.innerHTML = 'Diet Type Unavailable'
            }

            // append to container
            // $(".container").append(title, calories, servings, health, link, img, form)
            $(resultsInfo).append(title, calories, servings, health, link, form)
            $(resultsImg).append(img)

            // only display add to favorites button if user is logged in
            let buttonSet = $("#logout").html()
            if (buttonSet === '<a href="/auth/logout">Logout</a>') {
                // $(".container").append(button)
                $(resultsInfo).append(button)
            }

            // list all ingredients
            for (let i = 0; i < ingredients.length; i ++) {
                let length = ingredients.length-1
                if (i < length) {
                    recipeIngredients += ingredients[i] + "~"
                } else { 
                    recipeIngredients += ingredients[i]
                }
            }

            // initiate object to add favorite recipes
            const recipeFavorite = {
                title: recipeName,
                diet: recipeDiet,
                calories: calPerServing,
                servings: recipeServings,
                health: recipeHealth,
                ingredient: recipeIngredients,
                link: recipeLink,
                img: recipeImg,
            }
        }
        console.log('done')
    })
}

// add event listener on form to run above function on submit
function getForm() {
    const form = document.querySelector('#request')
    form.addEventListener('submit', (e) => getRecipes(e))
}

document.addEventListener('DOMContentLoaded', getForm)