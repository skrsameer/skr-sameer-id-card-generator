document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('changePasswordForm');
  const oldPasswordInput = document.getElementById('oldPassword');
  const newPasswordInput = document.getElementById('newPassword');
  const retypePasswordInput = document.getElementById('retypePassword');
  const logoutBtn = document.querySelector('.logout-btn');

  // Default password setup if not set
  if (!localStorage.getItem('userPassword')) {
    localStorage.setItem('userPassword', 'skr123'); // default password
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const oldPassword = oldPasswordInput.value.trim();
    const newPassword = newPasswordInput.value.trim();
    const retypePassword = retypePasswordInput.value.trim();
    const currentSavedPassword = localStorage.getItem('userPassword');

    // Check old password
    if (oldPassword !== currentSavedPassword) {
      alert("Old password is incorrect!");
      return;
    }

    // Empty fields check
    if (!newPassword || !retypePassword) {
      alert("Please fill in all fields.");
      return;
    }

    // Match new passwords
    if (newPassword !== retypePassword) {
      alert("New passwords do not match!");
      return;
    }

    // Save new password and remove old
    localStorage.setItem('userPassword', newPassword);
    alert("Password updated successfully!");

    // Clear inputs
    oldPasswordInput.value = '';
    newPasswordInput.value = '';
    retypePasswordInput.value = '';
  });

  // Logout button
  logoutBtn.addEventListener('click', () => {
    window.location.href = 'page1.html'; // login page
  });
  window.goBack = function () {
    window.location.href = "page4.html";
  };
});