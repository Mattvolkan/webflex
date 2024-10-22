let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
  });
});

// Desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Desplazamiento suave y actualización de la clase activa
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Remover la clase 'active' de todos los enlaces
    document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));

    // Añadir la clase 'active' al enlace clicado
    this.classList.add('active');

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajusta este valor según el tamaño de tu header
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

const sr = ScrollReveal({
  distance: '40px',
  duration: 2500,
  reset: true
});

// Animaciones para la sección de Servicios
sr.reveal('.section-title', { delay: 400, origin: 'top' });
sr.reveal('.servicio-card', { delay: 400, origin: 'bottom', interval: 200 });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animaciones para la sección de Galería
sr.reveal('.galeria .section-title', { delay: 400, origin: 'top' });
sr.reveal('.galeria-item', { delay: 400, origin: 'bottom', interval: 200 });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animaciones para la sección de Contacto
sr.reveal('.contacto .section-title', { delay: 400, origin: 'top' });
sr.reveal('.contacto-form', { delay: 400, origin: 'left' });
sr.reveal('.contacto-info', { delay: 400, origin: 'right' });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  alert('Gracias por tu mensaje. Te contactaremos pronto!');
  this.reset(); // Limpia el formulario después de enviarlo
});

// Botón de volver arriba
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
    scrollToTopButton.classList.remove('bounce');
  }
});

// Acción de volver arriba con animación suave
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset === 0) {
    scrollToTopButton.classList.add('bounce');
  }
});

sr.reveal('.logo', { delay: 150, origin: 'left' });
sr.reveal('.menu-btn', { delay: 520, origin: 'right' });
sr.reveal('.home-text', { delay: 600, origin: 'top' });
sr.reveal('.home-text p', { delay: 650, origin: 'left' });
sr.reveal('.home-text h1', { delay: 680, origin: 'left' });
sr.reveal('.main-btn', { delay: 610, origin: 'right' });
sr.reveal('.home-img', { delay: 600, origin: 'right' });
sr.reveal('.share p', { delay: 600, origin: 'right' });
sr.reveal('.social', { delay: 600, origin: 'left' });