import { addNewEmptyNote, cleanNoteLogout, deleteNoteById, JournalSlice, savingNewNote, setActivateNote, setNote, setPhotosToActiveNote, setSaving, updateNote } from "../../../src/App/journal"
import { completeNotes, jouralState } from "../../fixtures/journalFixtures";



describe('Pruabas para el journalSlice', () => {

    test('Comprobar que se llame journal y el estado inicial', () => {

        expect( JournalSlice.name).toEqual('journal')

        const state = JournalSlice.reducer(jouralState,{})
        expect(state).toEqual(jouralState)
    });

    test('Pruebas al journalSlice en addNewEmptyNote', () => {

        // const state = jouralState.reducer( jouralState, setSaving() )
    });

    test('Pruebas al journalSlice en cleanNoteLogout', () => {

    });

    test('Pruebas al journalSlice en deleteNoteById', () => {

    });
});
