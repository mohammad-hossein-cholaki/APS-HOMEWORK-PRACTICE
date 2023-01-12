/*
make a shopping list with their quantity:

you should follow the below steps:

 - Listen for the for submission
 - When the form is submitted, prevent the default behaviour
 - Grab the quantity input value and the product input value
 - Create a new <li> element. Set the text in the new <li></li> to include the 
   quantity and product name from the form
 - Append the new <li></li> to the <ul></ul> on the page
 - Reset inputs

*/

const form = document.querySelector("form");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const product = e.target.product.value;
    const quantity = e.target.qty.value;

    const li = document.createElement("li");
    li.textContent = `${product}: ${quantity}`;
    list.appendChild(li);

    e.target.product.value = "";
    e.target.qty.value = "";
});
