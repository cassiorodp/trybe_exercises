import React from "react";
import './pokemonDetails.css'

class PokemonDetails extends React.Component {
  render() {
    const { pokemons, match: { params: { pokeId } } } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(pokeId));
    const { name, type, averageWeight, image, summary, foundAt } = pokemon;
    return (
      <main>
        <h1 className='title-pokemon-details'>{`${name} details`}</h1>
        <section className='pokemon-details'>
          <div className='pokemon-info'>
            <p>Name: {name}</p>
            <p>Type: {type}</p>
            <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
          </div>
          <img src={image} alt={name} />
        </section>
        <div className='pokemon-summary'>
          <h1 className='title-pokemon-details' >Sumary</h1>
          <p className='pokemon-info-summary'>{summary}</p>
        </div>
        <section className='section-pokemon-location'>
          <h1 className='title-pokemon-details' >{`Game locations of ${name}`}</h1>
          <div className='pokemon-locations'>
            {foundAt.map((place) => (
              <div key={place.location}>
                <img src={place.map} alt={place.location} />
                <h3>{place.location}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    )
  }
}

export default PokemonDetails