const adventurer = {
  name: 'Link',
  hitpoints: 70,
  belongings: [
    'sword', 
    'sheild', 
    'bow', 
    'tunic', 
    'boots', 
    'pants'
  ],
  companion: {
    name: 'Zelda',
    type: 'Princess',
    companion: {
      name: 'Impa',
      type: 'Wizard',
      belongings: ['stick', 'tunic', 'rock']
    },
  },
}

// adventurer.belongings === ['sword', 'sheild', 'bow', 'tunic', 'boots', 'pants']

// console.log(adventurer.belongings)
// console.log(adventurer.belongings[2])

// for(let i = 0; i < adventurer.belongings.length; i++){
//   console.log(adventurer.belongings[i])
// }

// console.log(adventurer.companion)
// console.log(adventurer.companion.name)

// console.log(adventurer.companion.companion)
// console.log(adventurer.companion.companion.type)
// console.log(adventurer.companion.companion.belongings[2])

// const movies = [ 
//   { 
//     title: "Tokyo Story" 
//   },  
//   { 
//     title: "Paul Blart: Mall Cop" 
//   }, 
//   { 
//     title: "L'Avventura" 
//   } 
// ];

// // console.log(movies[1])
// // console.log(movies[1].title)
// let movieTweet = ''

// for(let i = 0; i < movies.length; i++){
//   movieTweet+=`${i+1}. ${movies[i].title} \n`
// }

// movieTweet = 'Movies for sale: \n' + movieTweet

// console.log(movieTweet)

// let myNum = 2
// myNum /= 5
// console.log(myNum)

// const arrayOfKeys = ['name', 'age']

// const monster = {
//   name: 'Slimer', 
//   age: 6,
//   color: 'red'
// }

// const arrayOfKeys = Object.keys(monster)
// console.log(arrayOfKeys)

// for(let i = 0; i < arrayOfKeys.length; i++){
//   const currentKey = arrayOfKeys[i]
//   console.log(monster[currentKey])
// }

// const someKey = arrayOfKeys[0]

// console.log(monster[someKey])

// const movie = { 
//   title: "L'Avventura", 
//   director: "Michelangelo Antonioni", 
//   year: 1960 
// }

// for(let key in movie){
//   console.log(key)
//   console.log(movie[key])
// }

// const array1 = ['a', 'b', 'c', 'd']

// for(let i = 0; i < array1.length; i++){
//   console.log(array1[i])
// }

// for(let letter of array1){
//   console.log(letter)
// }

// for(let i in array1){
//   console.log(i)
// }


// const someFunction = () => {
//   console.log('oh hello!')
// }


// const foo = {
//   someString: 'this is some string',
//   someArray: [1, 2, 3],
//   someObject: {
//     someKey: 'oh hai!'
//   },
//   someMethod: someFunction,
// }

// foo.someMethod()

const foo = [
  {someProperty: 'weeeee!!!'},
  2,
  3,
  [
    '0,0', '0,1', '0,2'
  ],
  () => {
    console.log('fun!')
  }
]

// console.log(foo[0].someProperty)
// console.log(foo[3][2])
foo[4]()