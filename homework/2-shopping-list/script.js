function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content= document.querySelector("#content");

  let ul= document.createElement("ul");
  
  
  
  for(let i=0; i<arrayOfPeople.length; i++){
    
    let item= document.createElement("li");
    
    item.innerText=arrayOfPeople[i];
    
    ul.appendChild(item);
    
    
  }
  content.appendChild(ul);

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"]

shoppingList(shopping)
