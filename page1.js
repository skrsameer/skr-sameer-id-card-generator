document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  // Default user data (for demo/testing)
  if (!localStorage.getItem("userID")) {
    localStorage.setItem("userID", "skr");
    localStorage.setItem("userPASS", "12345");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    const enteredID = inputs[0].value.trim();
    const enteredPASS = inputs[1].value.trim();

    const storedID = localStorage.getItem("userID");
    const storedPASS = localStorage.getItem("userPASS");

    if (enteredID === storedID && enteredPASS === storedPASS) {
      // Login Successful: Apply fade-out animation.
      form.classList.add("fade-out");

      // Wait for the transition to finish before redirecting.
      form.addEventListener("transitionend", function () {
        window.location.href = "page3.html"; // Redirect to dashboard/page3
      }, { once: true });
    } else {
      // Login Error: Apply shake animation.
      form.classList.add("shake");

      // Remove shake class after animation completes to allow reuse.
      form.addEventListener("animationend", function () {
        form.classList.remove("shake");
      }, { once: true });
      
      alert("Invalid User ID or Password");
    }
  });
});
