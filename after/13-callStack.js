// copy this code in:
// http://latentflip.com/loupe
// and chrome debugger!!!

function multiple(x, y) {
    console.log("hey");
    return x * y;
}

function square(x) {
    return multiple(x, x);
}

function isRightTriangle(a, b, c) {
    return square(a) + square(b) === square(c);
}

console.log("before");
console.log(isRightTriangle(10, 20, 30));