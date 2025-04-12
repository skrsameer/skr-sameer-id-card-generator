// page4.js

document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Check if user is logged in
  const isLoggedIn = localStorage.getItem("userID") && localStorage.getItem("userPASS");
  if (!isLoggedIn) {
    alert("Please log in first.");
    window.location.href = "page1.html";
    return;
  }

  // Step 2: Setup menu UI
  const menuContainer = document.querySelector(".menu-container");
  const closeBtn = document.querySelector(".close-btn");
  const links = document.querySelectorAll(".menu-links li a");

  // Fade-in animation for the menu panel
  if (menuContainer) {
    menuContainer.style.opacity = 0;
    menuContainer.style.transform = "translateY(-20px)";
    setTimeout(() => {
      menuContainer.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      menuContainer.style.opacity = 1;
      menuContainer.style.transform = "translateY(0)";
    }, 100);
  }

  // Close button redirects to page3.html
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      window.location.href = "page3.html";
    });
  }

  // Step 3: Menu link actions
  if (links.length) {
    // Create New ID Card
    links[0].addEventListener("click", () => {
      window.location.href = "page5.html";
    });

    // Download List
    links[1].addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "about-us.pdf"; // Make sure this file exists
      link.download = "About_Us_SKR_SAMEER.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    // Change Password
    links[2].addEventListener("click", () => {
      window.location.href = "page7.html";
    });

    // About Us
    links[3].addEventListener("click", () => {
      window.location.href = "page6.html";
    });

    // Log Out
    links[4].addEventListener("click", () => {
      localStorage.removeItem("userID");
      localStorage.removeItem("userPASS");
      alert("You have been logged out.");
      window.location.href = "page1.html";
    });
  }
});
