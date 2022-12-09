import React, { useState } from "react";

const Dnd = (props) => {
    const [className, setClassName] = useState("");
    const [weapon, setWeapon] = useState("");
    const [health, setHealth] = useState("");
    const [filled, setFilled] = useState(false);

    const makeClass = (e) => {
        e.preventDefault();

        const newClass = { className, weapon, health };
        setClassName("");
        setWeapon("");
        setHealth("");

        setFilled(true);
        alerMessage();
    };

    const alerMessage = () => {
        if (filled) {
            return "Nice Class!";
        } else {
            return "Get to it!";
        }
    };

    return (
        <>
            <form onSubmit={makeClass}>
                <h3></h3>
                <div>
                    <label htmlFor="className">Class Name</label>
                    <input
                        type="text"
                        name="className"
                        onChange={(e) => setClassName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="weapon">Weapon</label>
                    <input
                        type="text"
                        name="weapon"
                        onChange={(e) => setWeapon(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="health">Health</label>
                    <input
                        type="text"
                        name="health"
                        onChange={(e) => setHealth(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>

            <div>
                <h3>Your Class</h3>
                <p>
                    <label>Class Name: </label>
                    {className}
                </p>
                <p>
                    <label>Weapon: </label>
                    {weapon}
                </p>
                <p>
                    <label>Hit Die: </label>
                    {health}
                </p>
            </div>
        </>
    );
};

export default Dnd;
