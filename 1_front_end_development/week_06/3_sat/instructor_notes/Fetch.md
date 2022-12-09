# Javascript - AJAX

## Lesson Objectives

1. Explain AJAX
1. Explain promises
1. Populate the DOM with Fetch data
1. Make dynamic Fetch requests

##  AJAX

AJAX stands for Asynchronous JavaScript an XML.

XML was once a popular way to store and send data over the internet and it is still used. However, JSON has become the predominant way to send data over the internet. But, no one seems to want to change the acronym AJAX to AJAJ.

When we will use AJAX, we will be sending and receiving JSON.

AJAX allows us to only reload portions of a web page. Thinking of an embedded google map, you can click around it and change the view/data, without having to reload the page every single time.

## AJAX/HTTP Requests

At first, jQuery was the only 'friendly' way to make AJAX requests. Over time, new libraries have developed.

Some top choices
- `fetch` [built in to most modern browsers](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [axios](https://www.npmjs.com/package/axios) - Axios has a few built in security features (examples use promises)
- [Ky](https://github.com/sindresorhus/ky) - A small lightweight library with examples using async/await

**TL/DR - AJAX is just  way to get data from an api**

We'll have our page get data from the external site http://www.omdbapi.com/.

- From the documentation, we can see that https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen will get data about the movie Frozen
- The `apikey` parameter is necessary for this external source so that can track and possibly limit access to specific people.

## Install JSON Formatter to make viewing JSON easier

- JSON stands for Javascript Object Notation
- It's just a way to represent data that looks like a Javascript object or array
- JSON Formatter extension just makes it easier to view JSON data.

Install it:

1.  Go to https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa
1. Click on "Add To Chrome"

## Setting up out HTML file to run our JS

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="app.js"></script>
    </head>
    <body>
    </body>
</html>
```

### Using Fetch

An http request requires:
- headers (fetch handles most of this for us)
- a url to send the request
- a method (get, post, put, delete...)
- a way to send data if it is a post or put request
- a way to wait for the response before doing something with the incoming data (We'll use promises, but there is a newer way with async/await that you can research on your own)
- a way to do something with the incoming data
- a way to handle errors

Let's build our first fetch request.

`fetch` is a function. it takes one argument which can be either an object or a url string. We'll code this out together using a string for this lesson but don't worry, we'll cover the object setup in Unit 3.

**fetch function**
```js
fetch()
```

**fetch function with url string as argument**
```js
  fetch('https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen')
```

Remember, JavaScript just runs through the code top to bottom. It doesn't wait for one thing to finish before moving on to the next thing.

Promises can be a nicer way to write our code. Often you'll be working with promises that were already created for you from a library or framework (like `fetch`)

A promise is a way of writing code that says 'hey, wait for me, and I _promise_ I'll send you a response soon. _Then_, you can do what you need to do'

A promise has three states
- Pending
- Fulfilled (completed successfully)
- Rejected (it failed)

After calling the initial function (in our case `fetch()`), all we need to do is chain another function `.then()`

`.then()` takes two callback functions.

The first one is `onFulfilled` this one is executed if the promise is fulfilled. This function can do whatever we want, for now, we'll just console.log the response.

The second one is `onRejected` this one is executed instead of the first one if the promise has failed in some way.


**`Then` we need to convert our response to JSON**
```js
  fetch(this.state.searchURL).then(response => return response.json())
```

**Then we will console log our resonse. We can break our `then()` onto multiple lines to make it easier to read(())**

```js
fetch('https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen')
  .then(response => {
    return response.json()
  }).then(json => console.log(json),
      err => console.log(err))
```

Our error handling can be very simple, we can just console log the error.


## Populate the DOM with AJAX data

Now that we have successfully made an AJAX request, let's use the response from OMDB to populate the DOM

```html
<h1>Movie Info</h1>
<dl>
	<dt>Title</dt>
	<dd id="title"></dd>

	<dt>Year</dt>
	<dd id="year"></dd>

	<dt>Rating</dt>
	<dd id="rated"></dd>
</dl>
```

Since we're going to be manipulating the DOM, let's wait for it to load before we make the AJAX request:

```javascript
window.onload = (event) =>{
    fetch('https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen').then(response => {
        return response.json()
    }).then(json => console.log(json),
        err => console.log(err))
}
```

Now let's use the data to populate the DOM:

```javascript
window.onload = (event) =>{
    fetch('https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen').then(response => {
        return response.json()
    }).then(
        json => {
            document.querySelector('#title').innerText = data.Title
            document.querySelector('#year').innerText = data.Year
            document.querySelector('#rated').innerText = data.Rated
            },
        err => console.log(err)
    )
}
```

## Make dynamic AJAX requests

Currently, we're getting data for Frozen every time the page loads.  Let's let the user choose the movie:

```html
<form>
	<input type="text" placeholder="movie title"/>
	<input type="submit" value="Get Movie Info" />
</form>
```

Move the AJAX request to within a form submit event handler:

```javascript
window.onload = (event) =>{
    document.querySelector('form').addEventListener('submit', (event) => {

        event.preventDefault();

        fetch('https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen').then(response => {
            return response.json()
        }).then(
            json => {
                document.querySelector('#title').innerText = data.Title
                document.querySelector('#year').innerText = data.Year
                document.querySelector('#rated').innerText = data.Rated
                },
            err => console.log(err)
        )
    })
}
```

Lastly, let's use the input that user types to modify the AJAX request:

```javascript
window.onload = (event) =>{
    document.querySelector('form').addEventListener('submit', (event) => {

        const userInput = document.querySelector('input[type="text"]').value

        fetch('https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput).then(response => {
            return response.json()
        }).then(
            json => {
                document.querySelector('#title').innerText = data.Title
                document.querySelector('#year').innerText = data.Year
                document.querySelector('#rated').innerText = data.Rated
                },
            err => console.log(err)
        )
    })
}
```
