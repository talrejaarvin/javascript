const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // push on existing array
// console.log(marvel_heros);

const heros = marvel_heros.concat(dc_heros); // its returns new array;
// console.log(heros);

// another option for good practice for comabine arrays is Spread operator

const allHeros = [...marvel_heros, ...dc_heros]; // use this for combine
// console.log(allHeros);

const array1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(array1);
const fixArray1 = array1.flat(Infinity);
// console.log(fixArray1);

// console.log(Array.isArray("Arvin")); // for check the input is array or not

// Array.from
// console.log(Array.from("Arvin"));
// console.log(Array.from({name: Arvin})); // intresting for interviews

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

function createArray(...elements) {
  return Array.of(...elements);
}
