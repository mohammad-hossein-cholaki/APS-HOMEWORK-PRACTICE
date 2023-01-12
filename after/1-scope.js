{
    //Block Scope
    {
        //Nested Block Scope!
        // let, const
        {
        }
    }
}

if (true) {
    //Block Scope
    var j = 0;
}

// console.log(j)

// you can access block scope with var
for (let i = 1; i <= 0; i++) {
    //Block Scope
}
// console.log(i);

// you can't access the function scope even with var
function sum(a, b) {
    //Function Scope
    var result = a + b;
    var x = 4;
}

// console.log(x)

console.log(result);
