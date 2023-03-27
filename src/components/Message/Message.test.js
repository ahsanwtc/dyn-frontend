import { render, screen } from '@testing-library/react';
import { ErrorMessage, SuccessMessage } from './';

describe('Message Component', () => {
  describe('when ErrorMessage mounted', () => {
    it('should render correctly', () => {
      render(<ErrorMessage messages={['a', 'b']} />);
      const a = screen.getByText(/a/i);
      const b = screen.getByText(/b/i);
      expect(a).toBeInTheDocument();
      expect(b).toBeInTheDocument();
    });
  });

  describe('when SuccessMessage mounted', () => {
    it('should render correctly', () => {
      render(<SuccessMessage messages={['a', 'b']} />);
      const a = screen.getByText(/a/i);
      const b = screen.getByText(/b/i);
      expect(a).toBeInTheDocument();
      expect(b).toBeInTheDocument();
    });
  });
});
