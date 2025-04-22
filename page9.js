document.addEventListener("DOMContentLoaded", () => {
  const qrType = document.getElementById("qrType");
  const textInput = document.getElementById("textInput");
  const qrcodeContainer = document.getElementById("qrcode");
  const qrPreview = document.getElementById("qrPreview");
  const downloadBtn = document.getElementById("downloadBtn");

  window.showInputField = function () {
    const type = qrType.value;
    textInput.style.display = "block";

    if (type === "phone") {
      textInput.placeholder = "Enter Phone Number";
    } else if (type === "url") {
      textInput.placeholder = "Enter URL";
    } else {
      textInput.placeholder = "Enter public file URL (PDF or Image)";
    }

    qrPreview.style.display = "none";
    qrcodeContainer.innerHTML = "";
  };

  window.generateQR = function () {
    const type = qrType.value;
    const input = textInput.value.trim();

    if (!input) {
      alert("Please enter a valid input.");
      return;
    }

    qrcodeContainer.innerHTML = "";
    const qr = new QRCode(qrcodeContainer, {
      text: input,
      width: 512,
      height: 512,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });

    setTimeout(() => {
      const canvas = qrcodeContainer.querySelector("canvas");
      if (canvas) {
        const dataUrl = canvas.toDataURL("image/png");
        downloadBtn.href = dataUrl;
        qrPreview.style.display = "block";
      }
    }, 300);
  };

  indow.goBack = function () {
    window.location.href = "page3.html";
  };
});