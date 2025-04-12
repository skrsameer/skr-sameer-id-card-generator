window.onload = function () {
  // Animation on card load
  const card = document.querySelector(".id-card");
  card.style.opacity = "0";
  card.style.transform = "scale(0.95)";
  setTimeout(() => {
    card.style.transition = "all 0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "scale(1)";
  }, 200);

  // Get form data from localStorage
  document.getElementById("studentName").textContent = localStorage.getItem("name") || "N/A";
  document.getElementById("studentClass").textContent = localStorage.getItem("class") || "N/A";
  document.getElementById("studentRoll").textContent = localStorage.getItem("roll") || "N/A";
  document.getElementById("fatherName").textContent = localStorage.getItem("father") || "N/A";
  document.getElementById("dob").textContent = localStorage.getItem("dob") || "N/A";
  document.getElementById("phone").textContent = localStorage.getItem("phone") || "N/A";
  document.getElementById("address").textContent = localStorage.getItem("address") || "N/A";
  document.getElementById("session").textContent = localStorage.getItem("session") || "2024-25";

  // Load Image from Base64
  const imgData = localStorage.getItem("photo");
  if (imgData) {
    document.getElementById("profilePhoto").src = imgData;
  }
};

// Download the ID card as image using html2canvas
function downloadCard() {
  const card = document.getElementById("idCard");
  html2canvas(card).then(canvas => {
    const link = document.createElement("a");
    link.download = "ID_Card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}