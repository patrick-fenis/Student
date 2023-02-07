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

### Delete Route
1. Fill out your Restful table
1. in your `index.ejs`, add a delete form
1. install and configure `method-override`
1. upgrade your delete form to have the appropriate action and method
1. make your delete route in your `server.js`
1. make your delete route delete your log and redirect back to your index route


### Edit Route
1. Fill out your Restful table
1. in your `index.ejs`, add a link to your edit route
1. create your edit route in your `server.js`
1. create your `edit.ejs`
1. test it to make sure it works as expected (be sure to populate your form with your log's data)

### Put Route
1. Fill out your Restful table
1. upgrade your` edit.ejs` form to have the appropriate action and method
1. create your PUT route
1. First, just have it `res.send` the updated log and check it is as expected
1. change the `res.send` to a `res.redirect` to your index page

### Router
1. `mkdir controllers`
1. `touch controllers/logs.js`
1. work on refactoring your code so your logs routes are in your controller file, rather than in `server.js`


### Bonuses
1. The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called foodlogs
  1. build out the 7 restful routes for foodlogs, include a new model with whatever properties make sense
1. make a seed file and seed it
1. have your update route redirect to the show page of the log that was edited
1. research `res.redirect('back')`
1. create a seed file and seed your database
1. work on your css, make this Captain's Log look awesome!
1. if you have timestamps, figure out how to edit/display the edited date
1. research ejs partials and implement them

---

*Copyright 2021, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*