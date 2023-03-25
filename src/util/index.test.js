import { validateForm, VALIDATORS } from './';

describe('Util functions', () => {
  describe('validateForm', () => {
    
    describe('given a valid form and attributes array', () => {
      it("should return an empty array", () => {
        const attributes = [{ name: 'email', validator: VALIDATORS.email }, { name: 'password', validator: VALIDATORS.password }];
        const form = { email: 'abc@abc.com', password: 'qwerty' };
  
        const o = validateForm(form, attributes);
        expect(o).toEqual([]);
      });
    });

    describe('given a invalid form and attributes array', () => {
      let attributes = [];
      
      beforeEach(() => {
        attributes = [{ name: 'email', validator: VALIDATORS.email }, { name: 'password', validator: VALIDATORS.password }];
      });

      it("should return an array which contains 'Invalid email'", () => {
        const form = { email: 'asd', password: 'qwerty' };
  
        const o = validateForm(form, attributes);
        expect(o).toContain('Invalid email');
      });

      it("should return an array which contains 'Passowrd: Min 6 characters'", () => {
        const form = { email: 'abc@abc.com', password: 'qwey' };
  
        const o = validateForm(form, attributes);
        expect(o).toContain('Passowrd: Min 6 characters');
      });
    });

  });
});