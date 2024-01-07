// ***************** portfolio details js ***************** //
new Swiper('.portfolio-details-swiper', {
    speed: 400,
    loop: true,
    direction: "horizontal",
    slidesPerView: "auto",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});