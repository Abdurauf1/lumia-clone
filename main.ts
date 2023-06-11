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
});
