// Función para manejar el avance de un equipo
function avanzar(ganador, perdedor, siguienteRonda) {
    // Obtener el elemento del equipo ganador
    const equipoGanador = document.getElementById(ganador);

    // Eliminar el perdedor (lo que en realidad es ocultarlo)
    const equipoPerdedor = document.getElementById(perdedor);
    equipoPerdedor.style.display = 'none';

    // El equipo ganador pasa a la siguiente ronda
    document.getElementById(siguienteRonda).textContent = equipoGanador.textContent;
}
