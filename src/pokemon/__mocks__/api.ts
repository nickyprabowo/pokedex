export const getPokemons = async (url: string) => {
    return Promise.resolve({
        totalPokemons: 9,
        nextPage: "url",
        prevPage: "",
        pokemons: [{
            name: "bulbasaur",
            url: "x"
        },{
            name: "pikachu",
            url: "y"
        }]
    });
};

export const getPokemonInfo = async (url: string) => {
    return Promise.resolve({
        id: "",
        name: "bulbasaur",
        image: "image",
        experience: 90,
        types: ["poison"],
        height: 70,
        weight: 50,
        abilities: ["makan","tidur"]
    })
};

export const getPokemonTypes = async () => {
    return Promise.resolve([{
        key: "a",
        text: "b",
        value: "c"
    },{
        key: "a",
        text: "b",
        value: "c"
    }]);
};