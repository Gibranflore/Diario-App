import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'auth', // Nombre del slice
    initialState: {
        status: 'no-authentication',
        uid:          null,
        email:        null,
        displayName:  null,
        photoURL:     null,
        errorMessage: null, // Valor inicial
    },
    reducers: {
        login: (state, {payload}) => {
            state.status       = 'authtenticated';
            state.uid          = payload.uid;
            state.email        = payload.email;
            state.displayName  = payload.displayName;
            state.photoURL     = payload.photoURL;
            state.errorMessage = null; // Valor inicial
        },
        logout: (state, {payload}) => {
            state.status       = 'no-authentication';
            state.uid          = null;
            state.email        = null;
            state.displayName  = null;
            state.photoURL     = null;
            state.errorMessage = payload.errorMessage // Valor inicial
        },
        checkingCrediantial: ( state ) => {
        state.status = 'checking';
        },
    }
});

export const { login, logout, checkingCrediantial } = AuthSlice.actions;