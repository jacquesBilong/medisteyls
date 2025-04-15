// Swiper init
const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 1200
  });
  
  // Scroll to top
  const scrollTopBtn = document.querySelector(".scroll-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  