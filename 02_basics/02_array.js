const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);// ['thor', 'Ironman', 'superman', 'flash', 'batman',]

//Spread operator

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);// same output as above

const another_array = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); ;// [1,2,3,4,5, 6,7,6,7,4,5]
                                          


console.log(Array.isArray("sana"))
console.log(Array.from("sana")) // ['s','a','n','a']
console.log(Array.from({name: "sana"})); // intresting , that gives [] empty 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// [100, 200, 300]
