var name = window
  .getComputedStyle(document.querySelector(".nav-wrapper"), "div:before")
  .getPropertyValue("width");

console.log(name);

