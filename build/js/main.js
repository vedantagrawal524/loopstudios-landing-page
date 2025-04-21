const body = document.getElementById('page');
const hamburger_button = document.querySelector('#hamburger-button');
const open_menu = document.querySelector('#open-menu');
const close_menu = document.querySelector('#close-menu');
const mobile_menu = document.querySelector('#mobile-menu');

hamburger_button.addEventListener('click', () => {
    open_menu.classList.toggle('hidden');
    close_menu.classList.toggle('hidden');
    mobile_menu.classList.toggle('translate-x-full');
    body.classList.toggle('overflow-hidden');
});

document.getElementById('year').textContent = new Date().getFullYear();