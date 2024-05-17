import { useEffect, useState } from "react"
import { auth, db } from "../firebase"
import { query, collection, onSnapshot, orderBy } from "firebase/firestore"
import { Messages } from "./messages"
import { SendMessage } from "./sendmessage"

// Componente Chat
export const Chat = () => {
    // Hook useState para manejar el estado de los mensajes
    const [messages, setMessages] = useState([])

    // Consola para verificar los mensajes en tiempo real
    console.log(messages)

    // Hook useEffect para ejecutar código al montar el componente
    useEffect(() => {
        // Crear una consulta a la colección "messages" en Firestore, ordenada por "timestamp"
        const newquery = query(collection(db, "messages"), orderBy("timestamp"))

        // Suscribirse a los cambios en la colección con onSnapshot
        const unsubscribe = onSnapshot(newquery, (querySnapshot) => {
            // Array temporal para almacenar los mensajes actuales
            let currentMessages = []
            // Recorrer cada documento en el snapshot
            querySnapshot.forEach((doc) => {
                // Agregar el contenido del documento y su ID al array temporal
                currentMessages.push({ content: doc.data(), id: doc.id })
            })
            // Actualizar el estado de los mensajes
            setMessages(currentMessages)
        }) 
        // Limpiar la suscripción al desmontar el componente
        return unsubscribe
    }, [])

    // Renderizar el contenido del chat
    return (
        <section className="chat-content">
            {
                // Verificar si hay mensajes y mapearlos para renderizar cada uno
                messages && messages.map((message) => {
                    return (<Messages key={message.id} message={message.content} />)
                })
            }
            {/* Componente para enviar mensajes */}
            <SendMessage />
        </section>
    )
}
