CRUD - this is what web application let users to do their data

Create

Read

Update

Delete

For web applications and when building APIs, we want to make sure we are providing these four types of basic functionality.


REST - architectural guideline that tells us how to structure our
URLS and how the URLs should behave

index -- GET /fruits -- lists all the fruits
show -- GET /fruits/:id -- info about one fruits


MVC -- architectural pattern for designing web applications

--> separations of concerns

M -- Model -- our data

V -- Views -- what the user sees (templates/HTML pages)

C -- Controller -- logic that runs our app, changes data and renders views based on user input, routes/handlers


BONUS:

if () {

} else {

}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Conditional (ternary) operator

condition ? ExpressionIfTrue : ExpressionIfFalse

imagine
fruits[i].readyToEat = True

fruits[i]readyToEat ? 'food is ready to eat' : 'food is not ready to eat'
