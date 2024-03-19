let myDate = new Date();

console.log(myDate.toString()); // answer in string day month date time ...
console.log(myDate.toISOString()); // get answer in full date and time in ms.
console.log(myDate.toUTCString()); // Tue, 19 Mar 2024 14:41:52 GMT
console.log(myDate.toLocaleDateString()); //   3/19/2024
console.log(myDate.toLocaleTimeString()); // 7:43:21 PM

// month are started with 0 to 11 in javascript.

let myCreatedDate = new Date(2002, 1, 5)
console.log(myCreatedDate.toDateString());


let newDate = new Date()
console.log(newDate.toLocaleString("default", {
    weekday: "long"
}));