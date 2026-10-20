import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const CategoryFilter = ({ categories, active, onChange }) => (
  <ButtonGroup className="mb-4 flex-wrap" aria-label="Filtrar proyectos por categoría">
    {categories.map((cat) => (
      <Button key={cat} variant={cat === active ? 'primary' : 'outline-primary'} onClick={() => onChange(cat)}>
        {cat}
      </Button>
    ))}
  </ButtonGroup>
);

export default CategoryFilter;
