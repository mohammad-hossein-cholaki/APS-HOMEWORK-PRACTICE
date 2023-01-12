
const maximum = parseInt(prompt("Choose your maximum number"));
const randomNum = Math.floor(Math.random() * maximum) + 1

let guess = parseInt(prompt("Guess number"))
let attempt = 1;

while(guess !== randomNum){
    if (guess < randomNum){
        guess = prompt("the number is greater")
    }else{
        guess = prompt(" the number is less than you guess")
    }
    attempt++
}

console.log(`Bravoooooooooo you catch it in ${attempt} attempt`);