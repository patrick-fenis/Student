const express = require('express')
const router = express.Router()
const Fruit = require('../models/fruits.js')
const fruitsSeed = require('../seedData/data.js')

router.get('/', (req, res) => {
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

router.get('/new', (req, res) => {
  res.render('new.ejs')
})

router.get('/seed', (req, res) => {
  Fruit.create(fruitsSeed, (err, data) => {
    if(err){
      console.log(err, ': ERROR AT SEED ROUTE')
    } else {
      console.log('DATABASE SEEDED SUCCESSFULLY')
      res.redirect('/fruits')
    }
  })
})

router.get('/:id', (req, res) => {
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

router.get('/:id/edit', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    if(err){
      console.log(err, ' - ERROR WITH EDIT GET ROUTE')
    } else {
      res.render(
        'edit.ejs',
        {
          fruit: foundFruit
        }
      )
    }
  })
})

router.post('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
  Fruit.findByIdAndDelete(req.params.id, (err, data) => {
    if(err){
      console.log(err, ' - ERROR AT DELETE ROUTE')
    } else {
      res.redirect('/fruits')
    }
  })
})

router.put('/:id', (req, res) => {
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFruit) => {
    if(err){
      console.log(err, ' - ERROR AT PUT ROUTE')
    } else {
      res.redirect('/fruits')
    }
  })
})

module.exports = router