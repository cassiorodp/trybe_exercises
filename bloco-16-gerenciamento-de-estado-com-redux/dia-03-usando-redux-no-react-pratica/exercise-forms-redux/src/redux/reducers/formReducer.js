import { UPDATE_PERSONAL_FORM, UPDATE_PROFESSIONAL_FORM } from '../actions';

const INITIAL_STATE = {};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_PERSONAL_FORM:
    return {
      ...state,
      personalInfo: action.value,
    };
  case UPDATE_PROFESSIONAL_FORM:
    return {
      ...state,
      professionalInfo: action.value,
    };
  default: return state;
  }
};

export default formReducer;
