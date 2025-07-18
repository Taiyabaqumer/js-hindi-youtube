const name = "sana"
const repoCount = 3

//console.log(name + repoCount + " Value"); // old

console.log(`Hello my name is ${name} and my repo count is${repoCount}`); // modern

const gameName = new String('sana-sq')

console.log(gameName[0]); // s

console.log(gameName.__proto__); // {}

console.log(gameName.length); //7
console.log(gameName.toUpperCase()); //sana
console.log(gameName.charAt(3)) // a
console.log(gameName.indexOf('n')); // 2

 const newString = gameName.substring(0,2)
 console.log(newString);

 const anotherString =  gameName.slice(-4,2) //sa
 console.log(anotherString);
 
 //trim value
 const newStringOne = "  sana   "
 console.log(newStringOne);
 console.log(newStringOne.trim());
 
 //replace value
 const url = "https://sana.com/sana%20qumer"
 console.log(url.replace('%20', '-')); // https://sana.com/sana-qumer

 console.log(gameName.split('-')); //['sana', 'sq']
 

 