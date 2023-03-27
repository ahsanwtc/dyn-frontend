import { render, screen, fireEvent } from '@testing-library/react';

import Form, { createFormStateObject } from './';

describe('Form Component', () => {
  describe('createFormStateObject', () => {
    
    describe('given a valid array', () => {
      it("should return { a: '', b: '' }", () => {
        const attributes = [{ name: 'a' }, { name: 'b' }];
  
        const o = createFormStateObject(attributes);
        expect(o).toEqual({ a: '', b: '' });
      });
    });

    describe('given an empty array', () => {
      it("should return {}", () => {
        const attributes = [];
  
        const o = createFormStateObject(attributes);
        expect(o).toEqual({});
      });
    });

  });

  describe('interactions', () => {

    let props = {};
    const onSubmitHandler = jest.fn();

    beforeEach(() => {
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
      ];
      
      props = { title: 'Title', button: 'button', onSubmit: onSubmitHandler, attributes };
    });

    it('renders correctly', () => {
      
      render (
        <Form {...props} />
      );
      
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('button')).toBeInTheDocument();

    });

    it('should call handler when submitted', async () => {
      render (
        <Form {...props} />
      );
      const button = screen.getByRole('button');

      await fireEvent.click(button);
      expect(onSubmitHandler.mock.calls).toHaveLength(1);
    });


  });

});