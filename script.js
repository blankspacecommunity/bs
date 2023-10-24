let darkMode = true; // Initial mode is dark

function toggleMode() {
  const button = document.getElementById("mode-toggle-button");
  const logo = document.getElementById("logo");
  const tags = document.querySelectorAll(".projects .tags span");

  darkMode = !darkMode; // Toggle the mode state

  if (darkMode) {
    // Switch to dark mode
    button.src = "dark_mode_btn.svg";
    logo.src = "logo.svg";
    document.body.classList.remove("high-contrast");

    tags.forEach((tag) => {
      const className = tag.classList[0];
      tag.classList.remove(className + "-dark");
    });
  } else {
    // Switch to light mode
    button.src = "light_mode_btn.svg";
    logo.src = "nightmode.svg";
    document.body.classList.add("high-contrast");

    tags.forEach((tag) => {
      const className = tag.classList[0];
      tag.classList.add(className + "-dark");
    });
  }
}
