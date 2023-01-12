//$ variable destructure
const pi = Math.PI;
// const E = Math.E
// const sqrt = Math.SQRT2
// console.log(pi)

const { PI, E, SQRT2 } = Math;

// console.log(PI)
// console.log(E)

//$  object destructure
const circle = {
    label: "circleX",
    radius: 2,
    color: "red",
};

//$ array destructuring
// const first = numbers[0]
const [first, second, , third] = [10, 20, , 30];
// console.log(first)
// console.log(second)
// console.log(third)

//$ rest operator
//
// rest operator ... in in arrays just copy the elements inside another array (creates a new arry)

// console.log(restOfItems)

// rest operator in object copies the properties in a new object ( creates a new objects)
const data = {
    temp1: "001",
    temp2: "002",
    firstName: "arad",
    lastName: "hasanpour",
};

const [fisrt, ...restOfItems] = [10, 20, 30, 40];

const { temp1, temp2, ...restOfObject } = data;

// /////////////////////////

// here we are copying the restOfItems elements inside a new array name newArr
const newArr = [...restOfItems];
// here we are copying the restOfObject properties in a new object name newObj
const newObj = { ...restOfObject };

// now we understant the array is an object at the first place but js actually removes the keys from it.
const item1 = { ...newArr };
const item2 = [{ ...newArr }];

// guess the result of these console.logs

// console.log('newArr :',newArr );
// console.log(' newObj:',newObj );
// console.log(' item1:',item1 );
// console.log(' item2:',item2 );
