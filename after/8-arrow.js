// this
const X = function () {
    console.log("x", this);
};

// X()

const Y = () => {
    console.log("y", this);
};
// Y()

const testerObj = {
    func1: function () {
        console.log("executed from func1", this);
    },
    func2: () => console.log("executed from func2", this),
};

console.log(testerObj.func1());
console.log(testerObj.func2());
