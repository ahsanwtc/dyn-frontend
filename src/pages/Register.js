import React from 'react';
import { FixedContainer } from '../components/Containers/styles';
import Form from '../components/Form';

const Register = () => {

  const onSubmitHandler = (form, callback) => {
    console.log('Register form:', form);
    callback();
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
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
  },
  {
    label: 'Favourite Team',
    name: 'favouriteTeam',
    type: 'text',
  },
]

export default Register;