import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import SectionTitle from '../atoms/SectionTitle';
import EducationItem from '../molecules/EducationItem';

const EducationSection = ({ studies }) => (
  <section id="estudios" className="py-5 bg-light">
    <Container>
      <SectionTitle>Estudios</SectionTitle>
      <ListGroup>
        {studies.map((study) => <EducationItem key={study.id} {...study} />)}
      </ListGroup>
    </Container>
  </section>
);

export default EducationSection;
