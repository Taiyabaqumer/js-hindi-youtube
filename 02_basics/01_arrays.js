  // array

  const myArr = [0,1,2,3,4,5]
  const myHeros = ["shaktiman", "naagraj"]

  const myArr2 = new Array(1,2,3,4)
  console.log(myArr[0]);// 0 


  // Array methods
  // myArr.push(6)// [0,1,2,3,4,5,6] value add ho gyi 
  // myArr.push(7)
  // myArr.pop() // remove last value


  // myArr.unshift(9) // [9,0,1,2,3,4,5]
  // myArr.shift()// remove 9 

//   console.log(myArr.includes(9)); // false
//  console.log(myArr.indexOf(9));   // if num is not exist then print -1
 

// const newArr = myArr.join()

// console.log(newArr);// 0,1,2,3,4,5
// console.log(myArr);



// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)// [0, 1, 2, 3, 4, 5] [1, 2]

console.log(myn1);
console.log(" B", myArr);// [0, 1, 2, 3, 4, 5] [1, 2, 3] 

const myn2 = myArr.splice(1,3)
console.log(" C", myArr); // [0, 4, 5]
console.log(myn2);



  

