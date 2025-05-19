
import { createSlice } from '@reduxjs/toolkit';

export const JournalSlice = createSlice({
  name: 'journal',   //~ Nombre del slice
    initialState: {
        isSaving:    false, //~ Valor inicial
        notes:       [],    //~ array para las notas
        messageSave: '',    //~ mensaje de error
        active:      null,  //~ la nota estara activa

    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true
        },

        addNewEmptyNote: (state, action) => { //~ Para poder usar cada uno de los reducer hay que exportalo abajo
            state.notes.push(action.payload); //~ Insertamos una nueva nota, el payload sera datos que pondra el ususrio
            state.isSaving = false;           //~ Aqui sera el combio de si se guardo
        },

        setActivateNote: (state, action) => {
            state.active = action.payload     //~ Esto es la nota activa para veral en la pagina, hace el cambio de activar
            state.messageSave = '';
        },

        setNote: (state, action) => {
            state.notes = action.payload      //~ Aqui se guardan las notas que se cargaron desde firebase
        },

        setSaving: ( state ) => {             //~ Esto es para guardar la nota
            state.isSaving = true;
            state.messageSave = '';
        },

        updateNote: (state, action) => {      //~ Esto es para actualizar la nota
            state.isSaving = false;
            
            state.notes = state.notes.map( note => { 

                if (note.id === action.payload.id) {
                    return action.payload; 
                }
                return note;                  //~ Es importante retornar la nota o dara error al hacer clic en las demas
            });

            state.messageSave = `${action.payload.title}, Se actualizo correctamente`
        },

        setPhotosToActiveNote: (state, action) => {
            state.active.imageURL = [ ...state.active.imageURL, ...action.payload ]; //~ Conservamos las imagenes anteriores y mandamos las nuevas imagenes
            state.isSaving = false;
        },

        deleteNodeById: (state, action) => {

        },
    }
});

export const { addNewEmptyNote, setActivateNote, setNote, setPhotosToActiveNote,
    setSaving, updateNote, deleteNodeById, savingNewNote } = JournalSlice.actions;