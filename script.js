
<script>
    // Check for the stored theme preference in localStorage
    const storedMode = localStorage.getItem('theme');
    if (storedMode) {
        document.body.classList.toggle('dark-mode', storedMode === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

    // Add event listener to the dark mode toggle button
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
</script>
