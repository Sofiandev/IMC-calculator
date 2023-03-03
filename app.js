// const { createLogger } = require("vite");

const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const width = document.querySelector("#width");
const result = document.querySelector("#result");
const p = document.querySelector(".p");

height.addEventListener("input", (e) => {
  heightValue = e.target.value / 100;
});
width.addEventListener("input", (e) => {
  widthValue = e.target.value;
});

//toFixed permet de limiter l'affichage décimal
btn.addEventListener("click", () => {
  resultValue = widthValue / (heightValue * 2);
  result.innerHTML = resultValue.toFixed(2);
  p.style.display = "none";
});
