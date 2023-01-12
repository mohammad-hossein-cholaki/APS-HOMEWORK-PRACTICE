let laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true,
    colors: ["spaceGray", "black", "white"],
    specification: {
        camera: "12megapixel",
        SSD: "128gig",
        numberOfPorts: 3,
    },
};

const brand = laptop.brand;
const blackColor = laptop.colors[1];
console.log(brand);
console.log(blackColor);

// these are same
const isTouch = laptop["isTouchscreen"];
const isTouch2 = laptop.isTouchscreen;
console.log(isTouch2);

// these are the same
const laptopSsd = laptop.specification.SSD;
const laptopSsd2 = laptop["specification"]["SSD"];
console.log(laptopSsd2);
