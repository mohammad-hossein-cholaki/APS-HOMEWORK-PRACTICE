/*
Time to work with input events

follow these steps:
- the h1 should start with the text "Enter your Username" (it should be already done, just check it)
- Whenever an input event is fired on the input element, update the h1 so that it displays "Welcome, " plus
current value of the form the text input.
- if the input goes back to being empty, update the h1 so that it once gain says "Enter your Username"
*/

const input = document.querySelector("input");
const h1 = document.querySelector("h1");

input.addEventListener("input", (e) => {
    h1.textContent = `welcome: ${input.value}`;
});
