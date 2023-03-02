import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';

describe('ErrorPage', () => {
  test('renders ErrorPage component with link to home', () => {
    render(
      <MemoryRouter initialEntries={['/error']}>
        <ErrorPage />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link');

    expect(link).toBeDefined();
  });
});
