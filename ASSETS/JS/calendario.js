// Cargar el calendario desde Firebase
function mostrarCalendario() {
    const tabla = document.getElementById("calendario").getElementsByTagName("tbody")[0];

    // Obtener los partidos desde Firebase
    db.collection("partidos").get().then(snapshot => {
        snapshot.forEach(doc => {
            const partido = doc.data();
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
    }).catch(error => {
        console.error("Error al obtener los partidos: ", error);
    });
}
