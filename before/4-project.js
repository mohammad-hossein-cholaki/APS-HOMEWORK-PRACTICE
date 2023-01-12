const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const p = document.createElement("p");
h1.append(p);
console.log(h1);

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
    p.textContent = randomColor();
});
