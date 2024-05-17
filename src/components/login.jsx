import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

export const Login = () => {

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    return (
        <button 
            className="btn-login"
            onClick={googleLogin}
        >   
            <span className="material-symbols-outlined">
                login
            </span>
            Sign in with Google
        </button>
    );
};
