// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getEnvironments } from "../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//& console.log(import.meta.env); Esto imprime las variables de entorno

//& console.log(process.env); Nos ayuda en la parte del testig pero ya no funciona la web
//video 236
const {
  VITE_apiKey,
  VITE_authDomain,
  VITE_projectId,
  VITE_storageBucket,
  VITE_messagingSenderId,
  VITE_appId,
  VITE_measurementId
} = getEnvironments()



//& Produccion
// const firebaseConfig = {
//   apiKey: "AIzaSyC_nL2uUXHIxYqHxhWp8nz7PKcOzSlm-2Y",
//   authDomain: "react-proyect-f6e8d.firebaseapp.com",
//   projectId: "react-proyect-f6e8d",
//   storageBucket: "react-proyect-f6e8d.firebasestorage.app",
//   messagingSenderId: "306233607379",
//   appId: "1:306233607379:web:ebbcf51122e78319a38026"
// };

//& Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyDQDrwyCtwDEEYVxWmADkwcX5lKUZ1xj4Q",
//   authDomain: "fondoutvt.firebaseapp.com",
//   projectId: "fondoutvt",
//   storageBucket: "fondoutvt.firebasestorage.app",
//   messagingSenderId: "789444558682",
//   appId: "1:789444558682:web:3836293f5609e6163efd63",
//   measurementId: "G-DSV5KLGKL0"
// };

const firebaseConfig = {
  apiKey: VITE_apiKey,
  authDomain: VITE_authDomain,
  projectId:  VITE_projectId,
  storageBucket:  VITE_storageBucket,
  messagingSenderId: VITE_messagingSenderId,
  appId: VITE_appId,
  measurementId: VITE_measurementId
};

console.log(firebaseConfig);


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
//& Exportamos de firebase toda la autenticacion
export const FirebaseAuth = getAuth( FirebaseApp )
//& Exportamos toda la parte de la base de datos
export const FirebaseDB = getFirestore( FirebaseApp )