function listOfColours(colours) {
  // Write your code here...

  let content= document.querySelector("#content");
  let select= document.createElement("select");
  let p= document.createElement("p");


for(let i=0; i<colours.length; i++){
  
  let option= document.createElement("option");

  option.innerHTML= colours[i];
  option.setAttribute("value",colours[i]);
  select.appendChild(option);
  
  console.log(option)
}

select.addEventListener("change", () => {
  p.innerHTML = `You have selected: ${select.value}`;
  p.style.color = select.value;
  console.log(select.value)
}
);

content.appendChild(select);
content.appendChild(p);   

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);


