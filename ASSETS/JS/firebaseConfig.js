// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBjcVSfnYWXoGPKOk_EQK4Izi8X03WnhZI",
    authDomain: "base-de-datos-tabla-liga.firebaseapp.com",
    projectId: "base-de-datos-tabla-liga",
    storageBucket: "base-de-datos-tabla-liga.firebasestorage.app",
    messagingSenderId: "188257281968",
    appId: "1:188257281968:web:6d8da10fd7aa9645015875",
    measurementId: "G-RD3TFS6BNY"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
