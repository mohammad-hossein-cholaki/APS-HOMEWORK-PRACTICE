// const Body = document.body;
const Body = document.querySelector("body");

// console.log(Body.innerText);
// console.log(Body.innerHTML);
// console.log(Body.textContent);

const pTag = document.querySelector("#ptag");

// pTag.textContent = "Hello"
// pTag.innerText = "Hello"
// pTag.innerHTML = "Hello"

// pTag.textContent = "<h1>hellloo</h1>"
// pTag.innerText = "<h1>hellloo</h1>"
// pTag.innerHTML = `<h1 class="purple">hellloo</h1>`

// ------------------- Attribute Selector ---------------------------

// pTag.className = pTag.className + " purple";
// pTag.className += " purple";
pTag.className = "purple";

const imageTag = document.querySelector("#banner");

imageTag.alt = "banner image";
// imageTag.src = "url";

// console.log(imageTag.alt);

imageTag.setAttribute("alt", "image banner");
console.log(imageTag.getAttribute("alt"));

// console.log(imageTag.getAttribute("alakiAt"));

// ------------------- Style ---------------------------

const header = document.querySelector("#header");

header.style.color = "blue";
header.style.backgroundColor = "red";

// ------------------- Style ---------------------------

// imageTag.classList.add("newBanner", "borderR");
// imageTag.classList.remove("border");

const getAllA = document.querySelectorAll("a");
getAllA.forEach((item) => item.classList.toggle("A-color"));
