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
        top: targetElement.offsetTop - 80, // Ajusta este valor según el tamaño de tu header
        behavior: 'smooth'
      });
    }
  });
});

const sr = ScrollReveal({
  distance: '40px',
  duration: 2500,
  reset: true
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