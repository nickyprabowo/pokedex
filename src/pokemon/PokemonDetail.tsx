import React, { useState, useEffect } from 'react';
import { IPokemon, IPokemonInfo } from './types';
import { getPokemonInfo } from './api';
import { Grid, Image, Statistic, Header, List, Placeholder } from 'semantic-ui-react';
import PokemonType from './PokemonType';
import PokemonFilter from './PokemonFilter';

export interface IPokemonDetail {
  selectedPokemon: IPokemon
  handleTypeFilter(e: React.SyntheticEvent<HTMLElement>, { value }: {[key: string]: string}): void
}

const PokemonDetail: React.FC<IPokemonDetail> = ({
  selectedPokemon: { url },
  handleTypeFilter 
}) => {
  const [pokemon, setPokemon] = useState<IPokemonInfo>({
    id: "",
    name: "",
    image: "",
    experience: 0,
    height: 0,
    weight: 0,
    types: [],
    abilities: []
  });
  const [asyncState, setAsyncState] = useState("");

  const fetchPokemonInfo = async (url: string) => {
    setAsyncState("loading");
    try {
      const data = await getPokemonInfo(url);
      setPokemon({...pokemon, ...data});
      setAsyncState("loaded");
    } catch(error) {
      new Error(error)
      setAsyncState("error");
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchPokemonInfo(url);
    } else {
      const empty = {
        id: "",
        name: "",
        image: "",
        experience: 0,
        height: 0,
        weight: 0,
        types: [],
        abilities: []
      };
      setPokemon((prevState: IPokemonInfo) => ({...prevState, ...empty}));
    }
  },[url]);

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PokemonFilter handleTypeFilter={handleTypeFilter} />
        </Grid.Column>
      </Grid.Row>
      {url === "" &&
        <Grid.Row>
          <Grid.Column>
            Pokemon not available
          </Grid.Column>
        </Grid.Row>
      }
      
      <Grid.Row centered data-testid="pokemon-detail">
        <Grid.Column textAlign='center'>
          {asyncState === "loading" &&
            <Placeholder style={{ height: 150, width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
              <Placeholder.Image />
            </Placeholder>
          }
          {asyncState === "loaded" &&
            <Image src={pokemon.image} circular centered size="small" data-testid="pokemon-image" />
          }
          {asyncState === "loading" &&
            <Placeholder style={{ width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
              <Placeholder.Header>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
            </Placeholder>
          }
          {asyncState === "loaded" &&
            <>
              <Header size="huge">{pokemon.name}</Header>
              <PokemonType label={pokemon.types} />
            </>
          }
        </Grid.Column>
      </Grid.Row>
      {url !== "" &&
      <>
        <Grid.Row centered columns={3}>
          <Grid.Column textAlign='center'>
            {asyncState === "loading" &&
              <Placeholder style={{ height: 150, width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
                <Placeholder.Image />
              </Placeholder>
            }
            {asyncState === "loaded" &&
              <Statistic size='tiny'>
                <Statistic.Value>{pokemon.experience}</Statistic.Value>
                <Statistic.Label>Experience</Statistic.Label>
              </Statistic>
            }
          </Grid.Column>
          <Grid.Column textAlign='center'>
            {asyncState === "loading" &&
              <Placeholder style={{ height: 150, width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
                <Placeholder.Image />
              </Placeholder>
            }
            {asyncState === "loaded" &&
              <Statistic size='tiny'>
                <Statistic.Value>{pokemon.height}</Statistic.Value>
                <Statistic.Label>Height</Statistic.Label>
              </Statistic>
            }
          </Grid.Column>
          <Grid.Column textAlign='center'>
            {asyncState === "loading" &&
              <Placeholder style={{ height: 150, width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
                <Placeholder.Image />
              </Placeholder>
            }
            {asyncState === "loaded" &&
              <Statistic size='tiny'>
                <Statistic.Value>{pokemon.weight}</Statistic.Value>
                <Statistic.Label>Weight</Statistic.Label>
              </Statistic>
            }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column textAlign='center'>
            {asyncState === "loading" &&
              <Placeholder style={{ height: 150, width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
                <Placeholder.Image />
              </Placeholder>
            }
            {asyncState === "loaded" &&
              <>
                <Header size="medium">Abilities</Header>
                <List celled horizontal>
                  {pokemon.abilities.map((ability: string) => {
                    return (
                      <List.Item key={ability}>
                        <List.Content>
                          <List.Header>{ability}</List.Header>
                        </List.Content>
                      </List.Item>
                    )
                  })}
                </List>
              </>
            }
          </Grid.Column>
        </Grid.Row>
      </>
      }
    </Grid>
  )
};

export default PokemonDetail;
