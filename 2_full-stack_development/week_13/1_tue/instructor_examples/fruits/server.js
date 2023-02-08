const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Fruit = require('./models/fruits.js')
const fruitsSeed = require('./seedData/data.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/fruits', (req, res) => {
  // res.render('index.ejs')
  Fruit.find((err, fruits) => {
    if(err){
      console.log(err, ': ERROR IN INDEX ROUTE QUERY')
    } else {
      console.log(fruits)
      res.render('index.ejs', {
        fruits: fruits
      })
    }
  })
})

app.get('/fruits/new', (req, res) => {
  res.render('new.ejs')
})

app.get('/fruits/seed', (req, res) => {
  Fruit.create(fruitsSeed, (err, data) => {
    if(err){
      console.log(err, ': ERROR AT SEED ROUTE')
    } else {
      console.log('DATABASE SEEDED SUCCESSFULLY')
      res.redirect('/fruits')
    }
  })
})

app.get('/fruits/:id', (req, res) => {
  // res.render('show.ejs')
  Fruit.findById(req.params.id, (err, foundFruit) => {
    if(err){
      console.log(err, ': ERROR AT FRUITS SHOW ROUTE')
    } else {
      console.log(foundFruit, ': SUCCESS, FOUND FRUIT FOR SHOW ROUTE')
      res.render('show.ejs', {
        fruit: foundFruit
      })
    }
  })
})

app.post('/fruits', (req, res) => {
  console.log(req.body)
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }

  Fruit.create(req.body, (err, createdFruit) => {
    if(err){
      console.log(err)
      res.send(err)
    } else {
      // res.send(createdFruit)
      res.redirect('/fruits')
    }
  })
})



mongoose.connect('mongodb://localhost:27017/basiccrud')
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})



app.listen(3000, () => {
  console.log('listening')
})