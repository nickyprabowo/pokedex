import React, { useState, useEffect, useRef } from 'react';
import { getPokemons } from './api';
import { Grid, List, Placeholder, Image } from 'semantic-ui-react';
import Loading from '../shared-components/Loading';
import PokemonListItem from './PokemonListItem';
import { IPokemon } from './types';
import PokemonDetail from './PokemonDetail';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [asyncState, setAsyncState] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>({
    name: "",
    url: "",
  })
  const loadMore = useRef<HTMLDivElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);
  
  const fetchPokemon = async (url: string = "") => {
    setAsyncState("loading");
    try {
      const data = await getPokemons(url);
      if (filter === "") {
        setPokemons([...pokemons, ...data!.pokemons]);
        setNextPage(data!.nextPage);
      } else {
        setPokemons([...data!.pokemons]);
        setNextPage("");
      }
      setAsyncState("loaded");
      setIsFetching(false);
      if (selectedPokemon.name === "" && data!.pokemons.length > 0 ) {
        setSelectedPokemon(data!.pokemons[0]);
      }
    } catch(error) {
      new Error(error)
      setAsyncState("error");
      setIsFetching(false)
    }
  };

  const selectPokemon = (e: React.MouseEvent | undefined, pokemon: IPokemon) => {
    setSelectedPokemon(pokemon)
  };

  const handleTypeFilter = (e: React.SyntheticEvent<HTMLElement>, { value }: {[key: string]: string}) => {
    setPokemons([]);
    selectPokemon(undefined, {
      name: "",
      url: ""
    })
    setNextPage("");
    setFilter(value);
  };

  useEffect(() => {
    if (pokemons.length === 0 && filter === "") {
      fetchPokemon();
    } else if (isFetching && nextPage !== "" && filter === "") {
      fetchPokemon(nextPage);
    } else if (filter !== "") {
      fetchPokemon(filter);
    }
    return;
  }, [isFetching, filter]);

  useEffect(() => {
    if (pokemons.length > 0 && selectedPokemon.name === "" || pokemons.length > 0 && filter !== "") {
      setSelectedPokemon(pokemons[0]);
    } else {
      setSelectedPokemon({
        name: "",
        url: "",
      });
    }
  }, [filter])

  // check if load more element visible
  useEffect(() => {
    const handleIntersection = function(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry: IntersectionObserverEntry ) => {
        if (entry.intersectionRatio === 1) {
          setIsFetching(true);
        };
      });
    };

    const options: IntersectionObserverInit = {
      root: sidebar.current,
      rootMargin: "0px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (loadMore.current){
      observer.observe(loadMore.current);
    }
  }, [filter])

  return (
    <Grid className="base" container columns={2}>
      <Grid.Row>
        <Grid.Column width={4}>
          <div ref={sidebar} className="sidebar">
            {asyncState === "loading" && <Loading />}
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  {pokemons.length > 0 &&
                    <List relaxed='very' selection verticalAlign='middle' data-testid="pokemon-list">
                      {pokemons.map(pokemon => {
                        return (
                          <PokemonListItem
                            key={pokemon.name}
                            pokemon={pokemon}
                            selectPokemon={selectPokemon}
                          />
                        )
                      })}
                    </List>
                  }
                  {pokemons.length === 0 &&
                    <List relaxed='very' selection verticalAlign='middle'>
                      <List.Item data-testid="list-item">
                        <Image avatar src='pokeball.png' data-testid="avatar" />
                        <List.Content>
                          <List.Header as='a'>Pokemon not available</List.Header>
                        </List.Content>
                      </List.Item>
                    </List>
                  }
                  {filter === "" &&
                    <div ref={loadMore} className="load-more">
                      <Placeholder>
                        <Placeholder.Header image>
                          <Placeholder.Line />
                          <Placeholder.Line />
                        </Placeholder.Header>
                      </Placeholder>
                    </div>
                  }
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Grid.Column>
        <Grid.Column width={12}>
          <PokemonDetail
            selectedPokemon={selectedPokemon}
            handleTypeFilter={handleTypeFilter}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
};

export default PokemonList;