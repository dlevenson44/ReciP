DROP TABLE IF EXISTS favoriterecipes;
CREATE TABLE IF NOT EXISTS favoriterecipes(
	id SERIAL PRIMARY KEY,
	title VARCHAR,
	diet VARCHAR, 
	carories VARCHAR,
	servings INT,
	health VARCHAR,
	ingredient VARCHAR,
	link VARCHAR,
	img VARCHAR
);

CREATE TABLE IF NOT EXISTS users(
	id SERIAL PRIMARY KEY,
	username VARCHAR UNIQUE NOT NULL,
	password_digest TEXT NOT NULL,
	email VARCHAR UNIQUE NOT NULL,
	name VARCHAR
);

ALTER TABLE favoriterecipes
ADD COLUMN user_id INTEGER REFERENCES users(id);