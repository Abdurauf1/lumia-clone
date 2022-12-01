// responsive navbar
// variables
var nav = document.querySelector("nav");
var openNav = document.querySelector(".nav-open-btn");
var closeNav = document.querySelector(".close-nav-btn");
openNav.addEventListener("click", function () {
    nav.classList.add("nav-modal");
});
closeNav.addEventListener("click", function () {
    nav.classList.remove("nav-modal");
});
