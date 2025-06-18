import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { addNewEmptyNote, savingNewNote, setActivateNote } from "../../../src/App/journal/journalSlice";
import { startNewNote } from "../../../src/App/journal/thunk";
import { FirebaseDB } from "../../../src/firebase/confing";


describe('Pruebas en Journal Thunks', () => {

    const dispatch = jest.fn(); //^ Sirve para crear funciones simuladas, para enviar acciones a la store 
    const getState = jest.fn(); //^ Para obtener el estado actual de la app

    beforeEach( () => jest.clearAllMocks() );

    test('startNewNote debe de crear una nueva nota en blanco', async() => {

        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid: uid } });

        await startNewNote()( dispatch, getState );

        expect( dispatch ).toHaveBeenCalledWith( savingNewNote() );
        expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({
            body: '',
            title:'',
            id: expect.any( String ),
            date: expect.any( Number ),
        }));
        expect( dispatch ).toHaveBeenCalledWith( setActivateNote({
            body: '',
            title:'',
            id: expect.any( String ),
            date: expect.any( Number ),
        }));

        // Borrar de firebase
        const collectionRef = collection( FirebaseDB, `${ uid }/journal/notas`);
        const docs = await getDocs( collectionRef );
        
        const deletePromise = []
        docs.forEach( docs => deletePromise.push( deleteDoc( doc.ref ) ) );
        await Promise.all(deletePromise);   //^ Esto va a borrar todas las notas que tengamos en la coleccion
        

    });

    test('Pruebas para el journal thunk en startLoadingNotes', () => {

    });

    test('Pruebas para el journal thunk en  startSvingNote', () => {

    });

    test('Pruebas para el journal thunk en  SavingImageFileLoad', () => {
        
    });

    test('Pruebas para el journal thunk en  startDeleteNote', () => {
        
    });
}); 