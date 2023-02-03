import {useEffect, useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
const Lobby = props => {
    const {user, socket} = useContext(UserContext);
    const [rooms, setRooms] = useState([]);
    const [roomId, setRoomId] = useState("");
    const [selectedRoom, setSelectedRoom] = useState("");
    useEffect(() => {
        axios.get("http://localhost:8000/api/rooms", {withCredentials: true})
            .then(res => setRooms(res.data))
            .catch(err => console.log(err))
    }, [])

    const joinRoom  = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/rooms/add/" + roomId, {userid: user.id}, {withCredentials:true})
            .then(res => {
                console.log(res.data)
                socket.emit("join-room", selectedRoom )
            })
            .catch(err => console.log(err))
    }

    const onChangeHandler = (e) => {
        // e.preventDefault();
        setSelectedRoom(e.target.selectedOptions[0].innerText)
        setRoomId(e.target.value);
    }

    return (
        <div className="container">
            <form onSubmit={joinRoom}>
                <select onChange={onChangeHandler } className="form-control">
                    {rooms.map((room, i) => (
                        <option id={room.name} key={room._id} value={room._id}>{room.name}</option>
                    ))}
                </select>
                <button className="btn btn-success">Join</button>
            </form>
        </div>
    )
    
}

export default Lobby;