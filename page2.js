document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#signupForm"); // Make sure ID matches
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = document.querySelectorAll("input");
        const firstName = inputs[0].value.trim();
        const lastName = inputs[1].value.trim();
        const emailOrPhone = inputs[2].value.trim();
        const password = inputs[3].value;
        const confirmPass = inputs[4].value;

        if (!firstName || !lastName || !emailOrPhone || !password || !confirmPass) {
            alert("Please fill in all required fields.");
            form.classList.add('shake');
            return;
        }

        if (password !== confirmPass) {
            alert("Passwords do not match.");
            form.classList.add('shake');
            return;
        }

        localStorage.setItem("userID", emailOrPhone);
        localStorage.setItem("userPASS", password);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);

        alert("Account created successfully!");
        window.location.href = "page1.html";
    });
});
