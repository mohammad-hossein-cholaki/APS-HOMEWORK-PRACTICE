const mystery = "answer";
const variableName = "p1";

const inverseOfPI = 1 / Math.PI;

const obj = {
    p1: 10,
    p2: 20,
    f1() {},
    f2: () => {},
    [mystery]: 42,
    // inverseOfPI: inverseOfPI,
    inverseOfPI,
};
// here we try to access our properties with variables .
// first we defined the mystery and put the 'answer' in it
// to access the answer property we can put the mystery variable inside the []
console.log(obj[mystery]);
console.log(obj.answer);

// obj['answer']

// this logs just a string
console.log(variableName);

// we can access the properties via a strings in variables
console.log(obj[variableName]);

console.log(obj["p1"]);

console.log(obj.inverseOfPI);

//  Quiz,   what is the value of this console.log?
// console.log(obj[mystery]);

//Quiz,     what is the value of this console.log?
// console.log(obj.answer);