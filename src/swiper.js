const swiper = new Swiper('.swiper', {
    loop: true,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 100,
    autoplay: {
        delay: 4000
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}); 