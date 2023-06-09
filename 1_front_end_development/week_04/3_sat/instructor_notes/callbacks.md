# Callbacks and Higher Order Functions

## Lesson Objectives

- Explain what is a higher order function
- Explain what is the purpose of a higher oder function
- Explain what is a callback
- Explain what is the purpose of a call back function
- Write a higher order function with a callback
- Use a built-in higher order function (`setTimeout`)


In JavaScript, what can we pass in as arguments to a function?
- string?
- number?
- array?
- object?
- function?

Yes! You can pass a function as an argument in JavaScript.

A function that takes another function as an argument is called a `higher order` function. The function that is being passed in is called a `callback`.

Additionally, callback is a function to be executed after another function finishes executing.

Why would we ever want to do this?!

- We want control of when a function gets executed (a callback happens after the higher order function hase been called) - this is how we can have some control of the order of function execution in an asynchronous language like JavaScript

- We want to stack functionality. For example, we may want something to happen after a certain amount of time and thus use a built in function that sets time for us

Let's say we want a `console.log` to happen after 5 seconds. If we are thinking about functions having one specific purpose - a function that waits 4 seconds AND sends a console.log, is actually doing two things. In another case we may want to send an alert, in another we may want to trigger a css color change...

It would be wise then, to split this functionality apart: Waiting 5 seconds and then triggering some other function rather than always rewriting the logic for timing function.

We can name our functions or use an anonymous function.

### Code Along

- In today's `student_examples`
- `touch callbacks.js`

```js
setTimeout(() => {
  console.log('oh....hai!');
}, 4000)
```

`setTimeout` is our higher order function, it takes two arguments the first is a function, the second is the time in milliseconds. Our callback is an anonymous function that logs a message. But it could have any functionality we want - for now, we'll just keep it simple.


Let's keep going with more simple examples, so we can practice the syntax.

Let's create some employees to do some important task for their boss.

```js
const socky = () => {
  console.log('I will happily iron your socks!')
}

socky()
```

Test the `socky` function, also leave your setTimeout function. What order will the console logs appear>

What if you set the setTimeout time to 0? What do you exect to happen?

```js
const foodie = () => {
  console.log('I will sort your M&Ms so that you never encounter a green one!')
}

const pr = () => {
  console.log('I will make sure everyone knows you are the best boss ever')
}
```

Let's create a function called `boss`. `boss`'s role will be to call employees to do her bidding.

```js

const boss = (employee) => {
  console.log('I am the boss and you will do as I say!')
  employee()
}

```


Let's get or boss to boss our employees around

```js
boss(socky)
boss(foodie)
boss(pr)
```

Our boss can even summon an anonymous function

```js
boss(()=> {
  console.log("I'll still hand grind your coffee beans even though you never remember my name")
})
```

### Another Example

Let's say we are going to manipulate a lot of words - we are working on a new text editor with a lot of custom editing. We can write a function that will capitalize every word:

```js
const capitalize = (word) => {
  return word[0].toUpperCase() + word.substring(1)
}
```

We also want to be able to put an exclamation point on the end of each word

```js
const excitedWords = (word) => {
  return word + '!'
}
```

```js
const handleWords = (str, cb) => {
  const arr = str.split(' ')
  const newArr = []
  for (let word of arr) {
    newArr.push(cb(word))
  }
  return newArr.join(' ')
}

handleWords('hello how are you?', capitalize)

handleWords('I am fine, how are you?', excitedWords)

// BONUS - what is going on here?
handleWords(handleWords('omg hi how are you', capitalize), excitedWords)
```