//? ABSOLUTELY ESSENTIAL FOR REACT JS
// find out more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// Math.max(13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43)
// Math.min(13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43)

// console.log(Math.min(13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43));

// const nums = [13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43];

// console.log(Math.min(...nums));
// console.log(Math.max(...nums));

// console.log(..."hello");

/*           ARR           */

const cats = ["Persian", "British", "Devon"];
const dogs = ["Greyhound", "Huski", "Saluki", "Retriever"];

const allPets = [...cats, ...dogs, "man ye parande hastam"];
// console.log(allPets);

// const strArray = [..."hello"];
// console.log(strArray);

/*           OBJ           */

const foxhound = { legs: 4, family: "English, American" };
const Bergamasco = { isFurry: true, family: "Persian sheepdog breed" };

// const rareDogs = { ...foxhound, ...Bergamasco };
// console.log(rareDogs);

// const obj = {
//   test: "1111",
//   test: "2222",
// };
// console.log(obj);

/// ARR and Strings spread into an Object:

const objStr = { ..."hello" };
// const objStr = { ..."hello", ..."salam" };
// console.log("objStr: ", objStr);
const objArray = { ...[0, 1, 2, 3, 4, 5, 6] };
// const objArray = { arrnum: 111111, ...[0, 1, 2, 3, 4, 5, 6] };
// const objArray = { ...["aaaa", "bbbb", "cccc"] };
// console.log(objArray);

// ANOTHER EXAMPLE:

const dataFromForm = {
  email: "fake@gmail.com",
  password: "fakeFake123",
  username: "fakeFunk",
};

const updateUser = {
  ...dataFromForm,
  phon: "123456789",
};

updateUser["email"] = "test@test.com";
// const arrayTest = [12, 11, 13, 14];
// const arrayTest2 = [...arrayTest];

// arrayTest.push(15);
// console.log(arrayTest2);

// console.log("updateUser", updateUser);
// console.log("dataFromForm", dataFromForm);

const objTestArr = {
  val1: "val1",
  val2: "val2",
  val3: "val3",
  val4: "val4",
};

// const arrayOfObj = [...objTestArr];
// console.log(arrayOfObj);
