//  a function that accepts functions as parameters and/or returns a function.

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

function callTwice(func) {
    func();
    func();
}

// rollDie()
callTwice(rollDie);
