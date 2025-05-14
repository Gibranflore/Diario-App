
import { FirebaseDB } from '../../firebase/confing';
import { collection, doc, setDoc } from 'firebase/firestore';
import { addNewEmptyNote, savingNewNote, setActivateNote, setNote } from './journalSlice';
import { loadNotes } from '../../helpers/loadNotes';

export const startNewNote = () => {
    return async(dispatch, getState) => { //? el segundo argumeto que hay es el getState que tiene ambos reducers
        
        const { uid } = getState().auth;
        
        const newNotes = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        
        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notas` ) ); //? Se conecta a nuestra base de datos ya tiene las colecciones y documentos
        const setDocResp = await setDoc(newDoc, newNotes);                        //? setdoc palabra reservada, "newDoc" en donde lo que quiero insertar "newNotes" que quiero alamanecenar 
        
        newNotes.id = newDoc.id;                //? Aqui inserteamos el id en el objeto de "newNotes"
        
        dispatch(addNewEmptyNote( newNotes ) ); //? "nowNotes es el payload"
        dispatch(setActivateNote( newNotes ) );
        dispatch(savingNewNote())
        
    }    
}
export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe'); //? Esto lo estamos llamando desde el loadingNote
        
        const notes = await loadNotes( uid );                        //? Si el usuario no existe manda un error
        dispatch( setNote( notes ) );
    }
}
