[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Flexbox

Now that we've reviewed the basics of HTML and CSS, it's time to start exploring
some of the more advanced aspects of CSS. We're going to use Flexbox, 
during this lesson to help us control the overall layout of our pages.

## Objectives

By the end of this, developers should be able to:

- Explain what Flexbox is and what problem it solves
- Use Flexbox to layout HTML elements


## Introduction

A Very Brief History
Once upon a time, monitors were square and monochrome. As display technology advanced, monitors got bigger, more colorful, and wider. Browser technology also improved, allowing browsers to be resized to nearly any size the monitor would allow. Finally, mobile devices came on the market, providing not only new sizes and proportions but also for the display to rotate and change orientation. This provided new challenges for layouts with CSS.

Flexbox was introduced as part of CSS3, it has been around since ~2008. Despite being a technology that has been around for nearly ten years, it lacked consistent browser support (until recently) and thus developers have often had to fall back on floats and relative positioning to solve the kind of layout challenges that flexbox was built to solve.


> Use https://caniuse.com/ to determine which browsers support the features we use in our CSS.

## The Holy Grail Layout

![holy grail layout](https://i.imgur.com/SRtHxgn.png)

This is something you know well, even if you don't recognize the term. It
describes a webpage with a header, footer, and three columns: a wide "main"
column, a navigation column on the left, and an advertisement, site map, or
extra info column along the right.

Obviously, this layout won't work on tiny screens, unless you really like
super-skinny columns. It's common to stack things on top of each other for
mobile views to make one single column.

Before flexbox, this involved a lot of pushing and shoving with dimensions and positioning. You would essentially have to write two completely separate stylesheets (one for mobile, and one for desktop), each to control the different layours.

With flexbox, just change the `flex-direction` for smaller screen sizes, make
any size / order adjustments on the sections of the page, and you're pretty much
done!

```css
@media screen and (max-width: 600px) {
  main {
    flex-direction: column;
  }

  section {
    order: 1;
  }
}
```

> A layout so holy,
> [it has its own Wikipedia article](<https://en.wikipedia.org/wiki/Holy_Grail_(web_design)>).

[Example](https://codepen.io/jme11/pen/WNvYQzW)


## Scaffold an HTML Page

Using the techniques you learned to scaffold the boilerplate for a blank HTML page in VS Code.

Start by creating a new directory for this lesson:

```bash
cd ~/sei/sandbox
mkdir css-layout
cd css-layout
touch index.html
mkdir styles
touch ./styles/styles.css
```
Inside of the index.html, add the html boilerplate to it, add a single div to the body tag and place some text inside of it that reads: `Hello World`.  Then, create an unordered list



Link the stylesheet file and add the following CSS:

```css


body {
  background-color: blue;
  color: white;
  font-family: sans-serif;
  margin: 0 auto;
}

div {
  background-color: pink;
  color: black;
  font-size: 2rem;
}

```

## Problem 1: Vertical Alignment

Let's start out by talking about a problem that anybody who has written CSS has
likely dealt with:

**I have a `div`. I would like to center it vertically and horizontally on my
page.** 

### You Do: Center a `div`

Take about **5 minutes** to try to get the div in this example centered like
the image above. Make sure it's still centered vertically and horizontally when
you change the screen size.

```html
...
  <body>
    <div>Hello World</div>
  </body>
...
```

The tough part is that how to vertically center a element depends on its context
meaning that an element has to look to its parent and then align itself;
siblings start to make this very difficult (go figure!). Depending on your
situation, one or more of the above techniques could work.
[Here's an enlightening post on the matter](https://css-tricks.com/centering-in-the-unknown/).

#### Flexbox to the Rescue

Laying out elements used to be difficult and fraught with error. Now, we can
just use Flexbox:

```css
body {

  font-family: sans-serif;
  margin: 0 auto;
  /* Add these: */
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## How It Works 

![flexbox diagram](https://i.imgur.com/LWLnhGq.png)

When you declare `display: flex;` in a CSS rule, whatever element is targeted by
that rule becomes a **flex container**.

That means that all of the flex container's **immediate** children can have flex
properties applied to them.

The flexbox approach differs from the methods described in the CodePen above in
that the arrangement of elements is managed by the **parent** container. The
child of a **flex container** is called a **flex item**. We can change the way
flex items display by setting item-specific properties that will come later in
the lesson.

After the `display` property, the most important flexbox property to understand
is `flex-direction`. It is very important to remember that the `flex-direction`
orients **flex container's main-axis**. The main axis can be set to run
vertically or horizontally depending on the value of `flex-direction`. All other
flex-related properties are defined in terms of the main axis.

First, use `flex-direction` to indicate whether you want the flex items in the
container to "read" left-to-right (`row`), right-to-left (`row-reverse`),
top-to-bottom (`column`), or bottom-to-top (`column-reverse`).

| flex-direction | main-axis Direction |
| -------------- | ------------------- |
| row (default)  | left-to-right       |
| column         | top-to-bottom       |
| row-reverse    | right-to-left       |
| column-reverse | bottom-to-top       |

The `justify-content` property aligns content relative to the **main axis**.
Possible values are: `flex-start` (default), `flex-end`, `center`,
`space-between`, and `space-around`.

> What do you think each does; does the flex-direction affect this?

The `align-items` property is similar to `justify-content` but aligns relative
to the **cross-axis**. There are similar options here: `flex-start`, `flex-end`,
`center`, `stretch` (default), and `baseline` (items are aligned by their
baselines / where the text is).

By default, a **flex container** will arrange its children in a single row or
column. The `flex-wrap` property can modify this with the values `nowrap`
(default), `wrap`, and `wrap-reverse`.

When text is wrapping, `align-content` controls how the rows or columns are
arranged relative to the cross-axis: `flex-start`, `flex-end`, `stretch`
(default), `center`, `space-between`, and `space-around`.

### In Summary

| Property                                                                                | What's It Do?                           | Examples                  |
| --------------------------------------------------------------------------------------- | --------------------------------------- | ------------------------- |
| **display**                                                                             |                                         | `flex`                    |
| **[flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)**   | Sets the directional flow of flex items | `row`, `column`           |
| **[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)** | Align along main axis                   | `center`, `space-between` |
| **[align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)**         | Align along cross-axis                  | `flex-start`, `center`    |

> That's a lot of CSS properties! Don't worry, you're not expected to memorize
> all of them. Being a developer is less about knowing everything off the top of
> your head and more about knowing best practices and where to find more info
> [Here's a great resource](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

### We Do: Explore Flexbox Properties

[Open this Codepen](https://codepen.io/ZakkMann/pen/OZBpob) to explore the
different Flexbox properties and see how they work.

## Problem 2: Make the Footer Stick


```css


footer {
  position: relative;
  bottom: 0;
}
```

Making the footer lie against the bottom of the screen is pretty easy, and there are a number of ways to do it

https://css-tricks.com/couple-takes-sticky-footer/

The text of `<main>` could easily run under the footer. We want the text to "push" the footer to the end of
the page.

### Flexbox to the Rescue Again

```css
body {
  min-height: 100vh;
  /* Add these: */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

<details>

<summary><strong>How is main axis of the `body` oriented here? What about the cross-axis?</strong></summary>

> Main: vertically, Cross: horizontally

</details>


## Additional Practice

- [Flexbox Froggy](http://flexboxfroggy.com/)

## Resources

- [flexbox.io](https://flexbox.io/)
- [The Ultimate Flexbox Cheatsheet](http://www.sketchingwithcss.com/samplechapter/cheatsheet.html)
- [CSS Tricks Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
- [Solved by Flexbox](http://philipwalton.github.io/solved-by-flexbox/)
- [Flexplorer](http://bennettfeely.com/flexplorer/)
- [Holy Grail Layout - Solved By Flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)


1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
