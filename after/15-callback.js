// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "blue";
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "green";
// }, 3000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "blue";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "pink";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "yellow";
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// const delayedColourChange = (newColor, delay) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//     }, delay);
// };

// delayedColourChange("red", 3000);

const delayedColourChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
        // if (doNext) {
        //     doNext()
        // }
    }, delay);
};

delayedColourChange("blue", 2000, function () {
    delayedColourChange("green", 2000, function () {
        delayedColourChange("skyblue", 2000, function () {
            delayedColourChange("red", 2000);
        });
    });
});
