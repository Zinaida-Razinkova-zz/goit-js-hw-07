// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeRef.addEventListener("input", changeText);

function changeText() {
  textRef.style.fontSize = fontSizeRef.value + "px";
}
