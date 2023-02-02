import {useEffect, useContext} from 'react'
import axios from 'axios'
import  {useNavigate} from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Logout = () => {
    const {socket} = useContext(UserContext);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8000/api/logout", {withCredentials:true})
            .then(() => {
                console.log("Logged out!")
                socket.disconnect();
                navigate("/")
            })
    }, [])
}

export default Logout;