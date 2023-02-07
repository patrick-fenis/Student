[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Express Router

## Lesson Objectives

1. Explain What Express.Router does
1. Create External Controller File for Routes
1. Move Server.js Routes to External Controller File
1. Require Mongoose in Controller File
1. Use Controller File in Server.js
1. Remove References to Base of Controller's URLs

## Explain What Express.Router does

- Our server.js file is getting rather bloated
- express.Router will let us put our routes in a separate file

## Create External Controller File for Routes

1. `mkdir controllers`
1. `touch controllers/fruits.js`
1. Edit controllers/fruits.js

```javascript
const express = require('express')
const router = express.Router()

module.exports = router;
```

## Move Server.js Routes to External Controller File

rename `app` to `router`

```javascript
const express = require('express')
const router = express.Router()

router.get('/fruits/new', (req, res)=>{
    res.render('new.ejs')
})

router.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false
    }
    Fruit.create(req.body, ()=>{
        res.redirect('/fruits')
    })
})

router.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('index.ejs', {
            fruits: allFruits
        })
    })
})

router.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('show.ejs', {
            fruit:foundFruit
        })
    })
})

router.delete('/fruits/:id', (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/fruits')
    })
})

router.get('/fruits/:id/edit', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
        res.render(
    		'edit.ejs',
    		{
    			fruit: foundFruit //pass in found fruit
    		}
    	)
    }
})

router.put('/fruits/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    //{new: true} tells mongoose to send the updated model into the callback
    Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel)=>{
        res.redirect('/fruits')
    })
})

module.exports = router
```

## Require Fruit Model in Controller File

```javascript
const express = require('express')
const router = express.Router()
const Fruit = require('../models/fruits.js')
//...
```

The `Fruit` model is no longer needed in `server.js`.  Remove it:

```javascript
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
```

## Use Controller File in Server.js

```javascript
const fruitsController = require('./controllers/fruits.js')
app.use(fruitsController)
```

## Remove References to Base of Controller's URLs

You can specify when a middleware runs

```javascript
const fruitsController = require('./controllers/fruits.js')
app.use('/fruits', fruitsController)
```

Since we've specified that the controller works with all urls starting with /fruits, we can remove this from the controller file:

```javascript
const express = require('express')
const router = express.Router()

router.get('/new', (req, res)=>{
    res.render('new.ejs')
})

router.post('/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false
    }
    Fruit.create(req.body, ()=>{
        res.redirect('/fruits')
    })
})

router.get('/', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('index.ejs', {
            fruits: allFruits
        })
    })
})

router.get('/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('show.ejs', {
            fruit:foundFruit
        })
    })
})

router.delete('/:id', (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/fruits')
    })
})

router.get('/:id/edit', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
        res.render(
    		'edit.ejs',
    		{
    			fruit: foundFruit //pass in found fruit
    		}
    	)
    })
})

router.put('/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    //{new: true} tells mongoose to send the updated model into the callback
    Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel)=>{
        res.redirect('/fruits')
    })
})

module.exports = router
```