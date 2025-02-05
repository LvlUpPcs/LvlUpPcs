
// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Apply Dark Mode Preference on Load
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// Save Order Details and Redirect to Checkout
document.getElementById("order-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const orderDetails = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        county: document.getElementById("county").value,
        postcode: document.getElementById("postcode").value,
        email: document.getElementById("email").value,
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    window.location.href = "checkout.html";
});

// Load Order Details on Checkout Page
if (window.location.pathname.includes("checkout.html")) {
    const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    document.getElementById("order-summary").innerText = `
        Name: ${orderDetails?.name || ""}
        Address: ${orderDetails?.address || ""}, ${orderDetails?.city || ""}
        County: ${orderDetails?.county || ""}
        Postcode: ${orderDetails?.postcode || ""}
        Email: ${orderDetails?.email || ""}
    `;
}

// Integrate PayPal Button
document.getElementById("confirm-order")?.addEventListener("click", function() {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: '50.00' }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert("Transaction completed by " + details.payer.name.given_name);
            });
        }
    }).render("#paypal-button-container");
});
