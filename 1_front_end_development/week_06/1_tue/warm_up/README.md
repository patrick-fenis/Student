![](/ga_cog.png)

---
Title: Intro to CSS Animations<br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Creator: Karolin Rafalski<br>
Competencies: CSS animations<br>
Prerequisites: CSS, HTML <br>

---

### Objectives

Intro to CSS rules:
- Transform
- Transition
- Animation


![transform](https://i.redd.it/vxi8nqmxrpe41.jpg)



Transform is static - it immediately changes the element and it stays that way.

Transition - You determine the start and end state, the computer handles the tweening (the states in between the beginning and the end).

Animations - You determine as many states as you want (beginning, end and in-between) - the computer still tweens between those steps

## Getting Started

1. In today's warm_up folder, there's a `css_animations_intro` folder with starter code
1. Navigate to it and open it up in your code editor 
1. Open up the `index.html` in the browser

---

# Transform

The transform property has a plethora of options for you to use. You can see them all on the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).

![atom helper transform](https://i.imgur.com/FhBc8zu.png)

Of these, we'll look at four of them for today: **translate, rotate, scale, and skew**

## Let's get to transforming!

### Translate: 

**What does it do?** Translate moves your element from its starting position depending on what arguments you give it 

**Syntax** translate(x, y) 

- Where `x` and `y` are how many unit values you want to move it along the respective axis 
- If you only specify one argument, it will only move along the x axis 
- Unit: any valid CSS unit (i.e. `px`, `em`, `%`, etc.) 
    
**Let's test it out:**

In the `main.css` add to the `.transform` class
- `transform: translate(100px)`
- refresh your browser to see the changes
- now try `transform: translate(100px, 100px)` to see the differences

Notice that this translated div _escapes_ the container div and that it does not affect the text in the container.

### Rotate: 

**What does it do?** Rotates your element in place depending on what angle you specify 

**Syntax** rotate(angle) 

- Where `angle` is how many degrees you want to rotate the element
- Unit: `deg`
    
**Let's test it out:**

Still in the `.transform` class, comment out the translate transform and let's try
- `transform: rotate(45deg)`

### Skew:

**What does it do?** Skews your element by how many degrees you specify 

**Syntax** skew(angleX, angleY) 

- Where `angleX` and `angleY`are how many degrees you want to skew the element along its respective axis
- If you only specify one argument, it will only skew along the x axis 
- Unit: `deg`
    
**Let's test it out:**

Still in the `.transform` class, comment out the rotate transform and let's try
- `transform: skew(20deg)`

### Scale:

**What does it do?** Scales your element by how many times you specify 

**Syntax** scale(num) 

- Where `num` is a *unitless number* by which your element will be scaled, i.e. if you put 2, your element will be 2 times its default size 
    
**Let's test it out:**

Still in the `.transform` class, comment out the skew transform and let's try

- `transform: scale(2)`
and swap that for
- `transform: scale(.2)`

### Can we do multiple transforms at once?

Can we chain them? What if we uncomment all the transforms?

Let's try it!

- `transform: skew(10deg) rotate(45deg) translate(50px , 50px) scale(.5);`

### Things to Remember 

- Watch your units!
- There cannot be a space between the function name and the first `(`, for example:
    - `skew (25deg)` - will **not** work
    - `skew(25deg)` - will work
- The order in which you place these can have different effects as it will read and apply from left to right
- Do not put commas in between when trying to do multiple transforms

---

# Transition

![transition properties, thanks atom](https://i.imgur.com/7FJZ8oO.png)

Transitions allows you to smoothly transition a property from a starting state to an end state over a specified duration. You typically trigger these transitions by partnering your css selector with another rule with a pseudo-selector. For example an anchor selector `a` with its pseudo-selector hover state `a:hover`

While you choose the beginning and end state, CSS handles the tweening (the in between states). Tweening is a term from animation. CSS animations are built on a lot of foundations and principles of animations.

## Let's get to transitioning!

#### In `index.html`

1. Comment out the div with a class of `transform`
1. Comment in the div with a class of `transition`

#### In `main.css`

1. Comment out the rule `border: 1px solid gold;` in the `.container` 

Notice that `.transition` has it's regular selector with a background of r ed and a pseudo-selector of `:hover` with a background of blue.

If we hover over the div in the browser, it turns blue instantly. Let's change that and make the transition from red to blue _much slower_

### The `transition-duration` property

**What does it do?** Determines how long you want a transition to happen 

**Syntax** `transition-duration: time` 

- Where `time` is your desired duration time in seconds
- Unit: `s`

**Where do you put it?** On the beginning state of the element you want the transition to happen on

**Let's test it out:**

- In `.transition`, let's add `transition-duration:4s;`
- In the browser, hover over the div to see it transition from red to blue, mouse away from the div to see it transition back
- Let's make it go faster, change the duration to 2 seconds instead: `transition-duration:2s`

**Let's add another property to transition:**

- In `.transition`, add `transform: translate(0); `
- in `.transition:hover`, add `transform: translate(300px);`

If you look carefully, you'll see that the translation starts slow, speeds up and then slows down again, but...

### The `transition-timing-function` property

... we can change that behavior by changing the `transition-timing-function` value

**What does it do?** Determines the speed curve of the transition  

**Syntax** `transition-timing-function: timingFunction` 

- Where `timingFunction` is a value from the [provided functions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) CSS is built with

**Where do you put it?** On the beginning state of the element you want the transition to happen on

**Let's test it out:**

There are many possibilities, but in particular let's test out the `linear` value, which means the animation will maintain the same speed throughout the entire transition

- In `.transition` add, `transition-timing-function: linear`

You should see that the square maintains the same speed throughout the transition

---

# Animations

Finally, animations allow us to designate intermediates from beginning to end.

Rather than using a pseudo-selector like transitions, animations have a partner rule called `@keyframes`

Animations happen on page load and you can determine how many times the animation occurs.

If you want an animation to start based on some activity (i.e. clicking a button), you can do so with JavaScript. On click (or whatever the event listener is placed upon), just add the class of the element with the animation. To stop or switch animations, remove the class and put on a new one.

## Let's get to animating!

#### In `index.html` 

- Comment out the div with a class of `transition` 
- Comment in the div with a class of `animation`

### The `@keyframes` rule 

**What does it do?** Allows you to specify what you want to happen during an animation from the beginning to the end and steps in between 

**Syntax**
```
@keyframes name-of-keyframe {
    0% { // any normal css rules you want applied at 0% here }
    50% { // any normal css rules you want applied at 50% here }
    100% { // any normal css rules you want applied at 100% here  }
}
```
  - Where `name-of-keyframe` is whatever you want to name the keyframe animation, this is completely up to you, like a variable name 
  - Where the `percentages` denote the percentage of the animation duration.
    - i.e. if your animation lasts 10 seconds, 50% would be the state of the element 5 seconds into the animation
    - Note: You can do as many percentages between 0% - 100% as you want

**Where do you put it?** It is a standalone rule! 

**Let's test it out:**

- In `main.css`, add the following keyframes

```css
@keyframes black-towhite{
  0% {background: black}
  100% {background: ghostwhite}
}
```

We can't quite test this out visually yet, so let's keep learning how we can actually apply this animation to an element.

### The `animation-name` property

**What does it do?** Binds a keyframe animation that you want to happen on the element  

**Syntax** `animation-name: name` 

- Where `name` is the name of the keyframe animation you want to happen 

**Where do you put it?** On the element you want the animation to happen on

**Let's test it out:**

- In `.animation`, add `animation-name: black-to-white`

Hmm, we still don't see anything just yet... Let's add one more property!

### The `animation-duration` property

**What does it do?** Determines the length of time you want an animation to happen over 

**Syntax** `animation-duration: time` 

- Where `time` is how long you want the animation to last 
- Unit: `s` or `ms` 

**Where do you put it?** On the element you want the animation to happen on

**Let's test it out:**

- In `.animation`, add `animation-duration: 2s`

Finally, if we reload the page we can see an animation actually happen!

Notice how the animation will happen once, and then return to its initial state as specified on its `.animation` class. 

But if you want the animation to repeat, you can do that!

### The `animation-iteration-count` property

**What does it do?** Determines how many times an animation will occur  

**Syntax** `animation-iteration-count: num` 

- Where `num` is the amount of times you want the animation to happen
- Unit: unitless integer starting from 1 to infinite

**Where do you put it?** On the element you want the animation to happen on

**Let's test it out:**

Let's make out black-to-white animation repeat two times

- In `.animation`, add `animation-iteration-count: 2;`

Now, let's try making it run infinitely!

- In `.animation`, change it to `animation-iteration-count: infinite;`

### Just for fun: Adding more steps

We can add any amount of frames from 0% to 100%, so let's try it out with changing from more than just black to white, but many colors in between. 

This keyframe called `rainbow` that changes the background color of the div is already included in the starter code. To see it in action...

- In `.animation`, change the `animation-name` to `rainbow`

```css
@keyframes rainbow {
  0% { background: black; }
  10% { background: crimson; }
  25% { background: hotpink;}
  30% { background: coral;}
  40% { background: lightyellow; }
  50% { background: palegreen; }
  60% { background: mediumaquamarine; }
  75% { background: steelblue; }
  80% { background: darkviolet;}
  90% { background: black; }
  100% { background: ghostwhite; }
}
```

You're not limited to just one css rule per keyframe, you can add as many as you like! Let's try moving the position of the box at the same time the background color changes. 

This `rainbow-move` keyframe below is also already provided in the starter code. To see it in action...

- In `.animation`, change the `animation-name` to `rainbow-move`

```css
/*colors and movement*/
@keyframes rainbow-move {
  0% {background: black; left:0%; top:0%;}
  10% {background: crimson; }
  25% {background: hotpink; left: 75%; top:0px;}
  30% {background: coral;}
  40% {background: lightyellow;}
  50% {background: palegreen; left: 75%; top: 10em; }
  60% {background: mediumaquamarine; }
  75% {background: steelblue; left:0%; top:10em;}
  80% {background: darkviolet;}
  90% {background: black; }
  100% {background: ghostwhite; left:0px; top:0px; }
}
```

Let's add even more! This time, let's add some transforms we learned about. 

This `rainbow-move-change` below is already provided in the starter code. To see it in action...

- In `.animation`, change the `animation-name` to `rainbow-move-change`

```css
/*colors, movement, shape change, and rotation*/
@keyframes rainbow-move-change {
  0% {background: black; left:0%; top:0%;}
  10% {background: crimson; }
  25% {background: hotpink; left: 75%; top:0px;}
  30% {background: coral;}
  40% {background: lightyellow;}
  50% {background: palegreen; left: 75%; top: 10em; transform: rotate(600deg)}
  60% {background: mediumaquamarine; }
  75% {background: steelblue; left:0%; top:10em;}
  80% {background: darkviolet;}
  90% {background: black; }
  100% {background: ghostwhite; left:0px; top:0px; }
}

```

We can also set the `animation-timing-function` to `linear` if that suits us, which is a similar property to the transition-timing-function. 

Lastly, for fun, we can comment back in our other divs in for a whimsical flair.

---

## Bonus Fun Stuff

CSS can utilize a computer's graphics card, which can allow for smoother animations than what JavaScript can handle. You can see this by comparing the two examples below: 
- [Drawing with JavaScript](https://codepen.io/paulirish/full/nkwKs) - add a bunch of macbooks, gets kinda slow and wonky

- [Drawuing with CSS](https://codepen.io/paulirish/pen/LsxyF) - stays sweetly smooth!

## Resources

- [easing.net](http://easings.net/) - shows you different ways you can change the timing function. When you hover over the different graphs you can see the behavior of an arrow on the side. And if you click on one, the site discusses ways to implement the different behaviors and compares it to a linear timing function.
