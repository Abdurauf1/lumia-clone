// responsive navbar
const nav = document.querySelector("nav")
const openNav = document.querySelector(".nav-open-btn")
const closeNav = document.querySelector(".close-nav-btn")
const dropDown = document.querySelector("#dropDown")
const deepDropDown = document.querySelector("#deepDropDown")
const dropDownBtn = document.querySelector("#dropDownBtn")
const deepDropDownBtn = document.querySelector("#deepDropDownBtn")
const navLinks = document.querySelectorAll("nav ul li a")
const navWrapper = document.querySelector("header")
const heroLink = document.querySelector(".header-btn")

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
const sections = document.querySelectorAll("section")

function onScroll() {
  const top = window.scrollY;
  sections.forEach(section => {
    const offset = section.offsetTop - navWrapper.clientHeight;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("nav-link-active");
        document.querySelector("header div nav ul li a[href*=" + id + "]")?.classList.add("nav-link-active");
      })
    }
  })
}

window.addEventListener("scroll", onScroll)

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

// ***************** fill progress bar ***************** //
const progressBar = document.querySelectorAll(".progress-bar")

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
}

document.addEventListener("DOMContentLoaded", fillProgressBars);
document.addEventListener("scroll", fillProgressBars);


// ***************** count numbers animation ***************** //
const countableNumbers = document.querySelectorAll(".countable-number")

const animateValue = (htmlElement, start, end, duration) => {
  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const result = Math.floor(progress * (end - start) + start).toString();
    htmlElement.innerHTML = result;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

const countNumbers = () => {
  if (window.scrollY >= countableNumbers[0].offsetTop - 600) {
    animateValue(countableNumbers[0], 0, 232, 1600);
    animateValue(countableNumbers[1], 0, 521, 1600);
    animateValue(countableNumbers[2], 0, 1463, 1600);
    animateValue(countableNumbers[3], 0, 15, 1600);

    document.removeEventListener("scroll", countNumbers)
  }
}

document.addEventListener("scroll", countNumbers);

// ***************** testimonials ***************** //
const cardFilterButtons = document.querySelectorAll(".buttons-wrapper button")
const portfolioCardsWrapper = document.querySelector(".portfolio-cards-wrapper")

let portfolioIsotope = new Isotope(portfolioCardsWrapper, {
  itemSelector: ".portfolio-card-parent",
  layoutMode: "fitRows",
})

cardFilterButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault()
    cardFilterButtons.forEach(btn => {
      btn.classList.remove("card-btn-active")
    })
    btn.classList.add("card-btn-active")
    portfolioIsotope.arrange({
      filter: btn.getAttribute("data-filter")
    })
  })
})

// ***************** testimonials ***************** //
const testimonialsData = [
  {
    description: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.Accusantium quam, ultricies eget id, aliquam eget nibh et.Maecen aliquam, risus at semper.",
    img_src: "./assets/img/testimonials/testimonials-1.jpg",
    name: "Saul Goodman",
    job: "Ceo & Founder"
  },
  {
    description: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    img_src: "./assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Wilsson",
    job: "Designer"
  },
  {
    description: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    img_src: "./assets/img/testimonials/testimonials-3.jpg",
    name: "Jena Karlis",
    job: "Store Owner"
  },
  {
    description: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    img_src: "./assets/img/testimonials/testimonials-4.jpg",
    name: "Matt Brandon",
    job: "Freelancer"
  },
  {
    description: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    img_src: "./assets/img/testimonials/testimonials-5.jpg",
    name: "John Larson",
    job: "Entrepreneur"
  },
]

const cardWrapper = document.querySelector(".testimonial-cards");
cardWrapper.innerHTML = `
  ${testimonialsData.map((user) => {
  const { description, img_src, name, job } = user;

  return (
    `
    <div class="swiper-slide">
      <div class="testimonial-item bg-white overflow-hidden">
        <p class="fst-italic position-relative">
          <iconify-icon icon="mingcute:quote-left-fill"></iconify-icon>
          ${description}
          <iconify-icon icon="mingcute:quote-right-fill"></iconify-icon>
        </p>
        <img class="rounded-circle" src="${img_src}"
          alt="testimonial-img">
        <h3>${name}</h3>
        <h4>${job}</h4>
      </div>
    </div>
    `
  )
}).join("")}
`;

const swiper = new Swiper('.swiper', {
  speed: 600,
  loop: true,
  direction: "horizontal",
  slidesPerView: "auto",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: "bullets",
    clickable: true,
  },
});

// ***************** go up button ***************** //
const upBtn = document.querySelector(".up-btn");

document.addEventListener("scroll", () => window.scrollY > 100 ? upBtn?.classList.remove("up-btn-hidden") : upBtn?.classList.add("up-btn-hidden")
)

upBtn?.addEventListener("click", () => window.scrollTo(0, 0))