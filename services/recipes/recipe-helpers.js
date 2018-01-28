require('isomorphic-fetch')

function getRecipes(req, res, next) {
	fetch('https://api.edamam.com/search', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			api_id: process.env.APP_ID,
			app_key: process.env.APP_KEY,
			data: req.body.search
		})
	}).then(fetchRes => fetchRes.json())
	.then(jsonRes => {
		console.log(jsonRes)
		next()
	}).catch(err => {
		console.log(err)
		next(err)
	})
}

module.exports = {
	getRecipes: getRecipes,
}


