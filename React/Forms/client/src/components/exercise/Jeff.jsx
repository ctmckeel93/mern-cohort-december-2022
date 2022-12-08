import { useState } from "react";

const Jeff = (props) => {
    const [jeffText, setJeffText] = useState("");

    const handleJeff = (e) => {
        setJeffText(e.target.value);
    };

    return (
        <div>
            <form>
                <div>
                    <label>Jeff</label>
                    <input type="text" value={jeffText} onChange={handleJeff} />
                </div>
            </form>
            <h3>{jeffText}</h3>
        </div>
    );
};

export default Jeff;
