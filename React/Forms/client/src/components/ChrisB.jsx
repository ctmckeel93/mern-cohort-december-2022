import React, { useState } from "react";

const ChrisForm = (props) => {
    const [myWord, setMyWord] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Input</label>
                <input onChange={(e) => setMyWord(e.target.value)} />
                <button>submit</button>
            </form>
        </div>
    );
};

export default ChrisForm;
