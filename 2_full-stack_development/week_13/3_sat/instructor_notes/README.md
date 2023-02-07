[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Express - Sessions | Environment Variables | Bcrypt

## Lesson Objectives

- Explain the difference between cookies and session
- Set up environment variables
- Use express-session package as middleware
- Save user information on the session object
- Retrieve user information saved on the session object
- Update user information saved on the session object
- Destroy the session
- Explain what bcrypt does
- Include bcrypt package
- Hash a string using bcrypt
- Compare a string to a hashed value to see if they are the same

## Explain the difference between cookies and session

Cookies are little strings of data that get stored on your computer so that, when you return to a web page, it will remember what you did the last time you were there. You can specify how long a cookie will stay around on a browser before it "expires" or is deleted. This can be a specific date, or it can end as soon as the user closes their browser.

The problem with cookies is that if you store sensitive information in them (usernames, etc), someone could take the computer and view this sensitive information just by opening up the web browser. Sessions are basically cookies, but the server stores the sensitive info in its own memory and passes an encrypted string to the browser, which gets stored in the cookie. The server then uses this encrypted string to know what was saved on the user's computer.

Sessions typically only last for as long as the user keeps their window open, and aren't assigned a specific date to expire. **BE CAREFUL: IF YOU RESTART YOUR SERVER, IT WILL LOSE ALL MEMORY OF THE SESSIONS IT CREATED, AND USERS' SESSIONS WILL NOT WORK**

## Set up environment variables

We need a way to protect our sensitive information and a way to store environment variables that are specific to our computer (in contrast to a co-workers computer or the environment in a cloud service).

In our class repo, at the root we have a `.gitignore` file. This file tells git which files to never track. In there it states to never track `node_modules` nor `.env` - that way our values stay safely on our machines.

- make sure you are on the same level as your `package.json`
- `npm install` (install dependencies - for this project)
- `touch .env`
- `npm install dotenv`
- in `.env` let's set up the environment variables for your port and mongo connection string

![](https://i.imgur.com/AcaWX7j.png)

**IMPORTANT** this is NOT a JavaScript file.

- No spaces!
- No semi-colons!
- No quotes!

- In `server.js`
- `require('dotenv').config()`

```js
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI
```

## Use express-session package as middleware

Install

```
npm install express-session
```

Require in `server.js`

```javascript
const session = require('express-session')
```

Use

```javascript
app.use(
  session({
    secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
  })
)
```

## Save user information on the session object

For each of the routes you create, the `req` variable will now have a session property which is itself an object. You can put things on this.

```javascript
app.get('/any', (req, res) => {
  //any route will work
  req.session.anyProperty = 'any value'
})
```

## Retrieve user information saved on the session object

Once you add a property onto the session object, you can retrieve it when a user navigates to any other route. Then you can use it to make decisions based on the design of your application. Remember though, this session will end when the user closes their browser, or you restart your sever app.

```javascript
app.get('/retrieve', (req, res) => {
  //any route will work
  if (req.session.anyProperty === 'something you want it to') {
    //test to see if that value exists
    //do something if it's a match
    console.log('it matches! cool')
  } else {
    //do something else if it's not
    console.log('nope, not a match')
  }
  res.redirect('/')
})
```

## Update user information saved on the session object

You can overwrite a session value somewhere else too, just like any other property on a normal JS object.

```javascript
app.get('/update', (req, res) => {
  //any route will work
  req.session.anyProperty = 'changing anyProperty to this value'
  res.redirect('/')
})
```

## Destroy the session

Lastly, you can forcibly destroy a session before a user closes their browser window.

```javascript
app.get('/destroy-route', () => {
  //any route will work
  req.session.destroy(err => {
    if (err) {
      //do something if destroying the session fails
    } else {
      //do something if destroying the session succeeds
    }
  })
  res.redirect('/')
})
```


## Explain what bcrypt does

bcrypt is a package that will encrypt passwords so that if your database gets hacked, people's passwords won't be exposed

## Include bcrypt package

Standard install

```
npm install bcrypt
```

and require

```javascript
const bcrypt = require('bcrypt')
```

## Hash a string using bcrypt

bcrypt does this thing called "salting" a string. It requires you to generate a salt which is used in the encryption process. This must be generated each time you hash a string. If you don't do this, the same string will get hashed to the same value each time. If this were to happen, someone with a common password could hack the database and see who else's hashed password had the same value as theirs and know that they have the same password as them.

```javascript
const hashedString = bcrypt.hashSync('yourStringHere', bcrypt.genSaltSync(10))
```

## Compare a string to a hashed value to see if they are the same

Because the same string gets encrypted differently every time, we have no way of actually seeing what the value of the string is. We can compare it to another string and see if the two are "mathematically" equivalent.

```javascript
bcrypt.compareSync('yourGuessHere', hashedString) //returns true or false
```

<br>


### [Next Step - Set up environment variables](./BuildMe1.md)
