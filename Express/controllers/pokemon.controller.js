let pokemonList = [pokemon1, pokemon2, pokemon3];

module.exports = {
    index: (request, response) => {
        response.json({ message: "Hello world" });
    },
    getPokemon: (request, response) => {
        response.json({ pokemonList });
    },
    getOnePokemon: (request, response) => {
        const selectedPokemon = pokemonList.find(
            (p) => p.name.toLowerCase() === request.params.name.toLowerCase()
        );
        response.json(selectedPokemon);
    },
    createPokemon: (request, response) => {
        console.log(request.body);
        pokemonList.push(request.body);
        response.json({ message: "Successfully created new pokemon" });
    },
    updatePokemon: (request, response) => {
        console.log(request.params.name);
        const pokemonToUpdate = pokemonList.find(
            (p) => p.name.toLowerCase() === request.params.name.toLowerCase()
        );
        const index = pokemonList.indexOf(pokemonToUpdate);
        pokemonList[index] = request.body;
        response.json({ message: `${pokemonToUpdate.name} was updated` });
    },
    deletePokemon: (request, response) => {
        const pokemonToDelete = pokemonList.find(
            (p) => p.name.toLowerCase() === request.params.name.toLowerCase()
        );
        pokemonList = pokemonList.filter((p) => p != pokemonToDelete);
        response.json({
            message: `${pokemonToDelete.name} successfully deleted`,
        });
    },
};
