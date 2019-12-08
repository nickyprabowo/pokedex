import { IPokemonInfo } from "../types"

const pokemonDetail = (data: any) => {
    const result: IPokemonInfo = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        experience: data.base_experience,
        types: data.types.map((type: any) => type.type.name),
        height: data.height,
        weight: data.weight,
        abilities: data.abilities.map((item: any) => item.ability.name)
    };
    return result;
}

export default pokemonDetail;