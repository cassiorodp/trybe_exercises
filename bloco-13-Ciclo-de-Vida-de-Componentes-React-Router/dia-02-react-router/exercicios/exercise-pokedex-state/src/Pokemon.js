import React  from 'react';
import PropTypes from 'prop-types';
import './pokemon.css'
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { id, name, type, averageWeight, image } } = this.props;

    return (
      <section >
        <div className = 'pokemon-info'>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <p><Link className='pokemon-link' to={`/pokemon/${id}`}>See more details</Link></p>
        </div>
        <img src={image} alt={name} />
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
}

export default Pokemon

