let introButton = document.getElementById('intro');
let navMenu = document.querySelector('nav ul');

introButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});