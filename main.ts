// responsive navbar
const nav = document.querySelector("nav") as HTMLElement;
const openNav = document.querySelector(".nav-open-btn") as HTMLButtonElement;
const closeNav = document.querySelector(".close-nav-btn") as HTMLButtonElement;
const dropDown = document.querySelector("#dropDown") as HTMLUListElement;
const deepDropDown = document.querySelector("#deepDropDown") as HTMLUListElement;
const dropDownBtn = document.querySelector("#dropDownBtn") as HTMLAnchorElement;
const deepDropDownBtn = document.querySelector("#deepDropDownBtn") as HTMLAnchorElement;

dropDownBtn.addEventListener("click", () => {
  dropDown.classList.toggle("toggle-drop-down");
});

deepDropDownBtn.addEventListener("click", () => {
  deepDropDown.classList.toggle("toggle-drop-down");
});

openNav.addEventListener("click", () => {
  nav.classList.add("nav-modal");
  openNav.classList.add("display-none");
  closeNav.classList.add("display-block");
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("nav-modal");
  openNav.classList.remove("display-none");
  closeNav.classList.remove("display-block");
});
