
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


document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".mobile-nav");
  const links = document.querySelectorAll(".mobile-nav a");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});

  }
});
