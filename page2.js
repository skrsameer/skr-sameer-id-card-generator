document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const formContainer = document.querySelector('form');

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    const firstName = inputs[0].value.trim();
    const lastName = inputs[1].value.trim();
    const emailOrPhone = inputs[4].value.trim();
    const password = inputs[5].value;
    const confirmPass = inputs[6].value;

    if (!firstName || !lastName || !emailOrPhone || !password || !confirmPass) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPass) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    // Save to localStorage
    localStorage.setItem("userID", emailOrPhone);
    localStorage.setItem("userPASS", password);
    localStorage.setItem("userEmail", emailOrPhone);  // For login match
    localStorage.setItem("userPassword", password);   // For login match
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);

    formContainer.classList.add("fade-out");
    setTimeout(() => {
      alert("Account created successfully! Please log in.");
      window.location.href = "page1.html";
    }, 500);
  });
});
