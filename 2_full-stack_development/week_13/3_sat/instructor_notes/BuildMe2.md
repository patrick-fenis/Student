[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Build Auth & Sessions into our Fruits App

## Lesson Objectives

- add users model and controller
- add bcrypt and hash the password

## Set up / planning

- We only need two routes for our user
- the new form to sign up a new user
- the post route to create a new user
- We want users to have their passwords encrypted on sign up

## Users model

- on same level as `package.json`
- `npm install bcrypt`

### in `models/users.js`

```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  username: { type: String, unique: true, required: true },
  password: String
})

const User = mongoose.model('User', userSchema)

module.exports = User
```

### in `server.js`

```js
const userController = require('./controllers/users_controller.js')
app.use('/users', userController)
```

### in `controllers/users_controller.js`

```js
const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

users.get('/new', (req, res) => {
  res.render('users/new.ejs')
})

users.post('/', (req, res) => {
  //overwrite the user password with the hashed password, then pass that in to our database
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    console.log('user is created', createdUser)
    res.redirect('/')
  })
})

module.exports = users
```

Check console for successful creation of user

![](https://i.imgur.com/Ny4C43Q.png)


<br>

### [Next Step - Sessions Controller and Check password](./BuildMe3.md)