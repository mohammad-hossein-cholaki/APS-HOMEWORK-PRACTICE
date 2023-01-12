//please write some JS codes to make the rainbow colored
//use this array of colors:
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!
//your task is to select all spans, iterate over them, assign them each one of the colors from the colors array.
//the first span should be red, second one orange and so on.
//YOU CODE GOES HERE:

const AllSpan = document.querySelectorAll("span");

AllSpan.forEach((item, index) => {
  item.style.color = colors[index];
  //   console.log(item);
  //   console.log(index);
});
