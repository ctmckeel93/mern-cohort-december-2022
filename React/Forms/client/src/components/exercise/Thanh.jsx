import { useState } from "react";

const Thanh = (props) => {
    const [name, setName] = useState("");

    const createName = (e) => {
        e.preventDefault();

        const newName = { name };
        console.log("Hello", name);
        setName("");
    };

    return (
        <>
            <form onSubmit={createName}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </form>
            <h3>Hello, {name}</h3>
        </>
    );
};

export default Thanh;
