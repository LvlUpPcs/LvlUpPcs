
// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";
    
    document.body.classList.toggle("dark-mode", currentTheme === "dark");

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
    });
});
