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