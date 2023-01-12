/*
    Console.log the values of each property of "kitten"
*/

let kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown",
};
// with dot notation
// console.log(kitten.ageMonths);
// console.log(kitten.isFemale);
// console.log(kitten.furColour);

// with destructruing
// const { ageMonths, isFemale, furColour } = kitten;
// console.log(ageMonths, isFemale, furColour);
// const { ageMonths , isFemale , furColour } => this means:
// const ageMonths = kitten.ageMoths,
// const isFemale,
// const furColor,


console.log(kitten.ageMonths, kitten['furColour'], kitten['is' + 'Female']);