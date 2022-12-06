[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Practice with OOP


## Prompt #1 - Rectangle

Define a `Rectangle` class. Its constructor should take a `length` and `width` as arguments.

Augment the class with the following methods...
* `isSquare` - returns true if the rectangle is a square.

> Hint: Squares have sides of equal length.

* `area` - calculates the area of the rectangle.

> Hint: Area = length * width

* `perimeter` - calculates the perimeter of the rectangle.

> Hint: Calculate the perimeter by adding all of the sides together.

Create a few rectangles with different lengths and widths and test all your methods on them.


<br>

## Prompt #2 - Triangle

Define a `Triangle` class. Its constructor should take three sides -- `sideA` `sideB` and `sideC` -- as arguments.

Augment the class with the following methods...
* `isEquilateral` - returns true [if the triangle is equilateral](http://en.wikipedia.org/wiki/Equilateral_triangle).

> Hint: Equilateral triangles have sides of the same length.

* `isIsosceles` - return true [if the triangle is isosceles](http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides).

> Hint: Isosceles triangles have two equal sides.

* `area` - calculates the [area of the Triangle](http://en.wikipedia.org/wiki/Heron%27s_formula).

> Hint: A triangle has three sides represented by `a`, `b` and `c`, as well as a semi-perimeter, represented by `s`. `s = (a + b + c)/2` and Area is equal to the square root of `s * (s - a) * (s - b) * (s - c)`.

* `isObtuse` - returns true [if the triangle is obtuse](https://en.wikipedia.org/wiki/Acute_and_obtuse_triangles).

> Hint: You can calculate an obtuse triangle using the lengths of the triangle's sides. find out which side is the bigger and apply this boolean expression, lets say `sideC` is the biggest side `(sideA * sideA + sideB * sideB) < (sideC * sideC)`. if this expression return `true` is because the triangle is Obtuse. For more detail look at this [link](https://sciencing.com/scale-factor-triangle-8788462.html)




Create a few rectangles with different lengths and widths and test all your methods on them.



<br>

## Prompt #3 - LineSegment

Define a `LineSegment` class. Its constructor should take two pairs of coordinates -- `x1` `y1` `x2` `y2` -- as arguments.

Augment the class with the following method...
* `length` – calculates the length of the (x1, y1) --> (x2, y2) [line segment](http://en.wikipedia.org/wiki/Pythagorean_theorem).

> Hint: Calculate the line segment by taking the square root of `((x2 - x1) ** 2) + ((y2 - y1) ** 2)`.

Create a few line segments with different coordinates and use your length method on them.


<br>

# Hungry for more :interrobang:

## Prompt #4 - Shape

Define a `Shape` class. It should have the number of sides and a color associated with it. Refactor the other classes to inherit from it.

<br>
