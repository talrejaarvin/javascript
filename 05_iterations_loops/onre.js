// for loop

for (let i = 0; i <= 10; i++) {
  // console.log(`${i}`);
}

for (let i = 0; i <= 10; i++) {
 // console.log(`Outer loop ${i}`);

  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop ${j} and Outer loop is ${i}`);
  }
}


// break and continue 

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(`value of i is ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue
    }
    //console.log(`value of i is ${i}`);
    
}

