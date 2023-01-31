const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');
const methodOverride = require('method-override');
const { render } = require('ejs');

// MIDDLEWARE  
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DEFAULT 
app.get('/', (req, res) => {
	const today = new Date();
	res.send(`
    <h1>Hello! This is the Fruit app</h1>
    <p>Thanks for using our site</p>
    <p>${today}</p>
  `);
});

// INDEX
app.get('/fruits', (req, res) => {
	res.render('index.ejs', { fruits: fruits });
});

// NEW
app.get('/fruits/new', (req, res) => {
	res.render('new.ejs');
});

// SHOW
app.get('/fruits/:id', (req, res) => {
	const fruit = fruits[req.params.id];

	res.render('show.ejs', {
		fruit: fruit,
	});
});

// CREATE
app.post('/fruits', (req, res) => {
	const fruitToAdd = {
		name: req.body.name,
		color: req.body.color,
	};

	if (req.body.readyToEat === 'on') {
		fruitToAdd.readyToEat = true;
	} else {
		fruitToAdd.readyToEat = false;
	}

	fruits.push(fruitToAdd);

	res.redirect('/fruits');
});

// DESTROY

// UPDATE

// EDIT

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
