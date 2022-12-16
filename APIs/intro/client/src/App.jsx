import { useState } from "react";
import "./App.css";

function App() {
    const [pokemon, setPokemon] = useState("");
    const [data, setData] = useState({});

    const callApi = (e) => {
        e.preventDefault();
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => console.log("Something went wrong", err));
    };
    return (
        <div className="App">
            <form onSubmit={callApi}>
                <input
                    onChange={(e) => setPokemon(e.target.value)}
                    type="text"
                />
            </form>
            <div class="card" style={{ width: "18rem" }}>
                <img
                    src={data.sprites && data.sprites["front_default"]}
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">{data.name && data.name}</h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
