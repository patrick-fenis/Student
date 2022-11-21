# Program Design and Building an Interactive App In The Browser

## Lesson Objectives

### Thinking Programmatically

1. Pseudo code

### Interactivity

1. Why Javascript
1. Execute Javascript in a web page
1. View logged messages in the browser
1. Send a message to the user in the browser
1. Get user input in the browser

### Problem solving for a bigger program

1. Nested function invocations
1. Sequence of execution
1. Reset state

## Thinking Programmatically

### Pseudo Code

Pseudo code is the process of taking a larger solution and breaking it down into the programmable steps without actually writing any code.

1. Think about the larger solution as a whole, but as a series of steps that you would write out for a petulant child to follow
1. Write out the solution in plain English, breaking it down into as many tiny steps as possible.  Remember, this child doesn't want to do the task.  If there's any ambiguity, you're sunk
1. Create a flow chart
1. Try to separate each phrase/independent clause onto a different line
1. Identify the following:
    - Assertions
        - comments, probably
    - Conditionals
        - A question is asked.  This tells us a conditional is coming
        - Looks for words like "if, unless, otherwise"
        - Think of all the possible outcomes of the situation
            - Each outcome represents an `if`, `else if`, or `else` statement
    - Loops
        - Something is done multiple times
        - Look for words like "while, as long as, until"
        - Think of the child asking "am I done yet?"
            - Better to tell them "keep eating string beans until there are no more string beans" than to tell them to each individual string bean
    - Functions
        - We've oversimplified a step which could be broken out into multiple steps.
1. Identify data types
    - whenever you have a conditional, loop, or something you're keeping track of, identify its type
        - text (strings)
        - numbers (ints/floats)
        - true/false values (booleans)
        - collections of stuff (arrays)
1. (Optional) Try to convert each line into something that resembles code

### Activity (10 min) + review

Pseudo code a game where a user can buy and eat apples.

<!-- ```
Peeling an orange: First, do we have an orange?  If not, I'm going to take one out of the fridge.  We now have the orange.  Then I'm going to see if it has already been peeled.  If it is peeled, I'm going to eat it.  If it isn't peeled, I'm going to remove a chunk of the rind.  At this point, I'm going to see if it's peeled.  If it isn't I'm going to remove another chunk of the rind.  I'll keep doing this until the orange is peeled.

Do we have an orange? - conditional coming up
    We do not have the orange: - conditional (boolean test: does orange exist)
        Take out the orange - function
We now have the orange - comment
Is it peeled? - conditional coming up
    If it is peeled - conditional, situation 1 (number test: number of pieces of rind left === 0)
        You're done!  Eat it! - function
    If it is not peeled  - conditional, situation 2 (number test: number of pieces of rind left > 0)
        As long as it is not peeled - loop (number test: while(number of rind pieces > 0))
            Remove a chunk of rind - function
        The orange is now peeled - comment
        You're done!  Eat it! - function
``` -->

### Apple Buying Game Possible solution

Firstly, set the number of apples the user has to 0 and the amount of money they have to $20.  The game is now initialized. Secondly, show the user how much money and how many apples they have.  Thirdly, ask them whether they would like to eat an apple or buy an apple.  If they say "eat an apple" decrement the number of apples they have and go back to the second step.  If they say "buy an apple" decrement the amount of money they have, increment the number of apples they have, and go back to the second step.  If the user wants to restart, go back the first step.

1. Firstly, set the number of apples the user has to 0 and the amount of money they have to $20. (`function`. Assign `integers` to `variables`)
1. The game is now initialized. (`comment`)
1. Secondly, show the user how much money and how many apples they have. (`function`. Display data)
1. Thirdly, ask them if they would like to eat an apple or buy an apple. (`function`. Get user `string` input and assign to `variable`)
    - `If` they say "eat an apple" decrement the number of apples they have and go back to the second step.
        1. `conditional` situation (`string` test `user input === 'eat an apple'`)
        1. decrement `numeric` `variable`
        1. call display data `function`
    - `If` they say "buy an apple" decrement the amount of money they have, increment the number of apples they have, and go back to the second step.
        1. `conditional` situation (`string` test `user input === 'buy an apple'`)
        1. decrement/increment `numeric` `variables`
        1. call display data `function`
    - `If` the user wants to restart, go back the first step.
        1. `conditional` situation (`string` test `user input === 'restart'`)
        1. call initialize `function`


## Interactivity

### Execute Javascript in a web page

1. Put your javascript in a .js file as normal
1. Reference the file inside a script tag inside the `<head>` tag of your html file

    ```javascript
    <head>
        <script src="app.js"></script>
    </head>    
    ```

### View logged messages in the browser

To see a message that you've created using `console.log()`:

1. Right click somewhere on the web page in the browser (two finger click on track pads) and choose "Inspect" from the dropdown that appears. ![](https://i.imgur.com/4wXah3M.png)
1. At the top of the pane that appears, choose "Console" ![](https://i.imgur.com/T51Jxtv.png)

Now any messages that you send using `console.log()` will appear here (next to the blue carrot)

### Send a message to the user in the browser

`alert()` is a global function that will open up a message box in the browser

```javascript
alert('hello world');
```

We can pass pretty much anything into `alert` as a parameter:

```javascript
let apples = 0;
let money = 20;
// game is now initialized

alert("You have " + apples + " apples and $" + money);
```

### Get user input in the browser

`prompt()` is like alert, but it opens up a window with a message AND a place to enter some text.  It takes two params, the question you want to ask the user and some default text to give them ideas:

```javascript
const choice = prompt("What do you want to do?", "buy apple / eat apple / restart");
console.log(choice)
```

You can use the return value of `prompt` just like any other value

```javascript
const choice = prompt("What do you want to do?", "buy apple / eat apple / restart");

if(choice === "eat apple"){
    alert('you ate an apple');
} else if(choice === "buy apple") {
    alert('you bought an apple');
} else if(choice === 'restart'){
    alert('you are restarting the game')
}
```

You can even call a function based on some input from the browser prompt

```javascript
const buyApple = () => {
    alert('you bought an apple');
}

const eatApple = () => {
    alert('you ate an apple');
}

const restart = () => {
    alert('you are restarting the game')
}

const choice = prompt("What do you want to do?", "buy apple / eat apple / restart");

if(choice === "eat apple"){
    eatApple(); //moved previous code into function
} else if(choice === "buy apple") {
    buyApple(); //moved previous code into function
} else if(choice === 'restart'){
    restart(); //moved previous code into function
}
```

You can keep getting input until a certain exists like so:

```javascript
let action = null

while(action !== "stop"){
    action = prompt("What do you want to do?", "Your action");
}
```

## Problem solving for a bigger program

### Nested function invocations

You can have functions call other functions:

```javascript
let apples = 0;
let money = 0;
// game is now initialized

const buyApple = ()=>{
    alert('you bought an apple');
}

const eatApple = ()=>{
    alert('you ate an apple');
}

const restart = () => {
    alert('you are restarting the game')
}

//create start function
const start = ()=>{
    showStatus();
    askForAction();
}

//create showStatus function
//move display data code into it
const showStatus = ()=>{
    alert("You have " + apples + " apples and $" + money);
}

//create askForAction function
//move prompt code into it
const askForAction = ()=>{
    const choice = prompt("What do you want to do?", "buy apple / eat apple / restart");
    if(choice === 'buy apple'){
        buyApple();
    } else if (choice === 'eat apple'){
        eatApple();
    } else if (choice === 'restart'){
        restart();
    }
}

//call start function
start();
```

### Sequence of execution

Let's add some functionality to our app.

```javascript
let apples = 0;
let money = 20;
// game is now initialized

const buyApple = ()=>{
    //replace alert with functionality
    apples++;
    money--;
    showStatus();    
    askForAction();
}

const eatApple = ()=>{
    //replace alert with functionality
    apples--;
    showStatus();
    askForAction();
}

const restart = () => {
    alert('you are restarting the game')
}

const start = ()=>{
    showStatus();
    askForAction();
}

const showStatus = ()=>{
    alert("You have " + apples + " apples and $" + money);
}

const askForAction = ()=>{
    const choice = prompt("What do you want to do?", "buy apple / eat apple / restart");
    if(choice === 'buy apple'){
        buyApple();
    } else if (choice === 'eat apple'){
        eatApple();
    } else if (choice === 'restart'){
        restart();
    }
}

start();
```

Program execution happens in a branching structure.  See if you can diagram the previous code's execution as a flow chart.

This can be helpful for visualizing your code: http://www.pythontutor.com/visualize.html#mode=edit

### Reset state

- Sometimes you want to reset a situation to its original state
- This can be done with a start function that gets called at the beginning and restarting of situation.
    - It should reset all values and begin process again

```javascript
//move initialization to start func
let apples;
let money;

const buyApple = ()=>{
    apples++;
    money--;
    showStatus();    
    askForAction();
}

const eatApple = ()=>{
    apples--;
    showStatus();
    askForAction();
}

//remove restart func

const start = ()=>{
    //move initialization to start func
    apples = 0;
    money = 20;
    // game is now initialized
    showStatus();
    askForAction();
}

const showStatus = ()=>{
    alert("You have " + apples + " apples and $" + money);
}

const askForAction = ()=>{
    const choice = prompt("What do you want to do?", "buy apple / eat apple / restart");
    if(choice === 'buy apple'){
        buyApple();
    } else if (choice === 'eat apple'){
        eatApple();
    } else if (choice === 'restart'){
        //call start() instead of restart()
        start();
    }
}

start();
```