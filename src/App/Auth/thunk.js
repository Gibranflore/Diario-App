import { singInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from "../../firebase/provider"
import { cleanNoteLogout } from "../journal"
import { checkingCredentials, login, logout } from "./AuthSlice"


export const checkingAuthtentication = ( ) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials())

    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

    dispatch(checkingCredentials())

    const result = await singInWithGoogle();

        if(!result.ok) return dispatch( logout( result.errorMessage ))

        dispatch( login( result ))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async( dispatch ) => {

        dispatch(checkingCredentials())

        const result = await registerUserWithEmailPassword({ email, password, displayName})
        if(!result.ok) return dispatch( logout(result.errorMessage)) //* si el usuario existe manda el error

        dispatch( login( result ) )
        
    }

}

export const startLoginWithEmailPassword = ({ email, password}) => {
    return async( dispatch ) => {

        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password})
        console.log(result);
        
        if(!result.ok) return dispatch( logout( result ) )
        dispatch( login ( result ) )
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();

        dispatch( cleanNoteLogout() )
        dispatch( logout() );

    }
}
