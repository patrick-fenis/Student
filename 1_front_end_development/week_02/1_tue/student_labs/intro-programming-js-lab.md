[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Just The Beginning

Let's get some practice with everything you've learned today! Using the console and reading errors, and using loops and getting used to basic JavaScript syntax are all key to software engineering for the web, and you'll be using them throughout the entire course -- so let's get comfortable with them by doing some reps!

#### Learning Objectives

- Terminal
- Errors
- Variables with let and const
- DRY
- Boolean expressions
- While loops
- For loops

#### Prerequisites

- Terminal
- JavaScript

---

## Getting Started - Terminal

* Create a folder structure like we did in the lecture.

## Errors

**Fix the code by following the errors in Terminal**

Cut and paste the following code into your text editor (the "Cheers" song lyrics). The code is broken -- there are **three errors**. You might already see the errors, but --

Run the code and read the error message in the terminal. Using information from the error message (line numbers, etc.), debug the code and make it work.

At the same time, write a comment below the code that specifies what _type_ of error it was. Example, if you get this:

![](https://i.imgur.com/KRHtmPM.png)

Write

```
// SyntaxError: missing ) after argument list
```

Cut and paste:

```javascript
console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
console.lo("and they're always glad you came.");
console.log("You wanna be where you can see,";
console.log("our troubles are all the same");
console.log("You wanna be where" "everybody knows");
console.log("Your name.");
```

Make it so you do not get any more errors!

## Boolean Expressions
*... and arithmetic*

By just looking at the following expressions, determine in your mind whether or not each will evaluate to **`true`** or **`false`**.  

1. `999 > 999`
2. `999 == 999`
3. `999 != 999`
4. `-5 >= -4`
5. `100 <= -100`
6. `20 + 5 < 5`
7. `81 / 9 == 9`
8. `9 != 8 + 1`

* Write down what you expect the expression to evaluate to for each expression.  After you do this, `console.log()` each expression to make sure you were correct.

## Assignment Operator vs. Equality Operator

Write: What is the difference between:

the **assignment operator** `=`

and

the **equality operator** `===`

?

## `while` Loops: Reps and Reps

### 1 Christmas goodness

Write a `while` loop that will log the following in the console 10 times. 

```
'Ginger chocolate honey patties'
```

Make sure you do not run an infinite loop! If you do, close your Terminal. Oops!


### 2 Repetition

Write another `while` loop that counts from 0 to 10 and will log in the console the current loop number.

> => 0
>
> => 1
>
> => 2
>
> => 3

etc.

### 3 insert the counter variable into a string

Write another `while` loop that prints a message to the console _and_ concatenates the current loop number. Make it count from 0 to 10.

> => "Current loop number is: 0"
>
> => "Current loop number is: 1"
>
> => "Current loop number is: 2"
>
> => "Current loop number is: 3"


**NOTE:** You do not need to see the 'correct answers' for these loops. Either they work, or they don't. **Test** them thoroughly to make sure they are giving you the desired output.

## `for` Loops

### 1
* Write a **`for` loop** that counts from 0 to 100 and console.logs each number.

### 2
* Write another **`for` loop** that counts from 7 to 635 (no more, no less!), and console.logs each number.

### 3
* Write a `for` loop that starts at 7 and prints 7, then 10, then 13, then 16 (adding 3 each time).... without going over 50.

### 4
* Declare a variable `let start = 0`
* Declare a variable `const limit = 100`
* Write a for loop that counts from the value of `start` to the value of `limit`, using those variables in the **control panel** of the loop.

Test the loop thoroughly.

### 5
* Think of something in real life, or nature, or wherever / whenever that displays **looping** behavior.

Use a **`for` loop** to model the looping behavior of that thing.

Where does the loop begin? Where should it end? Does it simply count from one number to another? Or does it change or mutate data?

## Conclusion

Congrats, you finished the lab! There is no need to submit this lab.

Learn more about git and Github! Use your **research skills** (Google-fu) to find out more about:

* What is git?
* What is a repository?
* What is a commit?
* What is the difference between git and Github?
* What does it mean to forking a repo on Github?
* What does it mean to clone a repo on Github?
* What is a "pull request" on Github?
