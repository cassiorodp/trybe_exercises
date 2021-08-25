export const UPDATE_PERSONAL_FORM = 'UPDATE_PERSONAL_FORM';
export const UPDATE_PROFESSIONAL_FORM = 'UPDATE_PROFESSIONAL_FORM';

export const updatePersonalForm = (personalFormState) => ({
  type: UPDATE_PERSONAL_FORM,
  value: personalFormState,
});

export const updateProfessionalForm = (professionalFormState) => ({
  type: UPDATE_PROFESSIONAL_FORM,
  value: professionalFormState,
});
