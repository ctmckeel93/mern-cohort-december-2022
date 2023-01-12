import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Square = ({ colorChange }) => {
    const { color } = useParams();
    const [currentColor, setCurrentColor] = useState(color);

    const changeBoxColor = () => {
        setCurrentColor(colorChange);
    };

    return (
        <>
            <div
                style={{
                    height: "300px",
                    width: "300px",
                    margin: "20px auto",
                    background: currentColor,
                }}
            ></div>
            <button onClick={changeBoxColor}>Change color</button>
        </>
    );
};

export default Square;
