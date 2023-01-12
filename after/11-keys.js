const years = {
    1999: "good",
    2020: "bad",
    amir: "amir",
};
console.log(years[amir]);
// it doesn't matter for numbers but for strings you must use ' '

console.log(years[1999]);
console.log(years["1999"]);

const something = {
    true: "dat",
    null: "jafar",
    dog: "ecco",
};

const saraDog = "dog";
console.log(something[saraDog]);
console.log(something[true]);
console.log(something["true"]);
