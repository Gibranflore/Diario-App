import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/confing";
import { login, logout } from "../App/Auth/AuthSlice";
import { startLoadingNotes } from "../App/journal";




export const useChecking = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged( FirebaseAuth, async(user) => {
            if (!user) return dispatch( logout( ) ); 

            const {uid, email, photoURL, displayName} = user;
                dispatch( login( { uid, email, photoURL, displayName} ) );
                dispatch( startLoadingNotes() ); // *esto lo mandamos a llamar desde el thunk
        })

    }, []);
    return status
}
