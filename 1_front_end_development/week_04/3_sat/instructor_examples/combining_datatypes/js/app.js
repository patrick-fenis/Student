// console.log('Hello world!')


const foo = {
  someArray: [1, 2, 3],
}

// for(element of foo.someArray){
//   console.log(element)
// }

// for(let i = 0; i < foo.someArray.length; i++){
//   console.log(foo.someArray[i])
// }

const foo2 = [
  ["0,0", "0,1", "0,2"],
  ["1,0", "1,1", "1,2"],
  ["2,0", "2,1", "2,2"]
]

// for(let row of foo2){
//   for(let element of row){
//     console.log(element)
//   }
// }

// for(let i = 0; i < foo2.length; i++){
//   for(let j = 0; j < foo2[i].length; j++){
//     console.log(foo2[i][j])
//   }
// }


// const foo3 = [
//   ["", "", ""],
//   ["", "", ""],
//   ["", "", ""]
// ]

// foo3[0][2] = 'x'

// console.log(foo3)

const foo3 = () => {
  return {
    someProperty: 'hi!'
  }
}

// console.log(foo3().someProperty)

const foo4 = () => {
  return ['apple', 'banana', 'pear']
}

// console.log(foo4()[1])

const foo5 = () => {
  return {
    someArray: ['fun', 'awesome', 'sweet']
  }
}

// console.log(foo5().someArray[1])

const foo6 = () => {
  return {
    someObject: {
      someProperty: 'some value'
    }
  }
}

// console.log(foo6().someObject.someProperty)

const foo7 = () => {
  return {
    someMethod: () => {
      console.log('oh hai!')
    }
  }
}

// foo7().someMethod()

const foo8 = () => {
  return () => {
    console.log('whaaaaaa?')
  }
}

// foo8()()

const foo9 = {
  someMethod: () => {
    return {
      someProperty: 'some value'
    }
  }
}

// console.log(foo9.someMethod().someProperty)

const foo10 = {
  someMethod: () => {
    return {
      someArray: ['peach', 'apple', 'pear']
    }
  }
}

// console.log(foo10.someMethod().someArray[2])

const foo11 = {
  someMethod: () => {
    return {
      someObject: {
        someProperty: 'some value'
      }
    }
  }
}

// console.log(foo11.someMethod().someObject.someProperty)

const foo12 = {
  someMethod: () => {
    return {
      someMethod: () => {
        console.log('both methods can have the same name')
      }
    }
  },
  someObject: {
    someMethod: () => {
      console.log('this is a method')
    }
  }
}

// foo12.someMethod().someMethod()
// foo12.someObject.someMethod()

const foo13 = {
  someMethod: () => {
    return () => {
      console.log('hi')
    }
  }
}

// foo13.someMethod()()

const foo14 = [
  1, 
  'apple',
  () => {
    return {
      someProperty: 'some value'
    }
  }
]

console.log(foo14[2]().someProperty)

const foo15 = [
  1,
  'apple', 
  () => {
    return {
      someArray: ['cat', 'dog', 'baboon']
    }
  }
]

// console.log(foo15[2]().someArray[1])

const foo16 = [
  1, 
  'apple',
  () => {
    return {
      someObject: {
        someProperty: 'some value'
      }
    }
  }
]

// const valueIAmHunting = foo16[2]().someObject.someProperty + ' is in this array'
// console.log(valueIAmHunting)

const foo17 = [
  1, 
  'apple', 
  () => {
    return {
      someMethod: () => {
        console.log('fun')
      }
    }
  }
]

// foo17[2]().someMethod()

const foo18 = [
  1,
  'apple',
  () => {
    return () => {
      console.log('yes! we are finally done with this merry go round!')
    }
  }
]

foo18[2]()()

































//