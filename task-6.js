// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>; */
}
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validationRef = document.querySelector("#validation-input");

function checkLengthSymbol() {
  if (validationRef.value.length === Number(validationRef.dataset.length)) {
    validationRef.classList.add("valid");
  } else {
    validationRef.classList.add("invalid");
  }
}

function checkFocus() {
  validationRef.classList.remove("valid", "invalid");
}

validationRef.addEventListener("blur", checkLengthSymbol);
validationRef.addEventListener("focus", checkFocus);
