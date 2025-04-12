document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = document.querySelectorAll("input");
        const enteredID = inputs[0].value.trim();
        const enteredPASS = inputs[1].value;

        // Get stored values from localStorage
        const storedID = localStorage.getItem("userID");
        const storedPASS = localStorage.getItem("userPASS");

        // Validate
        if (enteredID === storedID && enteredPASS === storedPASS) {
            alert("Login Successful!");
            window.location.href = "page3.html"; // Redirect to dashboard
        } else {
            alert("Invalid user id or password");
        }
    });
});