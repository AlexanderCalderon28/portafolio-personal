import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Avatar from '../atoms/Avatar';

const PersonalSection = ({ profile }) => (
    <section id="personal" aria-labelledby="personal-heading" className="py-5 bg-light text-center">
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Avatar src={profile.avatar} alt={`Fotografía de ${profile.name}`} />
                    <h1 id="personal-heading" className="fw-bold">{profile.name}</h1>
                    <p className="text-primary fw-semibold mb-2">{profile.title}</p>
                    <p className="lead text-muted">{profile.description}</p>
                </Col>
            </Row>
        </Container>
    </section>
);

export default PersonalSection;