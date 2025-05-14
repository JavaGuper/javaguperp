// script.js

// Asegurarse de que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {

    // ---- Navbar Shrink/Scroll Effect (Opcional) ----
    // const navbar = document.getElementById('main-nav');
    // if (navbar) {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 50) { // Cambia el 50 al punto de scroll donde quieras el efecto
    //             navbar.classList.add('navbar-scrolled');
    //         } else {
    //             navbar.classList.remove('navbar-scrolled');
    //         }
    //     });
    // }
    // ---- Fin Navbar Scroll Effect ----


    // ---- Actualizar año en el Footer ----
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    // ---- Fin Actualizar Año ----


    // ---- Cerrar el menú de navegación en móvil al hacer clic en un enlace ----
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Solo cerrar si el menú está desplegado (visible en móvil)
            if (navbarCollapse.classList.contains('show')) {
                const toggler = document.querySelector('.navbar-toggler');
                if (toggler) {
                     // Simular un clic en el botón toggler para cerrarlo
                     // Usar Bootstrap 5's JS API si es más robusto
                     const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                         toggle: false // No alternar, solo queremos poder cerrarlo
                     });
                     bsCollapse.hide();
                }
            }
        });
    });
    // ---- Fin Cerrar Menú Móvil ----

}); // Fin del DOMContentLoaded