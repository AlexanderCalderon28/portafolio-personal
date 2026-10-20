import React from 'react';
import { Card } from 'react-bootstrap';
import LinkButton from '../atoms/LinkButton';

const ProjectCard = ({ title, image, repoUrl }) => (
  <Card className="h-100 project-card shadow-sm">
    <Card.Img variant="top" src={image} alt={`Previsualización de ${title}`} />
    <Card.Body className="d-flex flex-column">
      <Card.Title as="h3" className="h5">{title}</Card.Title>
      <LinkButton href={repoUrl} variant="outline-dark" className="mt-auto" aria-label={`Ver repositorio de ${title}`}>
        Ver repositorio
      </LinkButton>
    </Card.Body>
  </Card>
);

export default ProjectCard;
