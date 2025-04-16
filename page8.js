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
function downloadPNG() {
    const card = document.querySelector('.id-card');  // ID कार्ड वाला बॉक्स

    html2canvas(card, {
        useCORS: true,          // ताकि background image ठीक से लोड हो
        allowTaint: true,       
        backgroundColor: null,  // बैकग्राउंड ट्रांसपेरेंट रखने के लिए
        scale: 2                // 2 गुना ज़्यादा रेजोल्यूशन में इमेज बनेगी
    }).then((canvas) => {
        const dataURL = canvas.toDataURL('image/png');  // PNG इमेज बनाएँ
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'id_card.png'; // डाउनलोड फाइल का नाम
        link.click(); // डाउनलोड चालू करें
    }).catch((error) => {
        console.error('डाउनलोड में समस्या:', error);
    });
}