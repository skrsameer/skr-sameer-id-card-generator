// SETTINGS ICON REDIRECT
const settingsButton = document.querySelector(".settings-button button");
if (settingsButton) {
    settingsButton.addEventListener("click", function () {
        window.location.href = "page4.html"; // Redirect to settings page
    });
}

// DOWNLOAD BUTTON - Downloads About Us file
const downloadButton = document.querySelector(".btn-download");
if (downloadButton) {
    downloadButton.addEventListener("click", function () {
        // Trigger file download
        const link = document.createElement("a");
        link.href = "about-us.pdf"; // Make sure this file exists in your folder
        link.download = "about-us.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// CREATE NEW ID CARD BUTTON - Goes to page5.html
const createIdButton = document.querySelector(".btn-create-id");
if (createIdButton) {
    createIdButton.addEventListener("click", function () {
        window.location.href = "page5.html"; // Redirect to ID creation page
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const settingsButton = document.getElementById("settingsIcon");

    if (settingsButton) {
        settingsButton.addEventListener("click", function () {
            window.location.href = "page4.html";
        });
    }
});