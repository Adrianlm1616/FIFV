// Verificar si hay datos almacenados en localStorage
const equipos = JSON.parse(localStorage.getItem('equipos')) || [
    { equipo: "L1", tecnico: "POR DEFINIR", partidos: 0, victorias: 0, empates: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
    { equipo: "L2", tecnico: "POR DEFINIR", partidos: 0, victorias: 0, empates: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
    { equipo: "C1", tecnico: "POR DEFINIR", partidos: 0, victorias: 0, empates: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
    { equipo: "C2", tecnico: "POR DEFINIR", partidos: 0, victorias: 0, empates: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
];

// Calcular puntos y diferencia de gol
function calcularPuntosYDiferenciaDeGol() {
    equipos.forEach(equipo => {
        equipo.diferenciaGol = equipo.golesFavor - equipo.golesContra;
        equipo.puntos = equipo.victorias * 3 + equipo.empates; // 3 puntos por victoria y 1 por empate
    });
}

// Ordenar equipos según puntos, diferencia de gol, y nombre
function ordenarEquipos() {
    equipos.sort((a, b) => {
        if (b.puntos !== a.puntos) {
            return b.puntos - a.puntos;
        } else if (b.diferenciaGol !== a.diferenciaGol) {
            return b.diferenciaGol - a.diferenciaGol;
        } else {
            return a.equipo.localeCompare(b.equipo); // Orden alfabético si hay empate en puntos y diferencia de gol
        }
    });
}

// Mostrar la tabla en el HTML
function mostrarTabla() {
    const tablaPosiciones = document.getElementById("tabla-posiciones");
    tablaPosiciones.innerHTML = ""; // Limpiar tabla

    calcularPuntosYDiferenciaDeGol();
    ordenarEquipos();

    equipos.forEach((equipo, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${equipo.equipo}</td>
            <td>${equipo.tecnico}</td>
            <td>${equipo.partidos}</td>
            <td>${equipo.victorias}</td>
            <td>${equipo.empates}</td>
            <td>${equipo.derrotas}</td>
            <td>${equipo.golesFavor}</td>
            <td>${equipo.golesContra}</td>
            <td>${equipo.diferenciaGol}</td>
            <td>${equipo.puntos}</td>
        `;
        tablaPosiciones.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", mostrarTabla);

// Función para reiniciar la tabla a cero
function reiniciarTabla() {
    // Recorre todos los equipos y pone sus estadísticas a cero
    equipos.forEach(equipo => {
        equipo.victorias = 0;
        equipo.empates = 0;
        equipo.derrotas = 0;
        equipo.golesFavor = 0;
        equipo.golesContra = 0;
        equipo.diferenciaGol = 0;
        equipo.puntos = 0;
        equipo.partidos = 0; // Reinicia los partidos jugados a 0
    });

    // Guardamos los equipos actualizados con las estadísticas en cero en localStorage
    localStorage.setItem('equipos', JSON.stringify(equipos));

    // Muestra un mensaje de éxito
    alert("La tabla ha sido reiniciada.");
    
    // Actualiza la tabla en la página
    mostrarTabla();
}

// Añadir un evento al botón "Reiniciar tabla"
document.getElementById('reiniciar-tabla').addEventListener('click', reiniciarTabla);

// Función para actualizar estadísticas cuando se envía el formulario
document.getElementById('form-config').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar la recarga de la página

    const equipoSeleccionado = document.getElementById('equipo').value;
    const partidos = parseInt(document.getElementById('partidos').value);  // Número de partidos jugados
    const victorias = parseInt(document.getElementById('victorias').value);
    const empates = parseInt(document.getElementById('empates').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);
    const golesFavor = parseInt(document.getElementById('golesFavor').value);
    const golesContra = parseInt(document.getElementById('golesContra').value);

    // Buscar el equipo en la lista y actualizar sus estadísticas
    const equipo = equipos.find(e => e.equipo === equipoSeleccionado);
    if (equipo) {
        // Sumar las nuevas estadísticas a las existentes
        equipo.partidos += partidos; // Sumar partidos jugados
        equipo.victorias += victorias;
        equipo.empates += empates;
        equipo.derrotas += derrotas;
        equipo.golesFavor += golesFavor;
        equipo.golesContra += golesContra;
    }

    // Guardar la nueva información en localStorage
    localStorage.setItem('equipos', JSON.stringify(equipos));

    alert("Estadísticas actualizadas con éxito");

    // Actualiza la tabla de posiciones en la página
    mostrarTabla();
});

// Inicializar los partidos y fechas desde localStorage, si no existe, se carga el calendario por defecto
let calendario = JSON.parse(localStorage.getItem("calendario")) || [
    { fecha: 1, equipo1: "C1", equipo2: "L2", resultado: "", terminado: false },
    { fecha: 1, equipo1: "L1", equipo2: "C2", resultado: "", terminado: false },

    { fecha: 2, equipo1: "C1", equipo2: "C2", resultado: "", terminado: false },
    { fecha: 2, equipo1: "L1", equipo2: "L2", resultado: "", terminado: false },

    { fecha: 3, equipo1: "L1", equipo2: "C1", resultado: "", terminado: false },
    { fecha: 3, equipo1: "L2", equipo2: "C2", resultado: "", terminado: false },

    { fecha: 4, equipo1: "CLAS. 1", equipo2: "CLAS. 2", resultado: "", terminado: false },
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

