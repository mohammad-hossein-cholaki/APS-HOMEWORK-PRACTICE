const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//expected output: [1, 4, 9, 16, 25, 36, 49, 64, 81]

for(let number of numbers){
    console.log(number**2);
}