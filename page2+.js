// page2.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const emailInput = document.querySelector('input[placeholder="enter email or phone no."]');
  const passwordInput = document.querySelector('input[placeholder="enter new password"]');
  const confirmPasswordInput = document.querySelector('input[placeholder="enter confirm password"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert("Account created successfully!");
    window.location.href = 'page1.html';
  });
});