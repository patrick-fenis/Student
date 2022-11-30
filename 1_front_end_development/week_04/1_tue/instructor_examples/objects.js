// const car = {
//   make: 'Ford',
//   model: 'F150 Raptor',
//   year: 2022,
//   color: {
//     exteriorColor: 'black',
//     interiorColor: 'black',
//     accentColor: 'code orange'
//   },
//   hp: 560,
//   specs: {
//     topSpeed: 140,
//     engineCapacity: '5.3 L',
//     10: 'ten',
//   }
// }

// console.log(car.specs)
// console.log(car.color.exteriorColor)
// console.log(car['color']['interiorColor'])
// console.log(car.color['accentColor'])

// const house = {
//   doors: 9,
// }

// house.windows = 30
// house.doors = 15
// house['windows'] = 35

// console.log(house)


// const cat = {
//   name: 'Sasha',
//   age: 2,
//   favoriteThings: ['laser pointer', 'canned food'],
//   speaksFrench: false,
//   canSolveRubiks: false,
// }

// cat.name = 'Monroe'

// console.log(cat)

// const doggieDaycareRoster = [
//   'Kurt',
//   'Nero',
//   'Spike',
//   'Floofy',
//   'Shadow'
// ]

// doggieDaycareRoster[2] = 'Bowser'
// console.log(doggieDaycareRoster)

// const borough = {
//   name: 'Brooklyn',
//   name2: 'The Bronx',
//   name3: 'The Bronx',
//   name4: 'The Bronx'
// }
 
// console.log('name' === 'name2')


// console.log(borough)

// console.log(borough['name'+3]) // 'name3'
// console.log(borough["name"])

// borough['Is it cold there?'] = true
// console.log(borough['Is it cold there?'])

// const sheepCounter = {}
// for(let i = 0; i < 100; i++){
//   sheepCounter['key' + i] = 100 - i
// }
// console.log(sheepCounter)

// const obj = {
//   '1One': 'one',
// }
// console.log(obj['1One'])

// const obj = {
//   whatevs: 'hi',
//   count: 4
// }

// if(obj.whatevs === 'bye'){
//   console.log('ok')
// }

// for(let i = 0; i < obj.count; i++){
//   console.log(i)
// }

// if(obj.name){
//   console.log('name exists')
// }

// if(obj.name){
//   console.log('name exists')
// } else {
//   console.log('name does not exist')
// }

// This is an object representing Hunter's new truck
// const car = {
//   make: 'Ford', 
//   model: 'F150 Raptor', 
//   year: 2022, 
//   color: {
//     exteriorColor: 'black',
//     interiorColor: 'black',
//     accentColor: 'code orange'
//   }, 
//   hp: 560,
//   specs: { 
//     topSpeed: 140,
//     engineCapacity: '5.3 L',
//     10: 'ten', 
//     builtAt: { 
//       city: 'Detroit', 
//       time: '11:34AM' 
//     }
//   }
// }

// console.log(car.location.home.address.city)

const firstName = 'Hunter'
const middleName = 'Eli'
const lastName = 'Wallen'
const birthYear = 1991

// const fullName = firstName + ' ' + middleName + ' ' + lastName

// const fullName = firstName + ' ' + middleName + ' ' + lastName + ' is ' + (2022 - birthYear) + ' years old.'

console.log(
  `This lets me put js in: ${4+4}`
)

const fullName = `${firstName} ${middleName} ${lastName} is ${2022 - birthYear} years old.`

console.log(`This is with backticks`)

console.log(fullName)




















