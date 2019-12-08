import React, { useState, useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react';
import { getPokemonTypes } from './api';

export interface IPokemonFilter {
  handleTypeFilter(e: React.SyntheticEvent<HTMLElement>, { value }: {[key: string]: string}): void
};

export interface IFilter {
  key: string
  text: string
  value: string
}

const PokemonFilter: React.FC<IPokemonFilter> = ({ handleTypeFilter }) => {
  const [pokemonTypes, setPokemonTypes] = useState<IFilter[]>([{
    key: "all",
    text: "All",
    value: ""
  }]);
  const [asyncState, setAsyncState] = useState("");

  const fetchPokemonTypes = async () => {
    setAsyncState("loading");
    try {
      const data = await getPokemonTypes();
      const types = [...pokemonTypes, ...data!];
      setPokemonTypes(types);
      setAsyncState("loaded");
    } catch(error) {
      new Error(error)
      setAsyncState("error");
    }
  };

  useEffect(() => {
    if (pokemonTypes.length === 1) {
      fetchPokemonTypes();
    };
  }, []);

  return (
    <>
      <Dropdown
        selection
        options={pokemonTypes}
        placeholder='Filter by Type'
        onChange={handleTypeFilter}
        loading={asyncState === "loading"}
      />   
    </>
  )
};

export default PokemonFilter;
