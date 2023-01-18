# Intro to REST

## Lesson Objectives

1. Describe REST and list the various routes
1. Create an Index route
1. Install JSONView to make viewing JSON easier
1. Create a Show route
1. Enhance the data in your data array

## Describe REST and list the various routes

- REST stands for Representational state transfer.
- It's just a set of principles that describe how networked resources are accessed and manipulated. In another words it is a way of mapping HTTP routes and the CRUD functionalities.

### What are routes?
Routes are the code that are responsible for listening and receiving requests and then deciding what to send back.

### What is CRUD?
When building APIs, we want to provide the four basic types of functionality. There must be a way to **Create, Read, Update, and Delete** resources.

### The 7 RESTful routes

| **URL** | **HTTP Verb** |  **Action**| **Description** |
|---------|---------------|------------|-----------------|
| /fruits          | **GET**    | index   | List all Fruits |
| /fruits/new      | **GET**    | new     | Show new Fruit form |
| /fruits          | **POST**   | create  | Create new Fruit, then redirect somewhere |
| /fruits/:id      | **GET**    | show    | Show info about one specific Fruit |
| /fruits/:id/edit | **GET**    | edit    | Show edit form for one Fruit |
| /fruits/:id      | **PUT**    | update  | Update a particular Fruit, then redirect somewhere |
| /fruits/:id      | **DELETE** | destroy | Delete a particular Fruit, then redirect somewhere |


## We Do: Setup our app

1.  Create a directory outside of this repo called **`fruits`** (you will be using this folder over the next few days)
1.  Move inside the directory fruits **`cd fruits/`**
1.  Create a **`server.js`** file.
1.  Run the command **`npm init -y`** to initiallize your npm package, the **-y** option will bypass all questions.
1.  Install express by running the command **`npm install express`**.
1.  Open the **`fruits`** directory in your code editor.
1.  In your **`server.js`** set up a basic express app.
1.  start the app with **`nodemon`** and make sure the server is listening.

:elephant:  Need a reminder on how to set up your express app?

```js
const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log("Server is listening!!!")
})
```


## Create an Index route
Let's have a set of resources which is just a javascript array. To create an index route, we'd do the following:

```javascript
const express = require('express')
const app = express()

const fruits = ['apple', 'banana', 'pear']

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.listen(3000, () => {
    console.log('listening')
})
```

Now go to http://localhost:3000/fruits/

## Create a Show route

To create a show route, we'd do this:

```javascript
const express = require('express')
const app = express()

const fruits = ['apple', 'banana', 'pear']

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray])
})

app.listen(3000,function(){
    console.log('listening')
})
```

Now go to http://localhost:3000/fruits/1

## Enhance the data in your data array

- Right now are data array `fruits` is just an array of strings
- We can store anything in the array, though.
- Let's enhance our data a bit:

```javascript
const express = require('express')
const app = express()

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
]

app.get('/fruits', (req, res) => {
    res.send(fruits);
})

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray])
})

app.listen(3000, () => {
    console.log('listening');
})
```