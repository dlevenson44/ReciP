const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')


const app = express();
require('dotenv').config()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(cookieParser())
app.use(session({
	secret: process.env.SECRET_KEY,
	resave: false,
	saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})



app.get('/', (req, res) => {
	res.render('index', {
		auth: (req.user) ? true : false,
	})
})

const recipesRoutes = require('./routes/recipe-routes')
app.use('/recipes', recipesRoutes)

const faveRoutes = require('./routes/favorite-routes')
app.use('/favorite_recipes', faveRoutes)

const authRoutes = require('./routes/auth-routes')
app.use('/auth', authRoutes)

const userRoutes = require('./routes/user-routes')
app.use('/user', userRoutes)

app.use('*', (req, res) => {
	res.status(404).send('This is not the page you are looking for.....')
})