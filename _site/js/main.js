document.addEventListener ('DOMContentLoaded', function () {
    const toggle = document.querySelector('menu-toggle');
    const menu = document.querySelector('nav');

    toggle.addEventListener('click', function (){
        menu.classList.toggle('show');

        const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
        toggle.setAttribute ('aria-expanded', !expanded);
    })
})