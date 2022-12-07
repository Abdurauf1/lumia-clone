"use strict";
// responsive navbar
const nav = document.querySelector("nav");
const openNav = document.querySelector(".nav-open-btn");
const closeNav = document.querySelector(".close-nav-btn");
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
