// themeSwitcher.js
import { themes } from "./themeConfig.js";
/**
 * Toggles the website theme.
 * This function modifies the CSS variables on the document's body element to switch themes,
 * and it uses GSAP to animate the transition for a smooth visual effect.
 * It also stores the selected theme in localStorage to persist the theme across sessions.
 */
export function toggleTheme() {
  // Retrieve the currently stored theme, default to 'light' if none is stored
  console.log("The Toggle theme function is running.");
  const currentTheme = localStorage.getItem("theme") || "light";
  console.log(`mm-theme-toggle-${currentTheme}`);
  document.getElementById(`mm-theme-toggle-${currentTheme}`).style.display =
    "none";
  let newTheme = currentTheme === "light" ? "dark" : "light";
  document.getElementById(`mm-theme-toggle-${newTheme}`).style.display =
    "block";

  // Fetch and apply computed styles
  const computedStyle = getComputedStyle(document.body);
  const themeValues = {
    "--background-color": computedStyle.getPropertyValue(
      themes[newTheme]["--background-color"]
    ),
    "--text-color": computedStyle.getPropertyValue(
      themes[newTheme]["--text-color"]
    ),
  };

  // Use GSAP to animate the transition of the CSS variables on the body element
  gsap.to("body", {
    duration: 0.75,
    ease: "sine.out",
    "--background-color": themeValues["--background-color"],
    "--text-color": themeValues["--text-color"],
    onComplete: () => {
      // Once the animation is complete, then update the attribute and localStorage
      document.body.setAttribute("mm-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      console.log("Animation complete.");
    },
  });
}

/**
 * Sets up event listeners for theme toggling.
 * Attaches a click event listener to the button with the ID 'theme-switcher-button' that calls toggleTheme.
 */
export function setupThemeToggler() {
  const themeToggleButton = document.getElementById("theme-switcher-button");
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
  } else {
    console.error("Theme toggle button not found");
  }
}
