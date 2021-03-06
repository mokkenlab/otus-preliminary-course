import { showHideButton } from "./showHideButton.js";
import { addItem } from "./addItem.js";

export function initListeners(app) {
  const button = app.querySelector("button");
  const input = app.querySelector("input");

  showHideButton(button, input.value);

  input.addEventListener("input", () => {
    showHideButton(button, input.value);
  });

  button.addEventListener("click", (ev) => {
    ev.preventDefault();
    addItem(input, app);
    showHideButton(button, input.value);
  });
}
