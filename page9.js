document.addEventListener("DOMContentLoaded", () => {
  const qrType = document.getElementById("qrType");
  const textInput = document.getElementById("textInput");
  const qrcodeContainer = document.getElementById("qrcode");
  const qrPreview = document.getElementById("qrPreview");
  const downloadBtn = document.getElementById("downloadBtn");

  // Input Field Placeholder बदलने के लिए
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
    downloadBtn.style.display = "none";
  };

  // QR Code Generate करने का Function
  window.generateQR = function () {
    const input = textInput.value.trim();

    if (!input) {
      alert("Please enter a valid input.");
      return;
    }

    // पुराने QR हटाओ
    qrcodeContainer.innerHTML = "";

    // नया QR बनाओ
    const qr = new QRCode(qrcodeContainer, {
      text: input,
      width: 300,
      height: 300,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });

    // Download लिंक तैयार करो
    setTimeout(() => {
      const canvas = qrcodeContainer.querySelector("canvas");
      if (canvas) {
        const dataUrl = canvas.toDataURL("image/png");
        downloadBtn.href = dataUrl;
        downloadBtn.download = "qr-code.png";
        downloadBtn.style.display = "inline-block";
        qrPreview.style.display = "block";
      }
    }, 300);
  };

  // Back बटन
  window.goBack = function () {
    window.location.href = "page3.html";
  };
});