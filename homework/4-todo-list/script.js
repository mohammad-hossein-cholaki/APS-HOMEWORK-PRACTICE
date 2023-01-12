function todoList(todos) {
  // Write your code here...

  let content= document.querySelector("#content");
  let ul=document.createElement("ul");
  ul.style.width="200px"


  for(let i =0; i<todos.length; i++){

    let li= document.createElement("li");
    let p= document.createElement("p");

    p.innerHTML=todos[i].todo;
    li.style.textDecoration="line-through"

    li.addEventListener('click', () => {
      if(li.style.textDecoration==="line-through"){
        li.style.textDecoration="none";
        li.classList.remove("my-style");
      }else{
        li.style.textDecoration="line-through";
        li.classList.add("my-style");
      }
    });

    li.appendChild(p);
    ul.appendChild(li);
  }
  content.appendChild(ul)
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);