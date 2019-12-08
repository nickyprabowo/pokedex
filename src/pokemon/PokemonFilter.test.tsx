import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import PokemonFilter, { IPokemonFilter } from './PokemonFilter';

jest.mock('./api');

const renderFilter = (props: IPokemonFilter) => {
  const filter = render(<PokemonFilter {...props} />);
  return filter;
};

afterEach(() => cleanup());

const props = {
  handleTypeFilter: jest.fn()
};

it("render a dropdown", () => {
  const { getByText } = renderFilter(props);
  const dropdown = getByText("Filter by Type");
  expect(dropdown).toBeInTheDocument();
});

it("display options", async () => {
  const { getAllByRole, getByText } = renderFilter(props);
  const filter = await waitForElement(() => getByText("Filter by Type"));
  const options = getAllByRole("option");
  const optionsText = options.map(row => row.textContent);
  expect(optionsText).toEqual(["All","b","b"]);
  expect(options.length).toBe(3);
  // click option
  fireEvent.click(options[1]);
  expect(filter.textContent).toBe("b");
});