document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const userID = document.getElementById("userID");
  const userPASS = document.getElementById("userPASS");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredID = userID.value.trim();
    const enteredPASS = userPASS.value.trim();

    const storedID = localStorage.getItem("userID");
    const storedPASS = localStorage.getItem("userPASS");

    if (enteredID === storedID && enteredPASS === storedPASS) {
      // Fade out animation on successful login
      form.classList.add("fade-out");
      setTimeout(() => {
        alert("Login Successful!");
        window.location.href = "page3.html";
      }, 500);
    } else {
      // Shake animation for error
      form.classList.add("shake");
      alert("Invalid ID or Password");
      setTimeout(() => form.classList.remove("shake"), 500);
    }
  });
});