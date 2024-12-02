// Inicializar los partidos y fechas desde localStorage, si no existe, se carga el calendario por defecto
let calendario = JSON.parse(localStorage.getItem("calendario")) || [
    { fecha: 1, equipo1: "Arsenal", equipo2: "Atlético Madrid", resultado: "2-2", terminado: false },
    { fecha: 1, equipo1: "Bayern Munich", equipo2: "Real Maxdrid", resultado: "1-0", terminado: false },
    { fecha: 1, equipo1: "Liverpool", equipo2: "Man. City", resultado: "0-0", terminado: false },

    { fecha: 2, equipo1: "Arsenal", equipo2: "Bayern Munich", resultado: "", terminado: false },
    { fecha: 2, equipo1: "Atlético Madrid", equipo2: "Liverpool", resultado: "", terminado: false },
    { fecha: 2, equipo1: "Real Maxdrid", equipo2: "PSG", resultado: "", terminado: false },

    { fecha: 3, equipo1: "Arsenal", equipo2: "Real Maxdrid", resultado: "", terminado: false },
    { fecha: 3, equipo1: "Atlético Madrid", equipo2: "Bayern Munich", resultado: "", terminado: false },
    { fecha: 3, equipo1: "Liverpool", equipo2: "PSG", resultado: "", terminado: false },

    { fecha: 4, equipo1: "Arsenal", equipo2: "Liverpool", resultado: "", terminado: false },
    { fecha: 4, equipo1: "Atlético Madrid", equipo2: "PSG", resultado: "", terminado: false },
    { fecha: 4, equipo1: "Bayern Munich", equipo2: "Man. City", resultado: "", terminado: false },

    { fecha: 5, equipo1: "Arsenal", equipo2: "Man. City", resultado: "", terminado: false },
    { fecha: 5, equipo1: "Atlético Madrid", equipo2: "Real Maxdrid", resultado: "", terminado: false },
    { fecha: 5, equipo1: "Bayern Munich", equipo2: "PSG", resultado: "", terminado: false },

    { fecha: 6, equipo1: "Arsenal", equipo2: "PSG", resultado: "", terminado: false },
    { fecha: 6, equipo1: "Atlético Madrid", equipo2: "Man. City", resultado: "", terminado: false },
    { fecha: 6, equipo1: "Real Maxdrid", equipo2: "Liverpool", resultado: "", terminado: false },

    { fecha: 7, equipo1: "Arsenal", equipo2: "PSG", resultado: "", terminado: false },
    { fecha: 7, equipo1: "Atlético Madrid", equipo2: "Bayern Munich", resultado: "", terminado: false },
    { fecha: 7, equipo1: "Man. City", equipo2: "Real Maxdrid", resultado: "", terminado: false },

    { fecha: 8, equipo1: "Atlético Madrid", equipo2: "Real Maxdrid", resultado: "", terminado: false },
    { fecha: 8, equipo1: "Bayern Munich", equipo2: "Liverpool", resultado: "", terminado: false },
    { fecha: 8, equipo1: "Man. City", equipo2: "PSG", resultado: "", terminado: false }
];

// Función para mostrar el calendario con resultados
function mostrarCalendario() {
    const tabla = document.getElementById("calendario").getElementsByTagName("tbody")[0];

    calendario.forEach(partido => {
        const row = document.createElement("tr");

        // Si el partido está terminado, añadir la clase 'terminado' para cambiar el color
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

// Ejecutar la función cuando la página cargue
document.addEventListener("DOMContentLoaded", mostrarCalendario);

// Función para cargar los partidos en el formulario
function cargarPartidos() {
    const selectPartido = document.getElementById("partido");

    calendario.forEach((partido, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${partido.equipo1} vs ${partido.equipo2}`;
        selectPartido.appendChild(option);
    });
}

// Función para manejar el envío del formulario y actualizar el resultado
document.getElementById("form-modificar").addEventListener("submit", function(event) {
    event.preventDefault();

    const selectPartido = document.getElementById("partido");
    const resultado = document.getElementById("resultado").value.trim();
    const partidoIndex = selectPartido.value;

    if (resultado !== "") {
        calendario[partidoIndex].resultado = resultado;
        calendario[partidoIndex].terminado = true;

        alert("Resultado actualizado exitosamente");

        // Actualizar la tabla en el calendario
        localStorage.setItem("calendario", JSON.stringify(calendario));

        // Opcional: puedes recargar la página o redirigir al calendario
    }
});

// Función para reiniciar el calendario
document.getElementById("reiniciar-calendario").addEventListener("click", function() {
    if (confirm("¿Estás seguro de que quieres reiniciar todos los resultados?")) {
        // Reiniciar los partidos en el arreglo calendario
        calendario.forEach(partido => {
            partido.resultado = "";
            partido.terminado = false;
        });

        // Guardar los datos reiniciados en localStorage
        localStorage.setItem("calendario", JSON.stringify(calendario));

        // Actualizar la visualización en la página (recargando la tabla)
        mostrarCalendario();

        alert("Calendario reiniciado");
    }
});

// Cargar los partidos al cargar la página
document.addEventListener("DOMContentLoaded", cargarPartidos);

