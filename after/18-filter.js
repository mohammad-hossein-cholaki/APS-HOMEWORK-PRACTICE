const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

let moreThanTen = numbers.filter(number => number >= 10)
let lessThan12 = moreThanTen.filter(number => number >= 12)
// console.log("MoreThanTen:" , moreThanTen, "lessThan12:" , lessThan12);

let numberFour = numbers.filter(number => number === 4)
// console.log( numberFour );

let numbersLessThanTen = numbers.filter( number => number < 10)
// console.log(numbersLessThanTen)

let isFourIncludes = numbers.includes(4)
// console.log(isFourIncludes);

