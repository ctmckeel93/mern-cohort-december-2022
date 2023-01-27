import {useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const ShowUsers = props => {
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8000/api/users", {withCredentials: true})
            .then(response => console.log(response))
            .catch(err => {
                console.log(err)
                props.setAuthorized("You have to be logged in to view that page");
                navigate("/")
            })
    }, [])
}

export default ShowUsers;