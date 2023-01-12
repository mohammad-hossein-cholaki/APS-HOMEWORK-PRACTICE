const apiToGet =
  '{"ticker":{"base":"BTC","target":"USD","price":"38280.58063610","volume":"97811.05442583","change":"-202.19261818"},"timestamp":1621704005,"success":true,"error":""}';
// string ast

// parse

// const target = apiToGet.ticker.target
// console.log(target);
// console.log(apiToGet);
const parsedData = JSON.parse(apiToGet);
// console.log(parsedData.ticker.target);
// console.log(parsedData);

const user = {
  name: 'jasem', 
  age: 20
}

const toJson = JSON.stringify(user)
console.log(toJson);
