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
            let recipeName = recipeArray[i].recipe.label
            let recipeDiet = recipeArray[i].recipe.dietLabels[0]            

            // create HTML attributes
            let title = document.createElement('h1')
            let diet = document.createElement('p')

            // set attributes
            title.setAttribute('class', 'recipe-name')
            diet.setAttribute('class', 'recipe-diet')
            
            // set innerHTML
            title.innerHTML = recipeName
            diet.innerHTML = recipeDiet

            // append to container
            $(".container").append(title, diet)
        }
    })
}

// add event listener on form to run above function on submit
function getForm() {
    const form = document.querySelector('#request')
    form.addEventListener('submit', (e) => getRecipes(e))
}

document.addEventListener('DOMContentLoaded', getForm)