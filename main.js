"use strict";
// responsive navbar
const nav = document.querySelector("nav");
const openNav = document.querySelector(".nav-open-btn");
const closeNav = document.querySelector(".close-nav-btn");
const dropDown = document.querySelector("#dropDown");
const deepDropDown = document.querySelector("#deepDropDown");
const dropDownBtn = document.querySelector("#dropDownBtn");
const deepDropDownBtn = document.querySelector("#deepDropDownBtn");
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
