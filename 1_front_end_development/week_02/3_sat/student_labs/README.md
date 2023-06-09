# Functions Lab


Title: Problem solving<br>
Class: SEI-CHI<br>
Creator: Thom Page<br>
Modified by: Reuben Ayres<br>
Topics: Problem solving with functions<br>
<hr>

## Problem solving

Solve the following problems.

Problem solving means taking things **one step at a time**, and often going **beyond what you already know**. Neither of these are easy.

Taking things one step at a time means stopping, taking a breath, evaluating your thoughts, testing what you have, and organizing your next step.

Often, you won't yet have the tools to solve a problem. This happens in the real world, and it means doing research.

These two things are crucial in the mindset of a developer and they are why developers get paid the dollaroonies.


### printGreeting

Write a function called `printGreeting` with a parameter `name` that returns a greeting with the argument **interpolated** into the greeting.

```javascript
console.log(printGreeting("Slimer"));
```

> => Hello there, Slimer!

<br>
<hr>

### reverseWordOrder

Write a function `reverseWordOrder` that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

```javascript
console.log(reverseWordOrder("Ishmael me Call"));
```

> => "Call me Ishmael"


```
console.log(reverseWordOrder("I use Lâncome on my comb"));
```

> => "comb my on Lâncome use I"

Hints: is there a method that can split a string into an array of strings? Can you use a loop creatively to print array elements in a certain order?

</summary>

<details>

Do this without using `.split()`, `.reverse()`, or `.join()`.

>Hint: You can index directly into a string like this:

```
const name = "reuben";
console.log(reuben[2]); // outputs "u"
```

</details>

<br>
<hr>

### calculate

Write a function called `calculate`.

This function should take three arguments, two numbers and a string.

Name the parameters `num1`, `num2`, and `operation`.

If the function receives the string "add" for the operation parameter, it will **return** the sum of num1 and num2.

If the function receives the string "sub" for the operation parameter, it will **return** num1 minus num2.

Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

```javascript
console.log(calculate(4, 3, "sub"));

=> 1
```

```javascript
console.log(calculate(4, 3, "exp"));

=> 64
```

<br>
<hr>

### printConsecutives

Write a function `printConsecutives` that can take an array of any length, and print groups of three numbers where three consecutive numbers increase by 1.  Read the question again.  Be sure you're paying attention to whether you're being asked to `return`, `console.log()` (i.e. "print"), both, or neither.

```javascript
printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
```
> => 1 2 3
>
> => 44 45 46

```javascript
printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);
```

> -3 -2 -1
>
> -2 -1 0
>
> -1 0 1
>
> 0 1 2
>
> 1 2 3

<br>
<hr>

### letterReverse

Write a function `letterReverse` that accepts a single argument, a string. The function should **return** a string where _the order of the words is the same_ but the letters in each word are reversed. Examine the examples below to make sure you're clear on the problem you're trying to solve. Don't worry about punctuation.

```javascript
console.log(letterReverse("Luke I am your father"));
```
> => "ekuL I ma ruoy rethaf"

```javascript
console.log(letterReverse("Aren't you a little short for a storm trooper"));
```

> => "t'nerA uoy a elttil trohs rof a mrots repoort"


<br>
<hr>

### getSecondLargest

Write a function `getSecondLargest` that takes an array of at least two numbers as an argument and returns the second largest number.  If called with an argument that is not an array of Numbers with a length of at least 2, your function should: console.log a message saying `"invalid input"` **and** return `null`.


## Hungry for More?

### letterReverse v2.0

Solve `letterReverse` without using `.split()`, `.reverse()`, or `.join()`.

>Hint: You can index directly into a string like this:

```js
const name = "reuben";
console.log(reuben[2]); // outputs "u"
```

### reverseWordOrder v2.0

Solve `reverseWordOrder` without using `.split()`, `.reverse()`, or `.join()`.
