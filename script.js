
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Check if dark mode was previously enabled
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Save dark mode preference
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });

    // Handle Review Submission
    const reviewForm = document.getElementById("review-form");
    const reviewsContainer = document.getElementById("reviews-container");

    if (reviewForm) {
        reviewForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const reviewText = document.getElementById("review-text").value;
            const rating = document.querySelector("input[name='rating']:checked");

            if (!rating) {
                alert("Please select a star rating.");
                return;
            }

            const newReview = document.createElement("div");
            newReview.classList.add("review");
            newReview.innerHTML = `
                <h3>${username}</h3>
                <p>${reviewText}</p>
                <div class="stars">${"★".repeat(rating.value)}</div>
            `;
            reviewsContainer.appendChild(newReview);

            // Clear the form
            reviewForm.reset();
        });
    }
});
