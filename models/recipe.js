const db = require('../db/config')

const Recipe = {}

Recipe.findAll = () => {
	return db.query(`SELECT * FROM favoriterecipes`)
}

Recipe.findByUser = (userid) => {
	return db.query(`SELECT * FROM favoriterecipes WHERE user_id = $1`, [userid] )
}

Recipe.findById = id => {
	return db.one(`
		SELECT * FROM favoriterecipes
		WHERE user_id = $1
		`, [id])
}

Recipe.create = (recipe, userid) => {
	return db.one(`
		INSERT INTO favoriterecipes
		(title, diet, calories, servings, health, ingredient, link, img, user_id)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
		RETURNING *
		`, [recipe.title, recipe.diet, recipe.calories, recipe.servings, recipe.health, recipe.ingredient, recipe.link, recipe.img, recipe.user_id, userid])
}

Recipe.destroy = id => {
	return db.none(`
		DELETE FROM favoriterecipes
		WHERE id = $1
		`, [id])
}

module.exports = Recipe;