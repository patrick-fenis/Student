const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const bcrypt = require('bcrypt')
const methodOverride = require('method-override')
const fruitsController = require('./controllers/fruits.js')
const usersController = require('./controllers/users.js')
const sessionsController = require('./controllers/sessions_controller.js')

require('dotenv').config()

const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use('/fruits', fruitsController)
app.use('/users', usersController)
app.use('/sessions', sessionsController)

app.get('/', (req, res) => {
  res.send('This app is working')
})

app.get('/fruit/new', (req, res) => {
  res.send('gotcha')
})

mongoose.connect(`${mongodbURI}`)
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

app.listen(PORT, () => {
  console.log('listening')
})