const btnV2 = document.querySelector("#v2");

// btnV2.onclick = () => {
//   alert("js btn click");
// };

btnV2.addEventListener("click", () => {
  console.log("click");
});

const btnV3 = document.querySelector("#v3");

btnV3.addEventListener("mousemove", () => {
  document.body.style.backgroundColor = "#fa2" + Math.floor(Math.random() * 99);
});

// ------------------------- use function in addEventListener ------------------------------
// const changeColorFunc = () => {
//   document.body.style.backgroundColor = `rgb(
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)})`;
// };

// btnV3.addEventListener("mousemove", changeColorFunc);

//! never call or execute function in addEventListener, for example:
//! btnV3.addEventListener("click", changeColorFunc()) => run function when page loaded not when click on button

/*
  ? find out more:
  * https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
  * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*/
