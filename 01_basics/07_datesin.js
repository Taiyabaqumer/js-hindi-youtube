// Dates

let myDate = new Date()
// console.log(myDate.toString());// sat jul 19 2025 08:09;34 univeral time
// console.log(myDate.toDateString()); //  sat jul 19 2025
// console.log(myDate.toLocaleDateString()); //7/19/2025
// console.log(typeof myDate); // date is an 'object'

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); // only date and day

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023,  5:03:00 AM
//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());// 1/14/2023  yy/dd/mm

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor()/1000);


let newDate =  new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //3
console.log(newDate.getDay());// 3

newDate.toLocaleString('default', {
    weekday:  "long",
})