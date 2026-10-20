import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Header from './Header';
import PersonalSection from './PersonalSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import { profile, experiences, studies, projects, sections } from '../../data/portfolio';

describe('Organismos principales', () => {
  test('Header muestra la marca y los enlaces de navegación', () => {
    render(<Header brand={profile.name} sections={sections} />);
    expect(screen.getByText(profile.name)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contacto' })).toHaveAttribute('href', '#contacto');
  });

  test('PersonalSection muestra nombre, descripción y avatar', () => {
    render(<PersonalSection profile={profile} />);
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument();
    expect(screen.getByText(profile.description)).toBeInTheDocument();
    expect(screen.getByAltText(`Fotografía de ${profile.name}`)).toBeInTheDocument();
  });

  test('ExperienceSection lista empresa, cargo y fechas', () => {
    render(<ExperienceSection experiences={experiences} />);
    experiences.forEach(({ company, role }) => {
      expect(screen.getByText(company)).toBeInTheDocument();
      expect(screen.getByText(role)).toBeInTheDocument();
    });
    expect(screen.getByText('Mar 2024 – Actualidad')).toBeInTheDocument();
  });

  test('EducationSection lista institución y título', () => {
    render(<EducationSection studies={studies} />);
    studies.forEach(({ institution, degree }) => {
      expect(screen.getByText(institution)).toBeInTheDocument();
      expect(screen.getByText(degree)).toBeInTheDocument();
    });
  });

  test('ProjectsSection muestra carga y luego los proyectos con enlace al repositorio', async () => {
    render(<ProjectsSection projects={projects} delay={0} />);
    expect(screen.getByText(/cargando proyectos/i)).toBeInTheDocument();
    expect(await screen.findByText('Tienda Online')).toBeInTheDocument();

    const links = screen.getAllByText(/ver repositorio/i);
    expect(links).toHaveLength(projects.length);
  });

  test('Footer muestra el año actual calculado', () => {
    render(<Footer name="Ana" email="a@b.cl" phone="123" />);
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
  });

  test('Footer no tiene violaciones de accesibilidad', async () => {
    const { container } = render(<Footer name="Ana" email="a@b.cl" phone="123" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});