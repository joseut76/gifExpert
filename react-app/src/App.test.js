import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const h4 = screen.getByText('My Title');
  expect(h4).toBeInTheDocument();
});
