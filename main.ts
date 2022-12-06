// responsive navbar
// variables
const nav = document.querySelector("nav") as HTMLElement;
const openNav = document.querySelector(".nav-open-btn") as HTMLButtonElement;
const closeNav = document.querySelector(".close-nav-btn") as HTMLButtonElement;

openNav.addEventListener("click", openNavFunc);

function openNavFunc() {
  nav.classList.add("nav-modal");
  closeNav.classList.add("display-block");
}

closeNav.addEventListener("click", closeNavFunc);

function closeNavFunc() {
  nav.classList.remove("nav-modal");
  closeNav.classList.remove("display-block");
}
