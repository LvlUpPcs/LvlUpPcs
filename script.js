
// Handle the theme toggle
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
});

// Set the default theme based on system preferences
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark-mode");
} else {
    body.classList.add("light-mode");
}
