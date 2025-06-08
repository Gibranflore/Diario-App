import { checkingCredentials, login, logout } from "../../../src/App/Auth/AuthSlice"
import { checkingAuthtentication, startCreatingUserWithEmailPassword, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/App/Auth/thunk"
import { cleanNoteLogout } from "../../../src/App/journal"
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../../src/firebase/provider"
import { demoUser } from "../../fixtures/authfixtures"

jest.mock('../../../src/firebase/provider')     //^ LLamamos la ruta de funciones de google para hacer las pruebas

describe('Pruebas en los thunks', () => {
    
    const dispatch = jest.fn();                 //^ Simulasmos el dispathc con el mock su funcion llama "checkingCredentials" & "checkingAuthtentication"

    beforeEach( () => jest.clearAllMocks() );   //^ Esto limpia los mocks una vez que termina las pruebas

    test('Pruebas en el checkingAuthtentication', async() => {
        
        await checkingAuthtentication()(dispatch) //^ Esto es una funcion que devuelve una funcion que recibe dispatch

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials()) //^ Esto verifica que se haya llamado una vez 
    });

    test('startGoogleSignIn debe de llamar checkingAuthtentication y el login EXITO', async() => {

        const loginData = {ok: true, ...demoUser }
        await singInWithGoogle.mockResolvedValue(loginData)
        await startGoogleSignIn()(dispatch);     //^ Lleva doble parentecis por que la primera es de la funcion

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() )
        expect(dispatch).toHaveBeenCalledWith( login( loginData ) )
    });

    test('startGoogleSignIn debe de llamar checkingAuthtentication y el logout ERROR', async() => {

        const loginData = {ok: false, errorMessage: 'Error en google' }

        await singInWithGoogle.mockResolvedValue(loginData);
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() )
        expect(dispatch).toHaveBeenCalledWith( logout(loginData.errorMessage) )
        
    });

    test('startLoginWithEmailPassword debe de llamar checkingCredentials y Login -EXITO', async() => {

        const loginData = {ok: true, ...demoUser }
        const formData  = { email: demoUser.email, password: '123456'}

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() )
        expect(dispatch).toHaveBeenCalledWith( login(loginData) )
        
    });

    test('startLoginWithEmailPassword debe de llamar checkingCredentials y Logout -ERROR', async() => {

        const loginData = {ok: false, ...demoUser }
        const formData  = { email: demoUser.email, password: '123456'}

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout( loginData ))

    });
    
    test('startLogout debe de llamar logoutFirebase cleanNoteLogout y logout -ERROR', async() => {
        
        
        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(cleanNoteLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());
        
    });

    test('startCreatingUserWithEmailPassword', async() => {

        const loginData = {ok: false, ...demoUser }
        const formData  = { 
            email: demoUser.email, 
            password: '123456', 
            displayName: demoUser.displayName,
            errorMessage: 'No Es posible crear usuario' 
            }

        await registerUserWithEmailPassword.mockResolvedValue(loginData);

        await startCreatingUserWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));

    });
})
