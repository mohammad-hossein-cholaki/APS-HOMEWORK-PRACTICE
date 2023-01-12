// THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   console.log(delay);
//   setTimeout(() => {
//     if (delay > 3000) {
//       failure("Connection Timeout :(");
//     } else {
//       success(`Heres is your fake data from ${url}`);
//     }
//   }, delay);
// };

// fakeRequestCallback(
//   "books.com/page1",
//   function (response) {
//     console.log("IT WORKED!!!!");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (response) {
//         console.log("IT WORKED AGAIN!!!!");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (response) {
//             console.log("IT WORKED AGAIN (3rd req)!!!!");
//             console.log(response);
//           },
//           function (err) {
//             console.log("ERROR (3rd req)!!!", err);
//           }
//         );
//       },
//       function (err) {
//         console.log("ERROR (2nd req)!!!", err);
//       }
//     );
//   },
//   function (err) {
//     console.log("ERROR!!!", err);
//   }
// );

// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    console.log(delay);
    setTimeout(() => {
      if (delay > 3000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Heres is your fake data from ${url}`);
      }
    }, delay);
  });
};
// fakeRequestPromise("/url")
//   .then(() => {})
//   .then(() => {})
//   .then(() => {})
//   .catch(() => {});
// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("IT WORKED!!!!!! (page1)");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("IT WORKED!!!!!! (page2)");
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("IT WORKED!!!!!! (page3)");
//           })
//           .catch(() => {
//             console.log("OH NO, ERROR!!! (page3)");
//           });
//       })
//       .catch(() => {
//         console.log("OH NO, ERROR!!! (page2)");
//       });
//   })
//   .catch(() => {
//     console.log("OH NO, ERROR!!! (page1)");
//   });

// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((response) => {
    console.log("it worked page 1");
    console.log(response);

    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((response) => {
    console.log("it worked again page 2");
    console.log(response);

    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
