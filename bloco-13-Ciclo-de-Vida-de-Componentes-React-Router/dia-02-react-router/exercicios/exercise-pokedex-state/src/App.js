import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Header from './Header';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route 
          path='/pokemon/:pokeId' 
          render={(props) => <PokemonDetails pokemons={ pokemons } {...props}  />} />
          <Route 
          path='/' 
          render={(props) => <Pokedex {...props} pokemons={ pokemons } />} />
        </Switch>
        {/* <Pokedex pokemons={pokemons} /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;