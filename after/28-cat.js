//DON'T PANIC IF IT'S HARD TO REMEMBER, YOU CAN COME BACK HERE
//MAKE SURE OPEN IT IN A BROWSER WINDOW, YOU CAN RUN index.html
//window

const cat = {
    name: "cat",
    color: "grey",
    breed: "persian cat",
    meow() {
        // console.log(`${this.color} ${this.breed} cats are amazing`)
        const arrow = () => {
            console.log(this);
        };
        arrow();
    },
    thisIs: `this is ${this}`,
    arrow: () => {
        console.log("arrow", this);
    },
};

cat.meow();
cat.arrow();

const meow2 = cat.meow;

// this is undefined because the cat object doesn't have any meow2 method
// console.log(cat.meow2)

// but we can store the meow method inside another variable
// console.log(meow2)

// console.log(cat.thisIs)

// cat.arrow()

// welcome to javascript :)
// console.log(this)
