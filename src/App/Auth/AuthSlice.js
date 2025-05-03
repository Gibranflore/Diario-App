import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'auth', // Nombre del slice
    initialState: {
        status: 'no-authentication',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null, // Valor inicial
    },
    reducers: {
        login: (state, action) => {

        },
        logout: (state, payload) => {

        },
        checkingCrediantial: ( state ) => {
        state.status = 'checking';
        },
    }
});

export const { login, logout, checkingCrediantial } = AuthSlice.actions;