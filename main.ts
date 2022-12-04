// responsive navbar
// variables
const nav = document.querySelector("nav") as HTMLElement;
const openNav = document.querySelector(".nav-open-btn") as HTMLButtonElement;
const closeNav = document.querySelector(".close-nav-btn") as HTMLButtonElement;

openNav.addEventListener("click", () => {
  nav.classList.add("nav-modal");
  closeNav.style.display = "block";
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("nav-modal");
  closeNav.style.display = "none";
});
