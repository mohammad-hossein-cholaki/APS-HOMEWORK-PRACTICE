const apiToGet =
  '{"ticker":{"base":"BTC","target":"USD","price":"38280.58063610","volume":"97811.05442583","change":"-202.19261818"},"timestamp":1621704005,"success":true,"error":""}';

// this doesn't work because it is string
// console.log(apiToGet);
// const apiPrice = apiToGet.ticker.price;
// console.log(apiPrice);

// we should parse the json and convert it to object

const toJson = JSON.parse(apiToGet);
console.log(toJson);
const apiPrice = toJson.ticker.price;
console.log(apiPrice);

// this is how to convert an obj to json
const apiToPost = {
  ticker: {
    base: "BTC",
    target: "USD",
    price: "38280.58063610",
    volume: "97811.05442583",
    change: "-202.19261818",
  },
  timestamp: 1621704005,
  success: true,
  error: "",
};

const toApiFormat = JSON.stringify(apiToPost);
console.log(toApiFormat);
