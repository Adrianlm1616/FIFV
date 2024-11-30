// Datos iniciales del torneo (cuadrangular)
let equipos = [
    { nombre: "Equipo A", tecnico: "", jugados: 0, ganados: 0, perdidos: 0, empatados: 0, golesAFavor: 0, golesEnContra: 0, golesDiferencia: 0, puntos: 0 },
    { nombre: "Equipo B", tecnico: "", jugados: 0, ganados: 0, perdidos: 0, empatados: 0, golesAFavor: 0, golesEnContra: 0, golesDiferencia: 0, puntos: 0 },
    { nombre: "Equipo C", tecnico: "", jugados: 0, ganados: 0, perdidos: 0, empatados: 0, golesAFavor: 0, golesEnContra: 0, golesDiferencia: 0, puntos: 0 },
    { nombre: "Equipo D", tecnico: "", jugados: 0, ganados: 0, perdidos: 0, empatados: 0, golesAFavor: 0, golesEnContra: 0, golesDiferencia: 0, puntos: 0 }
];

// Datos de los partidos en el calendario
let calendario = [
    { fecha: 1, equipo1: "Equipo A", equipo2: "Equipo B", resultado: "", terminado: false },
    { fecha: 1, equipo1: "Equipo C", equipo2: "Equipo D", resultado: "", terminado: false },
    { fecha: 2, equipo1: "Equipo A", equipo2: "Equipo C", resultado: "", terminado: false },
    { fecha: 2, equipo1: "Equipo B", equipo2: "Equipo D", resultado: "", terminado: false },
    { fecha: 3, equipo1: "Equipo A", equipo2: "Equipo D", resultado: "", terminado: false },
    { fecha: 3, equipo1: "Equipo B", equipo2: "Equipo C", resultado: "", terminado: false }
];

// Función para mostrar el calendario de partidos
function mostrarCalendario() {
    const tabla = document.getElementById("calendario").getElementsByTagName("tbody")[0];

    calendario.forEach(partido => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>Fecha ${partido.fecha}</td>
            <td>${partido.equipo1} vs ${partido.equipo2}</td>
            <td class="${partido.terminado ? 'terminado' : ''}">
                ${partido.resultado || "Pendiente"}
            </td>
        `;
        tabla.appendChild(row);
    });
}

// Función para mostrar la tabla de clasificación
function mostrarTablaClasificacion() {
    const tabla = document.getElementById("tabla-clasificacion").getElementsByTagName("tbody")[0];

    equipos.forEach(equipo => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${equipo.nombre}</td>
            <td>${equipo.jugados}</td>
            <td>${equipo.ganados}</td>
            <td>${equipo.perdidos}</td>
            <td>${equipo.empatados}</td>
            <td>${equipo.golesAFavor}</td>
            <td>${equipo.golesEnContra}</td>
            <td>${equipo.golesDiferencia}</td>
            <td>${equipo.puntos}</td>
        `;
        tabla.appendChild(row);
    });
}

// Función para actualizar los resultados de los partidos
document.getElementById("form-modificar").addEventListener("submit", function(event) {
    event.preventDefault();

    const selectPartido = document.getElementById("partido");
    const resultado = document.getElementById("resultado").value.trim();
    const partidoIndex = selectPartido.value;

    if (resultado !== "") {
        // Actualizar el resultado del partido
        calendario[partidoIndex].resultado = resultado;
        calendario[partidoIndex].terminado = true;

        // Actualizar la tabla de clasificación
        actualizarClasificacion();

        // Guardar los datos en localStorage
        localStorage.setItem("calendario", JSON.stringify(calendario));
        localStorage.setItem("equipos", JSON.stringify(equipos));

        alert("Resultado actualizado correctamente");

        // Actualizar la visualización
        mostrarCalendario();
        mostrarTablaClasificacion();
    }
});

// Función para actualizar la clasificación después de cada partido
function actualizarClasificacion() {
    calendario.forEach(partido => {
        if (partido.terminado) {
            const [golesEquipo1, golesEquipo2] = partido.resultado.split("-").map(Number);

            // Actualizar estadísticas de los equipos
            let equipo1 = equipos.find(equipo => equipo.nombre === partido.equipo1);
            let equipo2 = equipos.find(equipo => equipo.nombre === partido.equipo2);

            equipo1.jugados++;
            equipo2.jugados++;

            if (golesEquipo1 > golesEquipo2) {
                equipo1.ganados++;
                equipo2.perdidos++;
                equipo1.puntos += 3;
            } else if (golesEquipo1 < golesEquipo2) {
                equipo2.ganados++;
                equipo1.perdidos++;
                equipo2.puntos += 3;
            } else {
                equipo1.empatados++;
                equipo2.empatados++;
                equipo1.puntos++;
                equipo2.puntos++;
            }

            equipo1.golesAFavor += golesEquipo1;
            equipo1.golesEnContra += golesEquipo2;
            equipo2.golesAFavor += golesEquipo2;
            equipo2.golesEnContra += golesEquipo1;

            equipo1.golesDiferencia = equipo1.golesAFavor - equipo1.golesEnContra;
            equipo2.golesDiferencia = equipo2.golesAFavor - equipo2.golesEnContra;
        }
    });
}

// Cargar los datos del torneo cuando la página cargue
document.addEventListener("DOMContentLoaded", function() {
    mostrarCalendario();
    mostrarTablaClasificacion();
});
