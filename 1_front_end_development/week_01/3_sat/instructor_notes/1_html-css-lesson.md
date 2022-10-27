![logo](/ga_cog.png)

# HTML & CSS

## Learning Objectives

- Review the roles of HTML and CSS in web pages
- Identify the parts of an HTML element
- Distinguish in-line styles, style tags, and linked style sheets
- Break down the syntax of a CSS declaration and a CSS rule(set)
- List commonly used properties
- Distinguish the properties  of the box model

## Overview

This lesson will be a refresher on the fundamentals of HTML and CSS. All
material is review from the pre-work, so we will move quickly and potentially
glosses over material. For a much more robust treatment, please see [the Mozilla
Developer Network Learning
Area](https://developer.mozilla.org/en-US/docs/Learn).

### Discussion Questions

- What are the main 3 languages that are used to create a web page?  
- What are their general roles in how a webpage displays information?

## HTML (Hyper Text Markup Language)

HTML exists to solve the problem of how a rich document can be expressed in
plain text. That is to say what are the parts of the document, what role does
each part serve (e.g. heading, image, list, emphasized text, link etc.), and how
do they relate to one another.

HTML expresses the **structure and semantics** of a document in plain text.

[Reference to help you with HTML](reference/html-tags.pdf)

### Elements

![Parts of an
Element](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

The parts of an HTML document are called **elements** and they are denoted with
**tags**. Tags come at the beginning and end of an element's content.

There are tons of different HTML elements and memorizing them is impractical.
Instead, it is better to start using the 20 percent of the building blocks that
get you 80 percent of the way there. Among these are headings, paragraphs,
lists, and images.

### Paragraphs

The `p` tag is used for paragraphs


```html
<p>The easiest way to learn HTML is to use it!</p>
```

and we can emphasize part of the text using `em` tags:

```html
<p>The easiest way to learn HTML <em>is to use it!</em></p>
```

We can add a link to the word `HTML` that goes to the MDN HTML page
(https://developer.mozilla.org/en-US/docs/Web/HTML)

```html
<p>
  The easiest way to learn
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
  <em>is to use it!</em>
</p>
```

Notice the use of whitespace (line-breaks and indentation) here. Any amount of
whitespace is understood as a single space to the browser which lets us spread
our content out for readability.

An element can be the child of another element (contained within its parent's
tags) but can never straddle another element.

```html
<!-- Don't do this! -->
<p>The easiest way to learn HTML <em>is to use it!</p></em>
```

Similarly, do not omit closing tags. Every element needs a closing tag (with the
exception of **empty elements** which we'll discuss momentarily).

```html
<!-- Also, don't do this! -->
<p>The easiest way to learn HTML <em>is to use it!</em>
```

Browsers are fairly smart and will guess what you meant - but don't rely on that or you'll have a bad time.

Also, if it guesses wrong it won't tell you! And you'll get really mad at your computer. Bad times.

### Headings

The `h1` - `h6` tags are for headings and subheadings. It's rare to use past 3
or 4.

```html
<h1>Learning HTML and CSS</h1>

<h1>I'm most important! There should really only be one of me on a page.</h1>
<h2>I'm still quite important! I'm fine being on the page a few times though</h2>
<h3>I'm pretty common!</h3>
<h4>I'm quite detailed</h4>
<h5>I'm probably deep in a menu</h5>
<h6>Wow, that's very detailed</h6>
```

### Lists

People love lists. There are two types of HTML lists, ordered and unordered.

```html
<ol>
  <li>I'm first</li>
  <li>I'm second</li>
  <li>I'm third</li>
</ol>
<ul>
  <li>red</li>
  <li>green</li>
  <li>blue</li>
</ul>
```

### Images

If there's anything people like more than lists, it's images.

Images are **empty elements** meaning that they cannot logically have children.
They are represented in HTML with a single, self-closing element.

Some people put a slash at the end of empty elements but it is unnecessary.

```html
<img src="" alt="" />
<!-- is the same as -->
<img src="" alt="">
```

Images require a `src` with a URL for an image.  You should also include an
`alt` tag for screen readers, and when something breaks and the image doesn't
show up.


```html
<img src="https://i.imgur.com/w6D1zlc.png" alt="html5 logo" >
```
![HTML5
Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png)

<br>

### Semantic HTML

Besides the basic elements, there are some "new" semantic HTML elements that will make your life easier if you learn to use them.

[MDN's Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)*

These include elements like:
```html
<section>
<content>
<header>
<footer>
<nav>
<main>

```

### Why so many elements?

All of these elements have pre-defined default behavior or styling that the browser will interpret and style for you. You can see some examples of default styles by using the browser styles inspector.

Code written in this way is called **semantic HTML**. It makes it easier (for you and everyone else) to read and debug your html. It's way better than trying to debug a sea of nested `<div>` elements.


### Break :coffee:

## CSS (Cascading Style Sheets)

We use CSS to tell browsers how we would like for them to **display** the
elements of our document.

- Now lets checkout [CSS Zen Garden](http://www.csszengarden.com) to see some
  examples of the great power and diversity that CSS can have on a website.  


### CSS File

We can test to make sure the style sheet is linked by adding a rule (we'll breakdown rules momentarily):

```css
body {
  background: lemonchiffon;
}
```

When we refresh the page, we should see the background color change.

Note: There are three ways to write CSS into your HTML file.

- **Inline** (Good) ==> `<p style="background: blue;">Inline Example</p> `
- **Internal** (Better) ==> `<style>` element in `<head>` of html file
- **External** (Best!) ==> linking an external CSS file

### CSS Rules

CSS styles are a series of **rules** or **rulesets**. A rule is a combination of
a **selector** and a set of **declarations**.

![Anatomy of a CSS Ruleset](https://mdn.mozillademos.org/files/9461/css-declaration-small.png)

#### Selector

A selector is a pattern used to match HTML elements to the rule that should apply. As shown, a selector can be an element. Or, very commonly, we add `class` or `id` attributes to mark elements for targeting by a specific rule.

Selectors can be combined and related and there are many more types of [selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors).

**Bonus**: Especially interesting are [pseudo class selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements).

#### Declaration

A declaration has two parts, a property and a value to which that property should be set.

There must be a colon separating each property from its property value and a semicolon at the end of the declaration. 


### Atributes `class` and `id`:


![Attributes](https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png)

Look at this, notice the **id** and the **class** attributes. 

```html
<p>Paragraph 1</p>
<p class="paragraph">Paragraph 2</p>
<p id="p3">Paragraph 3</p>
<p id="p4" class="paragraph">Paragraph 4</p>
```

this is how you can select them on your css file:

```css
p {
  color: red;
  font-size: 24px;
}
.paragraph {
  color: purple;
  font-size: 36px;
}
#p3 {
  color: blue;
}
#p4 {
  color: yellow;
}
```



- **Periods "` . `" are used to select a class like this**

```css
.class-name {
  color: red;
}
```

- **Hashes "` # `" are used to select an id like this**

```css
#id-name {
  color: blue;
}
```

Note: CSS rules that are **More Specific** will override rules that are less
specific.

- Targeting parent element ==> *Least specific*
- Targeting element directly ==> *Less specific*
- Targeting class ==> *More specific*
- Targeting id ==> *Most specific*

CSS can also overwrite itself. For example, if you have two rules that have the same precedence (like two classes), the one that appears further down in the file will overwrite the previous one.


### Exercise: You do [CSS Diner](http://flukeout.github.io/) 

- 15 minutes working / 5 minutes review


### Properties

Like HTML elements, there are tons of css properties and it is impractical to memorize them. Again we're looking for the 20% that gets us 80% of the way.

Here are some good ones to know:

#### [Background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

There is a ton we can do with the background of a page but for now we'll keep it
simple just setting its color to off white. Generally we will use a
[**hex-triplet**](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) to
describe colors.

Let's get back to building out our "Learn HTML" page.

In `style.css` replace the `lemonchiffon` background with:

```css
body {
  background: #F5F5F5;
}
```

**BONUS** just adding textures to a site's background can make a huge difference as well. A great resource for free patterns is [Transparent Textures](https://www.transparenttextures.com/)


#### [Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

The color property sets the color of text. An easy improvement to the default
styling is to set the text color to something just off black. For off black, we
will use `#444`.

In `style.css` add the declaration to the body rule:

```css
body {
  color: #444;
  background: #F5F5F5;
}
```

#### [Font Family](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Font_families)

A less subtle change we can easily make is to use a font other than the default
`Times`.

See below for details on bringing in custom fonts from Google Fonts. For now
we'll just use some of the **web safe fonts** which are available by default in
almost every browser. Some web safe fonts are:

- Arial (sans-serif)
- Courier New (monospace)
- Courier (monospace)
- Georgia (serif)
- Palatino (serif)
- Times New Roman (serif)
- Trebuchet MS (sans-serif)
- Verdana (sans-serif)

Because there can be problems loading fonts, we provide the `font-family`
property fallbacks in a comma separated list. Also note that fonts with a space
in their name need to be surrounded in quotation marks.

Let's add a declaration to the rule on body setting the font-family to a
sans-serif font:

```css
body {
  color: #444;
  background: #F5F5F5;
  font-family: Helvetica, Arial, sans-serif;
}
```

Notice the lower-case, dash deliminated property (sometimes called spine-case)
naming convention for multi-word properties.

Let's also add a new ruleset that just applies to the `h1` and give that a
monospaced font.

```css
h1 {
  font-family: "Courier New", Courier, monospace;
}
```

#### [Font size](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Font_size)

A very common mistake is to use a header with a larger number (e.g. `h4`) for
the smaller font. This is bad practice. Instead we want to use the heading with
the appropriate meaning and then style appropriately.

Let's use a slightly smaller font for our h1 than the default `32px`:

```css
h1 {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
}
```

**Bonus** there's a lot more you can do with [Font
styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Font_style_font_weight_text_transform_and_text_decoration)
like text decorations and shadows!

For more detail on units of measurement in CSS check out [this Values and Units
guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units).

### Text Layout

#### [Text Alignment](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Text_alignment)

Next we'll center our heading by adding a declaration setting the `text-align`
value:

```css
h1 {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  text-align: center;
}
```

Keep in mind the text-align property will only work on text. We will cover
layout of other elements below in the discussion of the box model.

#### [Line Height](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Line_height)

The line height property sets the size of each line. The property value accepts
any unit but is frequently seen without a unit meaning relative to the size of
the font (i.e. `2` is double spaced, `1.5` is one and a half)

The default line height of `1` is a little squished. Let's up that to `1.2` by
adding a declaration to the `body` rule:

```css
body {
  color: #444;
  background: #F5F5F5;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.3;
}
```

Note: We see the space following the headings growing but it would be much more
obvious with multiline paragraphs. When we need more text than we have, we can
use [Lorem Ipsum](http://www.lipsum.com/) as filler.

**BONUS** Similar to line-height, the [word-spacing and
letter-spacing](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Letter_and_word_spacing)
properties can be used to adjust space around text.

Next we want to fix the obnoxiously large image but first we should review how
elements relate to space with the **box model**.

## Box Model

The browser represents HTML elements on the page as blocks. Every block on the
page has `width`, `height`, `padding`, `margin`, and `border` properties. This
diagram shows how these values relate to one another.

![Box
Model](https://upload.wikimedia.org/wikipedia/commons/5/53/Css_box_model.svg)

We can see the box for an element on our page by right-clicking the element and
clicking **inspect**. Then find the **Styles** window, and scroll to the bottom.

Let's find our HTML5 logo from before and add a new rule for images:

```css
img {
  height: 300px;
}
```

Now let's change the `padding`, `border`, `margin`, and `background-color` and
**inspect** the image to see how these properties come into play.  

```css
img {
  height: 300px;
  background-color: green;
  padding: 20px;
  border: 5px solid black;
  margin: 50px;
}
```

## Common CSS Units of Measurement

|  Unit  |  Description  |   Usage  |
|:----------:|:----------------:|:------------:|
|   px   | Referred to as absolute units because px (pixel) units will always be the same size regardless of any other related settings. | Most frequently with font sizes, margins, padding, max- and min- properties. |
|  em, rem | Relative to the current element's font-size (em), or the _root_ font-size (rem). When used to set the font-size of an element, em is relative to the element's inherited size. | Most frequently with font sizes, margins, padding, widths or heights that may need to be changed but remain relative to other elements. |
|  vh, vw  | Relative to the viewport width (vw), where one unit is equal to 1/100th of the viewport's current width, or the viewport height (vh), where one unit is equal to 1/100th of the viewport's current height. | Most frequently with width and height of structural page elements. Commonly used in responsive design. |
|   %   | Percentages are relative values. What the percentage is relative to, is determined by the property associated with the percentage value. | Most often used with width. Can be helpful to approximate intrisic sizing. |


<br>
<hr>

## More on Border, Padding, and Margin: You do (BONUS)

Let's use a margin, border, and padding to give the body a frame.

First we'll add a rule setting a dark grey background color for the `html`
element. This will be the backdrop to our frame.

```css
html {
  background: #222;
}
```

We immediately see the dark grey around the edges of the body. This is because
body by default has margins of 8px. We can increase this using the same margin
property we use on the `img`.

```css
body {
  color: #444;
  background: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png"), #F5F5F5;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.3;
  margin: 40px 60px;
}
```

Now let's add a border to the body:

```css
body {
  color: #444;
  background: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png"), #F5F5F5;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.3;
  margin: 40px 60px;
  border: 5px solid skyblue;
}
```

Checking out the result in the browser, the border is a bit heavy and the color
is a bit odd. Let's update the value of the border property:

```css
body {
  color: #444;
  background: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png"), #F5F5F5;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.3;
  margin: 40px 60px;
  border: 3px solid #e44d26;
}
```

Now that we have a border on the body, the last thing we want to address is the
contained texted jammed into the border. The `padding` property is similar to
the `margin` but instead of defining the space between the border and the
external elements, it defines the space between the border and the content.

We add padding to the body as follows:

```css
body {
  color: #444;
  background: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png"), #F5F5F5;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.3;
  margin: 40px 60px;
  border: 3px solid #e44d26;
  padding: 25px 30px;
}
```

Note: In this case we used the body as a visual container. Frequently we will
want more sub-containers for visual purposes. The generic block element used for
these purposes is the `div`. We'll see more `div`s when we talk about using
flex-box for advanced alignment.

There are many many more CSS properties and nearly no limit to what CSS will let
us do but these building blocks will take us a very long way. Check out the
significant difference just this bit of CSS has made.

## Importing Fonts: You do (Bonus)

Google hosts a massive repository of fonts that can be imported for use on your
page.

To add a font:

1. Go to [Google Fonts](https://fonts.google.com/)
2. Click the **+** button next to any font you want to import to your page (as a
   rule, any more than 3 fonts in a project quickly begins to look disjointed).
3. After selecting 1 or more fonts, click the bar on the bottom that says **1
   Family Selected**.
4. Add the provided link element (something like `<link
   href="https://fonts.googleapis.com/css?family=Fresca" rel="stylesheet">`) to
   the head of your HTML.
5. Add the provided declaration (something like `font-family: 'Fresca',
   sans-serif;`) to a CSS rule targeting the elements to which you would like to
   apply the font.

## Closing

There's a lot you can do with CSS! Don't underestimate it as just "colors and
spacing" - there are a lot of interesting and engaging CSS tricks that can
greatly improve the appearance of your webpage. Later in this course you'll
learn more about layout in CSS.

>To see an example of the power of CSS, check out this animation: [Kylo Ren
>CSS](https://tympanus.net/codrops/2017/10/31/star-wars-kylo-ren-x-pure-css-animation/)

> or this awesome set of drawings made using [A SINGLE DIV](https://a.singlediv.com/) and a bunch of CSS

> or this crazy complex [pure css art](https://github.com/cyanharlow/purecss-francine)

## Can I use?

As new technologies arise in HTML and CSS, some browsers are faster to adopt them than others. In the past, IE was often the least able to adapt changes.

To check whether a certain feature is compatible in a browser, we can check a web site called [`Can I use`](https://caniuse.com)

Let's search for `flexbox` (you'll learn about it in a later lesson). As you can see it is fully compatible in all browsers except for IE, where it is partially supported.  


## Should I Prefix?

If you find a feature that is not supported, or not fully supported, you can go to [`Should I Prefix`](http://shouldiprefix.com/)

There is a list of CSS features that either no longer require a prefix (coded in green). Or are in blue. If they are blue, you can expand them and see how you would write the vendor prefixes, so you can have compatibility across browsers.

Things are always changing, but right now a feature called `appearance` requires vendor prefixing. You can see an example below.

For the appearance feature, you would write the property three times. Two times would include the vendor prefix so that it can be used in different browsers.

As you look at older code, you may see vendor prefixes for features that no longer require it. It's ok! It won't break anything. But you won't need to include those vendor prefixes on new work.

![vendor prefix](https://i.imgur.com/OCHkMlT.png)

You can also use a CSS prefixer to write the prefixes for you, then just copy paste [Pleaeease.io](http://pleeease.io/play/)