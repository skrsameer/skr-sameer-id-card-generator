// page5.js - Cinematic + Functional + Image Crop + Data Save

let cropper;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const photoInput = document.getElementById("photo");
  const cropImage = document.getElementById("cropImage");
  const cropButton = document.getElementById("cropButton");
  const cropContainer = document.getElementById("cropContainer");
  const preview = document.getElementById("photoPreview");

  // Animation on form load
  const container = document.querySelector(".form-container");
  container.style.opacity = 0;
  container.style.transform = "scale(0.95)";
  setTimeout(() => {
    container.style.transition = "all 1s ease";
    container.style.opacity = 1;
    container.style.transform = "scale(1)";
  }, 200);

  // Handle image selection and cropper setup
  photoInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (evt) {
        cropImage.src = evt.target.result;
        cropImage.style.display = "block";
        cropContainer.style.display = "block";

        if (cropper) cropper.destroy();

        cropper = new Cropper(cropImage, {
          aspectRatio: 3.5 / 4.5,
          viewMode: 1,
          autoCropArea: 1,
          responsive: true,
          minContainerWidth: 500,
          minContainerHeight: 700
        });
      };
      reader.readAsDataURL(file);
    }
  });

  // Handle crop button click
  cropButton.addEventListener("click", function () {
    const canvas = cropper.getCroppedCanvas({ width: 350, height: 450 });
    const croppedImageURL = canvas.toDataURL("image/png");
    preview.src = croppedImageURL;
    preview.style.display = "block";
    preview.classList.add("show");

    localStorage.setItem("photo", croppedImageURL);
    cropContainer.style.display = "none";
    cropImage.style.display = "none";
  });

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const genderInput = document.querySelector("input[name='gender']:checked");
    const croppedPhoto = localStorage.getItem("photo");

    if (!croppedPhoto) {
      alert("Please upload and crop a photo!");
      return;
    }

    const formData = {
      name: document.getElementById("name").value,
      class: document.getElementById("class").value,
      roll: document.getElementById("roll").value,
      dob: document.getElementById("dob").value,
      gender: genderInput ? genderInput.value : "",
      father: document.getElementById("father").value,
      phone: document.getElementById("phone").value,
      village: document.getElementById("village").value,
      post: document.getElementById("post").value,
      district: document.getElementById("district").value,
      pincode: document.getElementById("pincode").value,
      schoolName: document.getElementById("school-name").value,
      schoolType: document.getElementById("schoolType").value,
      session: document.getElementById("session").value,
      schoolPhone: document.getElementById("schoolPhone").value,
      schoolAddress: document.getElementById("schoolAddress").value,
      photo: croppedPhoto
    };

    // Clear old data and save new one
    localStorage.removeItem("formData");
    localStorage.setItem("formData", JSON.stringify(formData));

    // Animate button and redirect
    const button = form.querySelector("button");
    button.innerHTML = "Generating ID...";
    button.style.backgroundColor = "#444";
    button.disabled = true;

    setTimeout(() => {
      window.location.href = "page8.html";
    }, 1500);
  });

  // Load existing data if available
  function loadData() {
    const storedData = JSON.parse(localStorage.getItem("formData"));

    if (storedData) {
      document.getElementById("name").value = storedData.name || "";
      document.getElementById("class").value = storedData.class || "";
      document.getElementById("roll").value = storedData.roll || "";
      document.getElementById("dob").value = storedData.dob || "";
      if (storedData.gender) {
        const genderRadio = document.querySelector(`input[name='gender'][value='${storedData.gender}']`);
        if (genderRadio) genderRadio.checked = true;
      }
      document.getElementById("father").value = storedData.father || "";
      document.getElementById("phone").value = storedData.phone || "";
      document.getElementById("village").value = storedData.village || "";
      document.getElementById("post").value = storedData.post || "";
      document.getElementById("district").value = storedData.district || "";
      document.getElementById("pincode").value = storedData.pincode || "";
      document.getElementById("school-name").value = storedData.schoolName || "";
      document.getElementById("schoolType").value = storedData.schoolType || "";
      document.getElementById("session").value = storedData.session || "";
      document.getElementById("schoolPhone").value = storedData.schoolPhone || "";
      document.getElementById("schoolAddress").value = storedData.schoolAddress || "";

      if (storedData.photo) {
        preview.src = storedData.photo;
        preview.style.display = "block";
      }
    }
  }

  loadData();
});
