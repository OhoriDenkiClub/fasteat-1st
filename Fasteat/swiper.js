const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    breakpoints: {
        800: {
            slidesPerView: 3
        }
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,

    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
    }
});