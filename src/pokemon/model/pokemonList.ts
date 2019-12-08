import { IGetPokemons } from "../types";

const pokemonList = (data: any) => {
    let result: IGetPokemons  = {
        totalPokemons: 0,
        nextPage: "",
        prevPage: "",
        pokemons: []
    };
    // all pokemons
    if (("results" in data)) {
        result = {
            totalPokemons: data.count,
            nextPage: data.next,
            prevPage: data.previous,
            pokemons: data.results
        }
    }else { // filter
        result = {
            totalPokemons: data.pokemon.length,
            nextPage: "",
            prevPage: "",
            pokemons: data.pokemon.map((item: any) => item.pokemon)
        }
    }    
    return result;
};

export default pokemonList;