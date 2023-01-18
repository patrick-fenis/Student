![GA LOGO](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Superheroes need REST Too (Index/Show)

#### Learning Objectives

- Setting up a basic express server

#### Prerequisites

- JavaScript
- Express

---

## Getting Started with a Basic Express App

1. Create a new directory inside your labs directory called **`superheroes`**.
1. Move into the **`superheroes`** directory.
1. Create a **`server.js`** file.
1. Run the command **`npm init -y`** to initiallize your npm package, the **-y** option will bypass all questions.
1. Install express by running the command **`npm install express`**.
1. In your **`server.js`** set up a basic express app.
1. have app listen on port 3000
   - once it's listening, log "Here to save the day..."
1.  start the app with **`nodemon`** and make sure the server is listening.


## Creating Routes

1. Create a variable called `superheroes` and set it to

```js
[ 'Superman', 'Wonder Woman', 'Black Panther' ]
```

2. **INDEX** - Create a route to `/superheroes`, which will be the `index`
   - The route should send the entire superheroes array

3. **SHOW** - Create a route to `/superheroes/:index`, which will be the `show` route
   - The route should send the superhero that is at the index in the superheroes array as specified by `req.params.index`

## Enhancing Data

1. Change the entries in the superheroes array so that each element in the array is an object
   - E.g. Instead of 'superman' have: `{ name: "Superman", powers: ['flight', 'invulnerability', 'x-ray vision']}`
1. Upgrade your `res.send` on the `show` route to send the superhero name as an `h1` and then the powers as `li` items in an `ul` ( hint: use string interpolation or string concatenation )
1. Writing HTML this way is really tedious and hard to read...I wonder if we'll learn a better way to do this soon?

### Add Villians!

1. Bring in this data

```js
[
  {
    name: "Lex Luthor",
    powers: ["super brain"],
  },
  {
    name: "Ares",
    powers: ["shape shifting", "teleporting"],
  },
  {
    name: "Killmonger",
    powers: [
      "ability to fit in Black Panther's suit",
      "internet agreement that he looks badass",
    ],
  },
];
```

1. Render them in the index below our heroes
1. Render show routes for these guys, that have the powers listed (just like superheroes)

1. On the show page of the superhero, show the villains' name (hint: the villians array index position matches the hero)

Hints:

- It's all just JavaScript! Do JS things to manipulate the 'data'

---

# Hungry for more?

## Friends

Let's do another rep with setting up an express server!

1. move back into the labs directory
1. create a directory called `friends`
1. cd into `friends`
1. Create a basic express app
1. Create a variable inside `server.js` that is an array of your friends
1. Create `index` and `show` routes
1. Enhance the data so that each friend is an object with age, location, eyeColor, hairColor attributes
1. The `index` should be a name that links to the show page
1. the `show` route should show all the details of your friend

---

_Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_