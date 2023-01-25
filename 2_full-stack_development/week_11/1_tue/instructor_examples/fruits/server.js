const express = require('express')
const app = express()
const PORT = 3000

const fruits = require('./models/fruits.js')

app.get('/fruits', (req, res) => {
  // res.send(fruits)
  res.render('index.ejs', {
    allFruits: fruits
  })
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

app.listen(PORT, () => console.log('listening on port: ' + PORT))