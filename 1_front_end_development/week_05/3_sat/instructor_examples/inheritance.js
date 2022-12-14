// const Hero = function (name, alias, power) {
//   this.name = name
//   this.alias = alias
//   this._power = power
// }

// const wonderWoman = new Hero('Diana Prince', 'Wonder Woman', 'Deflects bullets with bracelets.')

// console.log(wonderWoman)

/*
 {
  constructor: function (name, alias, power) {
    this.name = name
    this.alias = alias
    this._power = power
  }
 }
  
 {
  name: 'Diana Prince',
  alias: 'Wonder Woman',
  power: 'Deflects bullets with bracelets'  
 }
*/


// class Hero {
//   constructor(name, alias, power) {
//     this.name = name
//     this.alias = alias
//     this._power = power
//   }
//   someMethod() {
//     console.log('this is a method')
//   }
// }

// const wonderWoman = new Hero('Diana Prince', 'Wonder Woman', 'Deflects bullets with bracelets')


// class Car {
//   constructor(make, model, color) {
//     this.make = make
//     this.model = model
//     this.color = color
//   }

//   drive() {
//     console.log('vroom vroom')
//   }
// }

// const corolla = new Car('Toyota', 'Corolla', 'Silver')
// const outback = new Car('Subaru', 'Outback', 'Forest Green')

// console.log(corolla)
// corolla.drive()

class Vehicle {
  constructor(price, color, location) {
    this.price = price
    this.color = color
    this.location = location
    this.owner = 'Hunter'
  }

  rent() {
    console.log('You have rented this vehicle! Don\'t scrath it!')
  }
}


class Car extends Vehicle{
  constructor(model, color) {
    super(85, color, 'My Rental Warehouse')
    this.model = model
  }

  drive() {
    console.log('vroom vroom!')
  }
}


class Toyota extends Car {
  constructor(model, color){
    super(model, color)
    this.make = 'Toyota'
  }

  sayToyota() {
    console.log('I am a Toyota!')
  }
}

class Ford extends Car {
  constructor(model, color){
    super(model, color)
    this.make = 'Ford'
  }

  sayFord() {
    console.log('I am a Ford!')
  }
}

const rav4 = new Toyota('Rav4', 'Blue')
const raptor = new Ford('Raptor', 'Black')

// rav4.drive()
// raptor.drive()

// console.log(raptor)
// console.log(rav4)
// rav4.sayToyota()
// rav4.drive()

class Boat extends Vehicle{
  constructor(model, engineType, color) {
    super(500, color, 'My Shady Marina')
    this.model = model
    this.engineType = engineType
  }
  createAWake() {
    console.log('Pull up the anchor and punch it!')
  }
}

const myBoat = new Boat(
  'Mystic Powerboats C5000 Turbine',
  'Gasoline',
  'white'
)

// console.log(myBoat)


// rav4.rent()
// raptor.rent()
// myBoat.rent()


class Animal {
  constructor(name, color, age, genus, species) {
    this.name = name
    this.color = color
    this.age = age
    this.genus = genus
    this.species = species
  }
  eat() {
    console.log('yum yum')
  }
  sleep() {
    console.log('zzzzzzz')
  }
}

class Invertebrate extends Animal {
  constructor(name, color, age, species){
    super(name, color, age, 'Invertebrate', species)
  }
  scurry() {
    console.log('rustle rustle')
  }
}
const myStarfish = new Invertebrate('Cinco', 'Red', 1, 'Protoreaster nodosus')
// myStarfish.scurry()


class Mammal extends Animal {
  constructor(name, color, age, species, subspecies) {
    super(name, color, age, 'Mammal', species)
    this.subspecies = subspecies
  }
  walk() {
    console.log('step step step')
  }
}

class Dog extends Mammal {
  constructor(name, color, age, subspecies){
    super(name, color, age, 'Canine', subspecies)
  }
}

const dog = new Mammal('Fido', 'Brown', 5, 'Canine', 'Husky')
const cat = new Mammal('Luna', 'White', 6, 'Feline', 'Maine Coon')

console.log(dog)
console.log(cat)
cat.walk()
dog.walk()



const fish = new Animal('Dory', 'Blue', 9)























//