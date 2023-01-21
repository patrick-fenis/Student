const express = require('express')
const app = express()
const PORT = 3000

const fruits = [
  {
    name: 'apple', 
    color: 'red',
    readyToEat: true
  },
  {
    name: 'banana', 
    color: 'yellow',
    readyToEat: true
  },
  {
    name: 'pear',
    color: 'green',
    readyToEat: false
  }
]

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  if(fruits[req.params.indexOfFruitsArray]){
    res.send(fruits[req.params.indexOfFruitsArray])
  } else {
    res.send('Could not find fruit at index: ' + req.params.indexOfFruitsArray)
  }
})


app.listen(PORT, () => console.log('listening on port: ' + PORT))