import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { FixedContainer } from '../components/Containers/styles';
import Form from '../components/Form';
import { validateForm, VALIDATORS, register, getAccessToken } from '../util';
import { ErrorMessage, SuccessMessage } from '../components/Message';
import { UserContext } from '../App';


const Register = () => {
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    
    if (getAccessToken() || user) {
      navigate('/');
    }

  }, [navigate, user]);

  const onSubmitHandler = async (form, callback) => {
    console.log('Register form:', form);
    setError([]);
    const validation = validateForm(form, attributes);

    /* check for confirm password match */
    if (form.password !== form.confirmPassword) {
      validation.push('Passwords do not match');
    }

    setError(validation);    
    
    /* no errors */
    if (validation.length === 0) {
      callback(true);
      const response = await register({ ...form });
      
      if (response.error) {
        setError([response.error]);
        callback(false);
        return;
      }
      setSuccess([response.data]);
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  return (
    <FixedContainer size={275}>
      <Form 
        title={'Register'}
        attributes={attributes}
        button={'Register'}
        onSubmit={onSubmitHandler}
        redirect={{
          label: "Already have an account?",
          link: {
            label: 'Login',
            to: '/login'
          }
        }}
      />
      {error.length > 0 && <ErrorMessage messages={error} />}
      {success.length > 0 && <SuccessMessage messages={success} />}
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
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    validator: VALIDATORS.confirmPassword
  },
  {
    label: 'Favourite Team',
    name: 'favouriteTeam',
    type: 'text',
    validator: VALIDATORS.favouriteTeam
  },
]

export default Register;