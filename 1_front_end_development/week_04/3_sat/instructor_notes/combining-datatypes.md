# Combining data types and Callbacks

## Lesson Objectives

1. Looping with nested arrays/objects
1. Combine objects, arrays, and functions more than one level deep

## Looping with nested arrays/objects

You can loop over an array in an object

```javascript
const foo = {
    someArray:[1,2,3]
};

for(element of foo.someArray){
    console.log(element);
}

//same as above
for (let i = 0; i < foo.someArray.length; i++) {
    console.log(foo.someArray[i]);
}
```

You can loop over an array in an array.  Just add an additional [*index*] after the first [*index*]

```javascript
const foo2 = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

for(let row of foo2){
    for(let element of row){
        console.log(element);
    }
}

//same as above
for (let i = 0; i < foo2.length; i++) {
    for (let j = 0; j < foo2[i].length; j++) {
        console.log(foo2[i][j]);
    }
}
```

## Combine objects, arrays, and functions more than one level deep

You can create a function that returns an object.  Just add the `.` after the `()` since the return value of the function is an object

```javascript
const foo3 = ()=>{
    return {
        someProperty: 'hi!'
    }
};

foo3().someProperty;//hi
```

You can create a function that returns an array.  Just add `[index]` after the `()` since the return value of the function is an array

```javascript
const foo4 = ()=>{
    return ['apple','banana','pear'];
};

foo4()[1]; //banana
```

You can create a function that returns an object that has an array

```javascript
const foo5 = ()=>{
    return {
        someArray: ['fun', 'awesome', 'sweet']
    }
};

foo5().someArray[1]; //awesome
```

You can create a function that returns an object that has an object

```javascript
const foo6 = ()=>{
    return {
        someObject: {
            someProperty: 'some value'
        }
    }
};

foo6().someObject.someProperty; //some value
```

You can create a function that returns an object that has a method

```javascript
const foo7 = ()=>{
    return {
        someMethod:()=>{
            console.log('oh hai!');
        }
    }
};

foo7().someMethod(); //logs 'oh hai!'
```

You can create a function that returns a function.  Just add the `()` after the first `()` since the return value of the first function is another function

```javascript
const foo7 = ()=>{
    return ()=>{
        console.log('whaaaa?');
    }
};

foo7()(); //logs 'whaaaa?'
```

You can create an object that has a method that returns an object

```javascript
const foo8 = {
    someMethod:()=>{
        return {
            someProperty: 'some value'
        }
    }
};

foo8.someMethod().someProperty;
```

You can create an object that has a method that returns an object that has an array

```javascript
const foo9 = {
    someMethod:()=>{
        return {
            someArray: ['peach', 'apple', 'pear']
        }
    }
}

foo9.someMethod().someArray[2]; //pear
```

You can create an object that has a method that returns an object that has an object

```javascript
const foo10 = {
    someMethod:()=>{
        return {
            someObject: {
                someProperty: 'some value'
            }
        }
    }
}

foo10.someMethod().someObject.someProperty; //some value
```

You can create an object that has a method that returns an object that has another method

```javascript
const foo11 = {
    someMethod:()=>{
        return {
            someMethod:()=>{
                console.log('both methods can have the same name!');
            }
        }
    }
}

foo11.someMethod().someMethod(); //logs 'both methods can have the same name!'
```

You can create an object that has a method that returns a function

```javascript
const foo12 = {
    someMethod:()=>{
        return ()=>{
            console.log('hi')
        }
    }
}
foo12.someMethod()();//logs hi
```

You can create an array that has a function that returns an object

```javascript
const foo13 = [
    1,
    'apple',
    ()=>{
        return {
            someProperty: 'some value'
        }
    }
];

foo13[2]().someProperty; //some value
```

You can create an array that has a function that returns an object that has an array

```javascript
const foo14 = [
    1,
    'apple',
    ()=>{
        return {
            someArray: ['cat', 'dog', 'baboon']
        }
    }
];

foo14[2]().someArray[2]; //baboon
```

You can create an array that has a function that returns an object that has an object

```javascript
const foo15 = [
    1,
    'apple',
    ()=>{
        return {
            someObject: {
                someProperty: 'some value'
            }
        }
    }
];

foo15[2]().someObject.someProperty; //some value
```

You can create an array that has a function that returns an object that has a method

```javascript
const foo16 = [
    1,
    'apple',
    ()=>{
        return {
            someMethod:()=>{
                console.log('fun');
            }
        }
    }
];

foo16[2]().someMethod(); //logs fun
```

You can create an array that has a function that returns a function

```javascript
const foo17 = [
    1,
    'apple',
    ()=>{
        return ()=>{
            console.log('yes!');
        }
    }
];

foo17[2]()(); //logs yes!
```