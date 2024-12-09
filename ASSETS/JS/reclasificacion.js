import { partidos, equipos } from '/FIFV/ASSETS/JS/liga.js';

const tecnicos = {
  'Arsenal': 'Adrian Lara',
    'Liverpool': 'Camilo Paez',
    'Bayern Munich': 'Carlos Ortega',
    'Atlético Madrid': 'Juan Muñoz',
    'Chelsea': 'Juanfe Torres',
    'Man. City': 'Jorge Castro',
    'PSG': 'Daniel Fandiño',
    'Barcelona': 'Por definir'
};

function actualizarEstadisticasEquipo(partido) {
    equipos[partido.equipo_local].PJ++;
    equipos[partido.equipo_visitante].PJ++;

    equipos[partido.equipo_local].GF += partido.goles_equipo_local;
    equipos[partido.equipo_local].GC += partido.goles_equipo_visitante;
    equipos[partido.equipo_visitante].GF += partido.goles_equipo_visitante;
    equipos[partido.equipo_visitante].GC += partido.goles_equipo_local;

    equipos[partido.equipo_local].GD = equipos[partido.equipo_local].GF - equipos[partido.equipo_local].GC;
    equipos[partido.equipo_visitante].GD = equipos[partido.equipo_visitante].GF - equipos[partido.equipo_visitante].GC;

    if (partido.goles_equipo_local > partido.goles_equipo_visitante) {
        equipos[partido.equipo_local].PG++;
        equipos[partido.equipo_visitante].PP++;
        equipos[partido.equipo_local].PTS += 3;
    } else if (partido.goles_equipo_local < partido.goles_equipo_visitante) {
        equipos[partido.equipo_visitante].PG++;
        equipos[partido.equipo_local].PP++;
        equipos[partido.equipo_visitante].PTS += 3;
    } else {
        equipos[partido.equipo_local].PE++;
        equipos[partido.equipo_visitante].PE++;
        equipos[partido.equipo_local].PTS++;
        equipos[partido.equipo_visitante].PTS++;
    }
}

function procesarResultados() {
    partidos.forEach(fecha => {
        fecha.juegos.forEach(partido => {
            if (partido.estado_partido === 1) { // Solo procesar partidos finalizados
                actualizarEstadisticasEquipo(partido);
            }
        });
    });

    // Ordenar equipos por puntos, diferencia de goles, goles a favor, y alfabéticamente
    let equiposOrdenados = Object.entries(equipos)
    .sort((a, b) => {
        // Comparar puntos
        if (b[1].PTS !== a[1].PTS) return b[1].PTS - a[1].PTS;
        // Comparar diferencia de goles
        if (b[1].GD !== a[1].GD) return b[1].GD - a[1].GD;
        // Comparar goles a favor
        if (b[1].GF !== a[1].GF) return b[1].GF - a[1].GF;
        // Si todo es igual, ordenar alfabéticamente
        return a[0].localeCompare(b[0]);
    });

    // Mostrar la tabla de posiciones en HTML
    const tablaPosiciones = document.getElementById('tabla-reclasificacion').getElementsByTagName('tbody')[0];
    tablaPosiciones.innerHTML = ''; // Limpiar la tabla antes de agregar nuevas filas

    equiposOrdenados.forEach((equipo, index) => {
        const row = tablaPosiciones.insertRow();
        row.insertCell(0).textContent = index + 1; // Posición
        row.insertCell(1).textContent = equipo[0]; // Nombre del equipo
        row.insertCell(2).textContent = tecnicos[equipo[0]]; // Técnico
        row.insertCell(3).textContent = equipo[1].PJ; // Partidos Jugados
        row.insertCell(4).textContent = equipo[1].PG; // Victorias
        row.insertCell(5).textContent = equipo[1].PE; // Empates
        row.insertCell(6).textContent = equipo[1].PP; // Derrotas
        row.insertCell(7).textContent = equipo[1].GF; // Goles a Favor
        row.insertCell(8).textContent = equipo[1].GC; // Goles en Contra
        row.insertCell(9).textContent = equipo[1].GD; // Diferencia de Gol
        row.insertCell(10).textContent = equipo[1].PTS; // Puntos
    });
}

// Llamar a la función para cargar calendario y actualizar posiciones cuando la página cargue
window.onload = function () {
    procesarResultados();
};
