[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Build Auth & Sessions into our Fruits App

## Lesson Objectives

- Set up environment variables

## Set up

- `cd` into the directory where you have your fruits app.

## Set up environment variables

We need a way to protect our sensitive information and a way to store environment variables that are specific to our computer (in contrast to a co-workers computer or the environment in a cloud service).

In our class repo, at the route we have a `.gitignore` file. This file tells git which files to never track. In there it states to never track `node_modules` nor `.env` - that way our values stay safely on our machines.

### in the terminal 
let's set up the environment variables for your port and mongo connection string

- `touch .env`
- `npm install dotenv`


### inside `.env`
```yml
PORT=3000
MONGODBURI=mongodb://localhost:27017/basiccrud
```

**IMPORTANT** this is NOT a JavaScript file.

- No spaces!
- No semi-colons!
- No quotes!

- In `server.js` - under configuration
- `require('dotenv').config()`

The variables will be accessed by `process.env`

```js
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI
```

We should now be able to run nodemon

![](https://i.imgur.com/GAwB5h5.png)

- Go to `/fruits/seed` to seed some data
- Make a fruit
- Update a fruit
- Delete a fruit

<br>

### [Next Step - Set up User MODEL/Controller and Bcrypt](./BuildMe2.md)