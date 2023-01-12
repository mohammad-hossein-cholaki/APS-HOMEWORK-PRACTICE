const url = "https://jsonplaceholder.typicode.com/todos/";

// fetch("https://jsonplaceholder.typicode.com/tods/")
//   .then((res) => {
//     console.log(res);
//     if (res.status === 404) {
//       throw "error fetching data";
//     }
//     console.log("RESPONSE, WAITING TO PARSE...", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("DATA PARSED...", data);
//   })
//   .catch((e) => {
//     console.log("OH NO! ERROR!", e);
//   });

// async-await function
const fetchUsers = async () => {
  const res = await fetch(url); 

  if(res.status === 404){
    throw 'error'
  }
  
  const data = await res.json();
  return data;
};

fetchUsers()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
