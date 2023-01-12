/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    2. the first div element node
    --> should log the ".site-header" node
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
*/

const AllP = document.querySelectorAll("p");
console.log(AllP.length);

const firstDiv = document.querySelector("div");
console.log(firstDiv);

const selectByID = document.querySelector("#jumbotron-text");
console.log(selectByID);

const getP = document.querySelectorAll(".primary-content p");
console.log(getP);

/*
Task 2
======
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for vulnerable!"
*/

/*
Task 3
=======
Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
