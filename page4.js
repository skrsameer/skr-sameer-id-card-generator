document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Check if the user is logged in
  const isLoggedIn = localStorage.getItem("userID") && localStorage.getItem("userPASS");
  if (!isLoggedIn) {
    alert("Please log in first.");
    window.location.href = "page1.html"; // Redirect to the login page if not logged in
    return;
  }

  // Step 2: Setup menu UI elements
  const menuContainer = document.querySelector(".menu-container");
  const closeBtn = document.querySelector(".close-btn");
  const links = document.querySelectorAll(".menu-links li a");

  // Menu panel fade-in animation
  if (menuContainer) {
    menuContainer.style.opacity = 0;
    menuContainer.style.transform = "translateY(-20px)";
    setTimeout(() => {
      menuContainer.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      menuContainer.style.opacity = 1;
      menuContainer.style.transform = "translateY(0)";
    }, 100);
  }

  // Close button action - Redirect to page3.html
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      window.location.href = "page3.html"; // Redirect to page 3
    });
  }

  // Step 3: Handle menu link actions
  if (links.length) {
    // 1. Create New ID Card
    links[0].addEventListener("click", () => {
      window.location.href = "page5.html"; // Redirect to page5.html for ID card creation
    });

    // 2. Download List
    links[1].addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "about-us.pdf"; // Ensure this file exists
      link.download = "About_Us_SKR_SAMEER.pdf"; // Provide appropriate filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    // 3. Change Password
    links[2].addEventListener("click", () => {
      window.location.href = "page7.html"; // Redirect to page7.html for password change
    });

    // 4. About Us
    links[3].addEventListener("click", () => {
      window.location.href = "page6.html"; // Redirect to page6.html for About Us
    });

    // 5. Download App
    links[4].addEventListener("click", () => {
      window.location.href = "https://github.com/skrsameer/skr-sameer-id-card-generator/releases/download/v1.0.1/SKRCardGeneratorApp.1.apk"; // Download App Link
    });

    // 6. Log Out
    links[5].addEventListener("click", () => {
      localStorage.removeItem("userID");
      localStorage.removeItem("userPASS");
      alert("You have been logged out.");
      window.location.href = "page1.html"; // Redirect to login page
    });
  }
});