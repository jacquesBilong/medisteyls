
document.addEventListener("DOMContentLoaded", function () {
  // Effet clic sur les boutons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 300);
    });
  });

  // Animation images galerie
  const galleryImages = document.querySelectorAll("#galerie img");
  galleryImages.forEach(img => {
    img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.05)";
      img.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "none";
    });
  });

  // Défilement doux
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });
});
