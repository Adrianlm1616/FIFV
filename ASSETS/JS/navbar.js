document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    // Activar/desactivar el menú de navegación cuando se hace clic en el ícono hamburguesa
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
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

    const users = {
        "Orlando Sanchez": { name: "Orlando Sanchez", photo: "orlando.jpg", id: 1 },
        "Adrian Lara": { name: "Adrian Lara", photo: "adrian.jpg", id: 2 },
        "Juan Muñoz": { name: "Juan Muñoz", photo: "juan.jpg", id: 3 },
        "Daniel Fandiño": { name: "Daniel Fandiño", photo: "daniel.jpg", id: 4 },
        "Jorge Castro": { name: "Jorge Castro", photo: "jorge.jpg", id: 5 },
        "Camilo Paez": { name: "Camilo Paez", photo: "camilo.jpg", id: 6 },
        "Carlos Ortega": { name: "Carlos Ortega", photo: "carlos.jpg", id: 7 },
        "Harold Gomez": { name: "Harold Gomez", photo: "harold.jpg", id: 8 }
    };

   export let id-tecnico;

    switch (users.id){
        case 1:
            id-tecnico=1;
        break;
        case 2:
            id-tecnico=2;
        break;
        case 3:
            id-tecnico=3;
        break;
        case 4:
            id-tecnico=4;
        break;
        case 5:
            id-tecnico=5;
        break;
        case 6:
            id-tecnico=6;
        break;
        case 7:
            id-tecnico=7;
        break;
        case 8:
            id-tecnico=8;
        break;
        case 0:
            console.log("sin variables")
        break;
    }

    // Verificamos si las credenciales son correctas
    if (users[username] && password === "admin1234") {
        // Si son correctas, guardamos el usuario y su id en el localStorage
        const user = users[username];
        localStorage.setItem("loggedUser", JSON.stringify(user));
        showLoggedInUser(user);

        // Guardamos el id del usuario para el filtrado en liga.js
        localStorage.setItem("userId", user.id);

        document.getElementById("login-form").style.display = "none";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Mostrar la información del usuario logueado
function showLoggedInUser(user) {
    const loginSidebar = document.getElementById("login-sidebar");
    loginSidebar.innerHTML = `
        <div class="login-content">
            <img src="images/${user.photo}" alt="Foto de perfil" width="100px">
            <h3>Bienvenido, ${user.name}</h3>
            <button onclick="verPerfil()">Ver Perfil</button>
            <button onclick="verCalendario()">Ver Calendario</button>
            <button onclick="verTorneos()">Ver Torneos</button>
            <button onclick="cerrarSesion()">Cerrar Sesión</button>
        </div>
    `;
    // Mostrar la barra lateral de inicio de sesión
    document.getElementById("login-sidebar").classList.add("active");
}

// Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("userId");  // Eliminamos también el ID del usuario
    document.getElementById("login-sidebar").style.display = "none";
}

// Función para redirigir a la página de perfil
function verPerfil() {
    window.location.href = "perfil.html";
}

// Función para redirigir al calendario
function verCalendario() {
    window.location.href = "/FIFV/HTML/CALENDARIO/calendario-jugador.html";
}

// Función para redirigir a los torneos
function verTorneos() {
    window.location.href = "torneos.html";
}