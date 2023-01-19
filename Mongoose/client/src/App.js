import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
function App() {
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/dogs")
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
    }, []);
    return (<div className="App"></div>);
}

export default App;
