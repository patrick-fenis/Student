![tama](https://user-images.githubusercontent.com/6153182/33615434-2359d308-d9a8-11e7-9ac8-492bbfacd749.jpg) .


For those who don't remember (or choose to forget), tamagotchis were "digital pets" that you could carry around with you and feed them, clean up after them, pet them, and try to keep them happy.

## Before you start!!

- You'll be saving your work in your `src/tamagotchi.js`. However, feel free to code your work in a `repl.it` or `codepen` and then transfer your work to your `src/tamagotchi.js` upon completion. 

# Tamagotchi Version 1.0

Make a ```tamagotchi``` object. Give it the following properties:  
1. a `hungry` property (initially false)  
2. a `sick` property (initially false)  
3. an `age` of 0  
4. a `rest level` (initally set to 5)

Give it the following methods:</br>

1. ```feed()``` - if hungry is true, return "That was yummy!" and set hungry to false.  If hungry is false, return "No thanks, I'm full." and set hungry to true.  
2. ```sleep()``` - returns "zzzzzzz" (use as many z's as you want) and increase rest level
3. ```medicate()``` - if sick is true, return "I feel much better!" and set sick to false.  If sick is false, return "No thanks, I feel fine." and set sick to true.
4. ```increaseAge()``` - increase the age by one and return "Happy Birthday to me! I am " + age + " years old!"

---

## We are going to build a three custom tamagotchi objects:
Use your custom tamagotchi object... to create each of these
- dog
- cat
- fish


### dog should be the same as tamagotchi except it should have this additional property:
-  a `breed` property (set this this to a breed of your choice)  

#### and also have these functions:
-  ```bark()``` - returns "ruff ruff  
-  ```goOutside()``` - returns "I own that tree now!"  


### cat should be the same as tamagotchi except it should have this additional property:
-  a `furry` property (initially `true`)  

#### and also have these functions:
-  ```meow()``` - returns "Meow!"  
-  ```useLitterBox()``` - returns "Burried treasure!"  

### fish should be the same as tamagotchi except it should have this additional property:
-  a `fishType` property (initially set to `salmon`)  
-  a `kosher` property (initially `true`)  

#### and also have these functions:
-  ```swim()``` - returns "Just keep swimming..."  

---

Try the following:  
1. Feed the dog twice.  
2. Increase the dog's age twice.  
3. Make the dog bark.  
4. Make the dog go outside.  
5. Make the cat meow.  
6. Make the cat sleep.  
7. Make the cat use the litter box.  
8. Give the fish medicine twice.  
9. Make the fish swim.

Bonus:  What is missing from our tamagotchis?!?!  Build it!
---

### AFTER Completing the above exercise...
- Identify which parts of your tamagotchis share the SAME attributes
- Identify which parts of your tamagotchis share the SAME abilities
- Identify the differences
