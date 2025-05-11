import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./confing";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    
    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult( result ); 
        const {email, displayName, uid, photoURL} = result.user
        await updateProfile(FirebaseAuth.currentUser,{displayName}) //? En FireBase para saber nuestro ussuario actual esto es lo que se usa, para actualiazar al ususario es "FirebaseAuth.currentUset,{displayName}"

        return {
            ok: true,
            email, displayName, uid, photoURL
        }

    } catch (error) {
        
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage

        }
    }
} 

export const registerUserWithEmailPassword = async({email, password, displayName}) => {

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user
        await updateProfile(FirebaseAuth.currentUser, {displayName})

        return {
            ok: true,
            email, displayName, uid, photoURL
        }
        
    } catch (error) {
        console.log(error)
        return  { ok: false, errorMessage: error.message} //? Aqui va el mensahe de error personalozado en devtoolRedux
    }

}

export const loginWithEmailPassword = async({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL, displayName} = resp.user

        return { ok: true, uid, photoURL, displayName}
        
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}
