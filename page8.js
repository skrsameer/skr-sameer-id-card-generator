// जब पेज लोड हो तब डेटा लोड करें
window.onload = function () {
  const getElement = (id) => document.getElementById(id);

  // फोटो लोड करें
  const photo = localStorage.getItem("photo");
  if (photo) {
    getElement("profilePhoto").src = photo;
    getElement("profilePhoto").classList.add("fadeIn");
  }

  // स्टूडेंट डिटेल्स लोड करें
  getElement("studentName").textContent = localStorage.getItem("name") || "N/A";
  getElement("studentClass").textContent = localStorage.getItem("class") || "N/A";
  getElement("studentRoll").textContent = localStorage.getItem("roll") || "N/A";
  getElement("dob").textContent = localStorage.getItem("dob") || "N/A";
  getElement("gender").textContent = localStorage.getItem("gender") || "N/A";
  getElement("fatherName").textContent = localStorage.getItem("father") || "N/A";
  getElement("phone").textContent = localStorage.getItem("phone") || "N/A";
  getElement("village").textContent = localStorage.getItem("village") || "N/A";
  getElement("post").textContent = localStorage.getItem("post") || "N/A";
  getElement("district").textContent = localStorage.getItem("district") || "N/A";
  getElement("pincode").textContent = localStorage.getItem("pincode") || "N/A";

  // स्कूल सेशन और फोन नंबर
  getElement("session").textContent = localStorage.getItem("session") || "2024-25";
  getElement("school-phone-no").textContent = localStorage.getItem("schoolPhone") || "0000000000";

  // सभी डिटेल्स पर एनिमेशन लगाएं
  document.querySelectorAll(".student-details span").forEach((el) => {
    el.classList.add("slideIn");
  });
};

// डाउनलोड बटन की फंक्शनालिटी
function downloadCard() {
  const card = document.getElementById("idCard");

  // Ensure image fully visible before capture
  const img = document.getElementById("profilePhoto");
  img.style.opacity = "1";
  img.style.animation = "none";

  html2canvas(card, {
    scale: 3,
    useCORS: true
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'in',
      format: [3.4, 2.2] // [height, width]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, 2.3, 3.7); // x, y, width, height
    pdf.save("ID_Card.pdf");
  });
}
