// API
import POKEMON_API from '../utility/variable';
// Model
import pokemonList from './model/pokemonList';

const getPokemon = async () => {
    try {
        const response = await fetch(POKEMON_API);
        if (response.ok) {
            const json = await response.json();
            const data = pokemonList(json);
            return data;
        }
    } catch(error) {
        new Error("Error fetching pokemons")
    }
    
};

export default getPokemon;