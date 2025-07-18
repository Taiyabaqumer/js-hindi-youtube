// =======================numbers================
const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log((balance.toFixed));

const otherNumber = 123.8966 //123.9

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


//+++++++++++++++++++++++maths++++++++++++++++++++++

console.log(Math); //object [Math]{}
console.log(Math.abs(-4)); //it change negative into positive only (4)
console.log(Math.ceil(4.3)); // it will round of the value like- 5
console.log(Math.round(4.6)); //5
console.log(Math.floor(4.2));//4
console.log(Math.min(4,3,6,7,4));//3
console.log(Math.max(4,6,8,9,20,10)); //20

console.log(Math.random()); // values btw 0 and 9
console.log((Math.random()*10) + 1);
console.log( Math.floor(Math.random()*10) + 1); // 1 to 9


const min = 10
const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min ) // 14,12, 11


