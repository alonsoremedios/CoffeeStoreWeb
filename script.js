const btnMenu = document.querySelector('#btn-menu');
const navMenu = document.querySelector('.nav-menu');

// 1. Abrir y cerrar con el botón intercambiando 'menu' y 'close'
btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        btnMenu.textContent = 'close';
    } else {
        btnMenu.textContent = 'menu';
    }
});

// 2. Cerrar al tocar fuera y restaurar el ícono a 'menu'
document.addEventListener('click', (event) => {
    const isMenuActive = navMenu.classList.contains('active');
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedOnButton = btnMenu.contains(event.target);

    if (isMenuActive && !clickedInsideMenu && !clickedOnButton) {
        navMenu.classList.remove('active');
        btnMenu.textContent = 'menu';
    }
});