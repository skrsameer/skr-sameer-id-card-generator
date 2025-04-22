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

document.getElementById("downloadBtn").addEventListener("click", function () {
  const card = document.getElementById("idCard");

  html2canvas(card, {
    allowTaint: true,
    useCORS: true,
    backgroundColor: null, // Background ke saath capture karega
    scale: 4 // High quality
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "ID_Card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});