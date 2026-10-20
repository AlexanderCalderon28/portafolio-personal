import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import FormField from '../atoms/FormField';
import useContactForm from '../../hooks/useContactForm';

const ContactForm = ({ onSuccess }) => {
  const { values, errors, submitted, handleChange, handleSubmit } = useContactForm(onSuccess);

  return (
    <Form noValidate onSubmit={handleSubmit} aria-label="Formulario de contacto">
      {submitted && <Alert variant="success" role="status">¡Mensaje enviado correctamente!</Alert>}
      <FormField id="name" label="Nombre" type="text" value={values.name} onChange={handleChange} error={errors.name} />
      <FormField id="email" label="Correo electrónico" type="email" value={values.email} onChange={handleChange} error={errors.email} />
      <FormField id="message" label="Mensaje" as="textarea" rows={4} value={values.message} onChange={handleChange} error={errors.message} />
      <Button type="submit" variant="primary">Enviar</Button>
    </Form>
  );
};

export default ContactForm;
