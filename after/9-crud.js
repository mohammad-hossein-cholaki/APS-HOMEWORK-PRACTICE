// CREATE (POST) ,READ(GET) ,  UPDATE(PUT , PATCH) , DELETE => CRUD

// READ (GET)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    body: "some useless text",
    title: "a big title",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((res) => console.log(res));

//   PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    id: 1,
    title: "karkhaneh",
    body: "bar",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    name: "mohammadhossein",
  }),
});

const arad = {
  name: "mohammadhossein",
  age: 15,
  height: "tall",
};
