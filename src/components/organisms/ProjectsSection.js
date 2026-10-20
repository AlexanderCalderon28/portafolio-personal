import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import SectionTitle from '../atoms/SectionTitle';
import ProjectCard from '../molecules/ProjectCard';
import CategoryFilter from '../molecules/CategoryFilter';
import useProjects from '../../hooks/useProjects';

const ProjectsSection = ({ projects, delay }) => {
  const { loading, category, setCategory, categories, visibleProjects } = useProjects(projects, delay);

  return (
    <section id="proyectos" className="py-5">
      <Container>
        <SectionTitle>Desarrollos y Proyectos</SectionTitle>
        <div className="text-center">
          <CategoryFilter categories={categories} active={category} onChange={setCategory} />
        </div>
        {loading ? (
          <div className="text-center" role="status">
            <Spinner animation="border" />
            <p className="mt-2">Cargando proyectos...</p>
          </div>
        ) : (
          <Row xs={1} sm={2} lg={3} className="g-4">
            {visibleProjects.map((project) => (
              <Col key={project.id}><ProjectCard {...project} /></Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default ProjectsSection;
