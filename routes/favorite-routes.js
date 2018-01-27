const express = require('express')
const faveRoutes = express.Router()

const favoriteController = require('../contorllers/recipes-controller')
const usersController = require('../controllers/users-controler')

faveRoutes.get('/', favoriteController.index)
faveRoutes.get('/:id', favoriteController.show)
faveRoutes.post('/', favoriteController.create)

module.exports = faveRoutes