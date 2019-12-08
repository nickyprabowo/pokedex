import React from 'react'
import { List, Image } from 'semantic-ui-react'
import { IPokemon, selectPokemon } from './types';

export interface IPokemonListItem {
  pokemon: IPokemon
  selectPokemon: selectPokemon
}

const PokemonListItem: React.FC<IPokemonListItem> = ({ pokemon, selectPokemon }) => {
  return (
    <List.Item data-testid="list-item" onClick={(e) => selectPokemon(e, pokemon)}>
      <Image avatar src='pokeball.png' data-testid="avatar" />
      <List.Content>
        <List.Header as='a'>{pokemon.name}</List.Header>
      </List.Content>
    </List.Item>
  )
}

export default PokemonListItem
