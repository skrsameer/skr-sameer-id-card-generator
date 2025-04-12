// Wait for full page to load
document.addEventListener("DOMContentLoaded", function () {
    // Select the form element
    const form = document.querySelector("form");

    // Add event listener to form submit
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop default form submit

        // Get all input fields
        const inputs = document.querySelectorAll("input");

        const firstName = inputs[0].value.trim();     // First Name
        const lastName = inputs[1].value.trim();      // Last Name
        const emailOrPhone = inputs[4].value.trim();  // Email or Phone
        const password = inputs[5].value;             // Password
        const confirmPass = inputs[6].value;          // Confirm Password

        // Validation: Check if fields are empty
        if (!firstName || !lastName || !emailOrPhone || !password || !confirmPass) {
            alert("Please fill in all required fields.");
            return;
        }

        // Validation: Password match
        if (password !== confirmPass) {
            alert("Password and Confirm Password do not match.");
            return;
        }

        // Store credentials in localStorage
        localStorage.setItem("userID", emailOrPhone);
        localStorage.setItem("userPASS", password);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);

        // Notify user and redirect
        alert("Account created successfully! Please log in.");
        window.location.href = "page1.html"; // Redirect to login page
    });
});
