
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let size = 20;

const inputEl = document.querySelector("input");
console.log(inputEl);
const createBtn = document.querySelector("[data-create]");
console.log(createBtn);
const destroyBtn = document.querySelector("[data-destroy]");
console.log(destroyBtn);
const allBoxes = document.querySelector("#boxes")

createBtn.addEventListener("click", onClickCreate);
destroyBtn.addEventListener("click", onClickDestroy);

function onClickCreate(event) {
  const value = inputEl.value;
  allBoxes.innerHTML = "";
  size = 20;
  console.dir(value);
  createBoxes(value);
}

function createBoxes(amount) {
  // const box = document.createDocumentFragment();
  const box = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    size += 10;
    div.style.background = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = size + "px";
    // box.append(div);
    box.push(div);

  }
  allBoxes.append(...box);
  // console.log(box);
}

function onClickDestroy () {
  allBoxes.innerHTML = "";
  inputEl.value = "";
}

const titleEL = document.createElement("p");
console.log(titleEL); 

titleEL.textContent = "Рішення з додаткового заняття, залишив для себе";
titleEL.setAttribute ('style', `background: tomato`);

inputEl.before(titleEL);