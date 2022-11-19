// console.log('Hello world!')

const printBoo = () => {
  console.log('======='),
  console.log('Boo!'),
  console.log('=======')
}

// printBoo()


// const printSum = () => {
//   console.log(10 + 10)
// }

// printSum()
// let number5 = 5
// number5 += 2

// console.log(number5)

// const printTriangle = () => {
//   let myString = ''
//   for(let i = 0; i < 5; i++){
//     myString += '#'
//     console.log(myString)
//   }
// }

// printTriangle()

// for(let i = 0; i < 20; i++){
//   printTriangle()
// }

// let myString = ''
// for(let i = 0; i < 5; i++){
//   myString += '#'
//   console.log(myString)
// }

// const sayName = (name) => {
//   console.log('Hello, my name is ' + name)
// }

// sayName('Hunter')
// sayName('Soro')
// sayName('Raahima')

// const calculateArea = (length, width) => {
//   console.log(length * width)
// }

// calculateArea(10, 4)

// const printFullName = (firstName, middleName, lastName) => {
//   console.log(firstName + ' ' + middleName + ' ' + lastName)
// }

// printFullName('Hunter', 'Eli', 'Wallen')


// const minusOne = (num) =>{
//   console.log(num - 1)
// }
// minusOne(10);        // 9
// minusOne(100);       // 99
// minusOne(Infinity);  // Infinity


// const makeSentence = (word1, word2, word3) => {
//   console.log('Oh boy, do ' + word1 + ' ' + word2 + ' ' + word3 + ' or what?')
// }
// makeSentence('I', 'want', 'chimichangas');

// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]

// const arrayOfArrays = [
//                   array1, 
//                   array2
//                 ]

// const getLastNestedElement = (asdf) => {
//   const lastElement = asdf[asdf.length - 1]
//   console.log(lastElement[lastElement.length - 1])
// }

// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]

// const arrayOfArrays = [
//                   array1, 
//                   array2
//                 ]

// const getLastElement = (asdf) => {
//   const lastElement = asdf[asdf.length - 1]
//   console.log(lastElement[lastElement.length - 1])
// }
// getLastElement([1, 2, 3, 4, 5, 6]);       // 6
// getLastElement(['a', 'b', 'c']);          // 'c'
// getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]

// const boo = giveMePrintBoo()

// console.log(boo, 'This is the value of boo')

// const ten = () => {
//   return 10
//   console.log(10)
// }

// console.log(8 + ten())

// const calculateArea = (num1, num2) => {
//   let area = num1 * num2
//   return area
// }

// const calculatedAreaOf4Square = calculateArea(4, 4)

// console.log(area)

// console.log(calculatedAreaOf4Square)

// const thisReturnsNothing = () => {
//   console.log('this is before the return')
//   return
//   console.log('this is after the return')
// }

// console.log(thisReturnsNothing())

// const example = (input) => {
//   if (input == 'none'){
//     return 0
//   } else if (typeof input === 'number'){
//     return 'number'
//   }
//   return 1
// }

// console.log(example('none'))
// console.log(example(2))
// console.log(example('Nero'))

// if ('Nero' == 'Nero'){
//   console.log(0)
// } else if (typeof 'Nero' === 'number'){
//   console.log('number')
// }
// console.log(1)




// declare a function called checkPalindrome
const checkPalindrome = (word) => {
  const lowercaseWord = word.toLowerCase()
  // accepts one parameter called word
  const reversedWord = lowercaseWord.split('').reverse().join('')
  // console.log(reversedWord)
  // reverse the word and save it to a new variable
  if(lowercaseWord === reversedWord){
    return true
  }
  return false
  // check if the word argument is === to the reversed word
    // if it is, return true
    // if it isn't, return false
}

console.log(checkPalindrome('mom'), 'mom')
console.log(checkPalindrome('Dad'), 'Dad')
console.log(checkPalindrome('dog'), 'dog')





















//
