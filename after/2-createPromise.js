/* copy each one of these separately in you browser console, and see the output */

// you will receive two output from the Promise. your Promise either will be resolved(fullFilled) or will be rejected. the pending status means that there is still no data or returned value .
// new Promise((resolve, reject) => {
//   resolve();
//   //look, this is a function you can call at any point here
// });

// new Promise((resolve, reject) => {
//   reject();
// });

// new Promise((resolve, reject) => {});

/* ================================================= */

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     console.log("random number is : ", rand);
//     setTimeout(() => {
//       if (rand < 0.1) {
//         resolve(`your fake data here: ${url}`);
//       }

//       reject("request error");
//     }, 1000);
//   });
// };

// fakeRequest("/dogs/1")
//   .then((res) => {
//     console.log("done with request");
//     console.log("data is : ", res);
//   })
//   .catch((err) => {
//     console.log("OH , No!", err);
//   });

/* ================================== */

const rainbow = (colour, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = colour;
      resolve();
    }, delay);
  });
};

// you can make a promise call inside the .then method and handle it with another .then etc.
rainbow("red", 1000)
  .then(() => rainbow("orange", 1000))
  .then(() => rainbow("yellow", 1000))
  .then(() => rainbow("green", 1000))
  .catch((err) => console.log(err));
