import React, { useState } from 'react';

import { 
  RedirectLink, Button, Form, FormControl, FormTitle, Input, Label, Redirect, RedirectLabel
} from './styles';

const FormComponent = ({ title, attributes, button, onSubmit, redirect }) => {
  const initialState = createFormStateObject(attributes);
  const [form, setForm] = useState(initialState);

  const onChangeHandler = e => setForm(state => ({ ...state, [e.target.name]: e.target.value }));
  const onSubmitHandler = () => onSubmit(form, () => setForm(initialState));

  return (

    <Form autoComplete='off'>
      <FormTitle>{title}</FormTitle>
      
      {attributes.map((attribute, index) => {
        const { label, name, type } = attribute;
        return (
          <FormControl key={index}>
            <Label htmlFor={name}>{label}</Label>
            <Input id={name} name={name} type={type} value={form[name]} onChange={e => onChangeHandler(e)} />
          </FormControl>
        );
      })}
      
      <Button 
        onClick={e => {
          e.preventDefault();
          onSubmitHandler();
        }}
      >{button}</Button>

      {redirect && 
        <Redirect>
          <RedirectLabel>{redirect.label}&nbsp;</RedirectLabel>
          <RedirectLink to={redirect.link.to}>{redirect.link.label}</RedirectLink>
        </Redirect>
      }
    </Form>
  );
};

/* create form state object from the attributes array */
export const createFormStateObject = attributes => attributes.reduce((accumulator, attribute) => ({ ...accumulator, [attribute.name]: ''}), {});

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
