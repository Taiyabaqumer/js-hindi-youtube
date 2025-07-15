// primitive 

// 7 types : string,Number,Boolean,null, Undefined , symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId); //false

const bigNumber = 654872348732643764n


// Reference (Non primitive)

// Array, Objects , Functions

const heros = ["shaktiman", "naagraj","ironman"]
let myObj={
    name :"Sana",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);

