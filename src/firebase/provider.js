import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./confing";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    
    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult( result ); 
        const {email, displayName, uid, photoURL} = result.user
        await updateProfile(FirebaseAuth.currentUset,{displayName}) //? En FireBase para saber nuestro ussuario actual esto es lo que se usa, para actualiazar al ususario es "FirebaseAuth.currentUset,{displayName}"

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

export const registerUserWithEmailPassward = async({email, password, displayName}) => {

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user
        console.log(resp)

        return {
            ok: true,
            email, displayName, uid, photoURL
        }
        
    } catch (error) {
        console.log(error)
        return  {ok: false, error: error.message} //? Aqui va el mensahe de error personalozado en devtoolRedux
    }

}