<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Cabinet Médical Medi-Steyls</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
  <link rel="icon" href="images/favicon.png" type="image/png" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

  <style>
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(to bottom, #002f5f, #00bcd4);
      color: #fff;
    }
    a { color: inherit; text-decoration: none; }

    /* Top Bar */
    .top-bar {
      position: fixed;
      top: 0;
      width: 100%;
      background: #f7f7f7;
      color: #002f5f;
      font-size: 0.9rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1.5rem;
      border-bottom: 1px solid #ddd;
      z-index: 1000;
      flex-wrap: wrap;
    }
    .top-bar .left, .top-bar .right {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .logo-top {
      height: 40px;
      margin-right: 0.8rem;
    }
    .top-bar i { margin-right: 0.4rem; color: #0077a3; }
    .social-icons a { color: #0077a3; margin-left: 0.4rem; font-size: 1.1rem; }
    .lang-select img { height: 20px; }
    .lang-select select {
      border: none;
      background: transparent;
      font-weight: bold;
      color: #002f5f;
    }

    /* Sidebar */
    .sidebar {
      position: fixed;
      top: 60px;
      left: 0;
      width: 220px;
      height: calc(100% - 60px);
      background: #f5f9fc;
      padding: 2rem 1rem;
      border-right: 1px solid #ccc;
      text-align: center;
    }
    .sidebar img {
      height: 80px;
      margin-bottom: 1rem;
    }
    .sidebar h2 {
      color: #002f5f;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    .sidebar nav ul {
      list-style: none;
      padding: 0;
    }
    .sidebar nav ul li {
      margin: 1rem 0;
    }
    .sidebar nav ul li a {
      color: #002f5f;
      font-weight: 500;
      transition: color 0.3s;
    }
    .sidebar nav ul li a:hover, .sidebar nav ul li a.active {
      color: #00bcd4;
    }

    /* Main Content */
    main {
      margin-left: 240px;
      padding: 6rem 2rem 2rem;
    }
    section {
      margin-bottom: 4rem;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    .video-block iframe {
      width: 100%;
      max-width: 900px;
      height: 500px;
      border-radius: 10px;
      border: none;
    }
    .intro-text {
      max-width: 700px;
      margin: 1rem auto;
    }

    .services-grid, .team-container, .info-boxes {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
    .card, .member, .info-box {
      background: #fff;
      color: #002f5f;
      border-radius: 10px;
      width: 250px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      padding-bottom: 1rem;
      transition: transform 0.3s ease;
    }
    .card img, .member img {
      width: 100%;
      height: 160px;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }
    .card:hover, .member:hover {
      transform: scale(1.03);
    }

    /* Swiper Gallery */
    .swiper {
      width: 90%;
      margin: auto;
      overflow: hidden;
    }
    .swiper-slide img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }

    /* Map & Infos */
    .map-container iframe {
      width: 100%;
      height: 300px;
      border: none;
      border-radius: 10px;
    }

    /* Footer */
    footer {
      background: linear-gradient(to right, #002f5f, #0077a3);
      color: white;
      text-align: center;
      padding: 2rem 1rem;
      font-size: 0.9rem;
    }

    /* Menu burger */
    .burger {
      display: none;
      font-size: 1.8rem;
      cursor: pointer;
      margin-left: auto;
      color: #002f5f;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .burger { display: block; }

      .sidebar {
        display: none;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: #f5f9fc;
        z-index: 999;
        padding: 2rem 1rem;
        border-top: 1px solid #ccc;
      }

      .sidebar.active {
        display: block;
      }

      main {
        margin-left: 0;
        padding-top: 8rem;
      }
    }
  </style>
</head>

<body>
  <!-- Barre supérieure -->
  <div class="top-bar">
    <div class="left">
      <a href="#presentation"><img src="images/logo.png" class="logo-top" alt="Logo" /></a>
      <span><i class="fas fa-clock"></i> 7h à 18h</span>
      <span><i class="fas fa-envelope"></i> <a href="mailto:contact@medi-steyls.com">contact@medi-steyls.com</a></span>
      <span><i class="fas fa-phone"></i> <a href="tel:+3222034035">0032 2 203 40 35</a></span>
      <span class="social-icons">
        <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
      </span>
    </div>
    <div class="right lang-select">
      <img src="https://flagcdn.com/w40/be.png" alt="BE" />
      <select onchange="alert('Langue changée à : ' + this.value)">
        <option value="fr" selected>FR</option>
        <option value="nl">NL</option>
        <option value="de">DE</option>
        <option value="en">EN</option>
      </select>
    </div>
    <div class="burger" onclick="toggleMenu()">☰</div>
  </div>

  <!-- Sidebar -->
  <aside class="sidebar">
    <img src="images/logo.png" alt="Logo Medi-Steyls" />
    <h2>Cabinet Médical<br />Medi-Steyls</h2>
    <nav>
      <ul>
        <li><a href="#presentation">Accueil</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#infos">Infos</a></li>
        <li><a href="#gallery">Galerie</a></li>
        <li><a href="#team">Équipe</a></li>
        <li><a href="https://rosa.be/fr/" target="_blank">Prendre RDV</a></li>
      </ul>
    </nav>
  </aside>

  <!-- Contenu -->
  <main>
    <section id="presentation">
      <div class="video-block">
        <iframe src="https://www.youtube.com/embed/TYidJqx1MR4" allowfullscreen></iframe>
        <h2>Bienvenue au Cabinet Médical Medi-Steyls</h2>
        <p class="intro-text">Votre santé, notre priorité. Découvrez une équipe médicale professionnelle, bienveillante et à votre écoute.</p>
      </div>
    </section>

    <section id="services">
      <h2>Nos Services</h2>
      <div class="services-grid">
        <div class="card"><img src="images/cabinet1.jpg" alt="Consultations"><h3>Consultations Générales</h3></div>
        <div class="card"><img src="images/cabinet2.jpg" alt="Examens"><h3>Examens Médicaux</h3></div>
        <div class="card"><img src="images/cabinet3.jpg" alt="Sang"><h3>Prises de Sang</h3></div>
        <div class="card"><img src="images/cabinet1.jpg" alt="Spécialistes"><h3>Consultations Spécialisées</h3></div>
      </div>
    </section>

    <section id="team">
      <h2>Notre Équipe</h2>
      <div class="team-container">
        <div class="member"><img src="images/ndzana.jpeg" alt="Dr NDZANA"><h3>Dr Théodore NDZANA</h3><span>Médecin Généraliste</span></div>
        <div class="member"><img src="images/doctor1.jpg" alt="Dr Papi"><h3>Dr Papi</h3><span>Cardiologue</span></div>
        <div class="member"><img src="images/doctor2.jpg" alt="Dr Mami"><h3>Dr Mami</h3><span>Dermatologue</span></div>
      </div>
    </section>

    <section id="gallery">
      <h2>Galerie Photos</h2>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="images/cabinet1.jpg" alt="cabinet 1"></div>
          <div class="swiper-slide"><img src="images/cabinet2.jpg" alt="cabinet 2"></div>
          <div class="swiper-slide"><img src="images/cabinet3.jpg" alt="cabinet 3"></div>
          <div class="swiper-slide"><img src="images/cabinet1.jpg" alt="cabinet 4"></div>
        </div>
      </div>
    </section>

    <section id="infos">
      <h2>Horaires & Accessibilité</h2>
      <div class="info-boxes">
        <div class="info-box">
          <h3>Horaires</h3>
          <p>Lundi - Vendredi : 08h30 - 18h30</p>
          <p>Samedi : 09h00 - 13h00</p>
          <p>Dimanche : Fermé</p>
        </div>
        <div class="info-box">
          <h3>Accès</h3>
          <p>Bus 47, Tram 3 - Arrêt "Heembeek"</p>
          <p>Parking public gratuit</p>
          <p>Accès personnes à mobilité réduite</p>
        </div>
      </div>
      <div class="map-container">
        <iframe src="https://www.google.com/maps?q=Rue+de+l'Émancipation+15,+Bruxelles&output=embed" allowfullscreen loading="lazy"></iframe>
      </div>
    </section>
  </main>

  <footer>
    <p><i class="fas fa-phone"></i> <a href="tel:+3222034035">0032 2 203 40 35</a> |
    <i class="fas fa-map-marker-alt"></i> <a href="https://maps.google.com?q=Rue+de+l'Émancipation+15,+Bruxelles" target="_blank">Rue de l'Émancipation 15, Bruxelles</a></p>
    <p>&copy; 2025 Medi-Steyls – Tous droits réservés</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script>
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      speed: 4000,
      slidesPerView: 'auto',
      spaceBetween: 20,
      allowTouchMove: true
    });

    const toggleMenu = () => {
      document.querySelector('.sidebar').classList.toggle('active');
    };
  </script>
</body>
</html>
