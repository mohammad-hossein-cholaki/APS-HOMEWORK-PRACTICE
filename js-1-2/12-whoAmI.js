const whoAmI = "P123457"; //change this value to make the conditions below true

// leave this code alone! (please)
if (
  whoAmI[0] === "P" &&
  whoAmI.length > 5 &&
  //  your string must have 7 inside it
  whoAmI.indexOf("7") !== -1 &&
  // your string must not have any empty string
  whoAmI.indexOf(" ") === -1
) {
  console.log("you got it!!!");
} else {
  console.log("it's not my name darling!!!");
}
