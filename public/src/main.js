// function takes in search value and checks database for recipes
function getRecipes(e) {
    e.preventDefault()
    fetch(`/recipes/${e.target.search.value}`)
    .then( res => res.json())
    .then(res => {
        console.log(res)
    })
}

// add event listener on form to run above function on submit
function getForm() {
    const form = document.querySelector('#request')
    form.addEventListener('submit', (e) => getRecipes(e))
}

document.addEventListener('DOMContentLoaded', getForm)