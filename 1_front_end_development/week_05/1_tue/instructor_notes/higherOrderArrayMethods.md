[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Array Iteration Methods
Today, we're going to learn about some Array methods These methods are also a lot more flexible and powerful than using a loop, with the additional benefit that they are generally considered easier to read.

## Prerequisites

* Array
* JavaScript Function

## Learning Objectives

  - Higher-Order Function and Callback
  - `forEach()` 
  - `map()`
  - `filter()`
  - `reduce()`

<br>

# Introduction (15 min / 0:15)

JavaScript Arrays have lots of helpful built-in methods.

These methods allow you to write more **declarative/functional** code as opposed to **imperative** code.

## Imperative Programming

Imperative programming is a more step-by-step way of writing code.

`for` loops, for example, are imperative: 

```js
for (let index = 0; index < array.length; index++) {
    // do stuff
}
```

With a `for` loop we're saying:

1. Initialize a looping variable
2. Use the looping variable to access an element in the array
3. Increment the looping variable
4. If the looping variable is less than the length of the array, loop again

## Declarative Programming

In declarative programming, we write code that describes what we want to do:

```js
array.forEach(function(val) {
    // do stuff
});
```

## Trends in Development

Current trends in development are pushing toward using declarative code over imperative code when possible.

This walk-thru summarizes Array _iterator_ methods, that is, methods that declaratively iterate over an array's elements.
*How* are we iterating? Don't need to worry about that.

<br>

## Functions as Values (5 minutes / 0:20)
One of the things that makes JavaScript so powerful is that we can reference functions and treat them like values stored in a variable.

The impact of this is we can:

- Add functions to arrays and objects, just like any other value
- Pass functions as arguments to another function
- Return a function from a function

Taking functions as arguments and returning functions is a little advanced, so we're just going to touch on it today. But the significance is: a function that takes a function as an argument is called a *higher-order function.*

<br>

## Higher-Order Function and Callback (5 minutes / 0:25)
In a nut shell:

**`Higher-order function`** is a function that take other functions as arguments or return them as output.<br>
**`Callback function`** is a function thats is passed into another function as an argument

**example:**
```js
// this is my callback function
const sayHello = function(name){ 
  return `Hi, ${name}!`;
}
// this is my higher-order function
const sendMessage = function(callback, name){ 
    console.log(callback) 
    return callback(name)
}
console.log(sendMessage(sayHello, 'Robert'));
```

The array methods that we're going to learn today all fit this definition: they are functions (methods of the Array object) that take a function as an argument and use it to iterate over the array. The purpose is to provide a level of abstraction and simplify array iteration (going through each element in an array and performing some operation).


<br>

# Higher-Order Array Methods
<img src="https://i.imgur.com/wVPKb5D.png">

<br>

<hr>

## `.forEach()` (20 minutes / 0:45)

**PURPOSE:** General purpose iterator method.

Very frequently, we will want to go through an array and do something for every
element in the array.

As an example, we'll loop through the array bellow printing each value a time.

```js
const friends = ["ross", "rachel", "joey", "monica", "phoebe", "chandler"];
for (let i = 0; i < friends.length; i++) {
  console.log(`Sending email to ${friends[i]}`)
}
```

This process of iterating through an array is so common that JavaScript provides an array method for it called `forEach`. Let's get rid of the `for` loop and replace it with a `forEach`.

```js
// declaring my callback function
function sendEmail(name){
  console.log(`Sending email to ${name}`)
}
// Involking the higher-order array method passing the "sendEmail" function as callback.
friends.forEach(sendEmail)
// or 
// the same thing but using the ES6 arrow function
friends.forEach((element) => {
  console.log(`Sending email to ${element}`)
})
// or ES6 full power fancy one-liner
friends.forEach(element => console.log(`Sending email to ${element}`))
```

This will go through each element in the `friends` array and execute the
**`callback`** function for each element in it. **Very important**, notice that the argument of the callback will represent each element in the array.


### You Do: `.forEach` ( 5 minutes / 0:50)

In your `app.js`, create an array of programming languages you've heard of.
Use `.forEach` to print the message
`"${programmingLanguage} is a programming language!"`, replacing
`${programmingLanguage}` with one of the languages in your array.

<hr>

### We Do: `.forEach` ( 5 minutes / 0:55)
Let's step up the `.forEach` example a bit.

Using the same array, let's create a new array with all names uppercased.

```js
const friendsUpperCase = []
friends.forEach(name => {
  const uppercasedName = name.toUpperCase()
  friendsUpperCase.push(uppercasedName)
})
console.log(friendsUpperCase)
// ["ROSS", "RACHEL", "JOEY", "MONICA", "PHOEBE", "CHANDLER"]
```

Cool, so we can iterate through a array and create a new list from it, but the example is still a bit rough. We don't like creating functions that have
**side effects** because it's bad practice.

> When a function changes or affects something outside of itself, it's
> considered a side-effect.

<br>

<hr>

## `.map()` (20 minutes / 1:15)

**PURPOSE:** Create a new array from a source array, usually "transforming" its values. The returned array is always the same length as the source array.

We've discussed functions that were called for their **side effect** versus
functions that are called for their **return value** or **output**. In the
previous example, we used `forEach` to produce some _side effect_.

Frequently, however, rather than do **something with each** item in an array, we
want to do **something to each** item, applying some transformation and
producing a new, modified version of the array.

`forEach` has a closely related sibling called `map`. The only difference
between the two is that you **must always return something from map**. In
`forEach`, returning anything is pointless.

Using the same `friends` array from before, let's do the same transformation (by
capitalizing each word). Only this time, we'll do it better.

We'll start by writing them separately.

```js
function makeUpperCase(word) {
  let upper = word.toUpperCase()
  return upper
}
const uppercaseWords = friends.map(makeUpperCase)
console.log(uppercaseWords)
//["ROSS", "RACHEL", "JOEY", "MONICA", "PHOEBE", "CHANDLER"]
```

Lovely! So let's refactor it now.

```js
const uppercaseWords = friends.map(function(name) {
  let upper = name.toUpperCase()
  return upper
})
```

We can condense it even further, by making it into an arrow function and moving
the logic all into one line.

```js
const uppercaseWords = friends.map(name => {
  return name.toUpperCase()
})
```

Finally, let's rely on the implicit return of arrow functions for some truly
beautiful code.

```js
const uppercaseWords = friends.map(name => name.toUpperCase())
```

Map is truly the greatest.

### You do: mapping the numbers (10 min / 1:25)

Using the array of numbers provided below, write a map function that squares
each number (multiplies it by itself). You should end up with another array of
equal length.

```js
const numbers = [
  15,
  18,
  3921,
  327,
  88,
  1235,
  1,
  55855,
  34,
  5,
  9,
  9019,
  156,
  874,
  76,
  444,
  12346
]
```



<br>



# Break (10 min / 1:35)

<br>

## `.filter()` (20 minutes / 1:55)

**PURPOSE:** Select certain elements from a source array.

Another common procedure is to filter elements from an array based on some
custom condition. The condition must return true or false. If it returns true, the element is kept
and stored in the new array. If false, it's skipped.

Use the numbers array above for this exercise.

First we'll write the filter function (the custom condition):

```js
function greaterThan100(num) {
  return num > 100
}
```

We can write a loop that uses this function:

```js
const bigNums = []
for (let i = 0; i < numbers.length; i++) {
  if (greaterThan100(numbers[i])) {
    bigNums.push(numbers[i])
  }
}
```

Or we can use `.filter()` 

```js
const bigNums = numbers.filter(greaterThan100)
```

The same thing but using an anonymous function:

```js
const bigNums = numbers.filter(num => {
  return num > 100
})
```

#### Return Value

`filter` will return a new array composed of items for which the passed in
function **returns true** when called on each item.

### You do: `.filter()` (15 minutes / 2:10)

- Declare a variable called `states`.
- Assign to it the array of objects bellow.
- Using `.filter()` you should be able to:
  1. Create a array called `allCapitalsA` with all the states with capitals that start with the letter `A`.

  2. Create a array called `allStatesTwoWords` with all the states with two words in their name.

<details>
<summary> STATES DATA </summary>

```js
[
  {
    name: "Alabama",
    capital: "Montgomery",
    lat: "32.361538",
    long: "-86.279118"
  },
  {
    name: "Alaska",
    capital: "Juneau",
    lat: "58.301935",
    long: "-134.419740"
  },
  {
    name: "Arizona",
    capital: "Phoenix",
    lat: "33.448457",
    long: "-112.073844"
  },
  {
    name: "Arkansas",
    capital: "Little Rock",
    lat: "34.736009",
    long: "-92.331122"
  },
  {
    name: "California",
    capital: "Sacramento",
    lat: "38.555605",
    long: "-121.468926"
  },
  {
    name: "Colorado",
    capital: "Denver",
    lat: "39.7391667",
    long: "-104.984167"
  },
  {
    name: "Connecticut",
    capital: "Hartford",
    lat: "41.767",
    long: "-72.677"
  },
  {
    name: "Delaware",
    capital: "Dover",
    lat: "39.161921",
    long: "-75.526755"
  },
  {
    name: "Florida",
    capital: "Tallahassee",
    lat: "30.4518",
    long: "-84.27277"
  },
  {
    name: "Georgia",
    capital: "Atlanta",
    lat: "33.76",
    long: "-84.39"
  },
  {
    name: "Hawaii",
    capital: "Honolulu",
    lat: "21.30895",
    long: "-157.826182"
  },
  {
    name: "Idaho",
    capital: "Boise",
    lat: "43.613739",
    long: "-116.237651"
  },
  {
    name: "Illinois",
    capital: "Springfield",
    lat: "39.783250",
    long: "-89.650373"
  },
  {
    name: "Indiana",
    capital: "Indianapolis",
    lat: "39.790942",
    long: "-86.147685"
  },
  {
    name: "Iowa",
    capital: "Des Moines",
    lat: "41.590939",
    long: "-93.620866"
  },
  {
    name: "Kansas",
    capital: "Topeka",
    lat: "39.04",
    long: "-95.69"
  },
  {
    name: "Kentucky",
    capital: "Frankfort",
    lat: "38.197274",
    long: "-84.86311"
  },
  {
    name: "Louisiana",
    capital: "Baton Rouge",
    lat: "30.45809",
    long: "-91.140229"
  },
  {
    name: "Maine",
    capital: "Augusta",
    lat: "44.323535",
    long: "-69.765261"
  },
  {
    name: "Maryland",
    capital: "Annapolis",
    lat: "38.972945",
    long: "-76.501157"
  },
  {
    name: "Massachusetts",
    capital: "Boston",
    lat: "42.2352",
    long: "-71.0275"
  },
  {
    name: "Michigan",
    capital: "Lansing",
    lat: "42.7335",
    long: "-84.5467"
  },
  {
    name: "Minnesota",
    capital: "Saint Paul",
    lat: "44.95",
    long: "-93.094"
  },
  {
    name: "Mississippi",
    capital: "Jackson",
    lat: "32.320",
    long: "-90.207"
  },
  {
    name: "Missouri",
    capital: "Jefferson City",
    lat: "38.572954",
    long: "-92.189283"
  },
  {
    name: "Montana",
    capital: "Helana",
    lat: "46.595805",
    long: "-112.027031"
  },
  {
    name: "Nebraska",
    capital: "Lincoln",
    lat: "40.809868",
    long: "-96.675345"
  },
  {
    name: "Nevada",
    capital: "Carson City",
    lat: "39.160949",
    long: "-119.753877"
  },
  {
    name: "New Hampshire",
    capital: "Concord",
    lat: "43.220093",
    long: "-71.549127"
  },
  {
    name: "New Jersey",
    capital: "Trenton",
    lat: "40.221741",
    long: "-74.756138"
  },
  {
    name: "New Mexico",
    capital: "Santa Fe",
    lat: "35.667231",
    long: "-105.964575"
  },
  {
    name: "New York",
    capital: "Albany",
    lat: "42.659829",
    long: "-73.781339"
  },
  {
    name: "North Carolina",
    capital: "Raleigh",
    lat: "35.771",
    long: "-78.638"
  },
  {
    name: "North Dakota",
    capital: "Bismarck",
    lat: "48.813343",
    long: "-100.779004"
  },
  {
    name: "Ohio",
    capital: "Columbus",
    lat: "39.962245",
    long: "-83.000647"
  },
  {
    name: "Oklahoma",
    capital: "Oklahoma City",
    lat: "35.482309",
    long: "-97.534994"
  },
  {
    name: "Oregon",
    capital: "Salem",
    lat: "44.931109",
    long: "-123.029159"
  },
  {
    name: "Pennsylvania",
    capital: "Harrisburg",
    lat: "40.269789",
    long: "-76.875613"
  },
  {
    name: "Rhode Island",
    capital: "Providence",
    lat: "41.82355",
    long: "-71.422132"
  },
  {
    name: "South Carolina",
    capital: "Columbia",
    lat: "34.000",
    long: "-81.035"
  },
  {
    name: "South Dakota",
    capital: "Pierre",
    lat: "44.367966",
    long: "-100.336378"
  },
  {
    name: "Tennessee",
    capital: "Nashville",
    lat: "36.165",
    long: "-86.784"
  },
  {
    name: "Texas",
    capital: "Austin",
    lat: "30.266667",
    long: "-97.75"
  },
  {
    name: "Utah",
    capital: "Salt Lake City",
    lat: "40.7547",
    long: "-111.892622"
  },
  {
    name: "Vermont",
    capital: "Montpelier",
    lat: "44.26639",
    long: "-72.57194"
  },
  {
    name: "Virginia",
    capital: "Richmond",
    lat: "37.54",
    long: "-77.46"
  },
  {
    name: "Washington",
    capital: "Olympia",
    lat: "47.042418",
    long: "-122.893077"
  },
  {
    name: "West Virginia",
    capital: "Charleston",
    lat: "38.349497",
    long: "-81.633294"
  },
  {
    name: "Wisconsin",
    capital: "Madison",
    lat: "43.074722",
    long: "-89.384444"
  },
  {
    name: "Wyoming",
    capital: "Cheyenne",
    lat: "41.145548",
    long: "-104.802042"
  }
]  
```

</details>

<br>

<hr>

## `.reduce()`(20 minutes / 2:30)

**PURPOSE:** Reduce an array into a single value. Note that the "single value" can be a single object, array - anything.

The most flexible array method function is called `reduce`. Reduce, as the name
implies, can take an array and reduce it to a single value. 

Reduce is usually difficult to grasp at first; don't stress about this. It is
definitely not something you need to have mastered, it is just good to have an
early awareness. It takes a fair amount of practice to intuitively use
`.reduce()` when solving problems.

#### Example

We can take the sum of an array of numbers (i.e. reduce the set of numbers to a
sum):

```js
const nums = [25, 6, 100, 3]
// function that returnn the sum of two numbers
const add = (num1, num2) => num1 + num2
const sum = nums.reduce(add)
console.log(sum)
//output: 134
// using an arrow function for the callback
const sum = nums.reduce((num1, num2) => num1 + num2)
console.log(sum)
//output: 134
```
Other example, Count votes

```js
const votes = ['Yes', 'No', 'No', 'Yes', 'Yes'];
const tally = votes.reduce((acc, vote)=> {
  acc[vote] = acc[vote] ? acc[vote] + 1 : 1;
  return acc;
}, {});
// tally is {"No": 2, "Yes": 3}
```
<br>

### You do: `.reduce()` (15 minutes / 2:45)

Using the array of objects bellow, use `.reduce()` to sum the population of all cities.

```js
const cities = [
  {name: "Tokyo", population: 37400068},
  {name: "Delhi", population: 28514000},
  {name: "Shanghai", population: 25582000},
  {name: "São Paulo", population: 21650000},
  {name: "Mexico City", population: 21581000},
  {name: "Cairo", population: 20076000},
  {name: "Mumbai", population: 19980000},
  {name: "Beijing", population: 19618000},
  {name: "Dhaka", population: 19578000},
  {name: "Osaka", population: 19281000},
  {name: "New York City", population: 18819000}
  ]
// the answer is 252079068
```

<br>

# Method Summary

| Method | Purpose | Returns | Callback Should | Callback's Args |
| --- | --- | :-: | --- | --- |
| `forEach(cb)` | General purpose |`undefined` | Do whatever you want | `(elem, idx, array)` | 
| `map(cb)` | Create new array from source array | new array | Modify each element as desired and return it | `(elem, idx, array)` | 
| `reduce(cb, initAcc)` | Reduce the array to a single value/object | final value of `acc` | Return the new value for `acc` | `(acc, elem, idx, array)` | 
| `filter(cb)` | Filter source array | new array | Return truthy if `elem` is to be included | `(elem, idx, array)` | 
| `find(cb)` | Find an element | the first `elem` found | Return truthy if `elem` is what you're looking for | `(elem, idx, array)` |
| `findIndex(cb)` | Find a certain element's **index** | the index of the first `elem` found | Return truthy if `elem` is what you're looking for | `(elem, idx, array)` |
| `some(cb)` | Check if array has something | `true` or `false` | Return truthy if `elem` is what you're checking for | `(elem, idx, array)` |
| `every(cb)` | Check if every `elem` passes condition | `true` or `false` | Return truthy if `elem` is what you're checking for | `(elem, idx, array)` |


<br>

Notice that all of the iterator methods, except `reduce`, have identical signatures, that is, they all accept a single argument - a callback function.

Additionally, the signature of the callback functions are all the same as well!

This fact makes it easier to remember the syntax of these important methods, with the `reduce` method being the only one that varies slightly.

<hr>


<br>

## Bonus: 

Look it up for this other array methods, run some tests and see if you can get it to work :wink:

- `.find()`
- `.findIndex()`
- `.some()`
- `.every()`
- `.sort()`


### Review and Questions

- Check out the
  [Coding Meetup Kata's](http://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe)
  for lots more practice
- [Eloquent JS Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html)


## Reference

[Higher-order functions video series](https://www.youtube.com/watch?v=BMUiFMZr7vk&ab_channel=FunFunFunction)

[Array Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
{"mode":"full","isActive":false}
© 2022 GitHub, Inc.
Help
Support
API
Training
Blog
About
GitHub Enterprise Server 3.3.8
