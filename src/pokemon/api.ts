// API
import { POKEMON_API, POKEMON_TYPES } from '../utility/variable';
// Model
import pokemonList from './model/pokemonList';
import pokemonDetail from './model/pokemonDetail';
// Helper
import handleResponse from '../utility/handleResponse';
import pokemonTypes from './model/pokemonTypes';

export const getPokemons = async (url: string) => {
  try {
    const sourceUrl = url === "" ? POKEMON_API : url;
    const response = await fetch(sourceUrl);
    const json = await handleResponse(response);
    const data = pokemonList(json);
    return data;
  } catch(error) {
    new Error(error)
  }
};

export const getPokemonInfo = async (url: string) => {
  try {
    const response = await fetch(url);
    const json = await handleResponse(response);
    const data = pokemonDetail(json);
    return data;
  } catch(error) {
    new Error(error)
  }
};

export const getPokemonTypes = async () => {
  try {
    const response = await fetch(POKEMON_TYPES);
    const json = await handleResponse(response);
    const data = pokemonTypes(json);
    return data;
  } catch (error) {
    new Error(error);
  }
}