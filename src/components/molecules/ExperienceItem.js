import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ExperienceItem = ({ company, role, start, end }) => (
  <ListGroup.Item>
    <h3 className="h5 mb-1">{role}</h3>
    <p className="mb-0 fw-semibold">{company}</p>
    <small className="text-muted">{start} – {end}</small>
  </ListGroup.Item>
);

export default ExperienceItem;
