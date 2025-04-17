
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 20000,
    disableOnInteraction: false
  },
  speed: 2500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

const galerieSwiper = new Swiper("#galerie .mySwiper", {
  loop: true,
  autoplay: {
    delay: 12000,
    disableOnInteraction: false
  },
  speed: 2000,
  pagination: {
    el: "#galerie .swiper-pagination",
    clickable: true
  }
});
