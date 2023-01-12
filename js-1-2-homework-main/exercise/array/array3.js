/**
 * /*
 *   Array getters
 *   -------------------------
 *   Complete the functions below to get the first and last values from the array
 *
 * @format
 */

function first(arr) {
  return arr[0]
  // return; // complete this statement
}

function last(arr) {
  return arr[arr.length-1]; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Shirin", "Zahra", "Mohsen", "Sirvan"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Sirvan
*/
