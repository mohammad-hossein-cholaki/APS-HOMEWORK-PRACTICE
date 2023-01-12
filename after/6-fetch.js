// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => {
//     console.log("RESPONSE, WAITING TO PARSE...", res);
//     return res.json();
//   })
//   .then((data) => {
//     // console.log("DATA PARSED...", data);
//   })
//   .catch((e) => {
//     console.log("OH NO! ERROR!", e);
//   });

// fetch("https://jsonplaceholder.typicode.com/todo/")
//   .then((res) => {
//     console.log("RESPONSE, WAITING TO PARSE...", res);
//     if (res.status === 404) {
//       throw "error fetching data";
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log("DATA PARSED...", data);
//   })
//   .catch((e) => {
//     console.log("OH NO! ERROR!", e);
//   });

// fetch("https://apitester.ir/api/Categories")
//   .then((data) => data.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const fetchUsers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   console.log(res);
//   const data = await res.json();
//   return data;
// };

// fetchUsers()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    console.log(data);
  } catch (jasemError) {
    console.log("something went wrong", jasemError);
  }
};

fetchUsers();
