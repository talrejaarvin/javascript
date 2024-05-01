// for each loop

const coding = ["java", "cpp", "dart", "python", "ruby"];

coding.forEach((language) => {
  // console.log(language);
});

function printMe(item) {
  //  console.log(item);
}

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

// for database practice

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "Js",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "Dart",
    languageFileName: "dart",
  },
];

myCoding.forEach( (item) => {
    console.log(`Language name: ${item.languageName} and file name: ${item.languageFileName}`);
} )
