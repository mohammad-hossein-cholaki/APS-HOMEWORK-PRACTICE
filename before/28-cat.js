//DON'T PANIC IF IT'S HARD TO REMEMBER, YOU CAN COME BACK HERE
//MAKE SURE OPEN IT IN A BROWSER WINDOW, YOU CAN RUN index.html
//window

const cat = {
    name: "cat",
    color: "grey",
    breed: "persian cat",
    meow() {
        console.log(`${this.color} ${this.breed} cats are amazing`);
    },
    thisIs: `this is ${this}`,
};

// this is undefined because the cat object doesn't have any meow2 method

// but we can store the meow method inside another variable

// welcome to javascript :)
console.log(this);
