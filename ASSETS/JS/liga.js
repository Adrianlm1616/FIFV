// Verificar si hay datos almacenados en localStorage
const equipos = JSON.parse(localStorage.getItem('equipos')) || [
    { equipo: "Arsenal", tecnico: "Adrian Lara", partidos: 3, victorias: 4, empates: 1, derrotas: 0, golesFavor: 17, golesContra: 3 },
    { equipo: "Atl. Madrid", tecnico: "Jorge Castro", partidos: 4, victorias: 1, empates: 1, derrotas: 2, golesFavor: 6, golesContra: 7 },
    { equipo: "Bayern Munich", tecnico: "Carlos Ortega", partidos: 5, victorias: 4, empates: 0, derrotas: 1, golesFavor: 13, golesContra: 7 },
    { equipo: "Real Madrid", tecnico: "Sebastian Flaco", partidos: 3, victorias: 0, empates: 0, derrotas: 3, golesFavor: 1, golesContra: 6 },
    { equipo: "Liverpool", tecnico: "Camilo Paez", partidos: 3, victorias: 2, empates: 1, derrotas: 0, golesFavor: 6, golesContra: 1 },
    { equipo: "Man. City", tecnico: "Tovar", partidos: 2, victorias: 0, empates: 1, derrotas: 1, golesFavor: 0, golesContra: 9 },
    { equipo: "PSG", tecnico: "Daniel Fandiño", partidos: 4, victorias: 1, empates: 0, derrotas: 3, golesFavor: 2, golesContra: 12 },
];

// Calcular puntos y diferencia de gol
function calcularPuntosYDiferenciaDeGol() {
    equipos.forEach(equipo => {
        equipo.diferenciaGol = equipo.golesFavor - equipo.golesContra;
        equipo.puntos = equipo.victorias * 3 + equipo.empates; // 3 puntos por victoria y 1 por empate
    });
}

// Ordenar equipos según puntos, diferencia de gol, y nombre
function ordenarEquipos() {
    equipos.sort((a, b) => {
        if (b.puntos !== a.puntos) {
            return b.puntos - a.puntos;
        } else if (b.diferenciaGol !== a.diferenciaGol) {
            return b.diferenciaGol - a.diferenciaGol;
        } else {
            return a.equipo.localeCompare(b.equipo); // Orden alfabético si hay empate en puntos y diferencia de gol
        }
    });
}

// Mostrar la tabla en el HTML
function mostrarTabla() {
    const tablaPosiciones = document.getElementById("tabla-posiciones");
    tablaPosiciones.innerHTML = ""; // Limpiar tabla

    calcularPuntosYDiferenciaDeGol();
    ordenarEquipos();

    equipos.forEach((equipo, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${equipo.equipo}</td>
            <td>${equipo.tecnico}</td>
            <td>${equipo.partidos}</td>
            <td>${equipo.victorias}</td>
            <td>${equipo.empates}</td>
            <td>${equipo.derrotas}</td>
            <td>${equipo.golesFavor}</td>
            <td>${equipo.golesContra}</td>
            <td>${equipo.diferenciaGol}</td>
            <td>${equipo.puntos}</td>
        `;
        tablaPosiciones.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", mostrarTabla);

// Función para reiniciar la tabla a cero
function reiniciarTabla() {
    // Recorre todos los equipos y pone sus estadísticas a cero
    equipos.forEach(equipo => {
        equipo.victorias = 0;
        equipo.empates = 0;
        equipo.derrotas = 0;
        equipo.golesFavor = 0;
        equipo.golesContra = 0;
        equipo.diferenciaGol = 0;
        equipo.puntos = 0;
        equipo.partidos = 0; // Reinicia los partidos jugados a 0
    });

    // Guardamos los equipos actualizados con las estadísticas en cero en localStorage
    localStorage.setItem('equipos', JSON.stringify(equipos));

    // Muestra un mensaje de éxito
    alert("La tabla ha sido reiniciada.");
    
    // Actualiza la tabla en la página
    mostrarTabla();
}

// Añadir un evento al botón "Reiniciar tabla"
document.getElementById('reiniciar-tabla').addEventListener('click', reiniciarTabla);

// Función para actualizar estadísticas cuando se envía el formulario
document.getElementById('form-config').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar la recarga de la página

    const equipoSeleccionado = document.getElementById('equipo').value;
    const partidos = parseInt(document.getElementById('partidos').value);  // Número de partidos jugados
    const victorias = parseInt(document.getElementById('victorias').value);
    const empates = parseInt(document.getElementById('empates').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);
    const golesFavor = parseInt(document.getElementById('golesFavor').value);
    const golesContra = parseInt(document.getElementById('golesContra').value);

    // Buscar el equipo en la lista y actualizar sus estadísticas
    const equipo = equipos.find(e => e.equipo === equipoSeleccionado);
    if (equipo) {
        // Sumar las nuevas estadísticas a las existentes
        equipo.partidos += partidos; // Sumar partidos jugados
        equipo.victorias += victorias;
        equipo.empates += empates;
        equipo.derrotas += derrotas;
        equipo.golesFavor += golesFavor;
        equipo.golesContra += golesContra;
    }

    // Guardar la nueva información en localStorage
    localStorage.setItem('equipos', JSON.stringify(equipos));

    alert("Estadísticas actualizadas con éxito");

    // Actualiza la tabla de posiciones en la página
    mostrarTabla();
});