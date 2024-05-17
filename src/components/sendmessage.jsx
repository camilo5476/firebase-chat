import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db, auth } from "../firebase"

export const SendMessage = () => {
    const [input, setinput] = useState('')

    const SendMessage = async (e) => {
        e.preventDefault();
        const {uid, displayName, photoURL } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name : displayName,
            uid,
            photo : photoURL,
            timestamp : serverTimestamp()
        })
        setinput('')

    }
    return (
        <form onSubmit={ SendMessage}>
            <input type="text" 
                placeholder="Escribe tu mensaje"
                className="input-message"
                value={input}
                onChange={e => setinput(e.target.value)}
            />
            <button type="submit">
                Send
            </button>
        </form>
    )
}