const button = document.querySelector("button");
const divTest = document.querySelector(".test");
const input = document.querySelector("input");

button.addEventListener("click", (event) => {
    // console.log(event.altKey);
    // console.log(event.shiftKey);
    console.log(event.target);
});

input.addEventListener("keydown", (e) => {
    // console.log(e);
    // console.log(e.code);
    console.log(e.target.name);
    // console.log(e.key);
    // console.log(e.keyCode);
});

// input.addEventListener("keypress", (e) => {
//     // console.log(e);
//     // console.log(e.code);
//     console.log(e);
//     // console.log(e.key);
//     // console.log(e.keyCode);
// });

let divTop = 50;
let divLeft = 50;

window.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowUp":
            console.log((divTest.style.top = `${divTop--}px`));
            break;
        case "ArrowDown":
            console.log((divTest.style.top = `${divTop++}px`));
            break;
        case "ArrowRight":
            console.log((divTest.style.left = `${divLeft++}px`));
            break;
        case "ArrowLeft":
            console.log((divTest.style.left = `${divLeft--}px`));
            break;
        default:
            console.log("nothing");
    }
});
