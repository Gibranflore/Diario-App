
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
        },
        setNote: (state, action) => {
            state.notes = action.payload      //~ Aqui se guardan las notas que se cargaron desde firebase
        },
        setSaving: (state, action) => {
            
        },
        updateNote: (state, action) => {

        },
        deleteNodeById: (state, action) => {
            
        }

    }
});

export const { addNewEmptyNote, setActivateNote, setNote,
    setSaving, updateNote, deleteNodeById, savingNewNote } = JournalSlice.actions;