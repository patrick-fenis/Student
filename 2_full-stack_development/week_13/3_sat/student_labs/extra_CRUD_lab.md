[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)
# MEN Stack CRUD Lab (part 1): Create and Read

Come up with something to CRUD that has at least two properties. Don't get carried away (this time).

1. Initialize a git repo.
1. Initialize a Node project.
1. Make an express app that runs.
1. Make a home page at `GET /` that has header and footer partials.  
1. Put a nav in the header partial.  Whenever it makes sense (if a certain page/section of the site is a spot a user might want to get to), add a link to the nav.  
1. Make it render a page for "new". There should be a link to this page in the nav.
1. Make a "create" route.
1. Have the form on "new" page post to the "create" route. A response like "you hit the create route" is good.
1. Connect express to mongo by installing and setting up mongoose. Commit once it logs a successful connection message.
1. Create the schema and model for your thing that you are CRUDding. Commit.
1. Make sure you can concisely and precisely answer these questions:
    * What is a schema?  
    * What is a model?  
    * What is the difference?  
    * What is the relationship between them?
1. In the "create" route, use mongoose to add a document to your database (`.create()`) based on what is in `req.body`. If you're having issues, check: is your `req.body` `undefined`? Where does `req.body` come from? Is there something you need to add to your app to make `req.body` be defined? (Yes, there is.)
1. Make an "index" page which displays all the model instances created by the app so far. This should also have a link in the nav.
1. The "create" route redirect to the index page _after_ the model has been created.
1. Give your app the ability to render a "show" page.
1. Each item on the index page should link to the "show" page for that item.


# MEN Stack CRUD Lab (part 2): Update, Delete, Edit(, and MVC)

Extend the previous lab to have delete, edit, and update functionality.

## Warmup:

1. Make sure you can answer this question: What does it mean to say that you are building a RESTful server?
1. Make sure you can answer this question: What is the difference between REST and HTTP?

## Destroy:

1. Make a delete button by each item in the index (and/or show page).
1. Make a "destroy" route.
1. Have the delete button send a DELETE request to the server.  (hint: `method-override`)
1. Make the "destroy" route delete the item from the database.


## Edit/Update:

1. Make an "edit" route that renders an edit page with the data already in it for that item.
1. Make a link to the "edit" route for each item in the index (and/or in the show page).
1. Make an "update" route.
1. Have the edit page send a PUT request to the "update" route (`method-override`).
1. Make the "update" route update the appropriate document in the database.
1. Make the "update" route send a redirect response telling the client to go to to the index page after the model has been updated.


## Hungry for more:

### [Bootstrap](https://getbootstrap.com/)

Add bootstrap to your project and use some of the basic styling for layout.  

At a basic level, most layout challenges can be solved with [the info on this page](https://getbootstrap.com/docs/4.6/layout/overview/) and [this page](https://getbootstrap.com/docs/4.6/layout/grid/).

Also in the docs, check out the Components section and some of the subsection.  There's a nice collection of other styles you can use to easily get great professional default styling for things like [forms](https://getbootstrap.com/docs/4.6/components/forms/) or [buttons](https://getbootstrap.com/docs/4.6/components/buttons/)
