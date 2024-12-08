// Función para actualizar las estadísticas de un equipo
document.getElementById("form-config").addEventListener("submit", function(event) {
    event.preventDefault();

    const equipo = document.getElementById("equipo").value;
    const partidos = document.getElementById("partidos").value;
    const victorias = document.getElementById("victorias").value;
    const empates = document.getElementById("empates").value;
    const derrotas = document.getElementById("derrotas").value;
    const golesFavor = document.getElementById("golesFavor").value;
    const golesContra = document.getElementById("golesContra").value;

    // Actualizar los datos del equipo en Firebase
    db.collection("equipos").doc(equipo).set({
        partidos: parseInt(partidos),
        victorias: parseInt(victorias),
        empates: parseInt(empates),
        derrotas: parseInt(derrotas),
        golesFavor: parseInt(golesFavor),
        golesContra: parseInt(golesContra)
    }).then(() => {
        alert("Estadísticas actualizadas exitosamente");
    }).catch(error => {
        console.error("Error al actualizar estadísticas: ", error);
    });
});

// Función para actualizar el resultado de un partido
document.getElementById("form-modificar").addEventListener("submit", function(event) {
    event.preventDefault();

    const partidoIndex = document.getElementById("partido").value;
    const resultado = document.getElementById("resultado").value.trim();

    if (resultado !== "") {
        // Aquí se asume que tienes un array o una lista de partidos en Firebase
        db.collection("partidos").doc(partidoIndex).update({
            resultado: resultado,
            terminado: true
        }).then(() => {
            alert("Resultado actualizado exitosamente");
        }).catch(error => {
            console.error("Error al actualizar resultado: ", error);
        });
    }
});
