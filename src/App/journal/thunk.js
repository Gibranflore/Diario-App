
import { FirebaseDB } from '../../firebase/confing';
import { collection, doc, setDoc } from 'firebase/firestore';
import { addNewEmptyNote, savingNewNote, setActivateNote, setNote, setPhotosToActiveNote, setSaving, updateNote } from './journalSlice';
import { loadNotes } from '../../helpers/loadNotes';
import { fileUpload } from '../../helpers';

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
export const startLoadingNotes = () => {        //? Esto es para cargar las notas
    return async( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe'); //? Esto lo estamos llamando desde el loadingNote
        
        const notes = await loadNotes( uid );                        //? Si el usuario no existe manda un error
        dispatch( setNote( notes ) );
    }
}

export const startSvingNote = () => {               //? Esto es nuestro thunk para guardar la nota
    return async(dispatch, getState) => {

        dispatch(savingNewNote());                  //? Esto es para guardar la nota

        const { uid } = getState().auth;            //? Esto es para obtener el uid del usuario
        const { active:note } = getState().Journal; //? Esto es para obtener la nota activa

        const noteToFireStore = { ...note };        //? Esto es para obtener la nota activa y guardarla en una variable 
        delete noteToFireStore.id;                 //? Esto es para eliminar el id de la nota activa

        console.log(noteToFireStore);
        const docRef = doc( FirebaseDB, `${uid}/journal/notas/${note.id}` ); //? Esto es para obtener el documento de la nota activa
        await setDoc( docRef, noteToFireStore, {merge: true} );              //? Esto es para guardar la nota activa en la base de datos

        dispatch( updateNote( note ) ); //? Esto es para actualizar la nota llama al slice "UPDATENOTE"
    }
}

//? Esto hace que la aplicacion bloque los botones cuando esta en estado de carga
export const SavingImageFileLoad = ( files = [] ) => {
    return async(  dispatch ) => {
        dispatch( setSaving() );        
        
        // await fileUpload(files[0])

        const fileUpLoadPromise = [];   
        for (const file of files) {
            fileUpLoadPromise.push( fileUpload( file ) );
        }
        const photoUrls = await Promise.all(fileUpLoadPromise ); 
        console.log(photoUrls);
        
        dispatch(setPhotosToActiveNote(photoUrls))
    }
}
//? Es un arreglo con todas las imgenes y se suben en secuencia si subimos varias
//? Esto es lo que voy a mandar a la nota