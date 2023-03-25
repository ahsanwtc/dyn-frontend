import { createFormStateObject } from './';

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
});