// JavaScript para alternar la clase "active" de la barra de navegación
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('.menu-icon');

    // Activar el menú de navegación cuando se hace clic en el ícono hamburguesa
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

// Función para abrir/cerrar la barra lateral
function toggleLogin() {
    document.getElementById("login-sidebar").classList.toggle("active");
}

// Validación de inicio de sesión
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificamos si las credenciales son correctas
    if (username === "Adrian" && password === "Adrian1616.") {
        // Si son correctas, mostramos el mensaje de bienvenida
        document.getElementById("admin-welcome").style.display = "block";
        document.getElementById("login-form").style.display = "none";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Función para configurar torneos
function configurarTorneos() {
    alert("Redirigiendo a la página de configuración de torneos.");
    // Aquí puedes redirigir a la página de configuración del torneo
    window.location.href = "mods.html"; // O la URL que elijas
}
