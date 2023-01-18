import { useState, useEffect } from "react";
import axios from "axios";

const DisplayList = (props) => {
    const [candyList, setCandyList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/candies")
            .then((response) => setCandyList(response.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            {candyList.length > 0 &&
                candyList.map((candy, index) => <h1>{candy.name}</h1>)}
        </div>
    );
};
export default DisplayList;
