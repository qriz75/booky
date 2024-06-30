document.addEventListener("DOMContentLoaded", () => {
  const darkModeSwitch = document.getElementById("darkModeSwitch");

  // Load dark mode preference from localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark-mode", isDarkMode);
  darkModeSwitch.checked = isDarkMode;
  updateElementsDarkMode(isDarkMode);

  darkModeSwitch.addEventListener("change", () => {
    const isDark = darkModeSwitch.checked;
    document.body.classList.toggle("dark-mode", isDark);
    updateElementsDarkMode(isDark);
    localStorage.setItem("darkMode", isDark);
  });
});

function updateElementsDarkMode(isDark) {
  const categories = document.querySelectorAll(".category");
  const bookmarks = document.querySelectorAll(".bookmark");

  categories.forEach((category) => {
    category.classList.toggle("dark-mode", isDark);
  });

  bookmarks.forEach((bookmark) => {
    bookmark.classList.toggle("dark-mode", isDark);
  });
}
