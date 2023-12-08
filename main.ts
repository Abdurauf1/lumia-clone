// responsive navbar
const nav = document.querySelector("nav") as HTMLElement;
const openNav = document.querySelector(".nav-open-btn") as HTMLButtonElement;
const closeNav = document.querySelector(".close-nav-btn") as HTMLButtonElement;
const dropDown = document.querySelector("#dropDown") as HTMLUListElement;
const deepDropDown = document.querySelector("#deepDropDown") as HTMLUListElement;
const dropDownBtn = document.querySelector("#dropDownBtn") as HTMLAnchorElement;
const deepDropDownBtn = document.querySelector("#deepDropDownBtn") as HTMLAnchorElement;
const navLinks = document.querySelectorAll("nav ul li a") as NodeListOf<HTMLAnchorElement>;
const navWrapper = document.querySelector("header") as HTMLHeadElement;
const heroLink = document.querySelector(".header-btn") as HTMLAnchorElement;

// ***************** link to section ***************** //
navLinks.forEach(link => {
  goToSection(link);
});

goToSection(heroLink);

function goToSection(e: any) {
  e.addEventListener("click", (e: any) => {
    e.preventDefault();
    if (!e.target.getAttribute("href")) {
      return;
    }
    const id: string = e.target.getAttribute("href").slice(1);
    if (id.length < 1) {
      return;
    }
    const section: any = document.getElementById(id);
    const navWrapperHeight: number = navWrapper.getBoundingClientRect().height;
    let position: number = section.offsetTop - navWrapperHeight;
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
const sections = document.querySelectorAll("section") as NodeListOf<HTMLElement>

window.onscroll = () => {
  sections.forEach(section => {
    const top: number = window.scrollY;
    const offset: number = section.offsetTop - navWrapper.clientHeight;
    const height: number = section.offsetHeight;
    const id: string | null = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((navLink: any) => {
        navLink.classList.remove("nav-link-active");
        document.querySelector("header nav ul li a[href*=" + id + "]")?.classList.add("nav-link-active")
      })
    }
  })
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
  dropDown.classList.remove("toggle-drop-down")
});

// ***************** fill skills progress bar ***************** //
window.onscroll = () => {
  const skillsSection = document.querySelector(".skills-wrapper") as HTMLDivElement;
  const progressBars = document.querySelectorAll(".progress-bar") as NodeListOf<HTMLDivElement>
  const scrolled: number = window.scrollY;
  const skillsSecTop: number = skillsSection.offsetTop;

  if (scrolled >= skillsSecTop) {
    progressBars[0].style.animationName = "fill-progress-bar"
  }
}

// HTML 100%
// CSS 90%
// JAVASCRIPT 75%
// PHP 80%
// WORDPRESS/CMS 90%
// PHOTOSHOP 55%

// window.addEventListener("scroll", () => {
//   const ourWorkSection = document.querySelector(".our-work-wrapper") as HTMLDivElement;
//   const scrolled: number = window.scrollY;
//   const ourWorkSecPos: number = ourWorkSection.offsetTop;

//   if (scrolled == ourWorkSecPos) {
//     for (let i = 0; i <= 6; i++) {
//       console.log(i);
//     }
//   }
// })