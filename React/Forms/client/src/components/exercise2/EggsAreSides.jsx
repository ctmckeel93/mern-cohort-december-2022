import { useState } from "react";

const BaconForm = (props) => {
    const [myWords, setMyWords] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        alert(
            `you're making a ${size}x${size}px box with ${color} color and ${myWords} displayed in the box!`
        );
        alert(
            `Exercise...Ex-er-cise...Ex-ar-size...Eggs-are-sides...for bacon...Bacon`
        );
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="text">Input Text</label>
                    <input
                        type="text"
                        name="myWords"
                        value={myWords}
                        onChange={(e) => setMyWords(e.target.value)}
                    />
                    <br />
                    <label htmlFor="color">Input Color</label>
                    <input
                        type="text"
                        name="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <br />
                    <label htmlFor="size">Input size</label>
                    <input
                        type="text"
                        name="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default BaconForm;
