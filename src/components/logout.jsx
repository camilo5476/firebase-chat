import{auth } from "../firebase"
import { signOut } from "firebase/auth"


export const Logout = () => {

    const googlelogout = () => {
        signOut(auth)
    }

    return (
        
        <button
            className="btn-login btn-logout"
            onClick={googlelogout}
        >
            <span className="material-symbols-outlined">
                 logout
            </span>
            logout
        </button>
    )
}