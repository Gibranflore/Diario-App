import { checkingCrediantial } from "./AuthSlice"


export const checkingAuthtentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCrediantial())

    }
}