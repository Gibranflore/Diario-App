import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../firebase/confing";


export const loadNotes = async( uid = '') => {
    if ( !uid ) throw new Error('El UID del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notas` ); //^ "getDocs" es una palabra reservada no confundir con "getDoc"
    const docs = await getDocs(collectionRef); //^ Esto nos ayuda para apuntar a una coleccion de nuestro firebase
                                               //^ Los docs es la referencia de los documentos a firebase

    const notas = [];
    docs.forEach(doc => {
        notas.push({ id: doc.id, ...doc.data() })
    })
        

    console.log({ notas });
        return notas;
    
    
}
