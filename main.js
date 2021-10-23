const hamburgerIcon = document.querySelector('.header-right > a');

const hamburgerMenu = document.querySelector('.hamburger-menu');

const close = document.querySelector('.close');

        //  CLICK ON HAMBURGER-ICON
hamburgerIcon.addEventListener('click', function() {
    hamburgerMenu.classList.add('active');
}); 
        //  CLICK ON CLOSE
close.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
});