/* =========================================
   SCROLL PROGRESS BAR
   ========================================= */
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById('scroll-progress').style.width = progress + '%';
});


/* =========================================
   NAVBAR SCROLLED STATE
   ========================================= */
const navbar = document.getElementById('main-navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* =========================================
   INTERSECTION OBSERVER — ALWAYS ON
   Animasi replay setiap kali elemen masuk/keluar viewport
   ========================================= */
const animSelectors = [
  '.anim-fade-up',
  '.anim-fade-left',
  '.anim-fade-right',
  '.anim-zoom-in',
  '.anim-fade',
].join(', ');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim-visible');
    } else {
      entry.target.classList.remove('anim-visible');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
});

document.querySelectorAll(animSelectors).forEach(el => {
  observer.observe(el);
});