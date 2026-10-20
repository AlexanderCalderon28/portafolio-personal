import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import SectionTitle from '../atoms/SectionTitle';

const ProjectsSection = ({ projects }) => {
    const githubUsername = 'AlexanderCalderon28';

    return (
        <section id="proyectos" className="py-5 bg-light">
            <Container>
                <SectionTitle title="Desarrollos y Proyectos" />

                {/* Tarjeta principal con las estadísticas de GitHub */}
                <Row className="justify-content-center mb-4">
                    <Col lg={10}>
                        <Card className="bg-dark text-white p-4 shadow border-0">
                            <div className="d-flex align-items-center mb-3">
                                <div className="bg-primary rounded-circle p-2 text-white fw-bold me-3 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                                    AC
                                </div>
                                <div>
                                    <h5 className="mb-0">@{githubUsername}</h5>
                                    <small className="text-muted">Perfil Oficial de GitHub</small>
                                </div>
                            </div>

                            {/* Imagen dinámica oficial de estadísticas de GitHub */}
                            <div className="text-center my-3 overflow-hidden">
                                <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight&hide_border=true`}
                                        alt="GitHub Stats"
                                        className="img-fluid rounded shadow-sm"
                                        style={{ maxHeight: '190px' }}
                                    />
                                </a>
                            </div>
                        </Card>
                    </Col>
                </Row>

                {/* Tarjeta de descripción e invitación a visitar el perfil */}
                {projects.map((project) => (
                    <Row className="justify-content-center" key={project.id}>
                        <Col lg={10}>
                            <Card className="p-4 shadow-sm border-0 h-100">
                                <Card.Body className="d-flex flex-column">
                                    <h3 className="h5 card-title fw-bold mb-3">{project.title}</h3>
                                    <p className="text-muted mb-4">{project.description}</p>
                                    <div className="mt-auto">
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-primary px-4"
                                        >
                                            Ver en GitHub
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
};

export default ProjectsSection;