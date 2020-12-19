// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// const decrementButton = document.querySelector(".js-decrementButton");
// decrementButton.addEventListener("click", () => {
//   console.log("Clicked!");
// });

const counterRef = document.querySelector("#counter");
const valueRef = counterRef.querySelector("#value");
const decrementButtonRef = counterRef.querySelector(
  '[data-action="decrement"]'
);
const incrementButtonRef = counterRef.querySelector(
  '[data-action="increment"]'
);

let counterValue = 0;

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
  console.log("Clicked!");
}

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
  console.log("Clicked!");
}
decrementButtonRef.addEventListener("click", decrement);
incrementButtonRef.addEventListener("click", increment);
