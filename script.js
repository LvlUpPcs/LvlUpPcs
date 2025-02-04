
// Get the theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Check if dark mode is already set
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Event listener for the theme toggle button
themeToggleBtn.addEventListener('click', () => {
    // Toggle dark mode
    document.body.classList.toggle('dark-mode');

    // Save the theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
