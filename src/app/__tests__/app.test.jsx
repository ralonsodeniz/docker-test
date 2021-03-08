import { render } from '@testing-library/react';
import App from '../app';

test('renders app', () => {
  render(<App />);
  const { container } =  render(<App />);

  expect(container).not.toBeEmptyDOMElement();
});
