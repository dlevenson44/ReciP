const Recipe = require('../models/recipe')
const usersController = require('./users-controller')

const recipesController = {}

recipesController.index = (req, res) => {
	Recipe.findByUser(req.user.id)
	.then(recipes => {
		res.status(200).render('favorite_recipes', {
			user: req.user,
			auth: (req.user) ? true : false,
			data: recipes,
		})
	}).catch(err => {
		console.log(err)
		res.status(500).json({error: err})
	})
}

recipesController.show = (req, res) => {
	Recipe.findById(req.params.id)
	.then(recipe => {
		res.status(200).render('favorite_recipes', {recipe,
			auth: (req.user) ? true : false,
			recipe: recipe,
		})
	}).catch(err => {
		console.log(err)
		res.status(500).json({error: err})
	})
}

recipesController.sendApiRecipe = (req, res) => {
	res.json({
        message: `Recipe returned for ${req.params.search}`,
        recipe: res.locals.recipe,
	})
}

recipesController.create = (req, res) => {
	console.log(req.body, 'from create/recipescontroller')
	Recipe.create({
		title: req.body.title,
		link: req.body.link,
		img: req.body.img,
		diet: req.body.diet,
		user_id: req.user.id,
	}).then(recipe => {
		res.redirect(`/favorite_recipes`)
	}).catch(err => {
		console.log(err)
		res.status(500).json({error: err})
	})
}

recipesController.delete = (req, res) => {
	Recipe.destroy(req.params.id)
	.then(() => {
		res.redirect('/')
	}).cathc(err => {
		res.status(500).json({
			err,
		})
	})
}

module.exports = recipesController