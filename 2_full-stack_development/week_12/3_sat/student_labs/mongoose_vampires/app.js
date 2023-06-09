/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose')
const seedData = require('./models/seed_vampires.js')
const Vampire = require('./models/vampire.js')

// Configuration

const mongoURI = ‘mongodb://localhost:27017/’ + ‘./vampire’
const db = mongoose.connection

// Connect to Mongo
mongoose.connect( mongoURI )

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

db.on( 'open' , ()=>{
  console.log('Connection made!')
})

/**********************************************************************
Write Your Code Below
**********************************************************************/
// Vampire.create([{"name":"alucard", "gender":"female"}], (err, vampires)=>{
//   if(err){ console.log(err) }
//   else { console.log(vampires)}
//   db.close()
// })
Vampire.find({}, (err, vampires)=>{

})
