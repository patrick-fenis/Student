[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# The Captain's Log

![Insert Pun Image here](https://i.imgflip.com/2174sq.jpg)

#### Learning Objectives

- Full CRUD app with a mongo database

#### Prerequisites

- JavaScript
- Express / Node
- Mongo / Mongoose

---

## Multi-part/Multi-day Lab

Every great captain, whether on the waters or in the skies, keeps a daily log.

Let's build the perfect Captain's Log App for our extraordinary captains.

There are many ways to get started building an app. This lab follows a specific order for two reasons:
 - to align with the content of lecture
 - to give you an order to guide you to create small bits of functionality and test each one before moving on to the next part

If you finish lab early consider:
  - adding some CSS and practice styling your app
  - try working with the date object! Try to make it look human readable in HTML. It's tricky! [A Hint](https://momentjs.com/)
  - try working through the next section of the lab before it is covered in lecture - see what you can figure out
  - **SUPER BONUS** - Once you finish this whole lab, add a second model for comments, it should have the name of the person who wrote it, and some text for the comment (maybe time stamps?). This model should 'belong' the the post, the data should be related in some way. Do you own research of how to set up a `one-to-many` relationship (one post can have many comments, one comment only belongs to one post), in MongoDB. Use Mongo Documents, Google, or [the class notes](https://git.generalassemb.ly/seirfx-bromeliad/student-resources/tree/main/2_full_stack_dev/week_12/3_sat/instructor_notes) - note we will not have class time to teach a second, related model.

### Set up

Let's keep track of our Restful Routes as we build out our app. Copy/paste this table into a fresh file, open an excel/sheets spreadsheet or draw on a piece of paper. Feel free to add more columns and notes to help you put it all together.

Index, New and Create has been completed for you in the table below.

#### Restful Routes
|#|Action|URL|HTTP Verb|EJS view filename|mongoose method|
|:---:|:---:|:---:|:---:|:---:|:---:|
|1| Index | /logs/ | GET | index.ejs | Log.find()|
|2| Show |||||
|3| New | /logs/new | GET | new.ejs | none |
|4| Create | /logs/ | POST | none | Log.create(req.body)|
|5| Edit |||||
|6| Update |||||
|7| Destroy ||||||

1. In your `student_labs` folder
1. `mkdir captains_log`
1. `cd captains_log`
1. create a new express app

### New
1. create a `new` route in your `server.js` - be sure to follow the Restful convention
 1. just have it `res.send('new')` as the response for now
1. make a views directory
1. install `ejs`
1. `touch views/new.ejs`
1. Create the view, it should contain a form with the following:
  - `form` with `action="/logs"` and `method="POST"`
  - `input` type text for a `title`
  - `input` type textarea for an `entry`
  - `input` type checkbox for `shipIsBroken`
  - `input` type submit
1. change your `res.send` to `res.render` this view

### Create
1. create a `create` route in your `server.js` - be sure to follow the Restful convention
 1. just have it `res.send('received')` as the response for now
1. use and configure `body-parser` in your `server.js` (note, this package was once separate, but has been added back in to express [more details](https://expressjs.com/en/4x/api.html#express.urlencoded)
1. check to make sure it works by changing the `res.send` from a string to sending the `req.body` - it should send the data you inputted to your `new` form
1. upgrade your data
  1. change the input of your checkbox to be true/false rather than `on`
  1. now when you check your `res.send(req.body)` you should see true/false rather than 'on/off' - the rest of your data should stay the same

### Mongo
1. install mongoose and configure it in your `server.js`

### Logs Model
1. `mkdir models`
1. `touch models/logs.js`
1. Create the logs schema
  - title: string
  - entry: string
  - shipIsBroken: Boolean (bonus: set a default to true)
    - Super bonus:
      - as a second argument to mongoose.Schema(), add `{ timestamps: true }`

---

*Copyright 2021, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
