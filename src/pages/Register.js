import React, { useState } from 'react';
import { FixedContainer } from '../components/Containers/styles';

import Form from '../components/Form';
import { validateForm, VALIDATORS } from '../util';
import Message from '../components/Message';


const Register = () => {
  const [error, setError] = useState([]);

  const onSubmitHandler = (form, callback) => {
    console.log('Register form:', form);
    setError([]);
    const validation = validateForm(form, attributes);

    /* check for confirm password match */
    if (form.password !== form.confirmPassword) {
      validation.push('Passwords do not match');
    }

    setError(validation);    
    console.log(validation);
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
      {error.length > 0 && <Message messages={error} />}
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