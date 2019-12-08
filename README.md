This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# POKEDEX APP
Pokedex App created to achieve 4 main things:
    1. User can browse pokemon in infinite list
    2. User can view detailed information of each pokemon
    3. User can view the image of each pokemon
    4. User can filter list of pokemon based on an types of pokemon

this project consist of 4 main folders:
    - `app`, contains the basic layout structure of the App
    - `pokemon`, contains all the components, tests, types, and models for the view
    - `shared-components`, contains common component which can be shared accross application
    - `utility`, contains helpers and definitions of constant variable

It has a list of pokemons on the left which will be an infinite scroll. The infinite scroll would only be active on type `All`.

## Deeper
`Pokemon.tsx` would be the root component which hold most of the states and provides data for
another components. `Pokemon.tsx` is also responsible to fetch/filter list of pokemons from the API and display it as a list. It also utilize IntersectionObserver API to create infinite list of pokemons.

`PokemonFilter.tsx` is a filter component and responsible for fetching the list of pokemon types.

`PokemonDetail.tsx` responsible for displaying the image and detail informations about the pokemon selected from the list. As soon as user click a pokemon on the list, it will send selected pokemon to `PokemonDetail` component, and it will immediately fetch detailed info of selected pokemon.

`Model` is a term I use to transform data from the API before using it. This layer of transformation would be beneficial for filtering unnecesary data or simplify the shape of data for later use.

`API` is where the data fetching happens.

## Available Scripts

1. Buka command-line lalu akses folder 'pokedex'
2. Pertama-tama, ketik `yarn install` atau `npm install` untuk menginstall semua dependency aplikasi
3. Kemudian, ketikkan `yarn start` atau `npm start`, lalu tekan enter untuk menjalankan aplikasi dalam mode development
4. Jika ingin menjalankan mode production, ketikkan `yarn run build`. Kemudian diikuti dengan perintah `yarn global add serve` dan `serve -s build`


## Credit
Pokeball Icon
<div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>