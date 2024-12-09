// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjcVSfnYWXoGPKOk_EQK4Izi8X03WnhZI",
    authDomain: "base-de-datos-tabla-liga.firebaseapp.com",
    projectId: "base-de-datos-tabla-liga",
    storageBucket: "base-de-datos-tabla-liga.firebasestorage.app",
    messagingSenderId: "188257281968",
    appId: "1:188257281968:web:6d8da10fd7aa9645015875",
};

// Inicialización de Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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
                nombre: equipo.equipo,
                partidos: equipo.PJ,
                victorias: equipo.V,
                empates: equipo.E,
                derrotas: equipo.D,
                golesFavor: equipo.GF,
                golesContra: equipo.GC,
                puntos: (equipo.V * 3) + (equipo.E), // Puntos = victorias * 3 + empates
                diferenciaGol: equipo.GF - equipo.GC
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
        tabla.innerHTML = ""; // Limpiar la tabla antes de agregar nuevos datos
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

// Función para actualizar las estadísticas de un equipo
document.getElementById("form-config").addEventListener("submit", function(event) {
    event.preventDefault();

    const equipo = document.getElementById("equipo").value;
    const partidos = parseInt(document.getElementById("partidos").value);
    const victorias = parseInt(document.getElementById("victorias").value);
    const empates = parseInt(document.getElementById("empates").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);
    const golesFavor = parseInt(document.getElementById("golesFavor").value);
    const golesContra = parseInt(document.getElementById("golesContra").value);

    // Obtener el equipo desde Firebase
    const equipoRef = db.collection("equipos").doc(equipo);

    // Obtener los datos actuales del equipo
    equipoRef.get().then(doc => {
        if (doc.exists) {
            const equipoActual = doc.data();

            // Sumar las estadísticas a las existentes
            const nuevosPartidos = equipoActual.PJ + partidos;
            const nuevasVictorias = equipoActual.V + victorias;
            const nuevosEmpates = equipoActual.E + empates;
            const nuevasDerrotas = equipoActual.D + derrotas;
            const nuevosGolesFavor = equipoActual.GF + golesFavor;
            const nuevosGolesContra = equipoActual.GC + golesContra;

            // Actualizar los datos en Firebase
            equipoRef.update({
                PJ: nuevosPartidos,
                V: nuevasVictorias,
                E: nuevosEmpates,
                D: nuevasDerrotas,
                GF: nuevosGolesFavor,
                GC: nuevosGolesContra
            }).then(() => {
                alert("Estadísticas actualizadas correctamente");
                mostrarTablaPosiciones(); // Actualizar la tabla de posiciones
            }).catch(error => {
                console.error("Error al actualizar las estadísticas: ", error);
            });
        } else {
            console.log("El equipo no existe en la base de datos.");
        }
    });
});

// Función para reiniciar la tabla de posiciones
document.getElementById("reiniciar-tabla").addEventListener("click", function() {
    db.collection("equipos").get().then(snapshot => {
        snapshot.forEach(doc => {
            const equipoRef = db.collection("equipos").doc(doc.id);
            equipoRef.update({
                PJ: 0,
                V: 0,
                E: 0,
                D: 0,
                GF: 0,
                GC: 0
            }).then(() => {
                console.log(`Estadísticas del equipo ${doc.id} reiniciadas.`);
            }).catch(error => {
                console.error("Error al reiniciar estadísticas: ", error);
            });
        });
        mostrarTablaPosiciones(); // Mostrar la tabla reiniciada
    });
});

// Llamar a la función para mostrar la tabla de posiciones al cargar la página
window.onload = function() {
    mostrarTablaPosiciones();
};
