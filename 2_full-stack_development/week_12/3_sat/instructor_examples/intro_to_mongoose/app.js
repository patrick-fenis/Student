const mongoose = require('mongoose')
const Tweet = require('./tweet.js')

const mongoURI = 'mongodb://localhost:27017/' + 'tweets'
const db = mongoose.connection


mongoose.connect(mongoURI, () => {
  console.log('the connection with mongod is established')
})


db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('disconnected'))


const myFirstTweet = {
  title: 'Deep Thoughts',
  body: 'Friends, I have been navel-gazing',
  author: 'Karolin'
}

const manyTweets = [
  {
    title: 'Deep Thoughts',
    body: 'Friends, I have been navel-gazing',
    author: 'Karolin'
  },
  {
    title: 'Sage Advice',
    body: 'Friends, I am vegan and so should you',
    author: 'Karolin',
    likes: 20
  },
  {
    title: 'Whole Reality',
    body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
    author: 'Karolin',
    likes: 40
  },
  {
    title: 'Organic',
    body: 'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
    author: 'Karolin',
    likes: 162
  },
  {
    title: 'Confusion',
    body: 'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
    author: 'Karolin',
    likes: -100
  },
  {
    title: 'Vespa',
    body: 'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
    author: 'Karolin',
    likes: 2
  },
  {
    title: 'Licensed',
    body: 'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
    author: 'Karolin',
    likes: 3
  },
  {
    title: 'Water',
    body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
    author: 'Karolin',
  },
]

// Tweet.create(myFirstTweet, (error, tweet) => {
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(tweet)
//   }
//   db.close()
// })

// Tweet.insertMany(manyTweets, (error, tweets) => {
//   if(error){
//     console.log(error)
//   } else {
//     console.log(tweets)
//   }
//   db.close()
// })

// const incorrectTweet = {
//   title: [1, 2, 3, 4],
//   body: 'Friends, I have been navel-gazing',
//   author: 'Karolin'
// }

// Tweet.create(incorrectTweet, (error, tweet) => {
//   if(error){
//     console.log(error)
//   } else {
//     console.log(tweet)
//   }
//   db.close()
// })

// Tweet.find((err, tweets) => {
//   console.log(tweets)
//   db.close()
// })

// Tweet.find({title: 'Water'}, (err, tweet) => {
//   console.log(tweet)
//   db.close()
// })

// Tweet.find({likes: {$gte: 20}}, (err, tweets) => {
//   console.log(tweets)
//   db.close()
// })

// Tweet.findOne({title: 'Water'}, (err, tweet) => {
//   console.log(tweet)
//   db.close()
// })

// Tweet.findById("63de757fc1839c6b23154d69", (err, tweet) => {
//   console.log(tweet)
//   db.close()
// })

// Tweet.findOneAndRemove({title: 'Deep Thoughts'}, (err, tweet) => {
//   if(err){
//     console.log(err)
//   } else {
//     console.log('This tweet has been deleted: ', tweet)
//   }
//   db.close()
// })

// Tweet.findByIdAndRemove("63de757fc1839c6b23154d69", (err, tweet) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('This tweet has been removed: ', tweet)
//   }
//   db.close()
// })

// Tweet.findOneAndUpdate({title: 'Confusion'}, {sponsored: true, author: 'Hunter'}, {new: true}, (err, tweet) => {
//   if(err){
//     console.log(err)
//   } else {
//     console.log(tweet)
//   }
//   db.close()
// })

// Tweet.find({title: 'Confusion'}, (err, tweet) => {
//   console.log(tweet)
//   db.close()
// })


// Tweet.countDocuments({like: {$gte: 20}}, (err, tweets) => {
//   console.log(tweets)
//   db.close()
// })


// Tweet.find({likes: {$gte: 20}}).limit(2).sort('title').exec((err, tweets) => {
//   console.log(tweets)
//   db.close()
// })



