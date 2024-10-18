let introButton = document.getElementById('menu-icon');
let navMenu = document.querySelector('nav ul');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open')
}

introButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

const sr = ScrollReveal ({
  distance: '40px',
  duration: 2500,
  reset: true
});

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.menu-btn',{delay:520, origin: 'right'});
sr.reveal('.home-text',{delay:600, origin: 'top'});
sr.reveal('.home-text p',{delay:650, origin: 'left'});
sr.reveal('.home-text h1',{delay:680, origin: 'left'});
sr.reveal('.main-btn',{delay:610, origin: 'right'});
sr.reveal('.share p',{delay:600, origin: 'right'});
sr.reveal('.social',{delay:600, origin: 'left'});