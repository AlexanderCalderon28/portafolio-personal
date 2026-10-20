import React from 'react';
import { Form } from 'react-bootstrap';

const FormField = ({ id, label, error, as, rows, ...inputProps }) => (
  <Form.Group className="mb-3" controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      name={id}
      as={as}
      rows={rows}
      isInvalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      {...inputProps}
    />
    <Form.Control.Feedback type="invalid" id={`${id}-error`}>
      {error}
    </Form.Control.Feedback>
  </Form.Group>
);

export default FormField;
