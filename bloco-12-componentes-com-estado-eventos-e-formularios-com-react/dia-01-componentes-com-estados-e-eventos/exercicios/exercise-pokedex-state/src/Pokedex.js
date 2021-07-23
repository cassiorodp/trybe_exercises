import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css'

class Pokedex extends React.Component {
  constructor() {
    super()

    this.state = {
      pokemonIndex: 0,
      filteredType: 'all'
    }
  }

  filterPokemons(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: state.pokemonIndex === numberOfPokemons - 1 ? 0 : state.pokemonIndex + 1
      // pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
    console.log(this.state.pokemonIndex);
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;
    // const auxArray = [];

    return (pokemons.reduce((types, { type }) => [...types, type], []));
    // [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))]
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.pokemonIndex];

    return (
      <main>
        <h1>Pokedex</h1>
        <div className = 'pokedex'>
          <Pokemon pokemon = { pokemon } />
        </div>
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemons('all')}
            className="filter-button"
          >
            All
          </Button>
          {pokemonTypes.map((type, i) => (
            <Button
              key={ i }
              onClick={() => this.filterPokemons(type)}
            >
              { type }
            </Button>
          ))}
        </div>
        <Button
          className = 'pokedex-button' 
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={ filteredPokemons.length <= 1 }
        >
          Next pokémon
        </Button>
      </main>
    )
  }
}

export default Pokedex