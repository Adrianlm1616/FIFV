// Cargar la tabla de posiciones desde Firebase
function mostrarTablaPosiciones() {
    const tabla = document.getElementById("tabla-posiciones").getElementsByTagName("tbody")[0];

    // Obtener los equipos desde Firebase
    db.collection("equipos").get().then(snapshot => {
        snapshot.forEach(doc => {
            const equipo = doc.data();
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${doc.id}</td>
                <td>${equipo.partidos}</td>
                <td>${equipo.victorias}</td>
                <td>${equipo.empates}</td>
                <td>${equipo.derrotas}</td>
                <td>${equipo.golesFavor}</td>
                <td>${equipo.golesContra}</td>
            `;
            tabla.appendChild(row);
        });
    }).catch(error => {
        console.error("Error al obtener los equipos: ", error);
    });
}
