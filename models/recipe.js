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
		(title, link, img, diet, user_id)
		VALUES ($1, $2, $3, $4, $5)
		RETURNING *
		`, [recipe.title, recipe.link, recipe.img, recipe.diet, userid])
}

Recipe.update = (recipe, id) => {
	return db.one(`
		UPDATE favoriterecipes SET
		title = $1,
		link = $2, 
		img = $3, 
		diet = $4, 
		user_id = $5, 
		WHERE id = $6
		RETURNING *`, [favoriterecipes.title, favoriterecipes.link, favoriterecipes.img, favoriterecipes.diet, favoriterecipes.user_id], id)
}

Recipe.destroy = id => {
	return db.none(`
		DELETE FROM favoriterecipes
		WHERE id = $1
		`, [id])
}

module.exports = Recipe;