import { singInWithGoogle } from "../../firebase/provider"
import { checkingCrediantial } from "./AuthSlice"


export const checkingAuthtentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCrediantial())

    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCrediantial())

        singInWithGoogle();
    }
}