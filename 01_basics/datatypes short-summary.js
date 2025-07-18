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

console.log(typeof scoreValue)


  https:262.//ecma-international.org/5.1/#sec-11.4.3

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // stack (primitive), Heap (Non-primitive)

 let myYoutubename = "sanaqumerdotcom"

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "hitesh@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 
 
