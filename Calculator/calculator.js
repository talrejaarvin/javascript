/* 

const num1 = 10;
const num2 = 5;

function calculator(choice, num1, num2) {
  if (choice === 1) {
    console.log(`Addditon of ${num1} and ${num2} is ${num1 + num2}`);
  } else if (choice === 2) {
    console.log(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`);
  } else if (choice === 3) {
    console.log(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`);
  } else if (choice === 4) {
    console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`);
  } else {
    console.log("Invalid choice");
  }
}

calculator(1, num1, num2);
calculator(2, num1, num2);
calculator(3, num1, num2);
calculator(4, num1, num2);

*/

function addition(num1, num2) {
    return num1+num2
}

function subtraction(num1, num2) {
    return num1-num2
}

function multiplication(num1, num2) {
    return num1*num2
}

function division(num1, num2) {
    return num1/num2
}

console.log(division(8,4));