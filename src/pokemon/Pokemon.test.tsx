import React from 'react';
import { render, cleanup, wait } from '@testing-library/react';
import Pokemon from './Pokemon';

jest.mock('./api');

const renderPokemonList = () => {
  const pokemonList = render(<Pokemon />);
  return pokemonList;
};

beforeEach(() => {
  const intersectionObserverMock = () => ({
    observe: () => null,
    root: null,
    rootMargin: '',
    thresholds: [9],
    disconnect: () => null,
    takeRecords: () => [],
    unobserve: () => null
  });
  window.IntersectionObserver = jest.fn(intersectionObserverMock);
});

afterEach(() => cleanup());

it("shows loading element when fetching data", () => {
  const { getByText } = renderPokemonList();
  const loading = getByText("Loading");
  expect(loading).toBeInTheDocument();
});

it("display the list of pokemons", async () => {
  const { getByTestId, queryAllByTestId } = renderPokemonList();
  const list = await wait(() => getByTestId("pokemon-list"));
  const items = queryAllByTestId("list-item");
  expect(items.length).toBe(2);
  const pokemonsName = items.map(row => row.textContent);
  expect(pokemonsName).toEqual(["bulbasaur","pikachu"]);
});
