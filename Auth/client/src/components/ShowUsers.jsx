import {useEffect, useContext,useState} from 'react';
import { UserContext } from '../context/UserContext';
import {useNavigate} from 'react-router-dom';
import io from 'socket.io-client';
const ShowUsers = props => {
    const {user, socket} = useContext(UserContext)
    const navigate = useNavigate()
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState("")
    useEffect(() => {
                if (user.id === 0) {
                    props.setAuthorized("You have to be logged in to view that page");
                    navigate("/")
                }
                socket.on("message_received", (data) => {
                    console.log("Emitting to chat")
                    setMessages((prevState) => [...prevState, data])
                } )
                // return () => socket.disconnect(true)

    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("Sending message");
        socket.emit("send_message", {
            user: user.username,
            message: currentMessage
        });
    }

    return (
        <>
            <h1>Hello {user.username}</h1>
            <div className=" container border p-4 border-dark d-flex flex-column gap-2 bg-dark" style={{height: "500px"}}>
                <div className="border p-3 border-dark text-start bg-light h-100" style={{minHeight: "300px"}} >
                    {messages.map((m, i) => (
                        <p key={i}>{m.user === user.username ? "You" : m.user}: {m.message}</p>
                    ))}
                </div>
                <form onSubmit={sendMessage}>
                    <input type="text" onChange={(e) => setCurrentMessage(e.target.value)} className="form-control" />
                </form>
            </div>
        </>
    )
}

export default ShowUsers;