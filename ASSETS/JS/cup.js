let teamsStats = {
    'Liverpool': { jugados: 0, victorias: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
    'Arsenal': { jugados: 0, victorias: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
    'Bayern Munich': { jugados: 0, victorias: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
    'Manchester City': { jugados: 0, victorias: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
    'Chelsea': { jugados: 0, victorias: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
    'Paris Saint Germain': { jugados: 0, victorias: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
    'Atlético de Madrid': { jugados: 0, victorias: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
    'Barcelona': { jugados: 0, victorias: 0, derrotas: 0, golesFavor: 0, golesContra: 0 }
};

function actualizarEstadisticas(ganador, perdedor, golesGanador, golesPerdedor) {
    teamsStats[ganador].jugados += 1;
    teamsStats[ganador].victorias += 1;
    teamsStats[ganador].golesFavor += golesGanador;
    teamsStats[ganador].golesContra += golesPerdedor;

    teamsStats[perdedor].jugados += 1;
    teamsStats[perdedor].derrotas += 1;
    teamsStats[perdedor].golesFavor += golesPerdedor;
    teamsStats[perdedor].golesContra += golesGanador;
}

function avanzar(ganador, perdedor, siguienteRonda, llave) {
    const equipoGanador = document.getElementById(ganador);
    const equipoPerdedor = document.getElementById(perdedor);

    equipoPerdedor.style.display = 'none';
    document.getElementById(siguienteRonda).textContent = equipoGanador.textContent;

    // Aquí puedes poner los goles y resultados, por ejemplo:
    const golesGanador = prompt(`Ingrese los goles de ${ganador}:`);
    const golesPerdedor = prompt(`Ingrese los goles de ${perdedor}:`);

    actualizarEstadisticas(ganador, perdedor, parseInt(golesGanador), parseInt(golesPerdedor));
}

// Función para reiniciar el torneo
function reiniciarTorneo() {
    // Puedes resetear los valores de los partidos o cambiar cualquier dato del torneo
    // Por ejemplo, resetear las posiciones de los equipos:

    const equipos = [
        { nombre: 'Liverpool', goles: 0, victorias: 0, derrotas: 0, empates: 0 },
        { nombre: 'Arsenal', goles: 0, victorias: 0, derrotas: 0, empates: 0 },
        { nombre: 'Bayern Munich', goles: 0, victorias: 0, derrotas: 0, empates: 0 },
        { nombre: 'Manchester City', goles: 0, victorias: 0, derrotas: 0, empates: 0 },
        { nombre: 'Chelsea', goles: 0, victorias: 0, derrotas: 0, empates: 0 },
        { nombre: 'Paris Saint Germain', goles: 0, victorias: 0, derrotas: 0, empates: 0 },
        { nombre: 'Atlético de Madrid', goles: 0, victorias: 0, derrotas: 0, empates: 0 },
        { nombre: 'Barcelona', goles: 0, victorias: 0, derrotas: 0, empates: 0 }
    ];

    // Resetear los partidos jugados (debes ajustar esto según tu estructura actual)
    const partidos = [
        { llave: 'C1', equipo1: 'Liverpool', equipo2: 'Arsenal', golesEquipo1: 0, golesEquipo2: 0 },
        { llave: 'C2', equipo1: 'Bayern Munich', equipo2: 'Manchester City', golesEquipo1: 0, golesEquipo2: 0 },
        { llave: 'C3', equipo1: 'Chelsea', equipo2: 'Paris Saint Germain', golesEquipo1: 0, golesEquipo2: 0 },
        { llave: 'C4', equipo1: 'Atlético de Madrid', equipo2: 'Barcelona', golesEquipo1: 0, golesEquipo2: 0 }
    ];

    // Actualizar el HTML o lo que sea necesario para reflejar el reinicio
    alert('¡El torneo ha sido reiniciado!');
    
    // (Aquí puedes incluir lógica adicional para actualizar el estado en la UI, por ejemplo, reiniciar los cuadros de eliminación directa)
    
    // Opcionalmente, también puedes almacenar la nueva configuración en localStorage o una base de datos si es necesario.
}

