const express = require('express')
const app = express()


app.get('/', (req, res) => {
  // console.log('This is a console.log')
  console.log(res)
  res.send('Hello world!')
})

app.get('/puppies', (req, res) => {
  res.send('I love puppies!')
})

app.get('/myName', (req, res) => {
  res.send('Hunter Wallen')
})

app.get('/addTwoPlusTwo', (req, res) => {
  const getSumTheHardWay = (2 * 2 * 2) - 6
  res.send(`${getSumTheHardWay}`)
})

app.get('/addtwoplustwo', (req, res) => {
  res.send('second add two numbers route')
})

app.get('/somedata', (req, res) => {
  res.send('here is your information')
})

app.listen(3001, () => {
  console.log('app is listening')
})