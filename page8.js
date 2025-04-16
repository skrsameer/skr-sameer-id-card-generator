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
async function downloadCard() {
  const { jsPDF } = window.jspdf;
  const card = document.getElementById("idCard");

  html2canvas(card, { scale: 3 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [85.6, 54] // ID Card Size in mm (credit card size)
    });

    // ID कार्ड का center में placement
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = 85.6;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    const x = (85.6 - pdfWidth) / 2;
    const y = (54 - pdfHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, pdfWidth, pdfHeight);
    pdf.save("ID_Card.pdf");
  });
}
