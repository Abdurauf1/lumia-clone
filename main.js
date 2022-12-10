"use strict";
// responsive navbar
const nav = document.querySelector("nav");
const openNav = document.querySelector(".nav-open-btn");
const closeNav = document.querySelector(".close-nav-btn");
const dropDown = document.querySelector("#dropDown");
const deepDropDown = document.querySelector("#deepDropDown");
const dropDownBtn = document.querySelector("#dropDownBtn");
const deepDropDownBtn = document.querySelector("#deepDropDownBtn");
const navLinks = document.querySelectorAll("nav ul li a");
const navWrapper = document.querySelector("header");
// *** link to section *** //
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const section = document.getElementById(id);
        const navWrapperHeight = navWrapper.getBoundingClientRect().height;
        let position = (section === null || section === void 0 ? void 0 : section.offsetTop) - navWrapperHeight;
        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth",
        });
    });
});
// *** toggle drop down only in small screen sizes *** //
const w = window.innerWidth;
if (w < 992) {
    dropDownBtn.addEventListener("click", () => {
        dropDown.classList.toggle("toggle-drop-down");
    });
    deepDropDownBtn.addEventListener("click", () => {
        deepDropDown.classList.toggle("toggle-drop-down");
    });
}
// *** open close navbar responsive *** //
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
