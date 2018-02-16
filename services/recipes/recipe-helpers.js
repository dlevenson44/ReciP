require('isomorphic-fetch')
require('dotenv').config()

function getRecipes(req, res, next) {
	fetch(`https://api.edamam.com/search?q=${req.params.search}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=0&to=25`)
	.then(res => res.json())
	// use res.locals to attach data to repsonse object
	.then(fetchRes => {
		res.locals.recipe = fetchRes
		next()
	})
}

module.exports = {
	getRecipes: getRecipes,
}


