let a = 300;

if (true) {
  let a = 30;
  const b = 20;
  //var c = 30
  // console.log("INNER: ", a);
}

//console.log(a);
//console.log(b);

function one() {
  const username = "Arvin";

  function two() {
    const website = "Youtube";
    console.log(username);
  }

  //console.log(website);
  two();
}

//one();

if (true) {
  const username = "Arvin Kumar";

  if (true) {
    const website = "Youtube";
    // console.log(username);
  }
  //console.log(website);
}

// +++++++++++++++++++++++++++++++++ Instresting +++++++++++++++++++++++++++++++++++++++++++++++

function addOne(num) {
  return num + 1;
}
console.log(addOne(5));

const addTwo = function (num) {
  return num+2;
};

console.log(addTwo(5));

