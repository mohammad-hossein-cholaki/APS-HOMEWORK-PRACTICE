// a regular function
function greeting() {
  console.log("hello world");
}
// greeting();

// an async function returns a promise and you can either resolve(return something) or reject(by throwing an error).
const sing = async () => {
  //   return "la la la";
  throw "ho no , request error";
  //   you can make a built-in Error object with new Error constructor function
  // throw new Error('there is problem')
};

// console.log(sing());

// this is the syntax for writing async function in regular functions

// const greet = async function(){ // function expression
//     console.log('hoy')
// }
// async function greet (){ // function declaration
//     console.log('hoy')
// }

// ======================//

// const login = async (username, password) => {
//   if (!username || !password) {
//     throw "missing credential";
//   }

//   if (password === "jasem") {
//     return `welcome to www.jasemKala.com dear ${username}`;
//   }

//   throw "invalid password";

// };

// login("benyamin", "jasem")
//   .then((msg) => {
//     console.log("logged in!");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });

// async => 1- fetch (time consume)

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// this syntax won't wait for the previous functions
// async function rainbow() {
//   delayedColorChange("red", 1000);
//   delayedColorChange("orange", 1000);
// }

// rainbow();

//await will wait for a promise
// async function rainbow2() {
//     await delayedColorChange("red", 1000);
//   delayedColorChange("orange", 1000);
// }
// rainbow2();

// async function rainbow3() {
//   await delayedColorChange("red", 1000);
//   await delayedColorChange("green", 1000);
//   await delayedColorChange("yellow", 1000);
//   await delayedColorChange("gray", 1000);
//   await delayedColorChange("black", 1000);
//   await delayedColorChange("blue", 1000);
//   delayedColorChange("orange", 1000);
// }
// // rainbow3();

// // async-await
// async function printRainbow() {
//   // async will return promise so i can await for it.
//   await rainbow3();
//   console.log("end of rainbow");
// }

// printRainbow();

// //////////////

// const fakeRequest = (url) => {
//   return new Promise((resolved, reject) => {
//     const delay = Math.random() * 4500 + 500;
//     setTimeout(() => {
//       if (delay > 1000) {
//         reject("connection timeout");
//       } else {
//         resolved(`here is your fake data: ${url}`);
//       }
//     });
//   });
// };

// async function makeTwoRequests() {
//   let data1 = await fakeRequest("/page1");
//   console.log(data1);
// }

// makeTwoRequests();

// Error and handle Error
const fakeRequest = (url) => {
  return new Promise((resolved, reject) => {
    const delay = Math.random() * 4500 + 500;
    console.log(delay);
    setTimeout(() => {
      if (delay > 2000) {
        reject("connection timeout");
      } else {
        resolved(`here is your fake data: ${url}`);
      }
    });
  });
};

// the original version of async function is like this.
// anything that probably makes an error should be written in the try{} block and you can handle your errors inside the catch(){} block
async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (err) {
    console.log("caught an error!");
    console.log("error is : ", err);
  }
}

makeTwoRequests();
