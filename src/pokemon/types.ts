export interface IPokemon {
  name: string
  url: string
}

export interface IGetPokemons {
  totalPokemons: number
  nextPage: string
  prevPage: string
  pokemons: IPokemon[]
}

export interface IPokemonInfo {
  id: string
  name: string
  image: string
  experience: number
  height: number
  weight: number
  types: string[]
  abilities: string[]
}

export type selectPokemon = (e: React.MouseEvent | undefined, pokemon: IPokemon) => void