import { useEffect, useState } from "react";
import io from 'socket.io-client'
const Chat = props => {
    const [socket] = useState(() => io(":8000"))
    const [messages, setMessages] = useState([]);
    const [msg, setMsg] = useState("");
    useEffect(() => {
        socket.emit("message_from_client", "Hello from the client");

        socket.on("data_returned_from_server", (data) => {
            console.log(data);
        })

        socket.on("sending_to_client", (data) => {
            console.log("Message received from server:", data)
            setMessages((prevState) => [...prevState, data]);
        })

        return () => socket.disconnect(true);
    },[])

    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit("sending_message", msg);
        setMsg("");
    }

    return (
        <>
        {messages.map((m, i) => {
            return <h4 key={i}>{m}</h4>
        })}
        <form onSubmit={sendMessage}>
            <input name="msg" value={msg} onChange={(e) => setMsg(e.target.value)} type="text" />
        </form>
        </>
    )

}

export default Chat;