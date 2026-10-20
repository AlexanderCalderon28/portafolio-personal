import { buildPlaceholder } from '../utils/placeholders';

export const profile = {
  name: 'Alexander Calderón',
  title: 'Desarrollador Front-End',
  description:
      'Desarrollador Front-End apasionado por crear interfaces accesibles, responsivas y bien estructuradas con React y Bootstrap.',
  avatar: buildPlaceholder('AC'),
  email: 'alex.calderonm@duocuc.cl',
  phone: '+56 9 1234 5678',
  linkedin: 'https://www.linkedin.com/in/tu-usuario',
  github: 'https://github.com/tu-usuario',
};

export const experiences = [
  { id: 1, company: 'Tech Solutions SpA', role: 'Desarrollador Front-End', start: 'Mar 2024', end: 'Actualidad' },
  { id: 2, company: 'Digital Studio', role: 'Desarrollador Web Junior', start: 'Ene 2023', end: 'Feb 2024' },
  { id: 3, company: 'Freelance', role: 'Maquetador Web', start: 'Jun 2022', end: 'Dic 2022' },
];

export const studies = [
  { id: 1, institution: 'Duoc UC', degree: 'Analista Programador', year: '2026' },
  { id: 2, institution: 'Udemy', degree: 'Curso de React Avanzado', year: '2024' },
  { id: 3, institution: 'Liceo Técnico', degree: 'Enseñanza Media Técnico-Profesional', year: '2021' },
];

export const projects = [
  { id: 1, title: 'Tienda Online', category: 'React', image: buildPlaceholder('Tienda+Online'), repoUrl: 'https://github.com/tu-usuario/tienda-online' },
  { id: 2, title: 'Landing Responsiva', category: 'Bootstrap', image: buildPlaceholder('Landing'), repoUrl: 'https://github.com/tu-usuario/landing-responsiva' },
  { id: 3, title: 'Gestor de Tareas', category: 'React', image: buildPlaceholder('Tareas'), repoUrl: 'https://github.com/tu-usuario/gestor-tareas' },
  { id: 4, title: 'Blog Personal', category: 'Bootstrap', image: buildPlaceholder('Blog'), repoUrl: 'https://github.com/tu-usuario/blog-personal' },
];

export const sections = [
  { id: 'personal', label: 'Inicio' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'estudios', label: 'Estudios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];