const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const para = document.createElement("p");
h1.append(para);

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
    para.textContent = randomColor();
});
