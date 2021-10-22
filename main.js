const hamburgerIcon = document.querySelector('.header-right > a');
hamburgerIcon.classList.add('hamburger-icon')
const hamburgerMenu = document.querySelector('.hamburger-menu');
const close = document.querySelector('.close');

hamburgerIcon.addEventListener('click', function() {
    hamburgerMenu.classList.add('active');
}); 

close.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
});