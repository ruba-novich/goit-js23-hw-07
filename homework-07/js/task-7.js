
const fontSizeEl = document.querySelector("#font-size-control");
const TextEl = document.querySelector("#text");
const fontSizeChange = function () {
  console.log(fontSizeEl.value);
  TextEl.style.fontSize = `${fontSizeEl.value}px`;
};
TextEl.style.fontSize = `${fontSizeEl.value}px`;
fontSizeEl.addEventListener("input", fontSizeChange);