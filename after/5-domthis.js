const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");

// bad practice
// button
// for (let button of buttons) {
//     button.addEventListener("click", function () {
//         button.style.backgroundColor = makeRandColor();
//         button.style.color = makeRandColor();
//     });
// }

// // h1
// for (let h1 of h1s) {
//     h1.addEventListener("click", () => {
//         console.log(this);
//         h1.style.backgroundColor = makeRandColor();
//         h1.style.color = makeRandColor();
//     });
// }

// best practice
function newColor() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

// button
for (let button of buttons) {
    button.addEventListener("click", newColor);
}

// h1
for (let h1 of h1s) {
    h1.addEventListener("click", newColor);
}
