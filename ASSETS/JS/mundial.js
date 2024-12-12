// Campeon de GOD LEAGUE
let cupo_1= 'Man. City';
// Campeon de PENGUIN CUP
let cupo_2= 'Campeon PENGUIN CUP';
// SupCampeon de GOD LEAGUE
let cupo_3= 'Liverpool';
// SupCampeon de PENGUIN CUP
let cupo_4= '#2 PENGUIN CUP';


// #1 Cuadrangular
let finalista_1= 'Por definir';
// #2 Cuadrangular
let finalista_2= 'Por definir';
export let partidos = [
    {
// Fecha 1 - 4 partidos
fecha: 1,
juegos: [
    // Partido 1: Supcampeon de la PINGUIN CUP VS Campeon de La GOD LEAGUE
    {
        equipo_local: cupo_4,
        goles_equipo_local: 0,
        equipo_visitante: cupo_1,
        goles_equipo_visitante: 0,
        estado_partido: 0 // 0 = Pendiente
    },
    // Partido 2: Supcampeon de la GOD LEAGUE vs Campeon de la PINGUIN CUP
    {
        equipo_local: cupo_3,
        goles_equipo_local: 0,
        equipo_visitante: cupo_2,
        goles_equipo_visitante: 0,
        estado_partido: 0
    },
]
    },
    {
// Fecha 2 - 4 partidos
fecha: 2,
juegos: [
    // Partido 1: Campeon de la PINGUIN CUP vs Supcampeon de la PINGUIN CUP
    {
        equipo_local: cupo_2,
        goles_equipo_local: 0,
        equipo_visitante: cupo_4,
        goles_equipo_visitante: 0,
        estado_partido: 0
    },
    // Partido 2: Campeon de La GOD LEAGUE vs Supcampeon de la GOD LEAGUE
    {
        equipo_local: cupo_1,
        goles_equipo_local: 0,
        equipo_visitante: cupo_3,
        goles_equipo_visitante: 0,
        estado_partido: 0
    },
    
]
    },
    {
// Fecha 3 - 4 partidos
fecha: 3,
juegos: [
    // Partido 1: Campeon de La GOD LEAGUE CUP vs Campeon de la PINGUIN CUP
    {
        equipo_local: cupo_1,
        goles_equipo_local: 0,
        equipo_visitante: cupo_2,
        goles_equipo_visitante: 0,
        estado_partido: 0
    },
    // Partido 2: Supcampeon de la PINGUIN CUP vs Supcampeon de la GOD LEAGUE
    {
        equipo_local: cupo_4,
        goles_equipo_local: 0,
        equipo_visitante: cupo_3,
        goles_equipo_visitante: 0,
        estado_partido: 0
    }
]
    },
    {
// Fecha 4 - 4 partidos
fecha: 4,
juegos: [
    // Partido 1: Supcampeon de la GOD LEAGUE vs Supcampeon de la PINGUIN CUP
    {
        equipo_local: cupo_3,
        goles_equipo_local: 0,
        equipo_visitante: cupo_4,
        goles_equipo_visitante: 0,
        estado_partido: 0
    },
    // Partido 2: Campeon de la PINGUIN CUP vs Campeon de La GOD LEAGUE
    {
        equipo_local: cupo_2,
        goles_equipo_local: 0,
        equipo_visitante: cupo_1,
        goles_equipo_visitante: 0,
        estado_partido: 0
    }
]
    },
    {
// Fecha 5 - 4 partidos
fecha: 5,
juegos: [
    // Partido 1: Supcampeon de la GOD LEAGUE vs Campeon de La GOD LEAGUE
    {
        equipo_local: cupo_3,
        goles_equipo_local: 0,
        equipo_visitante: cupo_1,
        goles_equipo_visitante: 0,
        estado_partido: 0
    },
    // Partido 2: Supcampeon de la PINGUIN CUP vs Campeon de la PINGUIN CUP
    {
        equipo_local: cupo_4,
        goles_equipo_local: 0,
        equipo_visitante: cupo_2,
        goles_equipo_visitante: 0,
        estado_partido: 0
    }
]
    },
    {
// Fecha 6 - 4 partidos
fecha: 6,
juegos: [
    // Partido 1: Campeon de la PINGUIN CUP vs Supcampeon de la GOD LEAGUE
    {
        equipo_local: cupo_2,
        goles_equipo_local: 0,
        equipo_visitante: cupo_3,
        goles_equipo_visitante: 0,
        estado_partido: 0
    },
    // Partido 2: Campeon de La GOD LEAGUE vs Supcampeon de la PINGUIN CUP
    {
        equipo_local: cupo_1,
        goles_equipo_local: 0,
        equipo_visitante: cupo_4,
        goles_equipo_visitante: 0,
        estado_partido: 0
    },
    {
        // Fecha 5 - 4 partidos
        fecha: 'Final Ida',
        juegos: [
            // Partido 1: Finalista 2 vs Finalista 1
            {
                equipo_local: finalista_1,
                goles_equipo_local: 0,
                equipo_visitante: finalista_2,
                goles_equipo_visitante: 0,
                estado_partido: 0
            },
        ]
            },
            {
        // Fecha 6 - 4 partidos
        fecha: 'Final Vuelta',
        juegos: [
            // Partido 1: Finalista 1 vs Finalista 2
            {
                equipo_local: finalista_1,
                goles_equipo_local: 0,
                equipo_visitante: finalista_2,
                goles_equipo_visitante: 0,
                estado_partido: 0
            }
        ]
            }
]
    }
];

//tabla de posiciones

let tecnicos = {
    cupo_1: 'Jorge Castro',
    cupo_2: 'Camilo Paez',
    cupo_3: 'Por Definir',
    cupo_4: 'Por clasificar'
};

// Definir la estructura de la tabla de posiciones
export let equipos = {
    cupo_1: { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, GD: 0, PTS: 0 },
    cupo_2: { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, GD: 0, PTS: 0 },
    cupo_3: { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, GD: 0, PTS: 0 },
    cupo_4: { PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, GD: 0, PTS: 0 }
};

// Función para procesar los resultados y actualizar las posiciones
function actualizarTablaPosiciones() {
    // Procesar los resultados de los partidos
    partidos.forEach(fecha => {
        fecha.juegos.forEach(partido => {
        // Solo procesar partidos finalizados
        if (partido.estado_partido === 1) {
            // Actualizar partidos jugados
            equipos[partido.equipo_local].PJ += 1;
            equipos[partido.equipo_visitante].PJ += 1;

            // Actualizar goles a favor y en contra
            equipos[partido.equipo_local].GF += partido.goles_equipo_local;
            equipos[partido.equipo_local].GC += partido.goles_equipo_visitante;
            equipos[partido.equipo_visitante].GF += partido.goles_equipo_visitante;
            equipos[partido.equipo_visitante].GC += partido.goles_equipo_local;

            // Actualizar diferencia de goles
            equipos[partido.equipo_local].GD = equipos[partido.equipo_local].GF - equipos[partido.equipo_local].GC;
            equipos[partido.equipo_visitante].GD = equipos[partido.equipo_visitante].GF - equipos[partido.equipo_visitante].GC;

            // Determinar victoria, empate o derrota
            if (partido.goles_equipo_local > partido.goles_equipo_visitante) {
                equipos[partido.equipo_local].PG += 1; // Victoria para el local
                equipos[partido.equipo_visitante].PP += 1; // Derrota para el visitante
                equipos[partido.equipo_local].PTS += 3; // 3 puntos para el local
            } else if (partido.goles_equipo_local < partido.goles_equipo_visitante) {
                equipos[partido.equipo_visitante].PG += 1; // Victoria para el visitante
                equipos[partido.equipo_local].PP += 1; // Derrota para el local
                equipos[partido.equipo_visitante].PTS += 3; // 3 puntos para el visitante
            } else {
                equipos[partido.equipo_local].PE += 1; // Empate
                equipos[partido.equipo_visitante].PE += 1; // Empate
                equipos[partido.equipo_local].PTS += 1; // 1 punto para el local
                equipos[partido.equipo_visitante].PTS += 1; // 1 punto para el visitante
            }
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
    const tablaPosiciones = document.getElementById('tabla-Mundial').getElementsByTagName('tbody')[0];
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

// Función para resolver la final (ida + vuelta)
function resolverFinal(partidoIda, partidoVuelta) {
    // Sumar goles en el global
    let golesEquipo1 = partidoIda.goles_equipo_local + partidoVuelta.goles_equipo_visitante;
    let golesEquipo2 = partidoVuelta.goles_equipo_local + partidoIda.goles_equipo_visitante;

    if (golesEquipo1 > golesEquipo2) {
        return partidoIda.equipo_local;
    } else if (golesEquipo1 < golesEquipo2) {
        return partidoVuelta.equipo_local;
    } else {
        return 'Empate';
    }
}

// Resolver la final
let finalCampeon = resolverFinal(partidos[2].juegos[0], partidos[3].juegos[0]);
console.log(`El campeón de la liga es: ${finalCampeon}`);

// Mostrar el resultado final
console.log(`El campeón es: ${CAMPEON}`);
// Llamar a la función para cargar calendario y actualizar posiciones cuando la página cargue
window.onload = function () {
    actualizarTablaPosiciones();
};

// calendario.html

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

    // Función para agregar partidos de cada fecha a la tabla
    partidos.forEach((fecha, numeroFecha) => {
        fecha.juegos.forEach((partido) => {
            // Crear una fila para cada partido
            const row = tbody.insertRow();

            // Crear celdas para cada columna de la fila
            const celdaFecha = row.insertCell(0);
            const celdaPartido = row.insertCell(1);
            const celdaResultado = row.insertCell(2);
            const celdaEstado = row.insertCell(3);

            // Rellenar las celdas con los datos
            celdaFecha.textContent = `Fecha ${numeroFecha}`;
            celdaPartido.textContent = `${partido.equipo_local} vs ${partido.equipo_visitante}`;
            celdaResultado.textContent = `${partido.goles_equipo_local} - ${partido.goles_equipo_visitante}`;

            // Determinar el estado del partido
            if (partido.estado_partido === 1) {
                celdaEstado.textContent = "Finalizado"; // Si estado_partido es 1, mostrar "Finalizado"
            } else {
                celdaEstado.textContent = "Pendiente"; // Si estado_partido es 0, mostrar "Pendiente"
            }
        });
        });
}