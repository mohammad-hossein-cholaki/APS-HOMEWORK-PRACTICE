// create 100 button elements
//add each button inside the container element provided in quiz8.html
//use appendChild, here are the steps:

//1- create 100 new button elements
//2- each button must have some text inside of it (it doesn't matter what)
//3- each button must be appended inside the container div

const container = document.querySelector("#container");

for (let step = 1; step <= 100; step++) {
  const btn = document.createElement("button");
  btn.innerText = "!! btn" + step;
  container.appendChild(btn);
}

//  ------------------------- functional version----------------------------------

// const container = document.querySelector("#container");

// const crateBtn = (text = "!!!!!!!!!!!!!!!!!") => {
//   const newBtn = document.createElement("button");
//   newBtn.innerText = text;
//   return newBtn;
// };

// for (let step = 1; step <= 100; step++) {
//   const btn = crateBtn("!! btn" + step);
//   container.appendChild(btn);
// }

// const btn2 = crateBtn();
// container.append(btn2);
