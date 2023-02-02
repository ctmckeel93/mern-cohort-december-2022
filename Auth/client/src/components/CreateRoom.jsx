import { UserContext } from "../context/UserContext"
import { useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
const CreateRoom = (props) => {
    const navigate = useNavigate()
    const {user, setUser, socket} = useContext(UserContext);
    const [room, setRoom] = useState("")

    useEffect(() => {
        if (room !== "") {
            navigate('/rooms/' + user.room);
        }
    }, [user])
    
    const chooseRoom = (e) => {
        e.preventDefault();
        console.dir(e.target)
        setUser({...user, room: room})
        socket.emit("join_room", room)
    } 
    return (
        <form onSubmit={(e) => chooseRoom(e)}>
            <label className="form-label">Enter room key</label>
            <input type="text" onChange={(e) => setRoom(e.target.value)} value={room} name="room" className="form-control" />
            <button className="btn btn-dark">Set Room</button>
        </form>
    )
}

export default CreateRoom;