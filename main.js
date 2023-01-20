const menuHam = document.querySelector('.burgerMenu');
const mobileNav = document.querySelector('.mobile__nav');
const selecItem = document.querySelector('.selected');

menuHam.addEventListener('click', toggleMobileNav);
mobileNav.addEventListener('click', closedMobileMenu);

function toggleMobileNav() {
    mobileNav.classList.toggle('inactive');
}
function closedMobileMenu() {
    mobileNav.classList.toggle('inactive');
}