// singleton object
//const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Arvin";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Arvin",
      lastname: "Kumar",
    },
  },
};

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {...obj1, ...obj2}; // to combine the objects syntax 1
const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const user = [
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 2,
    email: "some@gmail.com",
  },
  {
    id: 3,
    email: "some@gmail.com",
  },
  {
    id: 4,
    email: "some@gmail.com",
  },
];
// intresting and important methods mostly use
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "JS in hindi",
  price: "999",
  courseInstructor: "Hitesh Choudary",
};

// console.log(course.courseInstructor);

// const {courseInstructor} = course // it is call de structure of object use for good code writing // 1
const { courseInstructor: teacher } = course; // you can set new name also withour affect original value // 2
console.log(teacher);
