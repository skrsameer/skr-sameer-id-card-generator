// page7.js

document.addEventListener('DOMContentLoaded', () => {
  const oldPasswordInput = document.getElementById('oldPassword');
  const newPasswordInput = document.getElementById('newPassword');
  const retypePasswordInput = document.getElementById('retypePassword');
  const updateBtn = document.querySelector('.update-btn');
  const logoutBtn = document.querySelector('.logout-btn');

  // Default password if not already set
  if (!localStorage.getItem('userPassword')) {
    localStorage.setItem('userPassword', 'skr123');
  }

  updateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const oldPassword = oldPasswordInput.value.trim();
    const newPassword = newPasswordInput.value.trim();
    const retypePassword = retypePasswordInput.value.trim();
    const savedPassword = localStorage.getItem('userPassword');

    if (oldPassword !== savedPassword) {
      alert("Old password is incorrect!");
      return;
    }

    if (newPassword === "" || retypePassword === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (newPassword !== retypePassword) {
      alert("New passwords do not match!");
      return;
    }

    // Save new password to localStorage
    localStorage.setItem('userPassword', newPassword);
    alert("Password updated successfully!");

    // Clear input fields
    oldPasswordInput.value = "";
    newPasswordInput.value = "";
    retypePasswordInput.value = "";
  });

  logoutBtn.addEventListener('click', () => {
    window.location.href = 'page1.html';
  });
});