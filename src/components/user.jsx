import { Login } from "./login"
import { Logout } from "./logout"
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";



export const User = () => {
    const [user] = useAuthState(auth);
    console.log(user)

    const image = user ? user.photoURL : "../3.png";
    const name = user ? user.displayName : "name user";
    
    return (
        <div className="right-side">
            <h1>QiukChat</h1>
            <article>
                <img src={image} alt="user" referrerPolicy="no-referrer" />
                <p>{name}</p>
                {user ? <Logout /> : <Login />}
            </article>
        </div>
    )

}