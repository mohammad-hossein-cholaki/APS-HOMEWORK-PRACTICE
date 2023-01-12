const btnV2 = (document.querySelector("#v2").onclick = function () {
    alert("clicked meeee");
});

const btnV3 = document.querySelector("#v3");

btnV3.addEventListener("click", () => {
    console.log("clickkeddd");
});

function sayHi() {
    console.log("hello world");
}

const tasTag = document.querySelector("#tas");

tasTag.addEventListener("click", sayHi);
