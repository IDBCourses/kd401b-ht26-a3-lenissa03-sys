// TEST: Is JavaScript loading?
console.log("SCRIPT IS LOADING");

// COLOUR THEMES

const themeStylesheet = document.querySelector("#themeStylesheet");
const colourButtons = document.querySelectorAll(".colour-button");

let currentTheme = "blue.css";

// Click a colour button

colourButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentTheme = button.dataset.theme;

    // Change ONLY the colour stylesheet
    themeStylesheet.setAttribute("href", currentTheme);

    // Show which colour is selected
    colourButtons.forEach(function (otherButton) {
      otherButton.setAttribute("aria-pressed", "false");
    });

    button.setAttribute("aria-pressed", "true");
  });
});

// READING MODE

const readingToggle = document.querySelector("#readingToggle");
const readingStylesheet = document.querySelector("#readingStylesheet");

readingToggle.addEventListener("click", function () {
  console.log("READING MODE BUTTON CLICKED");

  if (readingStylesheet.disabled === true) {
    readingStylesheet.disabled = false;
    readingToggle.textContent = "Normal mode";
  } else {
    readingStylesheet.disabled = true;
    readingToggle.textContent = "Reading mode";
  }
});
