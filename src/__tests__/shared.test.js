import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SharedLayout from '../Pages/SharedLayout';

describe('ErrorPage', () => {
  test('renders SharedLayout component with Navbar', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SharedLayout />
      </MemoryRouter>,
    );
    const navbar = screen.getByRole('navigation');

    expect(navbar).toBeDefined();
  });
});
