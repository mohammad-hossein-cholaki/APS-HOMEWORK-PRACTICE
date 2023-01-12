// axios
//   .get("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const fetchUsers = async () => {
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchUsers();

const getDadJoke = async () => {
  try {
    /*
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/" , config);
    */

    const res = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    return res.data.joke;
  } catch (error) {
    console.log("no jokes available , sorry");
  }
};

console.log(getDadJoke());

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();

  const newLi = document.createElement("LI");

  newLi.append(jokeText);

  jokes.append(newLi);
};

button.addEventListener("click", addNewJoke);
