import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { label, handleInputChange, id, placeholder } = this.props;
    return (
      <label htmlFor={ id } className="form-label">
        {label}
        <input
          onChange={ handleInputChange }
          className="form-control"
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
