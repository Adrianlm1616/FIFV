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

