import { screen, render } from '@testing-library/react';
import Quote from '../Pages/Quote';

describe('Quote', () => {
  test('renders Quote component with correct quote', () => {
    render(<Quote />);
    const quote = screen.getByText(/mathematics is not about numbers/i);

    expect(quote).toBeDefined();
  });
});
