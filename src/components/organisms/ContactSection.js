import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../atoms/SectionTitle';
import SocialLinks from '../molecules/SocialLinks';
import ContactForm from './ContactForm';

const ContactSection = ({ linkedin, github, onSuccess }) => (
  <section id="contacto" className="py-5 bg-light">
    <Container>
      <SectionTitle>Contacto</SectionTitle>
      <SocialLinks linkedin={linkedin} github={github} />
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}><ContactForm onSuccess={onSuccess} /></Col>
      </Row>
    </Container>
  </section>
);

export default ContactSection;
