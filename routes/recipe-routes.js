const express = require('express')
const recipeRoutes = express.Router()

const recipesController = require('../contorllers/recipes-controller')
const usersController = require('../controllers/users-controller')

recipesRoutes.get('/', recipesController.index)

recipesRoutes.get('/add', (req, res) => {
	res.render('favorite_recipes', {
		auth: (req.user) ? true : false,
	})
})

// recipesRoutes.saveToD

recipesRoutes.post('/', recipesController.create)
recipesRoutes.get('/:id', recipesController.show)
recipesRoutes.post('/favorite_recipes/:id', recipesController.create)

recipesRoutes.delete('/:id', recipesController.delete)

module.exports = recipesRoutes