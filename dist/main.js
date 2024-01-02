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
function onScroll() {
    const top = window.scrollY;
    sections.forEach(section => {
        const offset = section.offsetTop - navWrapper.clientHeight;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach((navLink) => {
                var _a;
                navLink.classList.remove("nav-link-active");
                (_a = document.querySelector("header div nav ul li a[href*=" + id + "]")) === null || _a === void 0 ? void 0 : _a.classList.add("nav-link-active");
            });
        }
    });
}
window.addEventListener("scroll", onScroll);
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
    dropDown.classList.remove("toggle-drop-down");
});
// ***************** fill progress bar ***************** //
const progressBar = document.querySelectorAll(".progress-bar");
const fillProgressBars = () => {
    const top = window.scrollY;
    if (top >= progressBar[0].offsetTop - 400) {
        progressBar[0].style.animationName = "html-progress-bar";
        progressBar[1].style.animationName = "css-progress-bar";
        progressBar[2].style.animationName = "js-progress-bar";
        progressBar[3].style.animationName = "php-progress-bar";
        progressBar[4].style.animationName = "cms-progress-bar";
        progressBar[5].style.animationName = "ps-progress-bar";
    }
};
document.addEventListener("DOMContentLoaded", fillProgressBars);
document.addEventListener("scroll", fillProgressBars);
// ***************** count numbers animation ***************** //
const countableNumbers = document.querySelectorAll(".countable-number");
const animateValue = (htmlElement, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp)
            startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const result = Math.floor(progress * (end - start) + start).toString();
        htmlElement.innerHTML = result;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};
const countNumbers = () => {
    if (window.scrollY >= countableNumbers[0].offsetTop - 600) {
        animateValue(countableNumbers[0], 0, 232, 1600);
        animateValue(countableNumbers[1], 0, 521, 1600);
        animateValue(countableNumbers[2], 0, 1463, 1600);
        animateValue(countableNumbers[3], 0, 15, 1600);
        document.removeEventListener("scroll", countNumbers);
    }
};
document.addEventListener("scroll", countNumbers);
// ***************** card filters ***************** //
const cardFilterButtons = document.querySelectorAll(".buttons-wrapper button");
const portfolioCards = document.querySelectorAll(".portfolio-card-parent");
for (let i = 1; i < cardFilterButtons.length; i++) {
    cardFilterButtons[i].addEventListener("click", filterImg);
}
function setActiveBtn(e) {
    const currentTarget = e.target;
    cardFilterButtons.forEach(btn => {
        btn.classList.remove("card-btn-active");
    });
    currentTarget.classList.add("card-btn-active");
}
function filterImg(e) {
    const currentTarget = e.target;
    setActiveBtn(e);
    portfolioCards.forEach((card) => {
        card.classList.remove("hide-card");
        card.classList.add("show-card");
        const imgType = card.dataset.name;
        const btnType = currentTarget.dataset.name;
        if (imgType !== btnType) {
            card.classList.remove("show-card");
            card.classList.add("hide-card");
        }
    });
}
cardFilterButtons[0].addEventListener("click", (e) => {
    setActiveBtn(e);
    portfolioCards.forEach((card) => {
        card.classList.remove("hide-card");
        card.classList.add("show-card");
    });
});
// ***************** go up button ***************** //
const upBtn = document.querySelector(".up-btn");
document.addEventListener("scroll", () => window.scrollY > 100 ? upBtn === null || upBtn === void 0 ? void 0 : upBtn.classList.remove("up-btn-hidden") : upBtn === null || upBtn === void 0 ? void 0 : upBtn.classList.add("up-btn-hidden"));
upBtn === null || upBtn === void 0 ? void 0 : upBtn.addEventListener("click", () => window.scrollTo(0, 0));
