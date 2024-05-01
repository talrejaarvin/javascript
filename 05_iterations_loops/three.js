// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const iterator of arr) {
  console.log(iterator);
}

const greeting = "Hello World";

for (const greet of greeting) {
  console.log(greet);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("PAK", "Pakistan");
map.set("USA", "United State America");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}


const myObj = {
    "In": "India",
    "PAK": "Pakistan",
    "USA": "United State of America"
}

// console.log(myObj);

// for (const [key] of myObj) {
//     console.log(key);
// }    
// obj is not iterable 
