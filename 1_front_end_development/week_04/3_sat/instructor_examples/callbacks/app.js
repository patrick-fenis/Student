// console.log('hello world')


// HIGHER ORDER FN
const calculator = (actionFn, num1, num2) => {
  const someResult = actionFn(num1, num2)
  printResult(someResult)
}


// CALLBACK FNS
const add = (num1, num2) => {
  return num1 + num2
}
const printResult = (result) => {
  console.log(`The result is ${result}`)
}

// calculator(add, 2, 3)
// calculator((num1, num2) => num1 + num2, 2, 3)


// setTimeout(() => console.log('this is a timeout fn'), 5000)
// setTimeout(() => calculator(add, 2, 3), 0)


const socky = () => {
  console.log('I will happily iron your socks!')
}

const foodie = () => {
  console.log('I will sort your M&Ms so you never encounter a green one!')
}

const pr = () => {
  console.log('I will make sure everyone knows you are the best boss ever!')
}

const boss = (employeeFn) => {
  console.log('I am the boss and you will do as I say!')
  employeeFn()
}

// boss(socky)
// boss(foodie)
// boss(pr)

// boss(() => console.log('I\'ll still hand grand your coffee beans even though you never remember my name!'))

const capitalize = (word) => {
  return word[0].toUpperCase() + word.substring(1)
}

const excitedWords = (word) => {
  return word + '!'
}

const handleWords = (str, cb) => {
  const arr = str.split(' ')
  const newArr = []
  for(let word of arr){
    newArr.push(cb(word))
  }
  const result = newArr.join(' ')
  return result
}


console.log(handleWords('hello, how are you?', capitalize))
console.log(
  handleWords('I am fine, how are you?', excitedWords))



console.log(
  handleWords(
    handleWords('omg hi how are you', capitalize),  // 'Omg Hi How Are You'
    excitedWords
  )
)