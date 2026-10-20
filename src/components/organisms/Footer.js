import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = ({ name, email, phone }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white py-4 text-center">
      <Container>
        <p className="mb-1">© {currentYear} {name}. Todos los derechos reservados.</p>
        <p className="mb-0">{email} · {phone}</p>
      </Container>
    </footer>
  );
};

export default Footer;
