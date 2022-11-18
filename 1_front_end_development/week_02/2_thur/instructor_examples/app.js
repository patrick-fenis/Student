// ////////////////////////////
// ////////////////////////////
// MATH METHODS
// ////////////////////////////
// ////////////////////////////

// let cartTotal = 16.07

// let roundedUpCart = Math.ceil(cartTotal)
// console.log(roundedUpCart)

// let donation = (roundedUpCart - cartTotal).toFixed(2)

// console.log(donation)

// console.log(Math.random())



// ////////////////////////////
// ////////////////////////////
// Intro to Control Flow
// ////////////////////////////
// ////////////////////////////

// let isMMColorGreen = false

// if(isMMColorGreen){
//   console.log('Eww! I am hurling this gross green M&M across the room!')
// } else {
//   console.log('Yum! M&Ms are so good!')
// }


// const isPartyTonight = true
// const miniGolfCoupon = false
// const saleAtTheMall = false

// if(isPartyTonight){
//   console.log('I am going to party like its 1999!')
// } else if (miniGolfCoupon) {
//   console.log('Hole in one! Woo!')
// } else if (saleAtTheMall){
//   console.log('When you buy more, you save more!')
// } else {
//   console.log('I love cooking cookies!')
// }


// let mmColor = 'blue'

// if (mmColor === 'green') {
//   console.log('Eww! I am hurling this gross green M&M across the room.')
// } else {
//   console.log('Yum! M&Ms are so tasty!')
// }

// if (5 % 2 === 0) {
//   console.log('number is even')
// }

// if(5 % 2 !== 0){
//   console.log('number is odd')
// }

// if(4 % 2){
//   console.log('number is odd')
// } else {
//   console.log('number is even')
// }

// if(49 % 7 === 0){
//   console.log('number is divisible by 7')
// }


// ////////////////////////////
// ////////////////////////////
// Booleans, Conditionals & Loops
// ////////////////////////////
// ////////////////////////////

// for(let step = 0; step < 5; step++){
//   const myName = 'Hunter' + step
//   console.log(myName, ' walking east one step', step)
// }

// sum all even numbers between 0 and 10 inclusive

// let sumOfEvens = 0
// // declare a sum variable equal to 0
// for(let i = 0; i <= 10; i++){
// // write a for loop that runs from 0 to 10 inclusive
//   if(i%2 === 0){
//   // check if the number in the loop is even
//     sumOfEvens += i
//     // if number is even, add to sum
//   }
// }
// console.log(sumOfEvens)
// // after loop completes, console.log the sum

// let sum = 0

// for(let i = 2; i <= 10; i+=2){
//   sum += i
// }

// console.log(sum)


// for(/*variable the loops starts at*/ let asdf = 0; /*conditional statement*/ asdf < 10; /*how are you changing the first variable*/ asdf++){
//   console.log(asdf)
// }

// ////////////////////////////
// ////////////////////////////
// Arrays & Array Iteration
// ////////////////////////////
// ////////////////////////////

// const arr = []

// // console.log(arr)

// const satchel = ['chair', 'table', 'candle', 'map', 'magnifying glass', 'rupees', 'Pepto Bismol', 'boomerang']
// const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// // console.log(squares)

// const favFoods = ['Pesto', 'Chicken Tikka Masala', 'Cheesecake', 'Bacon', 'Pot Roast', 'Peanut Butter', 'Enchiladas', 'Gyros', 'Hummus', 'Gnocchi']

// const index = 2
// console.log(favFoods[index])


// console.log(favFoods.length)

// const drSeussBooks = [
//   'Cat in the Hat', 
//   'Green Eggs and Ham', 
//   'Grinch',
//   'Thing One', 
//   'Thing Two', 
//   'Cindy Loo Who', 
//   'JoJo McDodd'
// ]
// console.log(drSeussBooks[0])

// const third = drSeussBooks[2]
// console.log(third)

// console.log(drSeussBooks[drSeussBooks.length - 1])


// const satchel = ['chair', 'table', 'candle', 'map', 'magnifying glass', 'rupees', 'Pepto Bismol', 'my dog']

// satchel[2] = 'glowing orb'

// console.log(satchel)

// drSeussBooks[4] = null
// console.log(drSeussBooks)

// const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// squares[0] *= 10
// console.log(squares)

// console.log(satchel[Math.floor(satchel.length / 2)])


// const satchel = ['chair', 'table', 'candle', 'map', 'magnifying glass', 'rupees', 'Pepto Bismol', 'my dog']


// for(let i = 0; i < satchel.length; i+=2){
//   console.log('A nimble rogue is trying to steal my: ' + satchel[i] + '!!!')
// }

// const drSeussBooks = ['Cat in the Hat', 'Green Eggs and Ham', 'Grinch',
//               'Thing One', 'Thing Two', 'Cindy Loo Who', 'JoJo McDodd']

// // for(let i = 0; i < drSeussBooks.length; i++){
// //   console.log(drSeussBooks[i])
// // }
// for(let i = 0; i < drSeussBooks.length; i++){
//   if(i % 2 === 0 && i % 3 === 0){
//     console.log(i)
//     console.log(drSeussBooks[i])
//   }
// }

// const pairs = [
//   ['Harold', 'Kumar'], 
//   ['Laurel', 'Hardy']
// ]

// // console.log(pairs.length)
// // console.log(pairs[1][1])
// pairs[1][0] = 'Princess'
// console.log(pairs)

// const confectioneries = [
//   ['Pecan Snickers', 'Dude, Sweet Chocolate Salami'], 
//   [
//     'Lindt truffles', 
//     'Easter egg', 
//     ['kitkat bar 1', 'kitkat bar 2', 'kitkat bar 3', 'kitkat bar 4']
//   ]
// ]

// console.log(confectioneries[1][2][2])


// ////////////////////////////
// ////////////////////////////
// Array Methods
// ////////////////////////////
// ////////////////////////////


const favMovies = [
  'The Matrix',
  'Step Brothers',
  'Spiderman',
  'Longest Yard',
  'Inception', 
  'It', 
  'The 40 Year Old Version', 
  "Terminator", 
  'Anaconda', 
  'Hunger Games', 
  "Downtown Abbey", 
  'Midway'
]

const numbers = [ 10, 35, 1, 12, 2]

// favMovies.sort()
// console.log(favMovies)

console.log(numbers.sort((a, b) => a - b))
console.log(numbers)





















//