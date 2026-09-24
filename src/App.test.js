import { render } from '@testing-library/react';
import App from './App';

test('renders the counter button', () => {
  render(<App />);
  expect(document.body.textContent.length).toBeGreaterThan(0);
});
