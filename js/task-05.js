// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", handleInputChange);

// function handleInputChange(event) {
//   if (event.currentTarget.value === "") {
//     output.textContent = "Anonymous";
//   } else {
//     output.textContent = event.currentTarget.value;
//   }
// };
 
function handleInputChange(event) {
    output.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
  
};