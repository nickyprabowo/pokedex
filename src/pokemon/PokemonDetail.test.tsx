import React from 'react';
import { render, fireEvent, cleanup, waitForElement, wait } from '@testing-library/react';
import PokemonDetail, { IPokemonDetail } from './PokemonDetail';

jest.mock('./api');

const renderPokemonDetail = (props: IPokemonDetail) => {
  const pokemonDetail = render(<PokemonDetail {...props} />);
  return pokemonDetail;
};

afterEach(() => cleanup());

const props = {
    selectedPokemon: {
        name: "bulbasaur",
        url: "link"
    },
    handleTypeFilter: jest.fn()
}

it("display information needed", async () => {
    const { getByText, getByTestId } = renderPokemonDetail(props);
    const detail = await wait(() => getByTestId("pokemon-detail"));
    expect(getByText("bulbasaur")).toBeInTheDocument();
    expect(getByTestId("pokemon-image")).toBeInTheDocument();
    expect(getByText("Experience")).toBeInTheDocument();
    expect(getByText("90")).toBeInTheDocument();
    expect(getByText("Height")).toBeInTheDocument();
    expect(getByText("70")).toBeInTheDocument();
    expect(getByText("Weight")).toBeInTheDocument();
    expect(getByText("50")).toBeInTheDocument();
    expect(getByText("Abilities")).toBeInTheDocument();
    expect(getByText("makan")).toBeInTheDocument();
    expect(getByText("tidur")).toBeInTheDocument();
})