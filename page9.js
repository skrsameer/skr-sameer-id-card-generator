document.addEventListener("DOMContentLoaded", () => {
  const qrType = document.getElementById("qrType");
  const textInput = document.getElementById("textInput");
  const qrcodeContainer = document.getElementById("qrcode");
  const qrPreview = document.getElementById("qrPreview");
  const downloadBtn = document.getElementById("downloadBtn");

  // Function to show placeholder based on type
  window.showInputField = function () {
    const type = qrType.value;
    textInput.style.display = "block";

    if (type === "phone") {
      textInput.placeholder = "Enter Phone Number (e.g. +91XXXXXXXXXX)";
    } else if (type === "url") {
      textInput.placeholder = "Enter URL (e.g. https://example.com)";
    } else {
      textInput.placeholder = "Enter Public File URL (PDF/Image)";
    }

    qrPreview.style.display = "none";
    qrcodeContainer.innerHTML = "";
  };

  // Function to generate QR
  window.generateQR = function () {
    const type = qrType.value;
    const input = textInput.value.trim();

    if (!input) {
      alert("Please enter a valid input.");
      return;
    }

    // Clear previous QR code
    qrcodeContainer.innerHTML = "";

    // Generate new QR
    new QRCode(qrcodeContainer, {
      text: input,
      width: 512,
      height: 512,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    // Show download button after short delay
    setTimeout(() => {
      const canvas = qrcodeContainer.querySelector("canvas");
      if (canvas) {
        const dataUrl = canvas.toDataURL("image/png");
        downloadBtn.href = dataUrl;
        downloadBtn.download = "qr-code.png";
        qrPreview.style.display = "block";
      }
    }, 300);
  };

  // Go back to previous page
  window.goBack = function () {
    window.location.href = "page3.html";
  };
});