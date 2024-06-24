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
  console.log(`mm-theme-switcher-${currentTheme}`);
  document.getElementById(`mm-theme-switcher-${currentTheme}`).style.display =
    "none";
  let newTheme = currentTheme === "light" ? "dark" : "light";
  document.getElementById(`mm-theme-switcher-${newTheme}`).style.display =
    "block";

  // Update the theme attribute, and add it to localStorage
  document.body.setAttribute("mm-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  console.log("Animation complete.");
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
