//               Part 1: Create and Display Your Favorite Foods List
// 1. Create an array named favoriteFoods and fill it with at least five of your favorite foods, represented as strings.

let favoriteFoods = ["Biryani", "Samosa", "Burger", "Pizza", "Pasta"];

// 2. Display the entire array in the console
console.log(favoriteFoods);

//               Part 2: Accessing Elements
// 1. Log the first, third, last food in your array to the console.
console.log(favoriteFoods[0], favoriteFoods[2], favoriteFoods[4]);

//                 Part 3: Modifying the Array
//1. Someone convinced you that one of your top 5 isn't as good as you thought. Replace the second item in your list with a new food.
favoriteFoods[1] = "Choclate";
console.log(favoriteFoods);

// 2. You just remembered another food you love. Add this food to the end of your array.
favoriteFoods.push("Puri");
console.log(favoriteFoods);

// 3. You've decided to eat healthier, so you want to remove the last item from your list.
favoriteFoods.pop();
console.log(favoriteFoods);

// looping
// 1. Use a for loop to log every food in your array to the console, one at a time.

for (i = 0; i < favoriteFoods.length; i++) {
  console.log(favoriteFoods[i]);
}

//                  Part 5: Searching the Array
// Check if "Pizza" is one of your favorite foods. If it is, log "I really love pizza!" to the console. If it's not, log "I might like pizza, but it's not on my top list."

if(favoriteFoods.includes("Pizza")) {
    console.log("I really love pizza!");
}
else{
    console.log("I might like pizza, but it's not on my top list");
}