import { useState } from "react";

const RosieForm = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [pizza, setPizza] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        alert(
            `My name is ${name} and I am ${age} years old. My favorite pizza is ${pizza}`
        );
    };

    return (
        <div>
            <form onSubmit={handleInput}>
                <label> Name: </label>
                <input
                    type="text"
                    name="name"
                    value={(e) => setName(e.target.value)}
                />

                <label> Age: </label>
                <input
                    type="number"
                    name="age"
                    value={(e) => setAge(e.target.value)}
                />

                <label> Pizza: </label>
                <input
                    type="text"
                    name="pizza"
                    onChange={(e) => setPizza(e.target.value)}
                />

                <button>Create</button>
            </form>
        </div>
    );
};

export default RosieForm;
