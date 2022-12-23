const PokemonController = require("../controllers/pokemon.controller");
module.exports = (app) => {
    app.get("/", PokemonController.index);
    app.get("/pokemon", PokemonController.getPokemon);
    app.get("/pokemon/:name", PokemonController.getOnePokemon);
    app.post("/pokemon", PokemonController.createPokemon);
    app.put("/pokemon/:name", PokemonController.updatePokemon);
    app.delete("/pokemon/:name", PokemonController.deletePokemon);
};
