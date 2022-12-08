import React, { useState } from "react";

const Monica = (props) => {
    const [text, setText] = useState(0);

    const handleClick = () => {
        setText("");
    };
    const handleChange = (event) => {
        setText({ ...text, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Helloooo</label>
                    <input
                        type="text"
                        id="text"
                        value={text}
                        placeholder="Type In Anything"
                    />
                </div>
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
};

export default Monica;
