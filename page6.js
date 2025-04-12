// page6.js

document.addEventListener("DOMContentLoaded", function () {
    // Select the close icon element
    const closeBtn = document.querySelector(".close-icon");

    // If close icon exists
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            // Go back to main page or page3.html
            window.location.href = "page3.html";
        });
    }

    // Optional: Add a little animation effect to the about section
    const aboutSection = document.querySelector(".about");
    if (aboutSection) {
        aboutSection.style.opacity = 0;
        setTimeout(() => {
            aboutSection.style.transition = "opacity 1s ease-in-out";
            aboutSection.style.opacity = 1;
        }, 100);
    }
});