window.addEventListener("DOMContentLoaded", start);
export function start() {
  const typeText = document.querySelector("h1");
  type(typeText);
}
function type(element, callback) {
  const typeText = element.textContent;
  element.textContent = " ";
  let count = 0;
  const typingDelay = 200;

  function start() {
    element.textContent = typeText.substring(0, count);
    if (typeText.length > count) {
      count++;
      setTimeout(start, typingDelay);
    } else {
      callback();
    }
  }
  start();
}
