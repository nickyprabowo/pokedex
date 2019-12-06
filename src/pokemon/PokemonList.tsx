import React, { useState, useEffect } from 'react';
import getPokemon from './api';

interface IPokemon {
    name: string
    url: string
}

const PokemonList: React.FC = () => {
    const [pokemon, setPokemon] = useState<IPokemon[]>([]);
    
    const fetchPokemon = async () => {
        try {
            const data = await getPokemon();
            setPokemon([...pokemon, data!.pokemons]);
        } catch(error) {
            new Error(error)
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    return (
        <div>Pokemon List</div>
    )
};

export default PokemonList;