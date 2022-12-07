import { useState } from "react";

const Input = (props) => {
    const [value, setValue] = useState("");

    const inputHandler = (e) => {
        setValue(e.target.value);
    };

    return <input onChange={inputHandler} value={value} type="text" />;
};

export default Input;
