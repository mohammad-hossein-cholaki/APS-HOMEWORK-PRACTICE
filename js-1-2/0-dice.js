let number = Math.round(Math.random() * 10)
let number2 = Math.floor(Math.random() * 10 + 1)
let number3 = Math.ceil(Math.random() * 10)

// console.log(number);


let dice1 = Math.floor(Math.random() * 6 ) + 1;
let dice2 = Math.floor(Math.random() * 6 ) + 1;

//? show dice variables value
console.log("dice1:", dice1);
console.log("dice2:", dice2);

let sum = dice1 + dice2
let roll = `you rolled a ${dice1} and a ${dice2} . they sum to ${sum}`;

//? show final result
console.log(roll);
