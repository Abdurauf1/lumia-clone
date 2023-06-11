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
navLinks.forEach(link => {
    goToSection(link);
});
goToSection(heroLink);
function goToSection(e) {
    e.addEventListener("click", (e) => {
        e.preventDefault();
        if (!e.target.getAttribute("href")) {
            return;
        }
        const id = e.target.getAttribute("href").slice(1);
        if (id.length < 1) {
            return;
        }
        const section = document.getElementById(id);
        const navWrapperHeight = navWrapper.getBoundingClientRect().height;
        let position = section.offsetTop - navWrapperHeight;
        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth",
        });
        if (window.innerWidth <= 991) {
            nav.classList.remove("nav-modal");
            openNav.classList.remove("display-none");
            closeNav.classList.remove("display-block");
        }
    });
}
// ***************** active nav links on scroll ***************** //
const sections = document.querySelectorAll("section");
window.onscroll = () => {
    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - navWrapper.clientHeight;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach((navLink) => {
                var _a;
                navLink.classList.remove("nav-link-active");
                (_a = document.querySelector("header nav ul li a[href*=" + id + "]")) === null || _a === void 0 ? void 0 : _a.classList.add("nav-link-active");
            });
        }
    });
};
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
