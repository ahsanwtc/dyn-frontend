import { render, screen } from '@testing-library/react';
import Message from './';

describe('Message Component', () => {
  describe('when mounted', () => {
    it('should render correctly', () => {
      render(<Message messages={['a', 'b']} />);
      const a = screen.getByText(/a/i);
      const b = screen.getByText(/b/i);
      expect(a).toBeInTheDocument();
      expect(b).toBeInTheDocument();
    });
  });
});
