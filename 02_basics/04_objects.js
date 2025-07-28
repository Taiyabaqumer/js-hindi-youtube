// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton
 
tinderUser.id = "1234abcd"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sana",
            lastname: "qumer"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a",  2: "b"}
const obj2 = {3: "a",  4: "b"}
const obj4 = {5: "a",  6: "b"}

// const obj3 = {obj1, obj2} // {obj:{'1': 'a', '2': 'b'}, obj2: {'3': 'a', '4': 'b'}}

// const obj3 = Object.assign({}, obj1, obj2, obj4)//{'1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b'}

const obj3 = {...obj1, ...obj2}
// console.log(obj3); 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
      {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(object.keys(tinderUser)); // ['id', 'nams', 'isLoggedIn']
console.log(object.values(tinderUser));
console.log(object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


