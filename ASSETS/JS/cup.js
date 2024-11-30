// Datos de la copa con las fases y los partidos
let copa = JSON.parse(localStorage.getItem("copa")) || {
    cuartos: [
        { partido: 1, equipo1: "Arsenal", equipo2: "Atlético Madrid", resultado: "", clasificado: "" },
        { partido: 2, equipo1: "Bayern Munich", equipo2: "Barcelona", resultado: "", clasificado: "" },
        { partido: 3, equipo1: "Liverpool", equipo2: "Man. City", resultado: "", clasificado: "" },
        { partido: 4, equipo1: "PSG", equipo2: "Real Madrid", resultado: "", clasificado: "" }
    ],
    semifinales: [
        { partido: 1, equipo1: "", equipo2: "", resultado: "", clasificado: "" },
        { partido: 2, equipo1: "", equipo2: "", resultado: "", clasificado: "" }
    ],
    final: { partido: 1, equipo1: "", equipo2: "", resultado: "", clasificado: "" },
    fase: "cuartos" // Fase predeterminada
};

// Función para mostrar la Copa
function mostrarCopa() {
    const faseNombre = document.getElementById("fase-nombre");
    const tablaCuartos = document.getElementById("cuartos")?.getElementsByTagName("tbody")[0];
    const tablaSemifinales = document.getElementById("semifinales")?.getElementsByTagName("tbody")[0];
    const tablaFinal = document.getElementById("final")?.getElementsByTagName("tbody")[0];

    // Mostrar la fase actual
    faseNombre.textContent = faseToString(copa.fase);

    // Mostrar los partidos de cada fase
    mostrarPartidos(faseNombre.textContent, tablaCuartos, tablaSemifinales, tablaFinal);
}

// Función para obtener el nombre de la fase en texto
function faseToString(fase) {
    if (fase === "cuartos") return "Cuartos de Final";
    if (fase === "semifinales") return "Semifinales";
    if (fase === "final") return "Final";
}

// Función para mostrar los partidos de acuerdo con la fase
function mostrarPartidos(fase, tablaCuartos, tablaSemifinales, tablaFinal) {
    // Limpiar las tablas
    if (tablaCuartos) tablaCuartos.innerHTML = "";
    if (tablaSemifinales) tablaSemifinales.innerHTML = "";
    if (tablaFinal) tablaFinal.innerHTML = "";

    // Mostrar partidos dependiendo de la fase seleccionada
    if (fase === "Cuartos de Final") {
        copa.cuartos.forEach(partido => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${partido.equipo1} vs ${partido.equipo2}</td>
                <td>${partido.resultado}</td>
            `;
            tablaCuartos.appendChild(row);
        });
    } else if (fase === "Semifinales") {
        copa.semifinales.forEach(partido => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${partido.equipo1} vs ${partido.equipo2}</td>
                <td>${partido.resultado}</td>
            `;
            tablaSemifinales.appendChild(row);
        });
    } else if (fase === "Final") {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${copa.final.equipo1} vs ${copa.final.equipo2}</td>
            <td>${copa.final.resultado}</td>
        `;
        tablaFinal.appendChild(row);
    }
}

// Función para cargar los partidos según la fase seleccionada
function cargarPartidos(faseSeleccionada) {
    const selectPartido = document.getElementById("partido");
    selectPartido.innerHTML = ""; // Limpiar las opciones previas

    let partidos;

    // Cargar partidos según la fase seleccionada
    if (faseSeleccionada === "cuartos") {
        partidos = copa.cuartos;
    } else if (faseSeleccionada === "semifinales") {
        partidos = copa.semifinales;
    } else if (faseSeleccionada === "final") {
        partidos = [copa.final];
    }

    // Verificamos si hay partidos para mostrar
    if (partidos) {
        partidos.forEach((partido, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = `${partido.equipo1} vs ${partido.equipo2}`;
            selectPartido.appendChild(option);
        });
    } else {
        console.error("No se encontraron partidos para esta fase");
    }
}

// Función para actualizar el resultado de un partido
document.getElementById("form-modificar")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const selectPartido = document.getElementById("partido");
    const resultado = document.getElementById("resultado").value.trim();
    const faseSeleccionada = document.getElementById("fase")?.value;
    const partidoIndex = selectPartido.value;

    if (resultado !== "") {
        if (faseSeleccionada === "cuartos") {
            copa.cuartos[partidoIndex].resultado = resultado;
        } else if (faseSeleccionada === "semifinales") {
            copa.semifinales[partidoIndex].resultado = resultado;
        } else if (faseSeleccionada === "final") {
            copa.final.resultado = resultado;
        }

        // Guardar los resultados en localStorage
        localStorage.setItem("copa", JSON.stringify(copa));
        alert("Resultado actualizado correctamente");
        mostrarCopa();
    } else {
        alert("Por favor, ingresa un resultado válido.");
    }
});

// Llamar a la función cuando la página se cargue para mostrar la copa
document.addEventListener("DOMContentLoaded", function() {
    // Primero mostramos los partidos para la fase actual
    mostrarCopa();

    // Aseguramos que se carguen los partidos de la fase seleccionada
    const faseSeleccionada = document.getElementById("fase")?.value || 'cuartos';
    cargarPartidos(faseSeleccionada);
});

// Función para cambiar la fase y cargar los partidos
document.getElementById("fase")?.addEventListener("change", function() {
    const faseSeleccionada = this.value;
    cargarPartidos(faseSeleccionada);
});

console.log("Cargando partidos para la fase:", faseSeleccionada);


