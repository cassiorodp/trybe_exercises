import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { label, handleInputChange, id, placeholder } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <input
          onChange={ handleInputChange }
          id={ id }
          type="text"
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
}.isRequired;

export default TextInput;
