// Importar los módulos necesarios de Firebase
import { initializeApp } from 'firebase/app'; // Inicialización de la app
import { getFirestore } from 'firebase/firestore'; // Firestore para bases de datos
import { getAnalytics } from 'firebase/analytics'; // Si quieres usar Analytics

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBjcVSfnYWXoGPKOk_EQK4Izi8X03WnhZI",
    authDomain: "base-de-datos-tabla-liga.firebaseapp.com",
    projectId: "base-de-datos-tabla-liga",
    storageBucket: "base-de-datos-tabla-liga.firebasestorage.app",
    messagingSenderId: "188257281968",
    appId: "1:188257281968:web:3ac616cb977efffe015875",
    measurementId: "G-ZPL869JV08"
  };

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Obtener la referencia a Firestore
const analytics = getAnalytics(app);  // Inicializar Analytics (si lo usas)

export { db };

// Datos de los equipos
const equiposData = [
  {
    id: "5NnFdKoTb6WzdHN1QSJv", 
    equipo: "Bayern Munich", 
    datos: {
      PJ: 0,
      derrotas: 0,
      diferenciaDeGol: 0,
      empates: 0,
      equipo: "Bayern Munich",
      golesAFavor: 0,
      golesEnContra: 0,
      posicion: 5,
      puntos: 0,
      tecnico: "Carlos Ortega",
      victorias: 0
    }
  },
  {
    id: "gBRIpxKUpmNHWz0bKbXt",
    equipo: "Arsenal", 
    datos: {
      PJ: 0,
      derrotas: 0,
      diferenciaDeGol: 0,
      empates: 0,
      equipo: "Arsenal",
      golesAFavor: 0,
      golesEnContra: 0,
      posicion: 1,
      puntos: 0,
      tecnico: "Adrian Lara",
      victorias: 0
    }
  },
    {
        id: "KLh3R1Ja9Nq0bJHL31sP", // Reemplaza con los otros IDs de los equipos
        equipo: "Chelsea", 
        datos: {
          PJ: 0,
          derrotas: 0,
          diferenciaDeGol: 0,
          empates: 0,
          equipo: "Chelsea",
          golesAFavor: 0,
          golesEnContra: 0,
          posicion: 7,
          puntos: 0,
          tecnico: "Juan Torres",
          victorias: 0
        }
      },
      {
        id: "KmW8GvyyHfCy4vi4xBc0", // Reemplaza con los otros IDs de los equipos
        equipo: "Man. City", 
        datos: {
          PJ: 0,
          derrotas: 0,
          diferenciaDeGol: 0,
          empates: 0,
          equipo: "Man. City",
          golesAFavor: 0,
          golesEnContra: 0,
          posicion: 3,
          puntos: 0,
          tecnico: "Jorge Castro",
          victorias: 0
        }
      },
      {
        id: "R85mXznHXGsyRLOKFJ3r", // Reemplaza con los otros IDs de los equipos
        equipo: "Atl. Madrid", 
        datos: {
          PJ: 0,
          derrotas: 0,
          diferenciaDeGol: 0,
          empates: 0,
          equipo: "Atl. Madrid",
          golesAFavor: 0,
          golesEnContra: 0,
          posicion: 2,
          puntos: 0,
          tecnico: "Juan Muñoz",
          victorias: 0
        }
      },
      {
        id: "TLrsW2JE2boWZd1ADkt9", // Reemplaza con los otros IDs de los equipos
        equipo: "Barcelona", 
        datos: {
          PJ: 0,
          derrotas: 0,
          diferenciaDeGol: 0,
          empates: 0,
          equipo: "Barcelona",
          golesAFavor: 0,
          golesEnContra: 0,
          posicion: 8,
          puntos: 0,
          tecnico: "por elegir",
          victorias: 0
        }
      },
      {
        id: "VeK6BQqhhiyFw2kLJksj", // Reemplaza con los otros IDs de los equipos
        equipo: "PSG", 
        datos: {
          PJ: 0,
          derrotas: 0,
          diferenciaDeGol: 0,
          empates: 0,
          equipo: "PSG",
          golesAFavor: 0,
          golesEnContra: 0,
          posicion: 6,
          puntos: 0,
          tecnico: "Daniel Fandiño",
          victorias: 0
        }
      },
      {
        id: "ZRXT5TZBOi9svUtqfoSa", // Reemplaza con los otros IDs de los equipos
        equipo: "Liverpool", 
        datos: {
          PJ: 0,
          derrotas: 0,
          diferenciaDeGol: 0,
          empates: 0,
          equipo: "Liverpool",
          golesAFavor: 0,
          golesEnContra: 0,
          posicion: 4,
          puntos: 0,
          tecnico: "Camilo Paez",
          victorias: 0
        }
      }, 
    // Agregar los datos de los demás equipos
    // ...
  ];
  
// Guardar los datos de los equipos en Firestore
equiposData.forEach((equipo) => {
    db.collection("equipos").doc(equipo.id).set(equipo.datos)
      .then(() => {
        console.log(`Datos de ${equipo.equipo} guardados correctamente.`);
      })
      .catch((error) => {
        console.error(`Error al guardar los datos de ${equipo.equipo}: `, error);
      });
  });
  
  export { db };  // Exportar Firestore para usarlo en otros archivos si es necesario
  