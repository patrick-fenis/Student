
// const exponentiate = (base, name = 'Hunter', exponent = 2) => {
//   console.log(exponent, 'this is the exponent value')
//   return base ** exponent
// }

// console.log(exponentiate(4, undefined, 3))

// console.log(exponentiate(4, 4))


// const splitMe = "I am the eggman I am the walrus";

// function splitString(str) {
//   return str.split(" ");
// }

// const newString = splitString(splitMe);

// console.log(newString);
// console.log(splitMe)

// let splitMe = "I am the eggman I am the walrus";

// function splitString() {
//   splitMe = splitMe.split(" ");
// }

// splitString();

// console.log(splitMe);


// multiply(3, 5);

const multiply = (num1, num2) => {
  return num1 * num2;
};

const fiveTimesTwo = multiply(5, 2)

// multiply(3, 5);

// function multiply(num1, num2) {
//   console.log(num1 * num2)
// }

function multiply(num1, num2) {
  console.log('overwritten!')
}
// function declaratio

// What happens when we run this function at this point in the code?
// express();

// var express = function() {
//   console.log("Function expression called.");
// };



// THE THREE OF THESE ARE ALL THE SAME THING!
// const square = num1 => num1 * num1 // implicit return

// const square = (num1) => num1 * num1 // implicit return

// const square = (num1) => { // explicit return
//   return num1 * num1
// }

// let color

// console.log(color)

// const getColor = () => {
//   color = 'red'
// }
// getColor()
// console.log(color)

const getAnotherColor = () => {
  const secondColor = 'green'
  const getThirdColor = () => {
    console.log(secondColor)
    const thirdColor = 'blue'
  }
  getThirdColor()
  console.log(thirdColor)
}
// getAnotherColor()
// console.log(color)


teamName = "Giraffes"; // What scope is this?
var teamCity = "Sioux Falls"; // What scope is this?
let batterName = ''
let pitcherName = 'Some default name'

function playBaseball() {
  // YES
  console.log("From " + teamCity + "..."); // Does this work?
  // YES
  console.log("Welcome the " + teamName + "!"); // Does this work?


  if (teamCity === "Sioux Falls") {
    pitcherName = "Meg"; // What scope is this?
  }
  batterName = "Perry"; // What scope is this?

  // YES
  console.log('Batter from inside the function', batterName); // Does this work?
  // NO
  console.log('Pitcher from inside the function', pitcherName); // Does this work?
}

playBaseball();

// YES
console.log(teamCity); // Does this work?
// YES
console.log(teamName); // Does this work?
// NO
console.log(batterName); // Does this work?
// NO
console.log(pitcherName); // Does this work?




















//