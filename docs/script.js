document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav__list');

    burger.addEventListener('click', () => {
        const isOpen = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!isOpen));
        navList.classList.toggle('active');
        burger.innerHTML = isOpen ? '&#9776;' : '&times;';
    });

    document.querySelectorAll('.nav__list a').forEach(link => {
        link.addEventListener('click', () => {
            burger.setAttribute('aria-expanded', 'false');
            navList.classList.remove('active');
            burger.innerHTML = '&#9776;';
        });
    });
});
