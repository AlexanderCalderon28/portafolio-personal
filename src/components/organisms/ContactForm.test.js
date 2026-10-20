import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  test('muestra errores si se envía vacío', async () => {
    const onSuccess = jest.fn();
    render(<ContactForm onSuccess={onSuccess} />);
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));
    expect(screen.getByText('El nombre es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('El correo es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText(/al menos 10 caracteres/i)).toBeInTheDocument();
    expect(onSuccess).not.toHaveBeenCalled();
  });

  test('rechaza un correo inválido', async () => {
    render(<ContactForm />);

    // Todos deben llevar await
    await userEvent.type(screen.getByLabelText('Nombre'), 'Ana');
    await userEvent.type(screen.getByLabelText('Correo electrónico'), 'no-es-correo');
    await userEvent.type(screen.getByLabelText('Mensaje'), 'Mensaje suficientemente largo');
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(screen.getByText('Ingresa un correo válido.')).toBeInTheDocument();
  });

  test('envía correctamente con datos válidos y limpia el formulario', async () => {
    const onSuccess = jest.fn();
    render(<ContactForm onSuccess={onSuccess} />);
    await userEvent.type(screen.getByLabelText('Nombre'), 'Ana');
    await userEvent.type(screen.getByLabelText('Correo electrónico'), 'ana@correo.cl');
    await userEvent.type(screen.getByLabelText('Mensaje'), 'Hola, me gustaría contactarte.');
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));
    expect(onSuccess).toHaveBeenCalledWith({
      name: 'Ana',
      email: 'ana@correo.cl',
      message: 'Hola, me gustaría contactarte.',
    });
    expect(screen.getByText(/mensaje enviado/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre')).toHaveValue('');
  });

  test('previene inyección XSS', async () => {
    render(<ContactForm />);
    const input = screen.getByLabelText('Mensaje');
    await userEvent.type(input, '<script>alert("XSS")</script>');
    expect(input).toHaveValue('<script>alert("XSS")</script>');
    expect(document.body.innerHTML).not.toContain('<script>alert("XSS")</script>');
  });

  test('no tiene violaciones de accesibilidad', async () => {
    const { container } = render(<ContactForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});