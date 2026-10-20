const EMAIL_REGEX = /^\S+@\S+$/i;

export const validateContactForm = (values) => {
  const errors = {};
  const name = values.name ? values.name.trim() : '';
  const email = values.email ? values.email.trim() : '';
  const message = values.message ? values.message.trim() : '';

  if (name === '') {
    errors.name = 'El nombre es obligatorio.';
  }

  if (email === '') {
    errors.email = 'El correo es obligatorio.';
  } else if (!email.includes('@') || !EMAIL_REGEX.test(email)) {
    errors.email = 'Ingresa un correo válido.';
  }

  if (message === '' || message.length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres.';
  }

  return errors;
};