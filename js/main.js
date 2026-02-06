document.addEventListener('DOMContentLoaded', function(){
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    toggle.addEventListener('click', function(){
        toggle.classList.toggle('active'); // icon switch between hamburger and close-icon
        nav.classList.toggle('open'); // showing and hiding nav menu
    })

})

