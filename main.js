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
const heroLink = document.querySelector(".header-btn");
// ***************** link to section ***************** //
navLinks.forEach((link) => {
    goToSection(link);
});
goToSection(heroLink);
function goToSection(e) {
    e.addEventListener("click", (e) => {
        var _a;
        e.preventDefault();
        const id = (_a = e.target.getAttribute("href")) === null || _a === void 0 ? void 0 : _a.slice(1);
        const section = document.getElementById(id);
        const navWrapperHeight = navWrapper.getBoundingClientRect().height;
        let position = (section === null || section === void 0 ? void 0 : section.offsetTop) - navWrapperHeight;
        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth",
        });
    });
}
// ***************** toggle drop down only in small screen sizes ***************** //
dropDownBtn.addEventListener("click", () => {
    dropDown.classList.toggle("toggle-drop-down");
});
deepDropDownBtn.addEventListener("click", () => {
    deepDropDown.classList.toggle("toggle-drop-down");
});
// ***************** open close navbar responsive ***************** //
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
