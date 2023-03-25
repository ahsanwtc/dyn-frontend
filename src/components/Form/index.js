import React, { useState } from 'react';
import { 
  RedirectLink, Button, Form, FormControl, FormTitle, Input, Label, Redirect, RedirectLabel
} from './styles';

const FormComponent = ({ title, attributes, button, onSubmit, redirect }) => {

  return (
    <Form autoComplete='off'>
      <FormTitle>{title}</FormTitle>
      
      {attributes.map((attribute, index) => {
        const { label, name, type } = attribute;
        return (
          <FormControl key={index}>
            <Label htmlFor={name}>{label}</Label>
            <Input id={name} name={name} type={name} />
          </FormControl>
        );
      })}
      
      <Button onClick={e => {}}>{button}</Button>
      {redirect && 
        <Redirect>
          <RedirectLabel>{redirect.label}&nbsp;</RedirectLabel>
          <RedirectLink to={redirect.link.to}>{redirect.link.label}</RedirectLink>
        </Redirect>
      }
    </Form>
  );
};

FormComponent.defaultProps = {
  title: 'Login',
  attributes: [
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
  ],
  button: 'Login',
  onSubmit: form => console.log(form),
  redirect: null,
};

export default FormComponent;
