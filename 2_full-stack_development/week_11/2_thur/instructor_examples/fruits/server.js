const express = require('express')
const app = express()
const PORT = 3000

const methodOverride = require('method-override')

app.use(methodOverride('_method'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const fruits = require('./models/fruits.js')

app.get('/fruits', (req, res) => {
  // res.send(fruits)
  res.render('index.ejs', {
    allFruits: fruits
  })
})

app.get('/fruits/new', (req, res) => {
  res.render('new.ejs')
})

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  if(fruits[req.params.indexOfFruitsArray]){
    // res.send(fruits[req.params.indexOfFruitsArray])
    res.render('show.ejs', {
      fruit: fruits[req.params.indexOfFruitsArray]
    })
  } else {
    res.send('Could not find fruit at index: ' + req.params.indexOfFruitsArray)
  }
})

app.post('/fruits', (req, res) => {
  console.log(req.body)
  if(req.body.readyToEat == true){
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  fruits.push(req.body)
  console.log(fruits)
  res.redirect('/fruits')
})

app.delete('/fruits/:index', (req, res) => {
  fruits.splice(req.params.index, 1)
  res.redirect('/fruits')
})

app.listen(PORT, () => console.log('listening on port: ' + PORT))