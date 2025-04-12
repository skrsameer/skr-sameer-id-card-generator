document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    const firstName = inputs[0].value.trim();
    const lastName = inputs[1].value.trim();
    const emailOrPhone = inputs[4].value.trim();
    const password = inputs[5].value.trim();
    const confirmPass = inputs[6].value.trim();

    // Validation
    if (!firstName || !lastName || !emailOrPhone || !password || !confirmPass) {
      form.classList.add("shake");
      form.addEventListener("animationend", () => {
        form.classList.remove("shake");
      }, { once: true });
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPass) {
      form.classList.add("shake");
      form.addEventListener("animationend", () => {
        form.classList.remove("shake");
      }, { once: true });
      alert("Password and Confirm Password do not match.");
      return;
    }

    // Save to localStorage
    localStorage.setItem("userID", emailOrPhone);
    localStorage.setItem("userPASS", password);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);

    // Fade out and redirect
    form.classList.add("fade-out");
    form.addEventListener("transitionend", () => {
      alert("Account created successfully!");
      window.location.href = "page1.html";
    }, { once: true });
  });
});
