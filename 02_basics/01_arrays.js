const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Shaktiman", "Naagraj"];
const myArr2 = new Array(0, 1, 2, 3);

// console.log(myArr[0]);

// Array Methods

// myArr.push(6, 10); // it is use to add any element in array
// myArr.pop(); // it is use for remove last element in array

myArr.unshift(0); // it is use for add element aty start of array, but don't use it because of loading process in computer for big data change

myArr.shift(); // use for remove the element at index[0];
// console.log(myArr.indexOf(4)); // to find the index of element

const newArr = myArr.join();

// console.log(newArr);
// console.log(myArr);

// mostly use methods: slice() and splice()

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3);
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);

const fruits = ['banana', 'apple', 'kiwi', 'orange', 'tomato']
console.log("A ", fruits);

fruits.splice(0,1, 'Grapes');
console.log("B", fruits);

const newfruits = fruits.splice(1,3)
console.log("C ", fruits);
console.log(newfruits);

