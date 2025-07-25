// singleton =  constructor ke tarah banega toh singleton banega , literal ke tarah mhi banega

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sana",
    "full name": "Sana Qumer",
    [mySym ]:"myKey1",
    age : 18,
    location: "Bhopal",
    email: "sana@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]   
}

console.log(JsUser.email) // sana@google.com
console.log(JsUser["email"])//sana@google.com
console.log(JsUser["full name"]) // sana qumer
console.log(JsUser[mySym]) // myKey1

JsUser.email = "sana@cchatgpt.com"
// Object.freeze(JsUser) // freeze here
JsUser.email = "sana@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
      console.log("Hello Js user");  
}
JsUser.greetingTwo = function(){
      console.log(`Hello Js user,${this.name}`);  
}

console.log(JsUser.greeting());// hello js user 
console.log(JsUser.greetingTwo()); // hello js user, sana
