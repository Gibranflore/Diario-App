

export const jouralState = {
        satus:       'empty',
        isSaving:    false, //~ Valor inicial
        notes:       [],    //~ array para las notas
        messageSave: '',    //~ mensaje de error
        active:      null,  //~ la nota estara activa

};

export const completeNotes = {
        satus:       'complete',
        isSaving:    true, //~ Valor inicial
        notes:       ['nota salvada'],    //~ array para las notas
        messageSave: null,    //~ mensaje de error
        active:      null,  //~ la nota estara activa
}

