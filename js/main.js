// DOM Elements
const hamburger_button = document.querySelectorAll('.hamburger-button');
const mobile_menu = document.querySelector('#mobile-menu');
const menu_links = document.querySelectorAll('.menu-links');

document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger-Button - Open/Close
hamburger_button.forEach((button)=>{
     button.addEventListener('click', () => {
         mobile_menu.classList.toggle('translate-x-full');
     });
})

// Menu-links - Click (Close menu when clicked & goes to link-location)
menu_links.forEach((menuLink) => {
     menuLink.addEventListener('click', (e) => {
          mobile_menu.classList.toggle('translate-x-full');
      });
 });
 
 // Escape key - keydown (Close menu with escape Key)
 document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobile_menu.classList.contains('translate-x-full')) {
         mobile_menu.classList.toggle('translate-x-full');
      }
 });





