import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import { updateProfessionalForm } from '../redux/actions';

class ProfessionalForm extends Component {
  constructor() {
    super();

    this.redirectToDisplay = this.redirectToDisplay.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { id, value } = target;

    this.setState({
      [id]: value,
    });
  }

  redirectToDisplay() {
    const { history, updateStore } = this.props;

    updateStore(this.state);

    history.push('/formDisplay');
  }

  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="resume">
            Resumo do currículo:
            <textarea
              onChange={ this.handleInputChange }
              id="resume"
              placeholder="Digite seu resumo"
            />
          </label>
          <TextInput
            id="occupation"
            label="Cargo:"
            handleInputChange={ this.handleInputChange }
            placeholder="Digite seu cargo"
          />
          <label htmlFor="job-description">
            Descrição do cargo:
            <textarea
              onChange={ this.handleInputChange }
              id="job-description"
              placeholder="Digite sua descrição"
            />
          </label>
        </fieldset>
        <button onClick={ this.redirectToDisplay } type="button">
          Enviar
        </button>
      </form>
    );
  }
}

ProfessionalForm.propTypes = {
  history: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  updateStore: (...payload) => dispatch(updateProfessionalForm(...payload)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
