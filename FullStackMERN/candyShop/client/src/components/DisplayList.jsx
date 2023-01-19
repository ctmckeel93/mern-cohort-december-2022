import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const DisplayList = (props) => {
    const [candyList, setCandyList] = useState([]);

    const deleteCandy = (candyId) => {
        axios.delete("http://localhost:8000/api/candies/" + candyId)
            .then(() => {
                console.log("Successfully deleted from the backend")
                removeFromDom(candyId)
            })
            .catch(err => console.log("Something went wrong", err))
    }

    const removeFromDom = (candyId) => {
        setCandyList(candyList.filter(c => c._id !== candyId))
    }

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/candies")
            .then((response) => setCandyList(response.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            {candyList.length > 0 &&
                candyList.map((candy, index) => (
                <>
                    <Link to={'/candies/' + candy._id}><h1>{candy.name}</h1></Link>
                    <Link to={'/candies/update/' + candy._id}>Update</Link>
                    <button onClick={() => deleteCandy(candy._id)}>Delete</button>
                </>    
                )
                )}
        </div>
    );
};
export default DisplayList;
