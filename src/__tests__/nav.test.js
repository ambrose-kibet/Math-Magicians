import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>,
    );
    const homeLink = screen.getByText(/home/i);
    const calculatorLink = screen.getByRole('link', { name: /calculator/i });
    const quoteLink = screen.getByRole('link', { name: /quote/i });

    expect(homeLink).toBeDefined();
    expect(calculatorLink).toBeDefined();
    expect(quoteLink).toBeDefined();
  });
});
