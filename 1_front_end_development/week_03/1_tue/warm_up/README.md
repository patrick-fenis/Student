![](/ga_cog.png)

---
Title: Review: HTML <br>
Type: Warm-Up<br>
Duration: "0:45"<br>
Modified by: Hunter Wallen<br>
Creator: Karolin Rafalski<br>
Competencies: git and github, terminal, html fundamentals <br>
Prerequisites: [Introduction to HTML](https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)<br>

---

#### Actvity: More about HTML Documents

### Objectives:
- UTF-8
- HTML Boilerplate
- Linking files in HTML via relative and absolute pathing (http/https only)

### Watch These Videos

 - [HTML Video 1]( https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)  ~ 14 minutes
 - [UTF-8 : The Unicode Miracle](https://www.youtube.com/watch?v=MijmeoH9LT4) ~ 9.5 minutes
 - [Why HTML seems to tolerate mistakes](https://www.youtube.com/watch?v=-csXdj4WVwA) ~ 10 minutes

### About HTML Boilerplates
Boilerplate is defined as a standard template of any kind that can be used without much modification.

**Lesson Objective**

Rather than trying to memorize the boilerplate, build one on your own and take the time to understand each component's function.

- HTML documents have some standard elements that are always included:

  - `<!DOCTYPE html>`
  *Put this tag at the top of the document, to declare that this is an HTML5 document*

  **Additional boilerplate tags include**

  - `<html>`<br>
  - `<head>`<br>
  - `<body>`<br>
  - `<meta charset="utf-8">`<br>
  - `<title>`<br>

#### Ask Yourself:
1) What is the function of the `<head>` and `<body>` tags?
2) What kind of tags go inside each one?
3) Where does the `<title>` tag go (`<head>` or `<body>`)?
4) Where on the web page does the text inside the `<title>` tag appear?

Other things to think about:
5) What does `<meta charset="utf-8">` do? (hint see above video)
6) According to the above video about HTML, what could you guess would happen if you forgot the `<html>` tags?


### Make a Boilerplate

There are usually a few common elements that are included in most HTML sites, including folders (for organization), CSS files and JavaScript files. Let's add them, so you can have a boilerplate ready to go whenever you start a new homework or project.

<details><summary>File Structure</summary>

What it looks like in your terminal:

![terminal files](https://i.imgur.com/cpPf1gg.png)

<br>

What it looks like in your browser (GUI):

![file structure](https://i.imgur.com/iCjicqR.png)
</details>

#### Create files and folders
Note: I have a `boilerplate` folder already created within this morning's `morning_exercise` directory with the files and folders that you will need. Feel free to reference this.

Inside today's `morning_exercise` folder:
1) Make a new folder (`mkdir`) called `project-boilerplate`
2) Navigate into the folder `cd project-boilerplate`

#### Make an HTML file

1) touch `index.html`

#### Make a JavaScript file
1) touch `app.js`
2) open `app.js` to edit the file in VS Code `code app.js`
3) make a `console.log` in the JS file so that you can verify that it is hooked up. So, on line 1 of your `app.js` file, write the code `console.log("My app.js file is attached")`.

Note: if you have more than one JavaScript file, it would be typical to put those files all in a folder called `js` (or a similar name  - see example with CSS)

#### Make CSS folder and file
- Create a new folder for your css `mkdir css`
- Navigate inside the `css` folder and create a file called `style.css`
- Use VS Code to edit your `style.css` file.
- Select the `body` and give it a `background-color` [of any color of your choosing](http://htmlcolorcodes.com/)
- Take a moment to think about how you can tell if you have successfully linked your stylesheet.

<hr>

#### Connect Your Files
1) Open your `index.html` in VS Code (`code index.html`)
2) Write your HMTL code (see above and refrence the videos). HINT: VS Code has a built-in way to create an HTML boilerplate! On line 1 of your `index.html` file, type `!` and hit `enter`.
3) If you automatically made the tags, they should be tabbed and nested appropriately. If you wrote it from scratch, make sure to nest the tags to show the child / parent relationship.
4) Add a link to your `app.js` (where does it go? In the head? in the body?)
  - Check that it works by looking for the `console.log` that you added in the `Console` tab of your Inspector.
5) Add a link to your css (where does it go? In the head? in the body?)
  - Test it to be sure it works (how can you tell?)

#### Add a few more common elements

##### Image tag
1) Find an image on the internet that brings you joy
2) Copy its URL
3) Add an image tag  `<img/>` inside the body that will display your image
4) You will need to give the `<img/>` tag an `src` attribute and set its value to the image's url.
5) It is good practice to also add an alt attribute to an `</img>` tag. Why? What does this attribute do?

##### Heading Level 1 tag
1) Add an `<h1>` tag to describe the image you have added

###### Anchor tag `<a>`
1) Add an anchor tag `<a>` that links to a `#`. This will not take you anywhere, but gives the illusion of a link.

###### Paragraph & Questions
1) Use a paragraph tag inside your html and write a short answer to the following: Why were `<b>` (bold) and  `<i>` (italics) tags replaced by `<strong>` (strong) and `<em>` (emphasis) tags as the new standard in HTML 5?


## Part 4
###### Get started on the video on HTML for tonight

- [HTML 2](https://www.youtube.com/watch?v=KhbnrDhWDdE&index=2&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)