
// page5.js - Cinematic + Functional + Animated Form Submission

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const photoInput = form.querySelector('input[type="file"]');
  const previewImage = document.createElement("img");
  previewImage.style.width = "100px";
  previewImage.style.height = "120px";
  previewImage.style.objectFit = "cover";
  previewImage.style.margin = "10px 0";
  previewImage.style.border = "2px solid #333";
  previewImage.style.borderRadius = "8px";
  form.insertBefore(previewImage, photoInput.nextSibling);

  // Animation on form appearance
  document.querySelector(".form-container").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".form-container").style.transition = "all 1s ease";
    document.querySelector(".form-container").style.opacity = 1;
    document.querySelector(".form-container").style.transform = "scale(1.02)";
  }, 200);

  let base64Image = "";

  photoInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        base64Image = e.target.result;
        previewImage.src = base64Image;
      };
      reader.readAsDataURL(file);
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const entries = {};
    formData.forEach((value, key) => {
      entries[key] = value;
    });

    if (!base64Image) {
      alert("Please upload a photo!");
      return;
    }

    entries["photo"] = base64Image;

    // Save data to localStorage
    for (let key in entries) {
      localStorage.setItem(key, entries[key]);
    }

    // Cinematic Button Animation
    const button = form.querySelector("button");
    button.innerHTML = "Generating ID...";
    button.style.backgroundColor = "#444";
    button.disabled = true;

    setTimeout(() => {
      window.location.href = "page8.html";
    }, 1500);
  });
});
