// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color
//   і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй
// функцію getRandomHexColor.


const nameColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
console.log(nameColor);
console.log(btnChangeColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
};

  function handleChangeColor() {
    let color = getRandomHexColor();
    document.body.setAttribute('style', `background: ${color}`);
    nameColor.textContent = color
};

btnChangeColor.addEventListener("click", handleChangeColor);
