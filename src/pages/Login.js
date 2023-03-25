import React from 'react';
import { FixedContainer } from '../components/Containers/styles';
import Form from '../components/Form';

const Login = () => {

  const onSubmitHandler = (form, callback) => {
    console.log('Login form:', form);
    callback();
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
    </FixedContainer>
  );
};

const attributes = [
  {
    label: 'Email',
    name: 'email',
    type: 'text',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
  },
]

export default Login;