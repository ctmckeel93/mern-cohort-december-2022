import { useState } from "react";
import axios from "axios";

const Form = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const newCandy = {
            name,
            price,
            description,
        };

        axios
            .post("http://localhost:8000/api/candies", newCandy)
            .then(() => console.log("Creation successful on backend"))
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
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                        step="0.01"
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                    />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
