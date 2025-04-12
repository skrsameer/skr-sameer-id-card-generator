// page1.js

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('form');
  const emailInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('input[type="password"]');

  // Default login setup (optional)
  if (!localStorage.getItem('userEmail')) {
    localStorage.setItem('userEmail', 'skr@example.com');
    localStorage.setItem('userPassword', 'skr123');
  }

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
      alert("Login successful!");
      window.location.href = 'page3.html';
    } else {
      alert("Invalid Email or Password!");
    }
  });
});