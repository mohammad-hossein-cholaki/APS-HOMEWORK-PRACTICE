// console.log();

// post 
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST', 
    body: JSON.stringify({
        title: 'foo', 
        body: 'bar', 
        userId: 1
    }),
    headers: {
        "Content-type" : "application/json; charset=utf-8"
    }
}).then(res => res.json()).then(res => console.log(res))


// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE"
// })

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
    title: "Boo",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));




// put


// {
//     title: "Boo", 
//     body: 'bar', 
//     userId: 1
// }

// patch











// get method
// fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
//     const data = res.json()
//     return data
// }).then(res => {
//     console.log(res);
// }).catch(err => console.log(err))