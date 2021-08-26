import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectInput from '../components/SelectInput';
import TextInput from '../components/TextInput';
import { updatePersonalForm } from '../redux/actions';
import '../styles/personalForm.css';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      brazilState: 'AC',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.redirectToProfessional = this.redirectToProfessional.bind(this);
  }

  handleInputChange({ target }) {
    const { id, value } = target;

    this.setState({
      [id]: value,
    });
  }

  redirectToProfessional() {
    const { history, updateStore } = this.props;

    updateStore(this.state);

    history.push('/professionalForm');
  }

  render() {
    const { brazilState } = this.state;
    return (
      <form className="personal-form">
        <fieldset className="fieldset">
          <TextInput
            id="name"
            label="Nome:"
            handleInputChange={ this.handleInputChange }
            placeholder="digite seu nome"
          />
          <TextInput
            id="email"
            label="Email:"
            handleInputChange={ this.handleInputChange }
            placeholder="digite seu email"
          />
          <TextInput
            id="CPF"
            label="CPF:"
            handleInputChange={ this.handleInputChange }
            placeholder="digite seu CPF"
          />
          <TextInput
            id="address"
            label="Endereço:"
            handleInputChange={ this.handleInputChange }
            placeholder="digite seu endereço"
          />
          <TextInput
            id="city"
            label="Cidade:"
            handleInputChange={ this.handleInputChange }
            placeholder="digite sua cidade"
          />
          <SelectInput
            brazilState={ brazilState }
            handleInputChange={ this.handleInputChange }
          />
        </fieldset>
        <button
          className="btn btn-secondary"
          onClick={ this.redirectToProfessional }
          type="button"
        >
          Enviar
        </button>
      </form>
    );
  }
}

PersonalForm.propTypes = {
  history: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  updateStore: (...payload) => dispatch(updatePersonalForm(...payload)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
