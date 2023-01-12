//* Default params review:
// function rolDie(num = 5) {
//   console.log("num", num);
//   return Math.floor(Math.random() * num);
// }
// console.log(rolDie());

let str = "sdfsdafsdafsdf";
str.slice(5);

//* Old version of default params
// function rolDie(num) {
//   if (num == undefined) {
//     num = 5;
//   }
//   return Math.floor(Math.random() * num);
// }
// console.log(rolDie());

//* ORDER MATTERS HERE
// function greet(msg = "bye", person) {
//   return `${person} , ${msg}`;
// }

// console.log(greet("jasem"));

function greetMsg(person, msg = "hi", exp = "!!") {
  return `${person} , ${msg} ${exp} `;
}

const arr = ["jasem", "bye", "???"];

// console.log(greetMsg(...arr));

function sun(array = [], val = 0) {
  return array.reduce((pre, cur) => pre + cur, val);
}

console.log(sun());
