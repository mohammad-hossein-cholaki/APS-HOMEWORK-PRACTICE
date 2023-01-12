/** @format */
//add comments
// explain what this function does. use Google!

// The Math.random() function returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1 and here we have a number between 1, 9

function whatDoIDo() {
  return Math.random() * 8 + 1;
}

// explain what does this function do, google it

// The concat() method is used to merge two or more arrays, and here word1 and word2 will merge

function whatICanDo(word1, word2) {
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // do you remember how concatenation works? take a look at the tests and do it yourself
  return firstWord.concat(" ",secondWord," ", thirdWord);
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.
To run these tests type `node third` into your terminal
==================================
*/

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate("international", "mentors&", "developers"),
  "international mentors& developers"
);
test(
  "concatenate function - case 2 works",
  concatenate("I", "like", "pizza"),
  "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate("I", "am", 13),
  "I am 13"
);
