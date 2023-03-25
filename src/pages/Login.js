import React, { useState } from 'react';

import { FixedContainer } from '../components/Containers/styles';
import Form from '../components/Form';
import Message from '../components/Message';
import { validateForm, VALIDATORS } from '../util';

const Login = () => {
  const [error, setError] = useState([]);

  const onSubmitHandler = (form, callback) => {
    console.log('Login form:', form);
    setError([]);
    const validation = validateForm(form, attributes);
    setError(validation);    
    console.log(validation);
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
]

export default Login;