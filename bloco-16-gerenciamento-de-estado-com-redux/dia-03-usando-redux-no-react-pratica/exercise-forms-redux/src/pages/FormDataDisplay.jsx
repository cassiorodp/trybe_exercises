import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/formDataDisplay.css';

class FormDataDisplay extends Component {
  render() {
    const {
      personalForm: { name, email, CPF, address, city, brazilState },
      professionalForm: { resume, occupation, jobDescription } } = this.props;
    return (
      <section className="section-display">
        <div className="div-display">
          <h1>Personal Info</h1>
          <p>{`Nome: ${name}`}</p>
          <p>{`Email: ${email}`}</p>
          <p>{`CPF: ${CPF}`}</p>
          <p>{`Endereço: ${address}`}</p>
          <p>{`Cidade: ${city}`}</p>
          <p>{`Estado: ${brazilState}`}</p>
        </div>
        <div className="div-display">
          <h1>Professional Form</h1>
          <p>{`Resumo do currículo: ${resume}`}</p>
          <p>{`Cargo: ${occupation}`}</p>
          <p>{`Descrição do cargo: ${jobDescription}`}</p>
        </div>
      </section>
    );
  }
}

FormDataDisplay.propTypes = {
  name: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  personalForm: {
    name: state.formReducer.personalInfo.name,
    email: state.formReducer.personalInfo.email,
    CPF: state.formReducer.personalInfo.CPF,
    address: state.formReducer.personalInfo.address,
    city: state.formReducer.personalInfo.city,
    brazilState: state.formReducer.personalInfo.brazilState,
  },
  professionalForm: {
    resume: state.formReducer.professionalInfo.resume,
    occupation: state.formReducer.professionalInfo.occupation,
    jobDescription: state.formReducer.professionalInfo.jobDescription,
  },
});

export default connect(mapStateToProps)(FormDataDisplay);
