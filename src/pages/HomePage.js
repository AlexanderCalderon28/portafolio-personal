import React, { useEffect } from 'react';
import PortfolioTemplate from '../components/templates/PortfolioTemplate';
import Header from '../components/organisms/Header';
import PersonalSection from '../components/organisms/PersonalSection';
import ExperienceSection from '../components/organisms/ExperienceSection';
import EducationSection from '../components/organisms/EducationSection';
import ProjectsSection from '../components/organisms/ProjectsSection';
import ContactSection from '../components/organisms/ContactSection';
import Footer from '../components/organisms/Footer';
import { profile, experiences, studies, projects, sections } from '../data/portfolio';

const HomePage = () => {
  useEffect(() => {
    document.title = `${profile.name} | Portafolio`;
  }, []);

  return (
    <PortfolioTemplate
      header={<Header brand={profile.name} sections={sections} />}
      footer={<Footer name={profile.name} email={profile.email} phone={profile.phone} />}
    >
      <PersonalSection profile={profile} />
      <ExperienceSection experiences={experiences} />
      <EducationSection studies={studies} />
      <ProjectsSection projects={projects} />
      <ContactSection linkedin={profile.linkedin} github={profile.github} />
    </PortfolioTemplate>
  );
};

export default HomePage;
