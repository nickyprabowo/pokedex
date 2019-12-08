import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../shared-components/Header';
import './style.css'
import Pokemon from '../pokemon/Pokemon';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Pokemon />
      </div>
    </>
  );
}

export default App;
