document.addEventListener("DOMContentLoaded", function () {
  const animElement = document.querySelector(".anim");
  const vElement = document.querySelector(".v");

  animElement.addEventListener("click", function () {
    vElement.style.display = vElement.style.display === "none" ? "block" : "none";
  });
});
