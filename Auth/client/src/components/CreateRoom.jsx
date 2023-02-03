import { UserContext } from "../context/UserContext"
import { useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const CreateRoom = (props) => {
    const navigate = useNavigate()
    const {user, setUser, socket} = useContext(UserContext);
    const [roomName, setRoomName] = useState("");
    const [passKey, setPasskey] = useState("");

    useEffect(() => {
        if (roomName !== "") {
            navigate('/rooms/' + user.room);
        }
    }, [user])
    
    const chooseRoom = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/rooms", {
            name: roomName,
            passKey,
            host: user.id,
            membersJoined: [user.id]
        }, {withCredentials:true})
        console.dir(e.target)
        setUser({...user, room: roomName})

        socket.emit("join_room", roomName)
    } 
    return (
        <form onSubmit={(e) => chooseRoom(e)}>
            <label className="form-label">Room Name</label>
            <input name="name" type="text" onChange={(e) => setRoomName(e.target.value)} value={roomName} className="form-control" />
            <label>Pass Key</label>
            <input type="text" name="passKey" value={passKey} onChange={(e) => setPasskey(e.target.value)} />
            <button className="btn btn-dark">Create Room</button>
        </form>
    )
}

export default CreateRoom;