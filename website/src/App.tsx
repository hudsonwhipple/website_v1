import React from 'react';
import './forest/forest.css';

import { FOREST } from './forest/theme';
import { ThemeBackdrop } from './forest/ThemeBackdrop';
import { Nav, Hero, SignatureStrip, Footer } from './forest/Hero';
import { TechHoneycomb } from './forest/TechHoneycomb';
import { ExpDeck } from './forest/ExpDeck';
import { ProjectsSection } from './forest/ProjectsSection';
import { ContactSection } from './forest/ContactSection';

const T = FOREST;

const App: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: T.bg.ink,
        color: T.text.primary,
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <ThemeBackdrop theme={T} density={1.6} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav theme={T} />
      </div>

      <div className="forest-page" style={{ position: 'relative', zIndex: 1 }}>
        <Hero theme={T} />
        <SignatureStrip theme={T} />
        <TechHoneycomb theme={T} padding={56} />
        <div style={{ height: 32 }} />
        <ExpDeck theme={T} padding={56} />
        <div style={{ height: 32 }} />
        <ProjectsSection theme={T} padding={56} />
        <div style={{ height: 32 }} />
        <ContactSection theme={T} padding={56} />
        <Footer theme={T} />
      </div>
    </div>
  );
};

export default App;
