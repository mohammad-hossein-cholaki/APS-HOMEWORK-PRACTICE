const airplanePassengers = [
  "      Sirvan     ",
  "      Zahra   ",
  "   Fatemeh   ",
  "Mohsen      ",
  "     Azam      ",
  "     Shirin      ",
];

// write a function to trim all the elements inside array with map

function arrayTrim(arr) {


  const newArr = arr.map(function trimItem(element) {
    return element.trim()
  })
  return newArr


}

const trimmedArray = arrayTrim(airplanePassengers)

console.log(trimmedArray);