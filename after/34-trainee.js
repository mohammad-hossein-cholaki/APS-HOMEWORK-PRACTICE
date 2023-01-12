const traineeGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
};

for (let key in traineeGrades) {
    if (traineeGrades[key] > 17) {
        console.log(`${key.toUpperCase()} - ${traineeGrades[key]}`);
    }
}

// Prints
// TOM - 20
// ABDUL - 19
