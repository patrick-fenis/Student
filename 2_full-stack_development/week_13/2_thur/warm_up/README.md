[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

### Loop the Loop: 2D Array Additon

**Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array**


Make a function that takes one argument, a two dimensional array, where all the arrays are the same length, and returns the greatest sum of the numbers by row, column and diagonal.
```js
const arr = [
    [10, 20, 30],
    [40, 50, 60],
    [70, -80, 90]
];

greatestSum(arr);
// output: 180  

// the last column (30 + 60 + 90)
```

#### Hungry for More?


Test your function on this data set and return the sum and if it was a row, column or diagonal that had the greatest sum!

```js
const bigArray =[
    [ 887, -541, -430, -590, 117, 172, -319, -18 ],
    [ -269, 964, 209, 840, -456, 156, 365, -568 ],
    [ 289, -41, 488, 198, 240, 124, -427, 214 ],
    [ 452, 894, 968, -149, 683, 977, 741, -805 ],
    [ 181, -714, -950, 107, 800, 751, -143, 380 ],
    [ 152, 493, 707, 914, 37, 356, -625, 608 ],
    [ -345, 906, 83, 676, 723, 381, 557, -183 ],
    [ 199, -943, -710, 565, 193, 315, 281, 245 ]
];


greatestSum(arr);
// output: DiagonalOne: 4148  


```



**Still Hungry?**<br>

Generate 2D Arrays

**Part A**

Create a function that takes one argument, a number, that makes a 2D array of random integers between 0  and 1000 where the length of the rows and columns is determined by the argument.

```js
console.table(generateArray(4))

┌─────────┬─────┬─────┬─────┬─────┐
│ (index) │  0  │  1  │  2  │  3  │
├─────────┼─────┼─────┼─────┼─────┤
│    0    │ 57  │ 218 │ 429 │ 562 │
│    1    │ 254 │ 113 │ 689 │ 609 │
│    2    │ 341 │ 747 │ 996 │ 154 │
│    3    │ 964 │ 407 │ 688 │ 601 │
└─────────┴─────┴─────┴─────┴─────┘
```

**Part B**

Add a 30% chance that the integer will become negative.

```js
console.table(generateArrayWithChance(4))

┌─────────┬──────┬──────┬──────┬──────┐
│ (index) │  0   │  1   │  2   │  3   │
├─────────┼──────┼──────┼──────┼──────┤
│    0    │ 257  │ -252 │ 787  │  37  │
│    1    │ -265 │ 114  │ -708 │ 172  │
│    2    │ -53  │ 868  │ 427  │ -734 │
│    3    │ 326  │ 245  │  72  │ -713 │
└─────────┴──────┴──────┴──────┴──────┘
```
