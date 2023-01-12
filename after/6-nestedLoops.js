




const airplane = [
  ["niloofar", "kosar", "Fatemeh"],
  ["ali", "mohsen", "Shirin"],
  ["atena", "mahdi", "benyamin"],
  ["bani", "mohammad", "sina"],
  ["Amir", "Beti", "Pourya"],
];

// airplane.length
// console.log(airplane.length)
// console.log(airplane[0]);
// for each row , print row number beside the passengers name

for(let i = 0; i < airplane.length; i++){
  console.log(`Row ${i + 1} contains`)

  for(let j = 0; j < airplane[j].length; j++){
    console.log(`           ${airplane[i][j]}`)
  }
}
