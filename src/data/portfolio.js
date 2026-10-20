import { buildPlaceholder } from '../utils/placeholders';

export const profile = {
  name: 'Alexander Calderón',
  title: 'Estudiante de Analista Programador',
  description:
      'Hola, soy Alexander Calderón, estudiante de la carrera de Analista Programador en Duoc UC (Sede Maipú). Me apasiona el desarrollo de software y la creación de interfaces web modernas, funcionales y accesibles, aplicando estándares limpios y metodologías basadas en componentes con React y tecnologías Front-End',
  avatar: buildPlaceholder('AC'),
  email: 'alex.calderonm@duocuc.cl',
  phone: '+56 9 9996 0425',
  linkedin: 'https://www.linkedin.com/in/tu-usuario',
  github: 'https://github.com/tu-usuario',
};

export const experiences = [
  {
    id: 1,
    company: 'En formación académica',
    role: 'Actualmente cursando Analista Programador',
    start: '2025',
    end: 'Presente'
  },
  {
    id: 2,
    company: 'Proyectos Académicos Duoc UC',
    role: 'Desarrollo de Aplicaciones y Portafolio Web',
    start: '2025',
    end: '2026'
  },
];

export const studies = [
  { id: 1, institution: 'Duoc UC (Sede Maipú)', degree: 'Analista Programador', year: 'En curso' },
  { id: 2, institution: 'Liceo Sagrado Corazón', degree: 'Enseñanza Media Científico-Humanista', year: '2021' },
];


export const projects = [
  {
    id: 1,
    title: 'Repositorio Principal en GitHub',
    category: 'Desarrollo Web',
    description: 'Explora mis repositorios públicos, proyectos de software y desarrollos académicos en Duoc UC.',
    repoUrl: 'https://github.com/AlexanderCalderon28'
  },
];

export const sections = [
  { id: 'personal', label: 'Inicio' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'estudios', label: 'Estudios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];