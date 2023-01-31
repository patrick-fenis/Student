[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Express - Update

## Lesson Objectives
1. Create an edit route to render the `edit.ejs`
1. Create a link to the edit route in the `index.ejs`
1. Create an update route
1. Make the edit page send a PUT request

## Edit


|#|Action|URL|HTTP Verb|EJS view filename|
|:---:|:---:|:---:|:---:|:---:|
|1| Index | /fruits/ | GET | index.ejs |
|2| Show | /fruits/:index | GET | show.ejs |
|3| New | /fruits/new| GET | new.ejs |
|4| Create | /fruits/ | POST| none |
|5| **Edit** |**/fruits/:index/edit**|**GET**|**edit.ejs**|
|6| **Update** |**/fruits/:index**|**PUT**|**none**|
|7| Destroy | /fruits/:index | DELETE |none |


## Create an edit route to render the `edit.ejs`

### Edit route

In our `server.js`, create a GET route which will just display an edit form for a single fruit

```javascript
app.get('/fruits/:index/edit', (req, res)=>{
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			fruit: fruits[req.params.index], //the fruit object
			index: req.params.index //... and its index in the array
		}
	)
})
```

### `edit.ejs`
Now let's grab our create form and update it for editing in `views/edit.ejs`

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
      <h1>Edit Fruit Page</h1>
      <form action="/fruits" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" id="name"/>
        <label for="color">Color</label>
        <input type="text" name="color" id="color" />
        <label for="isReadyToEat">Is Ready to Eat</label>
        <input type="checkbox" name="readyToEat" id="isReadyToEat" />
        <input type="submit" value="Edit Fruit">
      </form>
    </body>
</html>
```

## Create a link to the edit route in the `index.ejs`

Inside our `index.ejs` file, add a link to our edit route which passes in the index of that item in the url

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Index of Fruits</title>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <h1>Index of Fruits</h1>
    <nav>
      <a href="/fruits/new">Create a New Fruit</a>
    </nav>
    <ul>
    <% fruits.forEach((fruit, index) => { %>
      <li>
        <a href="/fruits/<%=index%>"> <%= fruit.name %></a>
        <form action="/fruits/<%= index %>?_method=DELETE" method="POST">
          <input type="submit" value="DELETE"/>
        </form>
        <a href="/fruits/<%=index %>/edit">Edit</a>
      </li>
    <% }) %>
    </ul>
  </body>
</html>
```

## Create an update route.

In order to UPDATE, we use the http verb **`PUT`**.

Inside server.js add the following:

```javascript
app.put('/fruits/:index', (req, res) => { // :index is the index of our fruits array that we want to change
	if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
		req.body.readyToEat = true
	} else { //if not checked, req.body.readyToEat is undefined
		req.body.readyToEat = false
	}
	fruits[req.params.index] = req.body //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/fruits'); //redirect to the index page
})
```

Test with cURL

```sh
curl -X PUT -d name="tomato" -d color="red" localhost:3000/fruits/2
```

or with Postman
![postman](https://i.imgur.com/5ytuf8y.png)

Our last fruit (banana) should now be a tomato


## Make the edit page send a PUT request

When we click "Submit Changes" on our edit page (edit.ejs), the form needs to make a PUT request to our update route

```html

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Edit a Fruit</title>
    </head>
    <body>
      <h1>Edit Fruit Page</h1>
      <form action="/fruits/<%=index%>?_method=PUT" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" id="name"/>
        <label for="color">Color</label>
        <input type="text" name="color" id="color" />
        <label for="isReadyToEat">Is Ready to Eat</label>
        <input type="checkbox" name="readyToEat" id="isReadyToEat" />
        <input type="submit" value="Edit Fruit">
      </form>
    </body>
</html>
```

What is frustrating, is that our users have to remember which fruit they clicked on and update/reenter all the values.

We should at least set values in the form for the user to update

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Edit a Fruit</title>
    </head>
    <body>
      <h1>Edit Fruit Page</h1>
      <form action="/fruits/<%=index%>?_method=PUT" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" value="<%=fruit.name%>"/>
        <label for="color">Color</label>
        <input type="text" name="color" id="color" value="<%=fruit.color%>"/>
        <label for="isReadyToEat">Is Ready to Eat</label>
        <input type="checkbox" name="readyToEat" id="isReadyToEat"
        <% if(fruit.readyToEat === true){ %>
  				checked
  			<% } %>
        />
        <input type="submit" value="Edit Fruit">
      </form>
    </body>
</html>
```
