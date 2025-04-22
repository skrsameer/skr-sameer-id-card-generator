document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about");
  if (aboutSection) {
    aboutSection.style.opacity = 0;
    setTimeout(() => {
      aboutSection.style.transition = "opacity 1s ease-in-out";
      aboutSection.style.opacity = 1;
    }, 100);
  }
});

function goBack() {
  window.location.href = "page4.html";
}