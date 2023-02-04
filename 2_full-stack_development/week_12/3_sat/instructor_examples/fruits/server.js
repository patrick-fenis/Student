const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Fruit = require('./models/fruits.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/fruits', (req, res) => {
  Fruit.find((err, fruits) => {
    res.send(fruits)
  })
})

app.get('/fruits/new', (req, res) => {
  res.render('new.ejs')
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
      res.send(createdFruit)
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