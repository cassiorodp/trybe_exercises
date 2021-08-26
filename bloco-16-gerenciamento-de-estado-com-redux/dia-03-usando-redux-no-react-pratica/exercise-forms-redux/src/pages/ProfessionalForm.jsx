import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import { updateProfessionalForm } from '../redux/actions';
import '../styles/professionalForm.css';

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
      <form className="professional-form">
        <fieldset className="fieldset">
          <label htmlFor="resume">
            Resumo do currículo:
            <textarea
              className="form-control"
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
              className="form-control"
              onChange={ this.handleInputChange }
              id="jobDescription"
              placeholder="Digite sua descrição"
            />
          </label>
        </fieldset>
        <button
          className="btn btn-secondary"
          onClick={ this.redirectToDisplay }
          type="button"
        >
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
