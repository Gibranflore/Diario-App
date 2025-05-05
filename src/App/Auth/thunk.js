import { singInWithGoogle } from "../../firebase/provider"
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
        if(!result.ok) 
        dispatch( logout( result.errorMessage ))
        dispatch( login( result ))
    }
}