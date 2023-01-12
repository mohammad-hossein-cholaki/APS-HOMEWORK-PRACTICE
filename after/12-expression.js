const person = {
    firstName: "Jake",
    lastName: "Gyllenhaal",
    age: 40,
    born: "california",
};

console.log(person.firstName);
console.log(person["firstName"]);

let firstName = "firstName";
console.log(person[firstName]);

// we can use expression inside the []
console.log(person["first" + "Name"]);
