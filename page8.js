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

  // Fields to map from localStorage to HTML
  const fields = [
    "name", "class", "roll", "dob", "gender", "father", "phone",
    "address", "post", "district", "pin", "schoolName", "schoolType",
    "session", "schoolPhone", "schoolAddress", "photo"
  ];

  fields.forEach(field => {
    const value = localStorage.getItem(field);
    const element = document.getElementById(mapFieldId(field));
    if (element) {
      if (field === "photo" && value) {
        element.src = value;
      } else {
        element.textContent = value || "N/A";
      }
    }
  });
};

// Helper function to map localStorage keys to element IDs
function mapFieldId(field) {
  const mapping = {
    name: "studentName",
    class: "studentClass",
    roll: "studentRoll",
    dob: "dob",
    gender: "gender",
    father: "fatherName",
    phone: "phone",
    address: "address",
    post: "post",
    district: "district",
    pin: "pin",
    schoolName: "school-name",
    schoolType: "school-type",
    session: "session",
    schoolPhone: "schoolphone",
    schoolAddress: "schoolAddress",
    photo: "profilePhoto"
  };
  return mapping[field];
}

// Home button function
function goHome() {
  localStorage.clear();
  window.location.href = "page3.html";
}

// Download ID card as PDF
function downloadCard() {
  const { jsPDF } = window.jspdf;
  const idCard = document.getElementById("idCard");
  const doc = new jsPDF({
    unit: "in",
    format: [2.2, 3.4]
  });

  html2canvas(idCard).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    doc.addImage(imgData, "PNG", 0, 0, 2.2, 3.4);
    doc.save("ID_Card.pdf");
  });
}
