const flowers = {
    tulip: 20,
    rose: 10,
    lily: 15,
};

for (let keys in flowers) {
    console.log(`${keys} : ${flowers[keys]}`);
}

// Prints
// tulip: 20
// rose: 10
// lily: 15
