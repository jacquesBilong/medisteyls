window.addEventListener('scroll', ()=>{
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelector('.menu-btn').onclick=()=>{
  document.querySelector('.menu').classList.toggle('active');
};

let carousel=document.querySelector('.carousel-track');
setInterval(()=>{
  carousel.appendChild(carousel.firstElementChild);
},4000);
