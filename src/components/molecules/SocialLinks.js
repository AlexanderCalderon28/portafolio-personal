import React from 'react';
import LinkButton from '../atoms/LinkButton';

const SocialLinks = ({ linkedin, github }) => (
  <div className="d-flex gap-2 justify-content-center mb-4">
    <LinkButton href={linkedin} variant="primary">LinkedIn</LinkButton>
    <LinkButton href={github} variant="dark">GitHub</LinkButton>
  </div>
);

export default SocialLinks;
