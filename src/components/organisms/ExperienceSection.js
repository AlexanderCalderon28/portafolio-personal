import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import SectionTitle from '../atoms/SectionTitle';
import ExperienceItem from '../molecules/ExperienceItem';

const ExperienceSection = ({ experiences }) => (
  <section id="experiencia" className="py-5">
    <Container>
      <SectionTitle>Experiencia Laboral</SectionTitle>
      <ListGroup>
        {experiences.map((exp) => <ExperienceItem key={exp.id} {...exp} />)}
      </ListGroup>
    </Container>
  </section>
);

export default ExperienceSection;
