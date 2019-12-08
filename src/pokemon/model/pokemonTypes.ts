import { IFilter } from "../PokemonFilter";

const pokemonTypes = (data: any) => {
  const result: IFilter[] = data.results.length > 0 ? data.results.map((item: any) => ({
    key: item.name,
    text: item.name,
    value: item.url
  })) : [];
  return result;
}

export default pokemonTypes;