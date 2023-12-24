const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

var pointer = document.documentElement;
pointer.addEventListener("mousemove", m => {
    pointer.style.setProperty("--X", m.clientX + "px");
    pointer.style.setProperty("--y", m.clientY + "px");
 });

//$('.collapse').collapse();