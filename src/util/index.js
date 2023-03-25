import * as Yup from 'yup';

export const validateForm = (form, attributes) => {
  const validation = [];
  attributes.forEach(attribute => {
    let message = '';
    try {
      attribute.validator.validateSync(form[attribute.name]);
    } catch(error) {
      message = error.message;
    }

    if (message.length > 0) {
      validation.push(message);
    }
  });

  return validation;
};

export const VALIDATORS = {
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Passowrd: Min 6 characters').max(50, 'Passowrd: Max 50 characters').required('Password is required'),
  confirmPassword: Yup.string().min(6, 'Confirm passowrd: Min 6 characters').max(50, 'Confirm passowrd: Max 50 characters').required('Confirm password is required'),
  favouriteTeam: Yup.string().min(3, 'Fav. Team: Min 3 characters').max(50, 'Fav. Team: Max 50 characters').required('Fav. Team is required')
};