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

Index, New and Create has been completed for you.

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

### Upgrade your Create Route
1. upgrade your code to create your log in MongoDB
1. have your route redirect to the show page after create
1. Stretch: make a seed file and seed it

### Index Route
1. In `server.js` make an index route, be sure to follow the Restful convention
1. first, just test it by having it `res.send('index')`
1. Don't forget to fill out your Restful table!
1. create `index.ejs` and change your `res.send` to `res.render` this page
1. upgrade  your route and ejs to render all the logs in your database, just make an unordered list of the titles for now
1. Add a link to the create page

### Show Route
1. Fill out your Restful table
1. In `server.js` make a show route, be sure to follow the Restful convention
1. create a mongo query and `res.send` your data as a string
1. upgrade your `index.ejs` so that each title links to its show page
1. Create a `show.ejs` and add HTML
 - show the title
 - show the entry
 - show whether the ship is broken or not
 - add a link back to the index page
 - bonus:
  - if you had added time stamps to your model, display the date the entry was created
1. upgrade your `res.send` to a `res.render` of your `show.ejs`


---

*Copyright 2021, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
