document.addEventListenr ('DOMContentLoaded', function () {
    const toggle = document.querySelector('menu-toggle');
    const menu = document.querySelector('nav');

    toggle.addEventListener('click', function (){
        menu.classList.toggle('show');
    })
})