import { screen, render } from '@testing-library/react';
import Button from '../components/Botton';

test('should be displayed on the screen', () => {
  render(<Button id={1} item="0" handleClick={() => 'testing'} />);
  const btn = screen.getByRole('button');
  expect(btn).toBeDefined();
});
