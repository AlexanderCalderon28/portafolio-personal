\# Proyecto: Portafolio Personal



Aplicación web de portafolio personal desarrollada en React y React-Bootstrap para la asignatura Desarrollo Full Stack II (DSY1104).



El proyecto está organizado bajo la metodología Atomic Design y cuenta con las secciones solicitadas en la pauta: información personal, experiencia laboral, estudios, galería de proyectos con filtro por categoría, formulario de contacto validado y pie de página con año dinámico.



\## Tecnologías utilizadas



\* React 18 (Create React App)

\* Bootstrap 5 y React-Bootstrap

\* Hooks utilizados: `useState` y `useEffect` (junto con hooks personalizados para el formulario y los proyectos)

\* Pruebas unitarias con Jest, React Testing Library y `jest-axe`



\## Estructura del proyecto (Atomic Design)



El código fuente dentro de `src/` está separado siguiendo la jerarquía vista en clases:



\* `components/atoms/`: Elementos básicos reutilizables (`Avatar`, `FormField`, `LinkButton`, `SectionTitle`).

\* `components/molecules/`: Agrupaciones simples (`CategoryFilter`, `EducationItem`, `ExperienceItem`, `ProjectCard`, `SocialLinks`).

\* `components/organisms/`: Secciones completas de la página (`Header`, `PersonalSection`, `ExperienceSection`, `EducationSection`, `ProjectsSection`, `ContactForm`, `ContactSection`, `Footer`).

\* `components/templates/`: Estructura general del layout (`PortfolioTemplate`).

\* `pages/`: Vista principal (`HomePage`).

\* `hooks/`: Lógica de estado separada en `useContactForm.js` y `useProjects.js`.

\* `data/` y `utils/`: Datos del portafolio y funciones de validación.



\## Requisitos previos



Tener instalado Node.js y npm en el equipo (o en la instancia EC2). Para verificar las versiones en la terminal:



```bash

node --version

npm --version

