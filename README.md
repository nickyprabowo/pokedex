This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# POKEDEX APP
this project consist of 4 main folders:
    - app, contains the basic layout structure of the App
    - pokemon, contains all the components, tests, types, and models for the view
    - shared-components, contains common component which can be shared accross application
    - utility, contains helpers and definitions of constant variable

## Pokemon Folder
`Pokemon.tsx` would be the root component which hold most of the states and provides data for
another components. `Pokemon.tsx` is also responsible to fetch/filter list of pokemons from the API and display it as a list. It also utilize IntersectionObserver API to create infinite list of pokemons.

`PokemonFilter.tsx` is a filter component and do its own fetching for the list of pokemon types.

`PokemonDetail.tsx` responsible for displaying the image and detail informations about the pokemon selected from the list.

`Model` is a term I use to transform data from the API before using it. This layer of transformation would be beneficial for filtering unnecesary data or simplify the shape of data for later use.

`API` is where the data fetching happens

## Available Scripts

1. Buka command-line lalu akses folder 'pokedex'
2. Pertama-tama, ketik `yarn install` atau `npm install` untuk menginstall semua dependency aplikasi
3. Kemudian, ketikkan `yarn start` atau `npm start`, lalu tekan enter untuk menjalankan aplikasi dalam mode development
4. Jika ingin menjalankan mode production, ketikkan `yarn run build`. Kemudian diikuti dengan perintah `yarn global add serve` dan `serve -s build`


## Credit
Pokeball Icon
<div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>