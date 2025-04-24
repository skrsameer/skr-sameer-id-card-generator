document.addEventListener("DOMContentLoaded", function () {
  // User Authentication Check
  const isLoggedIn = localStorage.getItem("userID") && localStorage.getItem("userPASS");
  if (!isLoggedIn) {
    alert("Please log in first.");
    window.location.href = "page1.html";
    return;
  }

  // Menu Animation
  const menuContainer = document.querySelector(".menu-container");
  setTimeout(() => {
    menuContainer.classList.add("active");
  }, 100);

  // Close Button
  document.querySelector(".close-btn").addEventListener("click", () => {
    menuContainer.classList.remove("active");
    setTimeout(() => {
      window.location.href = "page3.html";
    }, 300);
  });

  // Menu Link Actions
  document.getElementById("create-id").addEventListener("click", () => {
    window.location.href = "page5.html";
  });

  document.getElementById("qr-code").addEventListener("click", () => {
    const container = document.querySelector(".menu-container");
    container.style.transition = "opacity 0.3s ease-out";
    container.style.opacity = 0;
    setTimeout(() => {
      window.location.href = "page9.html";
    }, 300);
  });

  document.getElementById("download-list").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "about-us.pdf";
    link.download = "About_Us_SKR_SAMEER.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  document.getElementById("change-password").addEventListener("click", () => {
    window.location.href = "page7.html";
  });

  document.getElementById("about-us").addEventListener("click", () => {
    window.location.href = "page6.html";
  });

  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("userPASS");
    alert("You have been logged out.");
    window.location.href = "page1.html";
  });
});