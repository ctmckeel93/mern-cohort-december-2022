import React, { useState } from "react";

const Renee = (props) => {
    const [greeting, setGreeting] = useState("");
    return (
        <div>
            <label htmlFor="">Renee</label>
            <input
                type="text"
                value={greeting}
                onChange={(e) => setGreeting(e.target.value)}
            />
            <p>
                <label>Greeting: </label> {greeting}
            </p>
        </div>
    );
};

export default Renee;
