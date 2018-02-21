const Favorite = require('../models/recipe')
const favoritesController = {}

favoritesController.index = (req, res) => {
	Favorite.findAll()
	.then(favorites => {
		res.status(200).render('favorite_recipes', {
			auth: (req.user) ? true : false,
			favorites: favorites,
		})
	}).catch(err => {
		console.log(err)
		res.status(500).json({error: err})
	})
}

// favoritesController.show = (req, res) => {
// 	Favorite.findById(req.params.id)
// 	.then(favorite => {
// 		res.status(200).render('favorite_recipes', {
// 			auth: (req.user) ? true : false,
// 			favorite: favorite,
// 		})
// 	}).catch(err => {
// 		console.log(err)
// 		res.status(500).json({error: err})
// 	})
// }

// favoritesController.create = (req, res) => {
// 	Favorite.create({
// 		title: req.body.title,
// 		link: req.body.link,
// 		img: req.body.img,
// 		diet: req.body.diet,
// 		user_id: req.user.id
// 	}).then(favorite => {
// 		res.redirect(`/favorite_recipes`)
// 	}).catch(err => {
// 		console.log(err)
// 		res.status(500).json({error: err})
// 	})
// }

module.exports = favoritesController