import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { FixedContainer } from '../components/Containers/styles';
import Form from '../components/Form';
import { ErrorMessage } from '../components/Message';
import { validateForm, VALIDATORS, login } from '../util';
import { UserContext } from '../App';

const Login = () => {
  const [error, setError] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (user) {
    navigate('/');
    console.log('redirecting...');
  }

  const onSubmitHandler = async (form, callback) => {
    console.log('Login form:', form);
    setError([]);
    const validation = validateForm(form, attributes);
    setError(validation);    
    console.log(validation);

    /* no errors */
    if (validation.length === 0) {
      callback(true);
      const response = await login({ ...form });
      if (response.error) {
        setError([response.error]);
        callback(false);
        return;
      }

      console.log('redirecting...');
      navigate('/');
    }

    // callback();
  };

  return (
    <FixedContainer size={275}>
      <Form 
        title={'Login'}
        attributes={attributes}
        button={'Login'}
        onSubmit={onSubmitHandler}
        redirect={{
          label: "Don't have an account?",
          link: {
            label: 'Register',
            to: '/register'
          }
        }}
      />
      {error.length > 0 && <ErrorMessage messages={error} />}
    </FixedContainer>
  );
};

const attributes = [
  {
    label: 'Email',
    name: 'email',
    type: 'text',
    validator: VALIDATORS.email
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    validator: VALIDATORS.password
  },
]

export default Login;