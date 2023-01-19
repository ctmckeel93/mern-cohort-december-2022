import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
const DisplayOne = props => {
    const {id} = useParams()
    const [candy, setCandy] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/candies/" + id )
            .then(res => setCandy(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
            <div className="border border-dark p-3">
                <h2>{candy.name}</h2>
                <p>Price: {candy.price}</p>
                <p>Description: {candy.description}</p>
            </div>
        </div>
    )
}

export default DisplayOne