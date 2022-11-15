# Intro-to-Pseudocoding

## Intro To Algorithms

![Algorithm Cartoon](https://live.staticflickr.com/4562/27152603599_05c1a062fe.jpg)

You have probably heard of this term *algorithm*. But what does it mean? In computer science, an algorithm is a process or set of rules to be followed in order to accomplish a task. Whenever we are writing code, we are writing an algorithm that a computer can understand.

You will learn all about algorithms and how to write them. But the first step to writing a good algorithm is planning! We can use a tool such as pseudocode to help us plan our algorithm!

## What is this thing called Pseudocode??

Pseudocode is commonly used in all various fields of programing! Anywhere from web development, app development, or even in data science, you can find pseudocode.

Pseudocode is *NOT* a programming language. It is more of a technique used to describe the different steps of a problem or algorithm. For example, lets say I wanted to create a number guessing game. The computer will randomly generate a number from 1 - 10, and the user will try to guess. Our pseudocode could look something like this:

```js
    // GENERATE random number and store it to a variable
    // GET user input
    // IF user input is equal to guess, win!
    // ELSE lose!
```

Pseudocode is a syntax free description of the algorithm. This allows us to get a better understanding of how to write the code, before we even write it!

## Why write Pseudocode?

1. **Better readability**: Often times when coding, you will be working alongside other developers. Pseudocode helps ensure clear understanding and communication among a team of developers. Pseudocode is also helpful when working with other people who are not developers! (such as managers, clients, designers). Since you don't *need* to know how to code to read pseudocode!

2. **Simplify code construction**: After taking the time to construct and write out pseudocode, the process of converting the pseudocode into actual code will become much easier and faster.

3. **Serve as a starting point for documentation**: One of the most important aspects of great code is great documentation! You will come across lots of different types of documentation throughout your career as a developer. Pseudocode can help serve as the starting point, to help clarify how and why a particular code block accomplishes a certain task.

4. **Helps with debugging**: Pseudocode is written in plain english, so it is easier to detect bugs before any actual code is written. Reading through and changing pseudocode is much simpler than testing, debugging, and rewriting actual code.

## How to write good pseudocode

We will talk about writing pseudocode by walking through an example. Lets say for example you were trying to explain how to wash your hands.

![Poster reminding to use soap while washing](https://images.limotees.net/photos/2020/09/cat-wash-your-hand-the-soap-is-not-just-for-decoration-poster-wrapped-canvas.jpg)

1. **Write**: Start by writing out what first comes to mind. Try to keep this step as short and simple as possible. This helps you to get started.

```js
    // My hands are dirty. Turn on the faucet. Rinse. Add soap. Scrub. Rinse again. Dry them with towel.
```

2. **Split up the sentence**: Try to split your first sentence into a sequence of steps. This will help you have a better idea of everything you need to accomplish.

```js
    // My hands are dirty
    // Turn on the faucet
    // Rinse
    // Add soap
    // Scrub
    // Rinse again
    // Dry them with towel
```

3. **Identify Constructs**: It is important for pseudocode to be able to accurately represent the 6 programming constructs (SEQUENCE, CASE, WHILE, REPEAT-UNTIL, FOR, IF-ELSE). These are always written in uppercase to make these constructs more clear.
    * SEQUENCE: Set of instructions executed one after the other (think source code)
    * CASE: A different/cleaner way of writing out an IF-ELSE
    * WHILE: A loop with a conditional at its beginning
    * REPEAT-UNTIL: A loop with a conditional at the bottom (Do - While in JS)
    * FOR: A loop that will run a specified number of times
    * IF-ELSE: A condition statement that affects the flow of the algorithm.

These are some of the more common constructs found while writing pseudocode. Some others you may want to use in the future could be FETCH (to fetch data from a server), STORE (to store data from a server), SORT (to sort data), UPDATE (to update the dom) and CALL (when calling functions or invoking classes).

Anything can be used as a construct (think action items), as long as it doesn't interfere with variable names!

```js
    // My hands are dirty
    // TURN on the faucet
    // RINSE
    // ADD soap
    // SCRUB
    // RINSE again
    // DRY them with towel
```

4. **Specify both verbs and the objects**: Each line of psuedocode should be unambiguous. Any pronouns like them should be replaced with the specific noun. Any vague words should be replaced with something more specific.

```js
    // My hands are dirty
    // TURN on the faucet
    // RINSE hands
    // ADD soap to hands
    // SCRUB hands
    // RINSE hands again
    // DRY hands with towel
```

5. **Add details**: Add any details that could be important. Remember, computers are very literal. Any misunderstanding could break the code.

```js
    // My hands are dirty
    // TURN on the faucet hot water
    // TURN on the faucet cold water
    // RINSE left and right hand for 10 seconds
    // ADD soap to left and right hand
    // SCRUB left and right hand together for 20 seconds
    // RINSE left and right hand for 10 seconds
    // DRY left and right hand with towel
```

6. **Identify conditionals**: If it makes sense for your algorithm, add some control flow and conditional logic. This includes the use of either if-else statements and switch statements (we will stick with if-else).

```js
    // My hands are dirty
    // TURN on the faucet hot water
    // TURN on the faucet cold water
    // IF water is too hot (above certain temperature)
        // INCREASE cold water
    // ELSE IF water is too cold (below certain temperature)
        // INCREASE hot water
    // RINSE left and right hand for 10 seconds
    // ADD soap to left and right hand
    // SCRUB left and right hand together for 20 seconds
    // RINSE left and right hand for 10 seconds
    // DRY left and right hand with towel
```

7. **Identify loops**: How long should I rinse for? How long should I scrub? What if my hands are still dirty!

```js
    // My hands are dirty
    // TURN on the faucet hot water
    // TURN on the faucet cold water
    // IF water is too hot (above certain temperature)
        // INCREASE cold water
    // ELSE IF water is too cold (below certain temperature)
        // INCREASE hot water
    // RINSE left and right hand for 10 seconds
    // ADD soap to left and right hand
    // WHILE hands are dirty
        // SCRUB left and right hand together
    // WHILE left and right hand have soap
        // RINSE left and right hand
    // WHILE left and right hand are wet
        // DRY left and right hand with towel
```

8. **Fix Structure for readibility**: Make sure its obvious to the people reading your pseudocode where there are both conditionals and loops present. (END WHILE and END IF)

```js
    // My hands are dirty
    // TURN on the faucet hot water
    // TURN on the faucet cold water
    // IF water is too hot (above certain temperature)
        // INCREASE cold water
    // ELSE IF water is too cold (below certain temperature)
        // INCREASE hot water
    // END IF
    // RINSE left and right hand for 10 seconds
    // ADD soap to left and right hand
    // WHILE hands are dirty
        // SCRUB left and right hand together
    // END WHILE
    // WHILE left and right hand have soap
        // RINSE left and right hand
    // END WHILE
    // WHILE left and right hand are wet
        // DRY left and right hand with towel
    // END WHILE
```

## To recap

Our psuedocode should contain:

1. Constructs or Actions (Verbs that tell us what action to complete)
2. Specific details (Left vs Right hand, how long to rinse/wash)
3. Conditionals (if necessary)
4. Loops (if necessary)
