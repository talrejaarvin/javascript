function SayMyName() {
  console.log("A");
  console.log("R");
  console.log("V");
  console.log("I");
  console.log("N");
}

// SayMyName();

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
// addTwoNumbers(2,200000000);

function UserLoginMessage(username) {
  // UserLoginMessage(username = "Guest") .. it is by default value
  if (username === undefined) {
    // if(!username)
    console.log("Please enter your name!");
    return;
  } else {
    return `${username} just logged in`;
  }
}

const userLogin = UserLoginMessage("Arvin Kumar");
// console.log(userLogin);

// ******************** Functions with array and objects ***************************

function calculateCartPrice(...cartPrice) {
  return cartPrice;
}

// console.log(calculateCartPrice(200, 300, 400, 500, 500, 600, 600, 700));

const user = {
  username: "Arvin kumar",
  price: 1000,
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "Jatin",
    price: 199
})

// arrays in Functions

const myArr = [200, 400, 600];

function returnArraySecondValue(anyArray) {
    console.log(anyArray[1]);
}

// returnArraySecondValue(myArr);
returnArraySecondValue([
    200, 300, 400
])