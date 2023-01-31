[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Mongo Database

## Lesson Objectives

1. Describe what is a Database
1. Describe what is MongoDB
1. Understand the difference between collections and document
1. Set up MongoDB
	- Install
	- Get Mongo Running
	- Connect to Mongo
	- Connect via Mongo Shell
1. Connect/Create to a Sub-Database
1. Create a collection
1. Create, Read, Update and Delete Documents
	- Insert a document into a Collection (CREATE)
	- Query Documents from a Collection (READ)
	- Remove Documents from a Collection (DELETE)
	- Update a document (UPDATE)
1. drop a Collection or sub-database


## What is a Database

A database (DB), in the most general sense, is an organized collection of data. More specifically, a database is an electronic system that allows data to be easily accessed, manipulated and updated.

For our CRUD apps so far we've been hard coding some data. We've been able to make temporary changes, but as soon as we shut down our servers, those changes are gone.

From now on we will use a database as a way of storing and managing our data, so we can perssist the changes we do in our apps.


## What is MongoDB

MongoDb is an open source, nonrelational database management system (DBMS) that uses flexible documents to process and store various forms of data. As a NoSQL solution, MongoDB provides an elastic data storage model that enables users to store and query multivariate data types with ease. This not only simplifies database management for developers but also creates a highly scalable environment for cross-platform applications and services.

MongoDB will store data as BSON (Binary representation of JSON), which for now you can assimilate as a JavaScript objects. Read more about that [here](https://www.mongodb.com/docs/manual/core/document/#std-label-bson-document-format)


## Mongo Collections and Documents

A collection is a set of documents. Documents are a set of data records. This is very abstract. Let's use a simplified real world example of an address book.

Here is one document:

```shon
{
    _id: "5099803df3f4948bd2f98391"
    firstName: "Jennifer",
    lastName: "Juniper",
    age: 32
    telephone: "312-867-5309",
    birthday: "June 8, 1968",
    email: "jenny.juniper@juno.net"
}
```

A collection, would be many documents: In our case, many contacts.

Remember: having a collection of documents sounds quite reasonable. But having a document of collections is ... kind of odd.

If you're coming from a background where you are used to thinking of data in terms of columns and rows, reading the following could be helpful in transitioning into this new way of modeling data:

[Thinking in Documents Part 1](https://www.mongodb.com/blog/post/thinking-documents-part-1?jmp=docs&_ga=2.202168721.1294830246.1530196908-30583944.1529350623)

[Thinking in Documents Part 2](https://www.mongodb.com/blog/post/thinking-documents-part-2)

## Set up Mongo

### Install
[Follow the directions here in this README.](https://git.generalassemb.ly/seirfx-cosmos/install_mongo)

### Get Mongo Running

To start your MongoDB, *from any directory* in the terminal, type

```sh
brew services start mongodb-community
```

This is a successful message:

![mongod running successfully](https://i.imgur.com/lPZU2XZ.png)

To terminate your MongoDB, *from any directory* in the terminal, type

```sh
brew services stop mongodb-community
```

### Connect to Mongo

There are a few ways to connect to Mongo. In this course, there will be two main ways:

- Through terminal in a shell.
- Through npm module called `mongoose`.

### Connect via Mongo Shell

On the terminal  the command

```sh
mongosh
```

A bunch of text should come up something like this, and the final line should have changed from a bash prompt `$` to a `>`

![Mongo Shell Ready to type](https://i.imgur.com/RgeJAwG.png)


## Connect/Create to a Sub-Database

Let's keep working on our Mongo Shell.

Let's see what sub-databases we have available to us:

```sh
show dbs
```


Sample Appearances of Sub Databases

![Sample Appearances of Sub Databases](https://i.imgur.com/PUIdcLm.png)


We want to create and use a sub-database called `learn`. With Mongo, if it doesn't exist, Mongo will create it.

Therefore if we type

```sh
use learn
```

It will create a sub-database called `learn` and connect to it

summary>Created and Connected to Learn sub-databases

![create and connect to learn](https://i.imgur.com/ZQ1bck6.png)


It is likely that our configuration let's us see the db name at our prompt, but in case it doesn't or we want a reminder we can type

```sh
db
```

To see the database we are currently connected to.


## Create a Collection

For today, we'll only be working with one collection, but most apps will have numerous collections.

Let's think about an online store. You might split up the collections like so:
```txt
- users
    - username
    - password
    - address
    - creditCardInfo
    - phoneNumber

- products
    - productName
    - catalogNum
    - imageLink
    - price
    - inStock
```

This helps us organize our data.

Let's go back to our address book example and create a collection of contacts.

```sh
db.createCollection('contacts')
```
We should get an ok message, if we've done it correctly.


Created a new collection successfully

![collection create](https://i.imgur.com/vSsT8oO.png)


We can see what collections we  have by typing

```sh
show collections
```

# Create, Read, Update and Delete Documents
We've been creating, reading, updating and deleting our 'data' in our Express apps. Now let's learn how to do it using Mongo.

Remember: users are not going to open a Mongo shell and type everything we're going to type. We'll eventually be building apps to interact with our database.

## Insert a document into a Collection (CREATE)

We'll use the `insertOne()` method.
We have to tell mongo where to insert it. We'll do that by chaining it to `db.contacts`
It takes two arguments.
The first is always an object of our data.
The second is optional and can let us choose some specific options.

Insert into contacts:
```sh
db.contacts.insertOne()
```

Pass in an object as the first argument
```sh
db.contacts.insertOne({})
```

Add some key value pairs, for Jennifer. We're going to split it up across multiple lines to make it easier to type and see
```sh
db.contacts.insertOne({
  name: 'Jennifer',
  phone: 8675309,
  state: 'California'
})
```

We can also type our code in our code editor and when we know it's right, copy and paste it over into our Mongo shell. Go with whatever is easier.

Successful insertOne

```sh
{
  acknowledged: true,
  insertedId: ObjectId("62f1c66048a9c34bd88740e2")
}
```

Let's go ahead and copy paste this into our Mongo shell to populate our collection with more documents

```sh
db.contacts.insertMany(
  [
    {
      name: 'Jennifer',
      phone: 8675309,
      state: 'California'
    },
    {
      name: 'Claire',
      phone: 6060842,
    },
    {
      name: 'Morris',
      phone: 7779311,
      state: 'Minnesota'
    },
    {
      firstName: 'Alicia',
      lastName: 'Keys',
      phone: 4894608,
      state: 'New York'
    },
    {
      name: 'Etta',
      phone: '842-3089',
      state: 'California'
    },
  ]
)
```

Successful insertMany

```sh
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("62f1c6ac48a9c34bd88740e3"),
    '1': ObjectId("62f1c6ac48a9c34bd88740e4"),
    '2': ObjectId("62f1c6ac48a9c34bd88740e5"),
    '3': ObjectId("62f1c6ac48a9c34bd88740e6"),
    '4': ObjectId("62f1c6ac48a9c34bd88740e7")
  }
}
```


We may notice that our data wasn't consistent.

- Jennifer has a duplicate record
- Claire, doesn't have a state
- Alicia's key's are different for her name than others, she also has an extra field for her last name, compared to others.
- Etta's phone number is a string with a hyphen instead of a number

Mongo is designed to be this flexible. Later, we'll learn how to validate our data with an npm package called `mongoose`.

## Query Documents from a Collection(READ)

We'll use the `.find()` method.

We'll do some simple queries. If we provide no argument, it will find all the documents.

Let's try it

```sh
db.contacts.find()
```

Successful find all

![Find All](https://i.imgur.com/RSRhxbi.png)


Many times, we don't want to find all.

We might want to just find the names of the people who live in California.

We can give our `.find()` method some arguments. The first argument will be a `filter` and the second argument will be a `projection` the project will be the key, it can have a value of 0 (do not show this field) or 1 (do show this field).

When we skip the second argument, we see the whole document:

```sh
db.contacts.find(
  { state:'California' }
 )
```

Let's look for the names of people who are in the state of California, and let's not show the `_id` field. We'll add a second argument.


```sh
db.contacts.find(
  { state:'California' },
  { name: 1, _id: 0 }
 )
```

## Remove Documents from a Collection(DELETE)

Let's remove that duplicate record. We'll use a method called `.deleteOne()`

```sh
db.contacts.deleteOne(
  {
    name: 'Jennifer'
  }
)
```

We should have a success message that reads like the following:

```sh
{ acknowledged: true, deletedCount: 1 }
```

But we can also run a query:

```sh
db.contacts.find({name:'Jennifer'})
```


If we wanted to delete all records where the name is Jennifer we can use the method deleteMany. 

Example: 

```sh
db.contacts.deleteMany(
  {
    name: 'Jennifer'
  }
)
```



Let's use our `UP arrow` to scroll back to our **`.find()`** for Jennifer and check that we now have just one record.

```sh
db.contacts.find({name:'Jennifer'})
```

## Update a document (UPDATE)

Like `.deleteOne()`, updateOne takes a query for what to update. But it is also REQUIRED to use an **[update operator](https://docs.mongodb.com/manual/reference/operator/update/)** as part of the second argument in order to prevent destroying our object.

Let's update Jennifer's record to have the name Jenny instead

```sh
db.contacts.updateOne(
  {name: 'Jennifer'},
  {name: 'Jenny'}
)
```

Success looks like this:

```sh
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

- we have number matched (matchedCount) equal to 1
- we have number modified (modifiedCount) equal to 1, which means we modified 1 records.

Instead we get:
```sh
MongoInvalidArgumentError: Update document requires atomic operators
```

This is because we didn't use an update operator. In order to keep our data intact with an update we must use an update operator.


Let's use the `$set` update operator this time

```sh
db.contacts.updateOne(
  {name: 'Jennifer'},
  {
    $set: {name: 'Jenny'}
  }
)
```

Now we should see a success message 

```sh 
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

Since our data set is very small, let's just look at all of our records

```sh
db.contacts.find()
```

We can add a field. Claire has no state, let's give her a state

```sh
db.contacts.updateOne(
  {  name: 'Claire' },
  {
    $set: {state: 'California'}
  }
)
```

We can push the up arrow to rerun
```sh
db.contacts.find()
```

And we should see that Claire now has a state, so we don't have to query for the field that we want to change, we can query for any match.

Because of this, our objects can be ever changing. The way we can reliably be sure we are always getting the right document, is to use the unique id number attributed to each document on creation. Typing these long ids are tough for a code along, but when we start making our express CRUD apps, we'll definitely be using the id numbers a lot.

By default, updateOne will only update one record

```sh
db.contacts.updateOne(
  {},
  {$set: {bestFriend: true}}
)
```

Press the up arrow to run

```sh
db.contacts.find()
```
As we can see, just one record was updated. Let's try to update all of our records, we can do that by using the `.updateMany()` method

```sh
db.contacts.updateMany(
  {},
  { $set: {bff: true}}
)
```
Press the up arrow to run

```sh
db.contacts.find()
```

## drop a Collection or sub-database

If you need to remove an entire collection
```
db.contacts.drop()
```

If you need to drop an entire sub-database, while you are connected to the database you want to drop:

```
db.dropDatabase()
```


# Bonus


## Search for Multiple Values
We can query for multiple values. In our contacts, let's query for people who live in California and are named Etta

```sh
db.contacts.find(
  {
    name: 'Etta',
    state: 'California'
  }
)
```

## Search by Quantitative Data

We can search for equal to, not equal to, greater than, less than or equal to, included in an array etc.

[query operators](https://docs.mongodb.com/manual/reference/operator/query/)

Let's just try one together. Let's query for the people who are NOT in California

```sh
db.contacts.find(
    {
      state: {$ne : 'California'}
    }
)
```


## Remember to quit out of Mongo and Mongo Shell when you are done.

To quit out of the Mongo shell type `exit`

To quit out of Mongo, press `control c`
