function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("A");
}
// sayMyName() //SANA ()= EXECUTION OF PROGRAM

// function addTwoNumbers(number1, number2){

//    console.log(number1 + number2);
// }
// addTwoNumbers(5,5) //10

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}
  const result = addTwoNumbers(3, 5)

   console.log("Result: ", result);// result: 8
   
   function loginUserMessage(username = "sam"){
    // if(username == undefined){
    if(!undefined){
        // console.log("please enter a username"); // please enter a username undefined
        return
    }
    return `${username}just logged in`
   }

// console.log(loginUserMessage("sana")) // sana just logged in

// console.log(loginUserMessage());// undefined just logged in
// console.log(loginUserMessage())// sam just logged in

//function calculateCartPrice(num1){
//     return num1 // only 200
// }

//  function calculateCartPrice(...num1){
//   return num1 // [200, 400, 500]
//  }

 function calculateCartPrice(val1, val2, ...num1){
  return num1
 }
// console.log( calculateCartPrice(200, 400, 500, 2000)) // [500, 2000]


//OBJECT
const user = {
    username: "sana",
    price: 199   // if there is "prices" then the output is price is undefined
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)// user name is sana and price is 199

handleObject({
    username: "sam",
    price: 399
})

//now ARRAY
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
return getArray[1]
}
// console.log(returnSecondValue( myNewArray)); // 400
console.log(returnSecondValue( [200, 400, 100, 600, 1000])); // 400
