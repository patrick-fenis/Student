require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
console.log(process.env.FIRSTNAME)

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"]

app.get('/', (req, res) => {
  console.log(res)
  res.send('Welcome to Botany Express')
})

app.get('/plants', (req, res) => {
  res.send('Let me know what plants you want to buy.')
})

app.get('/plants/new', (req, res) => {
  res.send('Here are our new plants')
})

app.get('/:indexOfPlantsArray', (req, res) => {
  console.log(res)
  if(plants[req.params.indexOfPlantsArray]){
    res.send(plants[req.params.indexOfPlantsArray])
  } else {
    res.send('Cannot find anything at index: ' + req.params.indexOfPlantsArray)
  }
})

app.get('/hello/:firstname/:lastname', (req, res) => {
  console.log(req)
  res.send(`Hello, ${req.params.firstname} ${req.params.lastname}`)
})

app.get('/howdy/:name', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(`Hello ${req.query.title} ${req.params.name}`)
})

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT: ${PORT}`)
})