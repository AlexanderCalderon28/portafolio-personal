import React from 'react';
import { Button } from 'react-bootstrap';

const LinkButton = ({ href, variant = 'primary', children, ...rest }) => (
  <Button href={href} variant={variant} target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </Button>
);

export default LinkButton;
