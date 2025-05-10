import { singInWithGoogle, registerUserWithEmailPassward, loginWithEmailPassword } from "../../firebase/provider"
import { checkingCrediantial, login, logout } from "./AuthSlice"


export const checkingAuthtentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch(checkingCrediantial())

    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

    dispatch(checkingCrediantial())

    const result = await singInWithGoogle();

        if(!result.ok) dispatch( logout( result.errorMessage ))

        dispatch( login( result ))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async( dispatch ) => {

        dispatch(checkingCrediantial())

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassward({ email, password, displayName})
        
        if(!ok) return dispatch( logout({errorMessage})) //* si el usuario existe manda el error

        dispatch( login( { uid, email, displayName, photoURL } ) )
        
    }

}

export const startLoginWithEmailPassword = ({ email, password}) => {
    return async( dispatch ) => {

        dispatch(checkingCrediantial());

        const result = await loginWithEmailPassword({ email, password})
        console.log(result);
        
        if(!result.ok) return dispatch(logout(result))
        dispatch( login ( result ) )
    }
}