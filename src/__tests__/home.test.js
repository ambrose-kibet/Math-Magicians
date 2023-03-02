import { screen, render } from '@testing-library/react';
import Home from '../Pages/Home';

test('should  display Home  on the screen', () => {
  render(<Home />);
  const homePage = screen.getByText(/welcome/i);
  expect(homePage).toBeDefined();
});
