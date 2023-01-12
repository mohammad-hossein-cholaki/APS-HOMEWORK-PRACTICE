const btnV2 = document.querySelector("#v2");
const btnV3 = document.querySelector("#v3");
const para = document.querySelector("#para");
const tasTag = document.querySelector("#tas");

tasTag.addEventListener("dblclick", () => {
    console.log("double clicked");
});

btnV2.onclick = function () {
    console.log("clicked");
};

btnV3.ondrag = () => {
    console.log("draggg");
};

para.oncopy = function () {
    console.log("copyyyy");
};

const spanHeight = document.querySelector("#height");
const spanWidth = document.querySelector("#width");

window.addEventListener("resize", () => {
    spanHeight.textContent = window.innerHeight;
    spanWidth.textContent = window.innerWidth;
});
