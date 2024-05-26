const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const results = document.querySelector("#results");
  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if (bmi <= 18.6) {
      results.innerHTML = `<span>${bmi} is Under weight</span>`;
    } else if (bmi > 18.6 && bmi <= 24.9)
      results.innerHTML = `<span>${bmi} is normal range</span>`;
    else {
      results.innerHTML = `<span>${bmi} is Over Weight</span>`;
    }
  }
});
