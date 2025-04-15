// Form submission handling and data saving in localStorage
document.getElementById('idCardForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission from refreshing the page

  // Getting form values
  const name = document.getElementById('name').value;
  const studentClass = document.getElementById('class').value;
  const roll = document.getElementById('roll').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const father = document.getElementById('father').value;
  const phone = document.getElementById('phone').value;
  const village = document.getElementById('village').value;
  const post = document.getElementById('post').value;
  const district = document.getElementById('district').value;
  const pincode = document.getElementById('pincode').value;
  const session = document.getElementById('session').value;
  const schoolPhone = document.getElementById('schoolPhone').value;

  // Save form data to localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("class", studentClass);
  localStorage.setItem("roll", roll);
  localStorage.setItem("dob", dob);
  localStorage.setItem("gender", gender);
  localStorage.setItem("father", father);
  localStorage.setItem("phone", phone);
  localStorage.setItem("village", village);
  localStorage.setItem("post", post);
  localStorage.setItem("district", district);
  localStorage.setItem("pincode", pincode);
  localStorage.setItem("session", session);
  localStorage.setItem("schoolPhone", schoolPhone);

  // Redirect to page 8 for preview
  window.location.href = "page8.html";
});

// Photo upload handler
function handlePhotoUpload(event) {
  const photoFile = event.target.files[0];
  if (photoFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem("photo", e.target.result); // Save the photo to localStorage
      const photoPreview = document.getElementById('photoPreview');
      photoPreview.src = e.target.result; // Show the preview of the photo
      photoPreview.style.display = 'block'; // Ensure photo preview is visible
    };
    reader.readAsDataURL(photoFile); // Read the image as a DataURL
  }
}

// Add event listener for the file input (photo upload)
document.getElementById('photo').addEventListener('change', handlePhotoUpload);