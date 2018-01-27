const express = require('express')
const faveRoutes = express.Router()

const favoriteController = require('../controllers/recipes-controller')
const usersController = require('../controllers/users-controller')

faveRoutes.get('/', favoriteController.index)
faveRoutes.get('/:id', favoriteController.show)
faveRoutes.post('/', favoriteController.create)

module.exports = faveRoutes