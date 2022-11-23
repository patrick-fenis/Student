// console.log('Hello world!')

// alert('This is an alert!')

// User can buy apples
  // X - User can have money 
  // User can check how much money they have
  // User can decide whether to buy an apple

// User can eat apples
  // X - User can have apples
  // User can check how many apples they have
  // User can decide whether or not to eat an apple


// ---------- VARIABLES ---------
let wallet = 20
// make a wallet variable that holds amount of money a user  has
let pocket = ['Granny Smith', 'Empire', 'Fuji']
// make a pocket variable that holds an array of apples the user has
let groceryStore = ['Granny Smith', 'Empire', 'Fuji', 'Gala', 'Golden Delicious', 'Honeycrisp']
// make a groceryStore variable that holds an array of apples for sale
    // Each apple is defined by a string associated with it's name
const applePrice = 2
// make a applePrice variable that holds the price of apples in dollars

// ---------- FUNCTIONS ----------
// declare a function so user can buy an apple
const buyApple = () => {
  // name of function is buyApple
  alert("You have $" + wallet + ".")
    // Tell the user how much money they have
  alert("The grocery store has the following apples: " + groceryStore.join(', '))
    // Show the user the apples available in the store (ie display the array associated with groceryStore)
  alert("Apples cost $" + applePrice + " each.")
    // Tell the user the price of an apple
  const wantsToBuyApple = prompt('Would you like to buy an apple?', 'yes | no')
    // Ask the user if they would like to buy an apple
  if(wantsToBuyApple === 'yes'){
      // if they do
    const appleToBuy = prompt("Which apple do you want to buy?", groceryStore.join(' | '))
        // Ask the user which apple they want to buy (get the answer in the form of string associated with apple name)
    if(groceryStore.includes(appleToBuy)){
      for(let i = 0; i < groceryStore.length; i++){
          // Find the apple in the groceryStore array and remove it
        if(appleToBuy === groceryStore[i]){
            // Use a for loop to check each apple in the array until I find one that matches the user input
          groceryStore.splice(i, 1)
            // When I do, use splice to remove that apple
        }
      }
      pocket.push(appleToBuy)
          // Add the apple to the pocket of the user
            // use push to add apple to user pocket variable
      wallet -= applePrice
          // Subtract the cost of the apple from the wallet variable
    } else {
      alert('We do not carry that kind of apple, leave!')
      return
    }

  } else {
      // else
    return
        // end the function
  }
}

// declare a function so user can eat an apple
const eatApple = () => {
  // name our function eatApple
  alert('You have the following apples in your pocket: ' + pocket.join(', '))
    // Tell the user which apples they have to choose from
      // display the array of apple strings in the pocket variable
  const wantsToEat = prompt('Are you hungry?', 'yes | no')
    // Ask the user if they want to eat one of the apples (boolean)
  if(wantsToEat === 'yes'){
      // if they do
    const appleToEat = prompt('Which apple do you want to eat?', pocket.join(' | '))
        // Ask the user which apple they want to eat (get the answer in the form of a string associated with the apple name)
    if(pocket.includes(appleToEat)){
      for(let i = 0; i < pocket.length; i++){
          // Find the apple in the pocket array
            // edge case: if apple is not found, ask for the apple name again from the user
        if(pocket[i] === appleToEat){
          pocket.splice(i, 1)
          // Remove the apple from the array
        }
      }
      alert('Mmmmmmm! ' + appleToEat + ' apples are delicious!')
          // Show the user some feedback that they ate the apple
    } else {
      alert('You can\'t eat an apple you don\'t have!')
      return
    }
  } else {
      // else
    return
        // end the function
  }
}

// -------------- GAMEPLAY FN ------------
const firstRun = () => {
  alert('Welcome to the apple game! You can buy or eat apples until you get bored!')
  // Tell the user they're playing a game
}

const hasBothApplesAndMoney = () => {
  const userChoice = prompt('Do you want to buy apples or eat apples?', 'buy | eat | restart | quit')
  return userChoice
}

const hasOnlyApples = () => {
  const userChoice = prompt('Do you want to buy apples or eat apples?', 'eat | restart | quit')
  if(userChoice !== 'buy') {
    return userChoice
  } else {
    hasOnlyApples()
  }
}

const hasOnlyMoney = () => {
  const userChoice = prompt('Do you want to buy apples or eat apples?', 'buy | restart | quit')
  if(userChoice !== 'eat'){
    return userChoice
  } else {
    hasOnlyMoney()
  }
}

const hasNoApplesOrMoney = () => {
  alert('You have no apples or money so you should probabaly either restart the game or just go get a life!')
  const userChoice = prompt('Which would you rather do?', 'restart | quit')
  if(userChoice !== 'eat' && userChoice !== 'buy'){
    return userChoice
  } else {
    hasNoApplesOrMoney()
  }
}

// Setup Gameplay function
const gameLogic = () => {
  // Name function startGame
  alert('You have $' + wallet + ' and the following apples: ' + pocket.join(', '))
    // Give the user game choices (buy apples, eat apples)
  let userChoice = ''
  if(pocket.length > 0 && wallet > 0){
    userChoice = hasBothApplesAndMoney()
  } else if (pocket.length <= 0 && wallet > 0){
    userChoice = hasOnlyMoney()
  } else if (pocket.length > 0 && wallet <= 0){
    userChoice = hasOnlyApples()
  } else {
    userChoice = hasNoApplesOrMoney()
  }
    // Ask the user to input which they'd prefer to do
  if(userChoice === 'buy'){
    buyApple()
    gameLogic()
      // if buy apples
        // invoke buyApples fn
  } else if (userChoice === 'eat'){
    eatApple()
    gameLogic()
      // if eat apples
        // invoke eatApples fn
  } else if (userChoice === 'quit' || userChoice === null){
    return
  } else if (userChoice === 'restart'){
    resetGame()
  } else {
    gameLogic()
        // else restart game function and ask again 
        // invoke startGame fn again
  }
}

const playGame = () => {
  firstRun()
  gameLogic()
}

const resetGame = () => {
  wallet = 20
  pocket = ['Granny Smith', 'Empire', 'Fuji']
  groceryStore = ['Granny Smith', 'Empire', 'Fuji', 'Gala', 'Golden Delicious', 'Honeycrisp']
  playGame()
}

playGame()



// -------- IN CLASS EXAMPLES ---------
// alert("You have " + pocket.length + ' apples and $' + wallet)
// const choice = prompt("What do you want to do?", "buy apple/ eat apple / quit")
// console.log(choice)

// let action = null

// while(action !== 'stop'){
//   action = prompt('What do you want to do?', 'Your action here!')
// }