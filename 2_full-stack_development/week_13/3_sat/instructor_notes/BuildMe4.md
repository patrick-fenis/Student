[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Build Auth & Sessions into our Fruits App

## Lesson Objectives

- prevent non-logged in users from accessing parts of the site

## Set up / Planning

- Let's say we only want logged in users to be able to see the details of our fruits.

We can write some good old JS logic. If you are not logged in, you'll be redirected to the log in page. Otherwise you can access the show page.

```js
fruits.get('/:id', (req, res) => {
  if (req.session.currentUser) {
    Fruit.findById(req.params.id, (error, foundFruit) => {
      res.render('fruits/show.ejs', {
        fruit: foundFruit,
        currentUser: req.session.currentUser
      })
    })
  } else {
    res.redirect('/sessions/new')
  }
})
```

It would be annoying to write this logic for every route. We can, write some custom middleware to handle this for us

```js
const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}
```

you can now prevent users who are not logged in from using the put and delete routes

```js
fruits.put('/:id', isAuthenticated, (req, res) =>
```

Bonus
You could also use `.use` to run this middleware above a series of routes. Use the documentation to figure out how!