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