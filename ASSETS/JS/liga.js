// Definir los equipos con su estadística inicial
let equipos = [
    { nombre: "Bayern Munich", partidosJugados: 0, victorias: 0, empates: 0, derrotas: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { nombre: "Barcelona", partidosJugados: 0, victorias: 0, empates: 0, derrotas: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { nombre: "Atl Madrid", partidosJugados: 0, victorias: 0, empates: 0, derrotas: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { nombre: "Liverpool", partidosJugados: 0, victorias: 0, empates: 0, derrotas: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { nombre: "Arsenal", partidosJugados: 0, victorias: 0, empates: 0, derrotas: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { nombre: "Man. City", partidosJugados: 0, victorias: 0, empates: 0, derrotas: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { nombre: "Chelsea", partidosJugados: 0, victorias: 0, empates: 0, derrotas: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 },
    { nombre: "PSG", partidosJugados: 0, victorias: 0, empates: 0, derrotas: 0, golesAFavor: 0, golesEnContra: 0, puntos: 0 }
];

// Función para actualizar la tabla de posiciones
function actualizarTablaPosiciones() {
    // Ordenar los equipos por puntos, diferencia de goles, goles a favor y nombre
    equipos.sort((a, b) => {
        if (a.puntos !== b.puntos) return b.puntos - a.puntos;
        if ((a.golesAFavor - a.golesEnContra) !== (b.golesAFavor - b.golesEnContra)) return (b.golesAFavor - b.golesEnContra) - (a.golesAFavor - a.golesEnContra);
        if (a.golesAFavor !== b.golesAFavor) return b.golesAFavor - a.golesAFavor;
        return a.nombre.localeCompare(b.nombre);
    });

    // Llenar la tabla HTML con la información de los equipos
    const tablaPosiciones = document.getElementById('tabla-posiciones').getElementsByTagName('tbody')[0];
    tablaPosiciones.innerHTML = ''; // Limpiar la tabla
    equipos.forEach((equipo, index) => {
        let row = tablaPosiciones.insertRow();
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = equipo.nombre;
        row.insertCell(2).textContent = equipo.partidosJugados;
        row.insertCell(3).textContent = equipo.victorias;
        row.insertCell(4).textContent = equipo.empates;
        row.insertCell(5).textContent = equipo.derrotas;
        row.insertCell(6).textContent = equipo.golesAFavor;
        row.insertCell(7).textContent = equipo.golesEnContra;
        row.insertCell(8).textContent = equipo.golesAFavor - equipo.golesEnContra; // Diferencia de goles
        row.insertCell(9).textContent = equipo.puntos;
    });
}

// Función para procesar un partido
function registrarPartido(equipo1, goles1, equipo2, goles2) {
    // Actualizar estadísticas de ambos equipos
    equipo1.partidosJugados++;
    equipo2.partidosJugados++;
    equipo1.golesAFavor += goles1;
    equipo1.golesEnContra += goles2;
    equipo2.golesAFavor += goles2;
    equipo2.golesEnContra += goles1;

    if (goles1 > goles2) {
        equipo1.victorias++;
        equipo2.derrotas++;
        equipo1.puntos += 3;
    } else if (goles2 > goles1) {
        equipo2.victorias++;
        equipo1.derrotas++;
        equipo2.puntos += 3;
    } else {
        equipo1.empates++;
        equipo2.empates++;
        equipo1.puntos++;
        equipo2.puntos++;
    }

    // Actualizar la tabla de posiciones
    actualizarTablaPosiciones();
}

// Ejemplo de uso: registrar un partido
registrarPartido(equipos[0], 3, equipos[1], 1); // Bayern Munich 3 - Barcelona 1
registrarPartido(equipos[2], 2, equipos[3], 2); // Atl. Madrid 2 - Liverpool 2

