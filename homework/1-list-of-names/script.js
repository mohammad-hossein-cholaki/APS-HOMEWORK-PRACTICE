// function listOfNames(arrayOfPeople) {
//   let content = document.querySelector("#content");
//   for(let i=0; i<arrayOfPeople.length; i++){

//     let personName=document.createElement("h1");
//     let personJob=document.createElement('h2');

//     personName.innerHTML=arrayOfPeople[i].name;
//     personJob.innerHTML=arrayOfPeople[i].job;

//     content.appendChild(personName),
//     content.appendChild(personJob);

//   }
// }


function listOfNames(arrayOfPeople){
  let content= document.querySelector("#content");
  for(let i=0; i<arrayOfPeople.length; i++){

    let personName= document.createElement("h1");
    

    personName.innerHTML=arrayOfPeople[i].name +" "+ arrayOfPeople[i].job;
    
    
    content.appendChild(personName);
  }
}


let people = [
  { name: "Alireza", job: "Teacher" },
  { name: "Jafar", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
]

listOfNames(people)

// var catEl = document.createElement("img");