import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('HomePage renderiza las 6 secciones exigidas', () => {
  const { container } = render(<HomePage />);
  ['personal', 'experiencia', 'estudios', 'proyectos', 'contacto'].forEach((id) => {
    expect(container.querySelector(`#${id}`)).toBeInTheDocument();
  });
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});
