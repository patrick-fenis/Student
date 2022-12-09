// const hotel = {
//   name: 'Hotel California',
//   rating: 4,
//   vacancies: true,
//   tags: [
//     'pink champagne', 
//     'wine', 
//     'lovely', 
//     'can\'t leave'
//   ],
//   rooms: [
//     {
//       roomNumber: 102,
//       size: 'Queen Double',
//       price: 55,
//       booked: true
//     },
//     {
//       roomNumber: 103,
//       size: 'Queen Double',
//       price: 55,
//       booked: true
//     },
//     {
//       roomNumber: 204,
//       size: 'King Suite',
//       price: 105,
//       booked: true
//     },
//     {
//       roomNumber: 777,
//       size: 'Penthouse',
//       price: 205,
//       booked: true
//     }
//   ]
// }

// const greetOtherPerson = (otherPerson) => {
//   console.log('Hi! ' + otherPerson)
// }

// greetOtherPerson('Hunter')

// const addTwoNums = (num1, num2 = 2) => {
//     return num1 + num2
// }

// console.log(addTwoNums(2))


class Person {
  constructor (name, age, eye, hair, lovesCats = false, lovesDogs){
    this.legs = 2
    this.arms = 2
    this.hair = hair
    this.eyes = eye
    this.name = name
    this.age = age
    this.lovesCats = lovesCats
    this.lovesDogs = lovesDogs || false
  }
  greet(otherPerson) {
    console.log('Hi! ' + otherPerson.name)
  }
  classyGreeting(otherClassyPerson) {
    console.log('Greetings ' + otherClassyPerson.name + '!')
  }
  addOnePlusOne() {
    const sum = 1+1
    return sum
  }
  walk() {
    console.log('I hate when my Segway is in the shop!')
  }
  setHair(hairColor) {
    this.hair = hairColor
  }
  colorOtherPersonsHair(person, hairColor){
    person.setHair(hairColor)
    console.log(`${this.name} has colored ${person.name}'s hair. ${person.name} now has ${person.hair} colored hair!`)
  }
}

const me = new Person('Hunter', 31, 'brown', 'brown')

// const me = {}
// me.legs = 2
// me.arms = 2
// me.hair = 'brown'
// me.eyes = 'brown'
/*
{
  greet: (otherPerson) => console.log(otherPerson),
  addOnePlusOne: () => {
    const sum = 1+1
    return sum
  }
}
*/
const you = new Person('Thiago', 27, 'brown', 'brown')


// me.classyGreeting(you)

me.colorOtherPersonsHair(you, 'green')

// console.log(me)

// me.setHair('blue')
// console.log(me)
// console.log(you)
// console.log(typeof me)
// console.log(typeof you)

// me.greet(you)
// me.walk()
// you.greet("Raahima")
// you.walk()

// const meSum = me.addOnePlusOne()
// console.log(meSum)


// const vendingMachine = {
//   snacks: [
//     {
//       name: 'kitkat',
//       price: 6
//     },
//     {
//       name: 'sun chips',
//       price: 7
//     },
//     {
//       name: 'apple',
//       price: 12
//     }
//   ],
//   vend: (input) => {
//     console.log('vending', vendingMachine.snacks[input])
//   }
// }

// class Snack {
//   constructor (name, price){
//     this.name = name
//     this.price = price
//     this.type = 'Snack'
//   }
//   addToMachine() {
//     vendingMachine.snacks.push(this)
//   }
// }

// const reesesCup = new Snack('Reeses Cup', 20) 
/* ===
{
  name: 'Reeses Cup', 
  price: 20, 
  type: 'Snack', 
  addToVendingMachine: () => {
    vendingMachine.snacks.push(reesesCup)
  }
} 
*/
// const payday = new Snack('Payday', 3)
// const beefJerky = new Snack('Beef Jerky', 50)
// console.log(reesesCup)
// console.log(payday)
// console.log(beefJerky)

// reesesCup.addToMachine()

// console.log(vendingMachine.snacks)

// payday.addToMachine()

// console.log(vendingMachine.snacks)

// for(let snack of vendingMachine.snacks){
//   console.log(snack.name)
// }






































//