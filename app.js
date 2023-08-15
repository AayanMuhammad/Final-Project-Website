const menu = document.querySelector(".menu");
const items = document.querySelector(".navbar ul");

function toggleMenu() {
  items.classList.toggle("up");
}

menu.addEventListener("click", toggleMenu);