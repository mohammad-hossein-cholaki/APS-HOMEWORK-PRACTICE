const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", (e) => {
    // e.stopPropagation();
    e.stopImmediatePropagation()
    container.style.backgroundColor = makeRandColor();
    console.log("1");
});

button.addEventListener("click", (e) => {
    container.style.backgroundColor = makeRandColor();
    console.log("2");
});
button.addEventListener("click", (e) => {
    container.style.backgroundColor = makeRandColor();
    console.log("3");
});
button.addEventListener("click", (e) => {
    container.style.backgroundColor = makeRandColor();
    console.log("4");
});
button.addEventListener("click", (e) => {
    container.style.backgroundColor = makeRandColor();
    console.log("5");
});

const btnBubble = document.querySelector("#btn-bubble");

btnBubble.addEventListener('click', (e) => {
    // e.stopPropagation()
    e.stopImmediatePropagation()
    alert('button clicked')
})