import { authSlice, checkingCredentials, login, logout } from "../../../src/App/Auth/AuthSlice"
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authfixtures"

describe('Pruebas en el AuthSlice Redux', () => {

    test('Debemos de comprobar el estado inicial y llamarse "auth"', () => {

        const state = authSlice.reducer( initialState, {} );     //^ LLamaos al authFixtures el objeto initialState
        
        expect( state ).toEqual( initialState );                 //^ Aqui el estado es igual al estado inicial    
        expect( authSlice.name ).toBe('auth');                   //^ Aqui llamamos a nuesto slice y extraemos el name tiene que ser igual

    });

    test('Probar si estamos autenticados', () => {

        // console.log(login(demoUser));                         //^ El login lo impotamos de login y el demouser de authfixture
        const state = authSlice.reducer( initialState, login( demoUser ))
        expect ( state ).toEqual({
                status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
                uid:          demoUser.uid,
                email:        demoUser.email,
                displayName:  demoUser.displayName,
                photoURL:     demoUser.photoURL,
                errorMessage: null,
        });
    });

    test('Debe de realizar el logout sin argumentos', () => {

        const state = authSlice.reducer( authenticatedState, logout( ))
        expect (state).toEqual({
            ...notAuthenticatedState,
            errorMessage: undefined,
        });
    });

    test('Debe de raealizar el logout con argumentos', () => {

        const errorMessage = 'Las credenciales no son correctas'
        const state = authSlice.reducer(initialState, logout({errorMessage}))

        expect (state).toEqual({
            ...notAuthenticatedState,
            errorMessage: errorMessage,
        });
    });

    test('El estado debe estar en checking', () => {

        const state = authSlice.reducer( authenticatedState, checkingCredentials() )

        expect(state.status).toBe('checking')
    })

})