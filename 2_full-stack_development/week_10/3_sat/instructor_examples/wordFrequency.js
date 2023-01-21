// ////////////////////////////////////////////
const findWordFrequencies = (str) => {
  const result = {}
  const wordArr = str.toLowerCase().split(' ')
  for(word of wordArr) {
    console.log(result)
    if(result[word]) { 
      result[word]++
    } else {
      result[word] = 1
    }
  }
  return result
}
// TEST CASES ////////////
console.log(findWordFrequencies('I love lamp'), `should return { i: 1, love: 1, lamp: 1 }`)
console.log(findWordFrequencies('The world is all that is the case'), `should return { the: 2, world: 1, is: 2, all: 1, that: 1, case: 1 }`)
console.log(findWordFrequencies('It is too early to not have caffeine'), `should return { it: 1, is: 1, too: 1, early: 1, to: 1, not: 1, have: 1, caffeine: 1 }`)
// ////////////////////////
// ////////////////////////////////////////////



// ////////////////////////////////////////////
const findHighestFrequency = (wordObj) => {
  // turn object param into an array of key, value pair arrs
  // like this [[key1, val1], [key2, val2], ...etc]
  const arrOfKeyVals = Object.entries(wordObj)
  // sort by comparing the item at index 1 of each sub array, ie
  // the object values
  const resultArr = arrOfKeyVals.sort((a, b) => b[1] - a[1])
  // return a new object with the item at index 0 of the sorted
  // array ie the key value pair that appears most frequently
  return { [resultArr[0][0]]: resultArr[0][1]}
}
// TEST CASES /////////////
console.log(findHighestFrequency({i: 1, love: 1, lamp: 1}),  `should return { i: 1 }`)
console.log(findHighestFrequency({ the: 2, world: 1, is: 2, all: 1, that: 1, case: 1 }), `should return { the: 2 }`)
console.log(findHighestFrequency({ it: 1, is: 1, too: 1, early: 1, to: 1, not: 1, have: 1, caffeine: 1 }), `should return { it: 1 }`)
// ////////////////////////
// ////////////////////////////////////////////


// const numObj = {
//   one: 1,
//   two: 2, 
//   three: 3
// }

// Object.entries(numObj)

// [
  //   ['three', 3]
  //   ['two', 2],
  //   ['one', 1],
// ]