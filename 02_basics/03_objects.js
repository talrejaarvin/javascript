// singleton
// Object.create

// Object literals

// how to use symbol in object... interview
const mySym = Symbol("key1");

const JsUser = {
  name: "Arvin",
  "full name": "Arvin Kumar",
  [mySym]: "mykey1",
  age: "22",
  email: "Arvin@gamil.com",
  isloggedin: false,
  lastLoggedinDays: ["Monday", "Saturday"],
};

// two types of access object

// console.log(JsUser["full name"]);
// console.log(JsUser.email);
// console.log(JsUser[mySym]);

JsUser["full name"] = "Arvin Talreja";
// Object.freeze(JsUser); // lock the object. cannot changes the value afer it
JsUser.age = 20;
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
