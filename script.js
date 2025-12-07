document.addEventListener('DOMContentLoaded', () => {
    // Busca los elementos del menú y el toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileDropdown = document.getElementById('mobile-dropdown');

    if (menuToggle && mobileDropdown) {
        menuToggle.addEventListener('click', () => {
            // Alterna la clase 'active' para mostrar/ocultar el menú
            mobileDropdown.classList.toggle('active');
            
            // Lógica para cambiar el icono (fa-bars <-> fa-times)
            const icon = menuToggle.querySelector('.fas');
            if (mobileDropdown.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Icono de cierre (X)
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Icono de hamburguesa
            }
        });
    }
});