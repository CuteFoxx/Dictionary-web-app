const toggleDarkMode = (isDarkModeEnabled) => {
  if (isDarkModeEnabled) {
    isDarkModeEnabled = !isDarkModeEnabled;
    document.body.classList.toggle("dark-mode");
    return;
  }

  document.body.classList.toggle("dark-mode");
};

export default toggleDarkMode;
