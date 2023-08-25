let inputTopLeft = document.querySelector(".top-left input");
let inputTopRight = document.querySelector(".top-right input");
let inputBottomLeft = document.querySelector(".bottom-left input");
let inputBottomRight = document.querySelector(".bottom-right input");
let element = document.querySelector("main");
let result = document.querySelector(".result");
const borderInputs = [
  inputTopLeft,
  inputTopRight,
  inputBottomLeft,
  inputBottomRight,
];
let borderSelected, value;
let borderTopLeft, borderTopRight, borderBottomLeft, borderBottomRight;

document.body.onload = function () {
  const defaultValue = "16";

  for (const borderInput of borderInputs) {
    borderSelected = borderInput.parentElement.className;
    borderInput.value = defaultValue;
    updateBorder(borderSelected, defaultValue);
  }
};

document.body.addEventListener("keyup", (event) => {
  if (
    event.target !== inputTopLeft ||
    event.target !== inputTopRight ||
    event.target !== inputBottomLeft ||
    event.target !== inputBottomRight
  ) {
    borderSelected = event.target.parentElement.className;
    value = event.target.value;
    updateBorder(borderSelected, value);
  }
});

function updateBorder(borderSelected, value) {
  switch (borderSelected) {
    case "border__input top-left":
      element.style.borderTopLeftRadius = value + "px";
      borderTopLeft = borderInputs[0].value;
      break;

    case "border__input top-right":
      element.style.borderTopRightRadius = value + "px";
      borderTopRight = borderInputs[1].value;
      break;

    case "border__input bottom-left":
      element.style.borderBottomLeftRadius = value + "px";
      borderBottomLeft = borderInputs[2].value;
      break;

    case "border__input bottom-right":
      element.style.borderBottomRightRadius = value + "px";
      borderBottomRight = borderInputs[3].value;
      break;
  }

  result.value = `border-radius: ${borderTopLeft}px ${borderTopRight}px ${borderBottomLeft}px ${borderBottomRight}px;`;
}

function toClipboard() {
  result.select();
  result.setSelectionRange(0, 99999);
  document.execCommand("copy");
  navigator.clipboard.writeText(result.value);
  alert(`${result.value} copied to clipboard`);
}
