"use-strict";
console.log("running");
const form = document.querySelector("form");
const submittedYear = document.querySelector(".input");
const text = document.querySelector("label");
const btn = document.querySelector(".btn");
const reload = document.querySelector("svg");

form.addEventListener("submit", sumbitHandler);

reload.addEventListener("click", () => {
  location.reload();
});
function sumbitHandler(event) {
  if (submittedYear.value === "") {
    return;
  }
  const age = 2022 - submittedYear.value;
  text.textContent = `You are ${age} years old `;
  btn.classList.add("hidden");
  event.preventDefault();
}
