let randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));
let limitOfTry =7;
let numberOfTrys=1;
// let result= limitOfTry - numberOfTrys;
console.log(randomNumber);
function guessNumber() {
  //Collect input from the user
  let guess =parseInt(document.querySelector(".inputs-Values").value);
  let message = document.querySelector(".Tries-output");
  let output = document.querySelector(".final-output");
  
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  if(guess<0 || guess>100 || typeof guess!== "number" || guess==""){

    // message.innerHTML= `Number of Tries: ${limitOfTry - numberOfTrys}`;
    output.innerHTML= "Please enter a number between 1 and 100";

  }

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if(guess> randomNumber){
    message.innerText= `Number of Tries: ${limitOfTry - numberOfTrys}`;
    output.innerText= "Number is too high, try again";
    numberOfTrys++;

  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if(guess<randomNumber){
    message.innerText= `Number of Tries: ${limitOfTry - numberOfTrys}`;
    output.innerText= "Number is too low, try again";
    numberOfTrys++;

  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else if(guess==randomNumber){
    message.innerText= `you had win in: ${numberOfTrys} try`;
    output.innerText= "Guess is correct. You win!";
    

  }

  
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  // //Your code here
  randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));
  // //Reset randomNumber
  limitOfTry =7;
  // //Reset users input field
  numberOfTrys=1;
  // //Reset tries, and triesTaken by the user
  let message = document.querySelector(".Tries-output");
  let output = document.querySelector(".final-output");
  document.querySelector(".inputs-Values").value = "";
  output.innerHTML= "enter a number between 1 and 100";
  message.innerText=" ";
  
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
