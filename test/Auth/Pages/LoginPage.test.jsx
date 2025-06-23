import { fireEvent, render, screen } from "@testing-library/react"

import { Provider, useDispatch } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { MemoryRouter } from 'react-router-dom'

import { authSlice } from "../../../src/App/Auth"
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../../src/App/Auth/thunk"

import { LoginPage } from "../../../src/Auth/Pages/LoginPage"
import { notAuthenticatedState } from "../../fixtures/authfixtures"

const mockstartLoginWithEmailPassword = jest.fn()
const mockStartGoogleSignIn = jest.fn()

jest.mock('../../../src/App/Auth/thunk', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({email, password}) => {
        return() => mockstartLoginWithEmailPassword({email, password});
    },
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}));

const store = configureStore({  //^ Tenemos que hacer la configuracin del sotre del compenente a evaluar
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {   //^ Nos ayuda a precargar un cierto estado del sotre
        auth: notAuthenticatedState
    }
})

describe('Pruebas en el componente loginPages', () => {

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de retornar el estado inicial', () => {
        
        render(
            <Provider store={ store } >
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )
        //screen.debug()

        expect( screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
    });

    test('EL boton de google debe llamar el startGoogleSignIn', () => {

        render(
            <Provider store={ store } >
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )

        const googlebtn = screen.getByLabelText('google-btn')
        fireEvent.click(googlebtn)
        expect(mockStartGoogleSignIn).toHaveBeenCalled()
        
    });

    test('El submit debe de llamar el startLoginWithEmailPassword', () => {

        const password = '123456';
        const email = 'gibranFlores@gmail.com'
        
        render(
            <Provider store={ store } >
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )

        const emailField = screen.getByRole('textbox', { name: 'correo' });
        fireEvent.change( emailField, { target: { name: 'email', value: email } });

        const passwordField = screen.getByTestId( password );
        fireEvent.change( passwordField, { target: {name: 'password', value: password} });

        const loginForm = screen.getByLabelText( 'submit-form' );
        fireEvent.change( loginForm );

        expect( mockstartLoginWithEmailPassword ).toHaveBeenCalled({
            email: email,
            password: password
        })
    });
}) 