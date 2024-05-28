// generate random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());
let colorInterval;

document.querySelector("#start").addEventListener("click", function () {
  if (!colorInterval) {
    colorInterval = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 500);
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(colorInterval);
  colorInterval = null;
});
