import React, { useState } from "react";

const Stephen = (props) => {
    const [input, setInput] = useState("");

    return (
        <>
            <div>
                <form>
                    <label>Stephen</label>
                    <input
                        type="text"
                        onChange={(e) => setInput(e.target.value)}
                    />
                </form>
            </div>
            <div>
                <p>{input}</p>
            </div>
        </>
    );
};

export default Stephen;
