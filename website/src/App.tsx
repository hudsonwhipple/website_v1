import React from 'react';
import './forest/forest.css';

import { ThemeBackdrop } from './forest/ThemeBackdrop';
import { Nav } from './forest/Nav';
import { Hero } from './forest/Hero';
import { ProjectsSection } from './forest/ProjectsSection';
import { ExperienceSection } from './forest/ExperienceSection';
import { SkillsSection } from './forest/SkillsSection';
import { ActivitySection } from './forest/ActivitySection';
import { ContactSection, Footer } from './forest/ContactSection';

const App: React.FC = () => {
  return (
    <div className="site">
      <a href="#main" className="skip">
        Skip to content
      </a>
      <ThemeBackdrop />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav />
        <main id="main">
          <Hero />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ActivitySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
