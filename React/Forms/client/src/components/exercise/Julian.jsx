import React, { useState } from "react";

const JulianForm = (props) => {
    const [formInput, setFormInput] = useState("");

    const handleFormInput = (e) => {
        setFormInput(e.target.value);
    };

    return (
        <div>
            <form>
                <div>
                    <label>Julian: </label>
                    <input
                        type="text"
                        value={formInput}
                        onChange={handleFormInput}
                    />
                </div>
            </form>
            <div>
                <p>
                    <label>{formInput}</label>
                </p>
            </div>
        </div>
    );
};

export default JulianForm;
