import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import PokemonListItem, { IPokemonListItem } from './PokemonListItem';

const props = {
  pokemon: {
    name: "bulbasaur",
    url: "/bulbasaur.com"
  },
  selectPokemon: jest.fn()
};

const renderPokemonListItem = (props: IPokemonListItem) => {
  const listItem = render(<PokemonListItem {...props} />);
  return listItem;
};

afterEach(() => cleanup());

it("has an avatar", () => {
  const { getByTestId } = renderPokemonListItem(props);
  const avatar = getByTestId("avatar");
  expect(avatar).toBeInTheDocument();
});

it("display pokemon name", () => {
  const { getByText } = renderPokemonListItem(props);
  const pokemonName = getByText("bulbasaur");
  expect(pokemonName).toBeInTheDocument();
});

it("can be clicked to show pokemon info", () => {
  const { getByTestId } = renderPokemonListItem(props);
  const listItem = getByTestId("list-item");
  fireEvent.click(listItem);
  expect(props.selectPokemon).toHaveBeenCalled();
});