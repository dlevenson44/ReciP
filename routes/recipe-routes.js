const express = require('express')
const recipesRoutes = express.Router()
const recipeHelpers = require('../services/recipes/recipe-helpers')

const recipesController = require('../controllers/recipes-controller')
const usersController = require('../controllers/users-controller')

recipesRoutes.get('/add', (req, res) => {
	res.render('favorite_recipes', {
		auth: (req.user) ? true : false,
	})
})

recipesRoutes.get('/:search', recipeHelpers.getRecipes, recipesController.sendApiRecipe)

recipesRoutes.post('/', recipesController.create)
recipesRoutes.get('/:id', recipesController.show)
recipesRoutes.post('/favorite_recipes/:id', recipesController.create)

recipesRoutes.delete('/:id', recipesController.delete)

module.exports = recipesRoutes