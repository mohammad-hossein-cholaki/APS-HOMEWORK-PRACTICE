// const fakeRequestCallback = (url, success, error) => {
//     const delay = Math.floor(Math.random() * 500) + 1500;

//     setTimeout(() => {
//         if (delay > 4500) {
//             console.log(delay);
//             error("connection error");
//         } else {
//             success(`your data: ${url}`);
//         }
//     }, delay);
// };

// fakeRequestCallback(
//     "books.com/page1",
//     function (res) {
//         console.log("it is workeedd 1");
//         console.log(res);
//         fakeRequestCallback(
//             "books.com/page2",
//             function (res) {
//                 console.log("it is worked 2");
//                 console.log(res);
//                 fakeRequestCallback(
//                     "books.com/page3",
//                     function (res) {
//                         console.log("it is workedd 3");
//                         console.log(res);
//                     },
//                     function (err) {
//                         console.log("it is not working 3");
//                         console.log(err);
//                     }
//                 );
//             },
//             function (err) {
//                 console.log("it is not working 2");
//                 console.log(err);
//             }
//         );
//     },
//     function (err) {
//         console.log("it is not working 1");
//         console.log(err);
//     }
// );

// const fakeRequestPromise = (url) => {
//     const delay = Math.floor(Math.random() * 500) + 500;

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay > 5000) {
//                 console.log(delay);
//                 reject("connection error");
//             } else {
//                 resolve(`your data: ${url}`);
//             }
//         }, delay);
//     });
// };

// fakeRequestPromise("books.com/page1")
//     .then((res) => {
//         console.log("it is worked 1");
//         console.log(res);
//         fakeRequestPromise("books.com/page2")
//             .then((res) => {
//                 console.log("it is worked 2");
//                 console.log(res);
//                 fakeRequestPromise("books.com/page3")
//                     .then((res) => {
//                         console.log("it is worked 2");
//                         console.log(res);
//                     })
//                     .catch((err) => {
//                         console.log("it is not working");
//                         console.log(err);
//                     });
//             })
//             .catch((err) => {
//                 console.log("it is not working");
//                 console.log(err);
//             });
//     })
//     .catch((err) => {
//         console.log("it is not working");
//         console.log(err);
//     });

const fakeRequestPromise = (url) => {
    const delay = Math.floor(Math.random() * 4500) + 500;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay > 2000) {
                console.log(delay);
                reject("connection error");
            } else {
                resolve(`your data: ${url}`);
            }
        }, delay);
    });
};

fakeRequestPromise("books.com/page1")
    .then((res) => {
        console.log("it is worked 1");
        console.log(res);
        return fakeRequestPromise("books.com/page2");
    })
    .then((res) => {
        console.log("it is worked 2");
        console.log(res);
        return fakeRequestPromise("books.com/page3");
    })
    .then((res) => {
        console.log("it is worked 3");
        console.log(res);
    })
    .catch((err) => {
        console.log("it is not working");
        console.log(err);
    });
