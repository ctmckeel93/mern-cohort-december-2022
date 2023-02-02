import { useState, useContext } from "react";
import io from 'socket.io-client'
import { UserContext } from "../context/UserContext";
import { useEffect } from "react";
const PrivateChat = props => {
    const {user, setUser, socket} = useContext(UserContext);
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(() => {
        socket.on("private_message_response", (data) => {
            console.log("Got your message");
            setMessages((prevState) => [...prevState, data])
        })
        return () => setUser({...user, room: ""});
    }, [])
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("Sending private message");
        socket.emit("private_message", {
            user: user.username,
            room: user.room,
            message: currentMessage
        })

    }

    return (
        <div className=" container border p-4 border-dark d-flex flex-column gap-2 bg-dark" style={{height: "500px"}}>
                <div className="border p-3 border-dark text-start bg-light h-100" style={{minHeight: "300px"}} >
                    {messages.map((m, i) => (
                        <p key={i}>{m.user}: {m.message}</p>
                    ))}
                </div>
                <form onSubmit={sendMessage}>
                    <input type="text" onChange={(e) => setCurrentMessage(e.target.value)} className="form-control" />
                </form>
            </div>
    )
}

export default PrivateChat;