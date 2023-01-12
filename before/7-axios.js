// axios
//   .get("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("ERROR!", err);
//   });

// const fetchUsers = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     console.log(res);
//   } catch (e) {
//     console.log("ERROR!", e);
//   }
// };

// get daddy joke app
const url = "https://icanhazdadjoke.com/";
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

// try - catch
// async function getDadJoke(){}
const getDadJoke = async () => {
    try {
        // so we can place anything here that we are sure that it might be throw error
        const config = {
          headers: {
            Accept: "application/json",
          },
        };
      const res = await axios.get(url, config);
      return res.data.joke
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
};

// getDadJoke().then(res => console.log(res));

const addNewJoke = async ( ) => {
    const jokeText = await getDadJoke()

    const newLi = document.createElement('LI')
    newLi.append(jokeText)
    jokes.append(newLi)
}

button.addEventListener('click' , addNewJoke)