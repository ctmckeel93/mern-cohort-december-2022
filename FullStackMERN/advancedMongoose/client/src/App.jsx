import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [dojo, setDojo] = useState({});
    const [id, setId] = useState("63c73fb88744c4a4019a1a01");
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/dojos/" + id)
            .then((response) => setDojo(response.data))
            .catch((err) =>
                console.log("Something went wrong on the front end", err)
            );
    }, []);
    return (
        <div className="App">
            <>
                <h1>{dojo.name}</h1>
                {dojo.ninjas &&
                    dojo.ninjas.map((ninja, i) => (
                        <div key={i}>
                            <h2>{dojo.name}'s Ninjas</h2>
                            <p>{ninja.firstName + " " + ninja.lastName}</p>
                            <p>Age: {ninja.age}</p>
                        </div>
                    ))}
            </>
        </div>
    );
}

export default App;
