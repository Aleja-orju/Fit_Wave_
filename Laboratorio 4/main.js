document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-button");

    // Función para alternar el modo oscuro
    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode"); // Cambia el fondo y el color del texto principal
        document.querySelector("form").classList.toggle("dark-mode"); // Cambia el fondo del formulario
    };

    // Detectar cambio en el checkbox para activar/desactivar el modo oscuro
    toggleButton.addEventListener("change", toggleDarkMode);
});