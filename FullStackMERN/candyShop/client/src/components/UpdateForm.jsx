import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';


const UpdateForm = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/candies/" + id)
            .then(res => {
                setName(res.data.name)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log("Something went wrong", err))
    }, [])
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const newCandy = {
            name,
            price,
            description,
        };

        axios
            .put("http://localhost:8000/api/candies/" + id, newCandy)
            .then(() => console.log("Update successful on backend"))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Form component</h1>

            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        value={name}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                        step="0.01"
                        value={price}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        value={description}
                    />
                </div>
                <div>
                    <button>Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateForm;
