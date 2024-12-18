let C1, C2, C3, C4, S1, S2, CAMPEON;

let partidos = [
    {
        fase: 'Cuartos de final',
        juegos: [
            {
                equipo_local: 'Arsenal',
                goles_equipo_local: 0,
                equipo_visitante: 'Liverpool',
                goles_equipo_visitante: 0,
                estado_partido: 0 // 0 = Pendiente
            },
            {
                equipo_local: 'Bayern Munich',
                goles_equipo_local: 0,
                equipo_visitante: 'Man. City',
                goles_equipo_visitante: 0,
                estado_partido: 0
            },
            {
                equipo_local: 'Barcelona',
                goles_equipo_local: 0,
                equipo_visitante: 'PSG',
                goles_equipo_visitante: 0,
                estado_partido: 0
            },
            {
                equipo_local: 'Chelsea',
                goles_equipo_local: 0,
                equipo_visitante: 'Atlético Madrid',
                goles_equipo_visitante: 0,
                estado_partido: 0
            }
        ]
    },
    {
        fase: 'Semifinal',
        juegos: [
            {
                equipo_local: C1,
                goles_equipo_local: 0,
                equipo_visitante: C2,
                goles_equipo_visitante: 0,
                estado_partido: 0
            },
            {
                equipo_local: C3,
                goles_equipo_local: 0,
                equipo_visitante: C4,
                goles_equipo_visitante: 0,
                estado_partido: 0
            }
        ]
    },
    {
        fase: 'Final',
        juegos: [
            {
                equipo_local: S1,
                goles_equipo_local: 0,
                equipo_visitante: S2,
                goles_equipo_visitante: 0,
                estado_partido: 0
            }
        ]
    }
];

// Función para resolver un partido, determinando el ganador
function resolverPartido(partido) {
    if (partido.goles_equipo_local > partido.goles_equipo_visitante) {
        return partido.equipo_local;
    } else if (partido.goles_equipo_local < partido.goles_equipo_visitante) {
        return partido.equipo_visitante;
    } else {
        // En caso de empate, puedes implementar un desempate si lo deseas
        return 'Sin Definir';
    }
}

// Resuelve los cuartos de final
partidos[0].juegos.forEach((partido, index) => {
    let ganador = resolverPartido(partido);
    if (index === 0) C1 = ganador;
    if (index === 1) C2 = ganador;
    if (index === 2) C3 = ganador;
    if (index === 3) C4 = ganador;
});

// Resuelve las semifinales
partidos[1].juegos[0].equipo_local = C1;
partidos[1].juegos[0].equipo_visitante = C2;
partidos[1].juegos[1].equipo_local = C3;
partidos[1].juegos[1].equipo_visitante = C4;

partidos[1].juegos.forEach((partido, index) => {
    let ganador = resolverPartido(partido);
    if (index === 0) S1 = ganador;
    if (index === 1) S2 = ganador;
});

// Resuelve la final
partidos[2].juegos[0].equipo_local = S1;
partidos[2].juegos[0].equipo_visitante = S2;

CAMPEON = resolverPartido(partidos[2].juegos[0]);

// Mostrar el resultado final
console.log(`El campeón es: ${CAMPEON}`);

// Función para llenar la tabla con los datos de los partidos
function cargarCalendario() {
    const calendario = document.getElementById('calendario');
    if (!calendario) {
        console.error("No se encontró el elemento con id 'calendario'");
        return;
    }
    const tbody = calendario.getElementsByTagName('tbody')[0];
    if (!tbody) {
        console.error("No se encontró el elemento <tbody> dentro del calendario");
        return;
    }

    // Recorrer todas las fases del torneo (cuartos, semifinales y final)
    partidos.forEach((fase, indiceFase) => {
        fase.juegos.forEach((partido, indicePartido) => {
            // Crear una fila para cada partido
            const row = tbody.insertRow();

            // Crear celdas para cada columna de la fila
            const celdaFecha = row.insertCell(0);
            const celdaPartido = row.insertCell(1);
            const celdaResultado = row.insertCell(2);
            const celdaEstado = row.insertCell(3);

            // Definir el número de fecha según la fase (en base al índice de la fase)
            let fecha = '';
            if (indiceFase === 0) {
                fecha = `Cuartos de Final - Partido ${indicePartido + 1}`;
            } else if (indiceFase === 1) {
                fecha = `Semifinal - Partido ${indicePartido + 1}`;
            } else if (indiceFase === 2) {
                fecha = `Final`;
            }

            // Definir los equipos locales y visitantes
            const equipoLocal = partido.equipo_local;
            const equipoVisitante = partido.equipo_visitante;

            // Rellenar las celdas con los datos
            celdaFecha.textContent = fecha; // Fecha de la fase (cuartos, semifinal, final)
            celdaPartido.textContent = `${equipoLocal} vs ${equipoVisitante}`; // Equipos que juegan
            celdaResultado.textContent = `${partido.goles_equipo_local} - ${partido.goles_equipo_visitante}`; // Resultados de goles

            // Determinar el estado del partido
            if (partido.estado_partido === 1) {
                celdaEstado.textContent = "Finalizado"; // Si estado_partido es 1, mostrar "Finalizado"
            } else {
                celdaEstado.textContent = "Pendiente"; // Si estado_partido es 0, mostrar "Pendiente"
            }
        });
    });
}

// Datos de los equipos para los enfrentamientos
const equipos = [
    { nombre: "Liverpool", id: "team1" },
    { nombre: "Arsenal", id: "team2" },
    { nombre: "Bayern Munich", id: "team3" },
    { nombre: "Manchester City", id: "team4" },
    { nombre: "Barcelona", id: "team5" },
    { nombre: "Paris Saint Germain", id: "team6" },
    { nombre: "AC Milan", id: "team7" },
    { nombre: "Chelsea", id: "team8" },
];

// Función para llenar los equipos en los cuadros de enfrentamiento
function llenarCuadro() {
    // Cuartos de final
    document.getElementById('team1').textContent = equipos[0].nombre;
    document.getElementById('team2').textContent = equipos[1].nombre;
    document.getElementById('team3').textContent = equipos[2].nombre;
    document.getElementById('team4').textContent = equipos[3].nombre;
    document.getElementById('team5').textContent = equipos[4].nombre;
    document.getElementById('team6').textContent = equipos[5].nombre;
    document.getElementById('team7').textContent = equipos[6].nombre;
    document.getElementById('team8').textContent = equipos[7].nombre;
}

// Llamar a la función cuando la página cargue
window.onload = function() {
    cargarCalendario();
    llenarCuadro();
};