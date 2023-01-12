// change the value of point, so that 'BUSTED!' prints out
// 👇THIS IS ONLY LINE YOU SHOULD CHANGE //DO NOT TOUCH ANYTHING BELOW (please)
const point = 101; 


if (point <= 100) {
    console.log("are you sure??");
    if (point >= 50) {
      console.log("haha, you couldn't catch me");
    }
  } else if (point < 103) {
    if (point % 2 === 0) {
      console.log("BUSTED!");
    } else {
      console.log("you are so close");
    }
  } else {
    console.log("yet to find me, haha😈!");
  }
  