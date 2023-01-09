// card products
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('#navbar ul');
// const list = document.querySelector('#navbar li');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
  // list.classList.toggle('slide');
});
