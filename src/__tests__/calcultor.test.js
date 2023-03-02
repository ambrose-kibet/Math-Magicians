import { screen, render } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('should display calculator', () => {
  render(<Calculator />);
  const calc = screen.getAllByRole('generic');
  expect(calc).toBeDefined();
});
test('should have input for display calculator', () => {
  render(<Calculator />);
  const display = screen.getByRole('textbox');
  expect(display).toBeDefined();
});
test('input should have initial value of 0', () => {
  render(<Calculator />);
  const display = screen.getByRole('textbox');
  expect(display.value).toBe('0');
});
