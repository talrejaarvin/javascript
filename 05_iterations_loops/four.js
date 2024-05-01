const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

for (const key in myObject) {
//   console.log(`${key} is shorcut for ${myObject[key]}`);
}

const progLan = ["javascript", "Ruby", "Python", "Dart"];

for (const index in progLan) {
//    console.log(progLan[index]);
}


const map = new Map();
map.set("IN", "India");
map.set("PAK", "Pakistan");
map.set("USA", "United State America");

for (const [key, value] in map) {
    console.log(`${key} is shortcut for ${value}`);
}