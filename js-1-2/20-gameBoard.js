const board = [ [ 'O', null, 'X' ], [ null, null, 'O' ], [ 'X', 'O', null ] ]  //don't touch this line of code

/*
[ 'O', null, 'X' ], 
[ null, null, 'O' ], 
[ 'X', 'O', null ]
*/

//with one 'X' win the game
//write your code below this line

board[1][1] = "X"

console.log(board);




// ------------- example -------------
// const array = [1,[2,[3,[4]]]]

// let val1 = array[1]
// let val2 = val1[1]
// let val3 = val2[1]
// let val4 = val3[0]
// console.log(val4);

// console.log(array[1][1][1][0]);
