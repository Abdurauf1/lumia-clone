// responsive navbar
const nav = document.querySelector("nav") as HTMLElement;
const openNav = document.querySelector(".nav-open-btn") as HTMLButtonElement;
const closeNav = document.querySelector(".close-nav-btn") as HTMLButtonElement;
const dropDown = document.querySelector("#dropDown") as HTMLUListElement;
const deepDropDown = document.querySelector("#deepDropDown") as HTMLUListElement;
const dropDownBtn = document.querySelector("#dropDownBtn") as HTMLAnchorElement;
const deepDropDownBtn = document.querySelector("#deepDropDownBtn") as HTMLAnchorElement;
const navLinks = document.querySelectorAll("nav ul li a");
const navWrapper = document.querySelector("header") as HTMLHeadElement;
const heroLink = document.querySelector(".header-btn") as HTMLAnchorElement;

// *** link to section *** //
navLinks.forEach((link) => {
  goToSection(link);
});

goToSection(heroLink);

function goToSection(e: any) {
  e.addEventListener("click", (e: any) => {
    e.preventDefault();
    const id: string = e.target.getAttribute("href").slice(1);
    const section: any = document.getElementById(id);
    const navWrapperHeight: number = navWrapper.getBoundingClientRect().height;
    let position: number = section.offsetTop - navWrapperHeight;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
}

// *** toggle drop down only in small screen sizes *** //
dropDownBtn.addEventListener("click", () => {
  dropDown.classList.toggle("toggle-drop-down");
});
deepDropDownBtn.addEventListener("click", () => {
  deepDropDown.classList.toggle("toggle-drop-down");
});

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
