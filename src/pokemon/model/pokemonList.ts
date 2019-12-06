const pokemonList = (data: any) => {
    return {
        totalPokemons: data.count,
        nextPokemon: data.next,
        prevPokemon: data.previous,
        pokemons: data.results
    }
};

export default pokemonList;