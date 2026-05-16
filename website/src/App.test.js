import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site branding', () => {
  render(<App />);
  expect(screen.getAllByText(/Hudson Whipple/i).length).toBeGreaterThan(0);
});
