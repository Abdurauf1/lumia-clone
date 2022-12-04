"use strict";
// responsive navbar
// variables
const nav = document.querySelector("nav");
const openNav = document.querySelector(".nav-open-btn");
const closeNav = document.querySelector(".close-nav-btn");
openNav.addEventListener("click", () => {
    nav.classList.add("nav-modal");
    closeNav.style.display = "block";
    openNav.style.display = "none";
});
closeNav.addEventListener("click", () => {
    nav.classList.remove("nav-modal");
    closeNav.style.display = "none";
    openNav.style.display = "block";
});
