import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = ({ brand, sections }) => (
  <Navbar bg="dark" variant="dark" expand="md" sticky="top">
    <Container>
      <Navbar.Brand href="#personal">{brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-nav" />
      <Navbar.Collapse id="main-nav">
        <Nav className="ms-auto">
          {sections.map(({ id, label }) => (
            <Nav.Link key={id} href={`#${id}`}>{label}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
