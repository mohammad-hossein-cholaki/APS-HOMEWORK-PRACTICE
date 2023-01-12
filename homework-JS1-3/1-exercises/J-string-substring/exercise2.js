/* 
  You are given an array with a list of names.

  You should log only the peoples first names.

  For example, if the name is "Ali Mallak" you should return "Ali"
*/

let names = [
  "Mehdi Azimi",
  "Jamal Shamsi",
  "Mehdi Baqri",
  "Fatemeh Hemmati",
  "Mina Borhani",
  "Hoseyn vafadar",
];

names[0] = names[0].substring();
names[1] = names[1].substring();
names[2] = names[2].substring();
names[3] = names[3].substring();
names[4] = names[4].substring();

names.forEach(name => {
  console.log(name);
});

/* EXPECTED OUTPUT 

  "Mehdi"
  "Jamal"
  "Mehdi"
  "Fatemeh"
  "Mina"
  "Hoseyn"

*/
