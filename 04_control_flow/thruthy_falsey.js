const userEmail = "arvin@.ai"

if (userEmail) {
    console.log("Got user email");
}else {
    console.log("Don't have user email");
}

// falsy value
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN,

// truthy values
// "0", 'false', ' ', [], {}, function(){}, 

const array = []

if (array.length === 0) {
    console.log("array is empty");
}

const obj ={}
if (Object.keys(obj).length === 0) {
    console.log("empty object");
}

// nullish coalescing Operator (??)

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

// terniary Operator
// condition ? true : false

2 == 6 ? console.log("equal"): console.log("not equal");;