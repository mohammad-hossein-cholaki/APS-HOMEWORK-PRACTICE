const airplanePassengers = [
  'benyamin',
   'vahid',
   'mahdie',
   'zaynab',
   'jamal',
   'ashkan',
   'sh',
   'javad',
   'pedram',
   'niloofar',
   'mahya',
   'haniyeh',
   'kosar',
   'zaynab',
    'jamal'
];


// console.log(typeof(airplanePassengers));

const airplane = [
  ['amir' , 'mina' , 'yousof' ,],
  ['niloofar' , 'mahya' , 'haniyeh'],
  ['vajihe0_0' , 'motahare' , 'anahid' ,],
  ["Romina", "Benyamin",'saba' , ],
  ['sajjad' , 'atena' , 'manoochehr' ,],
];

// For
// for(let i = 0; i < airplanePassengers.length; i++){
//   console.log(airplanePassengers[i].toLowerCase());
// }


// For of
// for(let passengers of airplanePassengers){
//   console.log(passengers.toUpperCase());
//   console.log(typeof(passengers));
//   console.log(typeof(airplanePassengers));
// }

for(let name of airplane){
  for(let nestedName of name){
    console.log(nestedName);
  }
}


