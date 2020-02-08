const sqbutton = document.querySelector(".squish");

sqbutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}
