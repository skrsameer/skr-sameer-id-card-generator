// SETTINGS ICON REDIRECT
const settingsButton = document.querySelector(".settings-button button");
if (settingsButton) {
    settingsButton.addEventListener("click", function () {
        window.location.href = "page4.html";
    });
}

// DOWNLOAD BUTTON - Downloads About Us file
const downloadButton = document.querySelector(".btn-download");
if (downloadButton) {
    downloadButton.addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "about-us.pdf";
        link.download = "about-us.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// CREATE NEW ID CARD BUTTON
const createIdButton = document.querySelector(".btn-create-id");
if (createIdButton) {
    createIdButton.addEventListener("click", function () {
        window.location.href = "page5.html";
    });
}

// GENERATE QR CODE BUTTON — Remove old listener if using `goToQRCodePage()`

// SETTINGS ICON REDIRECT (again after DOM load)
document.addEventListener("DOMContentLoaded", function () {
    const settingsButton = document.getElementById("settingsIcon");

    if (settingsButton) {
        settingsButton.addEventListener("click", function () {
            window.location.href = "page4.html";
        });
    }
});

// QR CODE PAGE REDIRECT WITH FADE OUT
function goToQRCodePage() {
    const container = document.querySelector('.container');

    if (container) {
        container.style.transition = 'opacity 0.3s ease-out';
        container.style.opacity = 0;

        setTimeout(() => {
            window.location.href = 'Page9.html';
        }, 300);
    } else {
        // Fallback if container is not found
        window.location.href = 'Page9.html';
    }
}