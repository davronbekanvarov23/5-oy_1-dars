/*---------------------BMI-------------------*/
// const title = document.getElementById("title");
// const ism = prompt("ismni kiriting");
// const boy = Number(prompt("boyni kiriting"));
// const vazn = Number(prompt("vaznni kiriting"));
// const bmi = vazn / boy ** 2;
// if (bmi < 18.5) {
//   title.textContent = `${ism} Underweight`;
// } else if (bmi < 24.9) {
//   title.textContent = `${ism} Normal weight`;
// } else if (bmi < 29.9) {
//   title.textContent = `${ism} Overweight`;
// } else {
//   title.textContent = `${ism} Obesity`;
// }

/*-------------------computer-oylagan-son-------------------*/

const title = document.getElementById("title");

const myNumber = prompt("raqamni kiriting");
let randomNumber = Math.trunc(10 * Math.random()) + 1;
if (myNumber == randomNumber) {
  title.textContent = "Qoyil !!! siz komputer o'ylagan sonni topdingiz";
  title.style.color="green"
} else {
  title.textContent = `topolmadiz komputer oylagan son ${randomNumber} edi`;
  title.style.color = "red";
}
