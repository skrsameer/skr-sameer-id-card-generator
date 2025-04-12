document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const enteredID = inputs[0].value.trim();
    const enteredPASS = inputs[1].value.trim();

    const storedID = localStorage.getItem("userID");
    const storedPASS = localStorage.getItem("userPASS");

    if (enteredID === storedID && enteredPASS === storedPASS) {
      alert("Login Successful!");
      window.location.href = "page3.html"; // यहाँ redirect पेज डालो
    } else {
      alert("Invalid ID or Password");
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 500);
    }
  });
});
