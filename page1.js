document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputs = document.querySelectorAll('input');
  const formContainer = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredEmail = inputs[0].value.trim();
    const enteredPassword = inputs[1].value.trim();

    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
      formContainer.classList.add("fade-out");
      setTimeout(() => {
        alert("Login successful!");
        window.location.href = 'page3.html';
      }, 500);
    } else {
      formContainer.classList.add("shake");
      setTimeout(() => formContainer.classList.remove("shake"), 500);
      alert("Invalid Email or Password!");
    }
  });
});
