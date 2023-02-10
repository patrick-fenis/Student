const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const fruitsController = require('./controllers/fruits.js')
const usersController = require('./controllers/users.js')

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/fruits', fruitsController)
app.use(usersController)

app.get('/', (req, res) => {
  res.send('This app is working')
})

app.get('/fruit/new', (req, res) => {
  res.send('gotcha')
})




mongoose.connect('mongodb://localhost:27017/basiccrud')
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})



app.listen(3000, () => {
  console.log('listening')
})