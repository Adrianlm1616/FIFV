// liga.js

// Importa la configuración de Firebase (y db)
import { db } from '/FIFV/ASSETS/JS/firebaseConfig.js';  // Asegúrate de que la ruta sea correcta

// Función para mostrar la tabla de posiciones
function mostrarTablaPosiciones() {
    const tabla = document.getElementById("tabla-posiciones").getElementsByTagName("tbody")[0];

    // Obtener los equipos desde Firebase
    db.collection("equipos").get().then(snapshot => {
        let equipos = [];
        snapshot.forEach(doc => {
            const equipo = doc.data();
            equipos.push({
                id: doc.id,
                nombre: equipo.equipo,  // Asumimos que el nombre del equipo está en el campo 'equipo'
                partidos: equipo.PJ,
                victorias: equipo.victorias,  // Accedemos correctamente al campo de victorias
                empates: equipo.empates,  // Accedemos correctamente al campo de empates
                derrotas: equipo.derrotas,  // Accedemos correctamente al campo de derrotas
                golesFavor: equipo["goles a favor"],  // Accedemos al campo 'goles a favor'
                golesContra: equipo["goles en contra"],  // Accedemos al campo 'goles en contra'
                puntos: (equipo.victorias * 3) + equipo.empates,  // Puntos = victorias * 3 + empates
                diferenciaGol: equipo["goles a favor"] - equipo["goles en contra"]  // Diferencia de goles
            });
        });

        // Ordenar equipos según puntos, diferencia de goles y goles a favor
        equipos.sort((a, b) => {
            if (b.puntos === a.puntos) {
                if (b.diferenciaGol === a.diferenciaGol) {
                    if (b.golesFavor === a.golesFavor) {
                        return a.nombre.localeCompare(b.nombre); // Orden por nombre alfabético
                    }
                    return b.golesFavor - a.golesFavor;
                }
                return b.diferenciaGol - a.diferenciaGol;
            }
            return b.puntos - a.puntos;
        });

        // Llenar la tabla con los datos ordenados
        tabla.innerHTML = "";
        equipos.forEach((equipo, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${equipo.nombre}</td>
                <td>${equipo.partidos}</td>
                <td>${equipo.victorias}</td>
                <td>${equipo.empates}</td>
                <td>${equipo.derrotas}</td>
                <td>${equipo.golesFavor}</td>
                <td>${equipo.golesContra}</td>
                <td>${equipo.diferenciaGol}</td>
                <td>${equipo.puntos}</td>
            `;
            tabla.appendChild(row);
        });
    }).catch(error => {
        console.error("Error al obtener los equipos: ", error);
    });
}

// Llamar a la función para mostrar la tabla de posiciones al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    mostrarTablaPosiciones();
});
