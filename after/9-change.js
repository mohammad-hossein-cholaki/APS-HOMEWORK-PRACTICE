const h1 = document.querySelector('h1');
const input = document.querySelector('input');

// input.addEventListener('change', (e) => {
//     console.log(e.target.value);
// })

input.addEventListener('input', (e) => {
    h1.innerText = input.value;
})