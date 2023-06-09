[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Exobiology II

![](https://i.imgur.com/naenSjp.png)

The previous planet got raided by pirates and our scientists have successfully escaped! They are, understandably, a bit shaken. So we have a new batch of scientists that are coming in to take their place and continue the planetary survey while they recoup!

#### Learning Objectives

- Full CRUD App

#### Prerequisites

- Javascript
- Node / Express

---

## Getting Started

1. You'll be working in the same `uncharted_planet` folder
1. If you didn't finish yesterday's lab, go back and finish that first!
1. If you didn't attempt to delete the entire database, delete all the scientists now
1. Then create 5 new scientists

## Edit Route

> Our five new scientists have been doing well, but it seems the previous five are ready to jump back into action! Let's expand the morning's app so that we can just update the scientists.

1. Create an `edit` route in your `server.js`
1. Create an `edit.ejs` file and fill it with a `form` to edit data
1. Add a link to the `edit` route on your `index.ejs` onto all the scientists

## Put Route

1. Create a `put` route in your `server.js`
1. Make sure the `form` in your `edit.ejs` file has the appropriate method and action
1. Make it so that after updating the data, the route also redirects to the `index` page
1. Update your 5 scientists!

## Hungry for More

1. If you didn't do yesterday's hungry for more options, do those first then continue below
1. The show pages of each scientist should have a link to the edit page
1. The edit page should have a delete button which will delete the specified item
1. If you didn't already, create categories for the different types of life. For example, store "Plants" and beneath that, "Flowers", and then individual entries. Then be able to edit the names of the categories
1. Create a copy button that duplicates an entry and then goes directly to the edit page
1. Enter images for each item and display them on the homepage. _(Hint: you can use static assets.)_

### Hungrier for Even More

1. Use [taxonomic rank](https://en.wikipedia.org/wiki/Taxonomic_rank) to order your items in a drill-down manner. Be sure your data objects reflects this hierarchically.

---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
