//*  Arguments Object
// find out more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments?retiredLocale=de

// function sum() {
//   const array = [...arguments];
//   return array.reduce((pre, cur) => pre + cur);
// }
// console.log(sum(1, 23, 5, 4, 9));

// function sum(...nums) {
//   console.log(nums);
//   return nums.reduce((acc, curr) => acc + curr);
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 100));

//* ORDER MATTERS:

// function raceResults(gold, silver = "hasem", ...others) {
//   console.log(`gold medal goes to: ${gold}`);
//   console.log(`silver medal goes to: ${silver}`);
//   console.log(`Thanks to: ${others}`);
// }

// const arrOfName = ["Schumacher", "Hamilton", "Vette", "Roseberg", "Button"];

// console.log(raceResults(...arrOfName));
// console.log(
//   raceResults("Schumacher", "Hamilton", "Vette", "Roseberg", "Button")
// );

// function raceResults2(...others) {
//   console.log(others);
//   console.log(`gold medal goes to: ${others[0]}`);
//   console.log(`silver medal goes to: ${others[1]}`);
//   console.log(`Thanks to: ${others.slice(2)}`);
// }
// console.log(
//   raceResults2("Schumacher", "Hamilton", "Vette", "Roseberg", "Button")
// );
