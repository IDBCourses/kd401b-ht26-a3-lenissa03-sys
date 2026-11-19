const themeToggle = document.querySelector("#themeToggle");
const themeStylesheet = document.querySelector("#themeStylesheet");

themeToggle.addEventListener("click", function () {
  if (themeStylesheet.getAttribute("href") === "style.css") {
    themeStylesheet.setAttribute("href", "dark.css");
  } else {
    themeStylesheet.setAttribute("href", "style.css");
  }
});
