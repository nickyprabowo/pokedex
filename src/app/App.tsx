import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Header from '../shared-components/Header';
import PokemonList from '../pokemon/PokemonList';
import PokemonDetail from '../pokemon/PokemonDetail';

const App: React.FC = () => {
  return (
    <div>
        <Header />
        <Container text className="main-content">
            <Switch>
              <Route exact path="/pokemon" component={PokemonList}/>
              <Route path="/pokemon/:name" component={PokemonDetail}/>
              <Route exact path="/" render={() => <Redirect to="/pokemon" />} />
            </Switch>
        </Container>
    </div>
  );
}

export default App;
