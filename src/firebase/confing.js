// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_nL2uUXHIxYqHxhWp8nz7PKcOzSlm-2Y",
  authDomain: "react-proyect-f6e8d.firebaseapp.com",
  projectId: "react-proyect-f6e8d",
  storageBucket: "react-proyect-f6e8d.firebasestorage.app",
  messagingSenderId: "306233607379",
  appId: "1:306233607379:web:ebbcf51122e78319a38026"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
//^ Exportamos de firebase toda la autenticacion
export const FirebaseAuth = getAuth( FirebaseApp )
//^ Exportamos toda la parte de la base de datos
export const FirebaseDB = getFirestore( FirebaseApp )