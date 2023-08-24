const inputTopLeftValue = document.querySelector(".top-left input");
const inputTopRightValue = document.querySelector(".top-right input");
const inputBottomLeftValue = document.querySelector(".bottom-left input");
const inputBottomRightValue = document.querySelector(".bottom-right input");
const element = document.querySelector("main");

function updateBorder(borderSelected, value) {
  switch (borderSelected) {
    case "border__input top-left":
      element.style.borderTopLeftRadius = value + "%";
      break;

    case "border__input top-right":
      element.style.borderTopRightRadius = value + "%";
      break;

    case "border__input bottom-left":
      element.style.borderBottomLeftRadius = value + "%";
      break;

    case "border__input bottom-right":
      element.style.borderBottomRightRadius = value + "%";
      break;
  }
}

document.body.addEventListener("keyup", (event) => {
  if (
    event.target !== inputTopLeftValue ||
    event.target !== inputTopRightValue ||
    event.target !== inputBottomLeftValue ||
    event.target !== inputBottomRightValue
  ) {
    updateBorder(event.target.parentElement.className, event.target.value);
  }
});
