// Reduce

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const intialValue = 0;
const totalSum = myArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  intialValue // or 0
);
//console.log(totalSum);

const shoppingCart = [
  {
    itemName: "js Course",
    price: 2999,
  },
  {
    itemName: "Python Course",
    price: 1999,
  },
  {
    itemName: "C++ Course",
    price: 2499,
  },
  {
    itemName: "Ruby Course",
    price: 3999,
  },
];

const myTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(myTotal);
