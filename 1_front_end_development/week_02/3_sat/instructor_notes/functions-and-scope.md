![logo](/ga_cog.png)

# Functions and Scope

## Framing

We've learned a lot of things that are fundamental to programming, such as
primitive and complex data types, conditionals, and loops. However, we still
need a way to encapsulate logic and make it reusable (make our code more DRY).
Functions are a fundamental part of JavaScript that allow us to contain all of
the logic of a particular operation within a named entity that can be activated,
or "called", repeatedly from other parts of our code.

One feature of functions in JavaScript is that each function creates a new
"scope" when it is defined. Scope defines what variables and functions are
accessible at any given point in the execution of your code. Understanding scope
in JavaScript is key to writing well structured code and being a better
developer.

There's a good chance you'll be asked about scope during technical interviews
too.

## Learning Objectives

- Recognize the parts of a function
- Write a function in JavaScript using a declaration and an expression
- State the difference between a function's output and side effects
- Define hoisting
- Describe scope and how it governs how data is able to be accessed in code

## Functions

**What is a Function?**

- Fundamental component of JavaScript
- A reusable block of JavaScript code used to perform a task

**Why do we use functions?**

Benefits of functions:

- Reusability
- DRYness
- Code Clarity

### Recognize the Parts of a Function

#### Function Container

Notice that there is a pattern in JavaScript syntax.

```js
// start with a keyword
// followed by parents
// followed by curly braces containing a code block

for (/* expressions */) { 
  /* code block */
}

if (/* expressions */) {
  /* code block */
}
```

Functions follow this pattern too.

```js
function (/* parameters */) {
  /* code block */
}
```

Often, we give our functions a descriptive name as well.  The name follows the `function` keyword.

```js
function multiply(/* parameters */) {
  /* code block */
}
```

#### Parameters

_Parameters_ are variables listed as a part of the function definition.  The names given to parameters are used to access the values we pass to the function known as _arguments_.

```js
function multiply(num1, num2) {
  // now you have two variables you can access inside this function
  // num1 and num2 are parameters
}
```
When we _call_ (or _invoke_) a function and pass values into it, those values are the function's arguments.

```js
multiply(2, 3) // 2 and 3 are arguments
```

Arguments map to the parameter names by the order they appear in the parentheses when the function is invoked.

<img src="https://media.git.generalassemb.ly/user/17300/files/4e9fb780-7258-11ea-8529-4c45b37401e3" alt="figure showing how arguments map to parameters"/>

#### Default/Optional Parameters

Default parameters were introduced in ES6. They allow us to define parameters
that will default to some pre-determined value if the function is called without
passing them in. We can set optional parameters in a function definition by
assigning a value to the parameter definition.

```js
function exponentiate (base, exponent = 2) {
  return base ** exponent
}

exponentiate(4, 3)
=> 64

exponentiate(4)
=> 16
```

> Optional parameters are very useful when writing **recursive** functions as
> they allow values to more easily be passed through multiple function calls


#### Output and Side Effects

```js
function multiply(num1, num2) {
  return num1 * num2; // Output
}

const result = multiply(6, 5)
console.log(result) // What is output?
```

- Output: What the function evaluates to - noted by keyword `return`

> If a function returns a value, you can store that value in a variable.

```js
let num2 = 5;

function multiply(num1) {
  num2 = num1 * num2; // no output here, just a side effect
}
```

- Side Effects: Effects the function has on data outside of itself (external to
  its scope).

> Note: If you don't specify a return value, it will return `undefined`.

#### More on returns

Understanding what `return` means in a function can be a little tricky.

Here are two similar code snippets - can you explain what the difference is?

---
```js
const splitMe = "I am the eggman I am the walrus";

function splitString(str) {
  return str.split(" ");
}

const newString = splitString(splitMe);

console.log(newString);
```
---
```js
let splitMe = "I am the eggman I am the walrus";

function splitString() {
  splitMe = splitMe.split(" ");
}

splitString();

console.log(splitMe);
```

- What does the first one do? 
- What does the second one do?
- Are there advantages to doing it the first way? 
- What about the second way, are there any disadvantages? 

### You do: Write some functions

Open your code editor and spend a few minutes writing some code and getting a feel
for functions.

These functions should all return something. **Log the result of each by storing it in a variable, then `console.log` the variable:**

1. Returns "hello world"
1. Takes a parameter called "name" and returns "hello" + name
1. Takes a parameter called "number" and return itself squared (multiply it by itself). 
1. Have 3 optional parameters, all numbers. Add all the numbers together. If the
  function is called without passing any numbers in, the result should be 15.
1. Take a number and add some amount of zeroes to the end, returning it (make
  sure you return a number, not a string)
1. Return a function that console logs 'hello world' (yes you can write functions
  inside functions!)

#### Return vs side effects:

1. Write a function that adds the string "flabbergasted" on to the end of an
  array that is stored in a variable (resulting in a _side effect_).  Log the array in the console.
1. Write the same function _without_ the side effect by returning an array with the new the value added
  to the end of it.  Make sure your function accepts the array as an argument!


### Function Declarations and Expressions

There are two ways to define a function.

#### Declaration

So far we've used the function declaration syntax to define functions:

```js
function multiply(num1, num2) {
  return num1 * num2;
}
```

#### Expression

We can also write them as function expressions:

```js
const multiply = function(num1, num2) {
  return num1 * num2;
};

```

#### Declarations vs. Expressions

Calling them is the same regardless of how they're declared.

```js
multiply(2, 5);
```

Both do the same thing and run the same chunk of code but they are different.

**What differences do you notice?**

- **Function declarations** define functions without assigning them to
  variables.
- **Function expressions** assign _anonymous functions_ to variables.

While we call/reference functions defined through declarations and expressions
the same way, they do have a subtle but important difference...

### Hoisting

Function declarations are processed before any code is executed, meaning you can
call functions before they are declared in the flow of your code. This behavior
is known as **hoisting**.

Conversely, function expressions **are not** hoisted, meaning you cannot call
them before they are defined in the flow of your code.

What do you think will happen when we run the below code...

```js
multiply(3, 5);

var multiply = function(num1, num2) {
  return num1 * num2;
};
// function expression
```

Surely the same thing will happen when we run the below code...

```js
multiply(3, 5);

function multiply(num1, num2) {
  return num1 * num2;
}
// function declaration
```

> We can successfully call the multiply function before declaring it. When our
> script file loads, the browser processes all function declarations first, and
> then runs the rest of our JavaScript from top to bottom.

Knowing this, what will happen each time we call `express` and `declare` in the
below example?

```js
// What happens when we run this function at this point in the code?
express();

var express = function() {
  console.log("Function expression called.");
};
```

What about when we run this example?

```js
var express = function() {
  console.log("Function expression called.");
};

declare(); // ???
express(); // ???

function declare() {
  console.log("Function declaration called.");
}
```

You can read more about hoisting
[here](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

### ES6 Features

#### Arrow Functions

Following the release of ECMAScript 6 (ES6) in 2015, anonymous functions can be
written as "arrow functions", a syntax adapted from CoffeeScript.

```js
var square = function(num1) {
  // function expression
  return num1 * num1;
};
```

What does this look like in ES6?

```js
// 1. drop the function keyword
// 2. add a fat arrow between the parentheses and opening curly brace

const square = (num1) => {
  return num1 * num1;
};
```

Arrow functions with a "concise" function body (no brackets and on one line)
have "implicit return". This means you can leave out the `return` keyword and it
still returns.

```js
// 3. if the function only returns one value, drop the curly braces and return keyword

const square = (num1) => num1 * num1;
```

And lastly, to simplify it further..

```js
// 4. if the function only takes one parameter, drop the parentheses

const square = num1 => num1 * num1;
```

## Scope

### What Is Scope?

In **real life**, your "scope" is what your eyes can see from wherever you're
standing.

In **Javascript** scope is where a variable can be referenced/used (i.e., all variables that can be accessed from a given line of code).

#### Quick Example

Here's a code snippet that demonstrates some of Javascript's fundamental rules
of scope...

```js
var color;

function getColor() {
  color = "red";
}

getColor();
console.log(color); // What should we see in the console?
```

Let's see what happens if we add the `var` keyword...

```js
function getAnotherColor() {
  var anotherColor = "green";
}

getAnotherColor();
console.log(anotherColor); // What should we see in the console?
```

#### Rules of Scope in JS

In Javascript, there are two types of scope: **global scope** and **local
scope**.

There are five rules to remember about scope in JS...

1. Variables created **without** the `var`, `let`, or `const` keywords, no
   matter where in a program, are placed in the global scope. :x:
2. Variables created **with** the `var`, `let`, or `const` keywords are created
   in the current local scope.
3. All functions create a new local scope.
4. The current scope includes all outer (enclosing) scopes.
5. Variables created with `let` or `const` keywords have **block** scope.

> One consequence of rule 3 is that variables defined outside of any function
> are inherently global if the `var` keyword is used (`let` and `const` prevent pollution of the 
global scope).

Another way to say this...

- **Local variables** defined inside a function cannot be accessed from anywhere
  outside of the function, because the variable is defined only within the scope
  of the function.
- However, a function can access all variables and functions defined inside the
  scope in which it is defined (which includes all outer scopes).

### We Do: A More Complex Example

Let's walk through this example in two steps:

1. Identify and diagram the scope of each variable.
2. Determine whether each `console.log` will error out or not.

```js
teamName = "Giraffes"; // What scope is this?
var teamCity = "Sioux Falls"; // What scope is this?

function playBaseball() {
  console.log("From " + teamCity + "..."); // Does this work?
  console.log("Welcome the " + teamName + "!"); // Does this work?

  if (teamCity === "Sioux Falls") {
    const pitcherName = "Meg"; // What scope is this?
  }
  var batterName = "Perry"; // What scope is this?

  console.log('Batter from inside the function', batterName); // Does this work?
  console.log('Pitcher from inside the function', pitcherName); // Does this work?
}

playBaseball();

console.log(teamCity); // Does this work?
console.log(teamName); // Does this work?

console.log(batterName); // Does this work?
console.log(pitcherName); // Does this work?

```

<details>
  <summary><strong>List of scopes for this example...</strong></summary>

> `teamName` - global (no var)  
> `teamCity` - global (`var` not in a function)  
> `pitcherName` - block (no because const has block scope)  
> `batterName` - local to `playBaseball`

</details>

### More on Hoisting

#### Functions

A Javascript feature that may impact scope is **hoisting**. This applies to
Javascript functions.

Recall that there are two ways to declare functions in Javascript, **function
declarations** and **function expressions**.

```js
var sayHello = function() {
  console.log("Hello!");
};

function sayHello() {
  console.log("Hello!");
}
```

#### Hoisting Review

<details>
  <summary>
    Which is a function declaration? Which is a function expression?
  </summary>

- `var sayHello = function () {}` is a function expression.
- `function sayHello () {}` is a function declaration.

</details>

<details>
  <summary>
    How does a function declaration differ from a function expression?
  </summary>

- A function expression follows the same rules as variable assignment. Since the
  value of the reference is a function, that function is only available after
  the assignment.
- With a function declaration, no matter where you put it in your code, it
  behaves as if you wrote it as the very first line in your code.
- Aside from that, they are functionally equivalent.

</details>

---

## Review Questions

1. What is a functions in javascript and how can they be useful?
2. How is a side effect different from an output?
3. What is the difference between calling and referencing a function?
4. How is a function declaration different than a function expression?
5. Explain the difference between local and global scope.
6. Explain how hoisting can affect functions.
7. Explain how hoisting can affect variables.
8. What does DRY mean?

## References

- [Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
- [Everything you wanted to know about JavaScript scope](http://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)