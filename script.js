document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header-menu-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");   // animate lines
    menu.classList.toggle("active");      // slide menu
  });
});
