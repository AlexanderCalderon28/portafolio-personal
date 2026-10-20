import { useState } from 'react';
import { validateContactForm } from '../utils/validators';

const INITIAL_VALUES = { name: '', email: '', message: '' };

function useContactForm(onSuccess) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem('contacto', JSON.stringify(values));
      if (onSuccess) {
        onSuccess(values);
      }
      setValues(INITIAL_VALUES);
      setSubmitted(true);
    }
  };

  return { values, errors, submitted, handleChange, handleSubmit };
}

export default useContactForm;