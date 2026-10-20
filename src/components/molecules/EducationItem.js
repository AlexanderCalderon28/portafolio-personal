import React from 'react';
import { ListGroup } from 'react-bootstrap';

const EducationItem = ({ institution, degree, year }) => (
  <ListGroup.Item>
    <h3 className="h5 mb-1">{degree}</h3>
    <p className="mb-0 fw-semibold">{institution}</p>
    {year && <small className="text-muted">Año de obtención: {year}</small>}
  </ListGroup.Item>
);

export default EducationItem;
