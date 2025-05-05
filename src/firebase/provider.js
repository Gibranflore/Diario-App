import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./confing";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    
    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult( result ); 
        const {email, displayName, uid, photoURL} = result.user
        
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