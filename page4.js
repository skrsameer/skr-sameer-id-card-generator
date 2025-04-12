// page4.js

document.addEventListener("DOMContentLoaded", function () {
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

  // Menu link actions:
  if (links.length) {
    // Create New ID Card
    links[0].addEventListener("click", () => {
      window.location.href = "page5.html";
    });

    // Download List - Trigger PDF download
    links[1].addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "about-us.pdf"; // File should be in same folder or correct path
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
      localStorage.clear();
      alert("You have been logged out.");
      window.location.href = "page1.html";
    });
  }
});