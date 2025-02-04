
// Handle the theme toggle
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const body = document.body;

// Check if there is a theme stored in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
} else {
    // If no theme is stored, default to light mode
    body.classList.add('light-mode');
}

// Theme toggle event listener
themeToggleBtn.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem('theme', 'dark-mode'); // Save theme in localStorage
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem('theme', 'light-mode'); // Save theme in localStorage
    }
});
