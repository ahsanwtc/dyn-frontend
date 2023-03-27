import * as Yup from 'yup';

import { TOKEN } from '../constants';

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

export const http = async (method = 'GET', path, data, token) => {
  const url = `https://g5z95dyaj2.execute-api.eu-central-1.amazonaws.com/dev/user/${path}`;

  const params = {
    method
  };

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers['Authorization'] = token;
  }

  if (data) {
    params['body'] = JSON.stringify(data);
  }

  params['headers'] = headers;

  try {
    const response = await fetch(url, params);
    
    if (response.status === 200) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const getAccessToken = () => {
  const token = window.localStorage.getItem(TOKEN);
  return token;
};

export const setAccessToken = token => {
  window.localStorage.setItem(TOKEN, token);
};

export const removeAccessToken = () => window.localStorage.removeItem(TOKEN);

export const getProfile = async () => {
  const token = getAccessToken();
  if (token) {
    const response = await http('GET', 'profile', null, token);
    if (response) {
      const { data } = response;
      return data;
    }
  }

  return null;
};

export const login = async ({ email, password }) => {
  const response = await http('POST', 'login', { email, password });

  if (response && response.token) {
    setAccessToken(response.token);
    return response.token;
  }

  return null;
};