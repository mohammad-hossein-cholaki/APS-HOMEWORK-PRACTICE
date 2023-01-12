//*  Arguments Object
// find out more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments?retiredLocale=de

// function sum() {
// }
// sum()

function sum(...nums) {
  console.log(nums);
  return console.log(nums.reduce((acc, curr) => acc + curr));
}

sum(1, 2, 3, 4, 5, 6, 100);

//* ORDER MATTERS:

function raceResults(gold, silver, others) {
  console.log(`gold medal goes to: ${""}`);
  console.log(`silver medal goes to: ${""}`);
  console.log(`Thanks to: ${""}`);
}

const arrOfName = ["Schumacher", "Hamilton", "Vette", "Roseberg", "Button"];

// function raceResults2(others) {
//   console.log(`gold medal goes to: ${""}`);
//   console.log(`silver medal goes to: ${""}`);
//   console.log(`Thanks to: ${""}`);
// }
// raceResults2("Schumacher", "Hamilton", "Vette", "Roseberg", "Button")
