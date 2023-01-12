//use addEventListener()
//add a click listener to each button, so when you click on each button console log hello and goodbye
const buttonHello = document.getElementById("hello");
const buttonBye = document.querySelector("#goodbye");

buttonHello.addEventListener("click", () => console.log("hello"));

buttonBye.onclick = function () {
    console.log("goodbye");
};
