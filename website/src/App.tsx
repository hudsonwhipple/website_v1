import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './App.css';

import DemoOne from './components/ui/demo';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { motion } from 'framer-motion';
import SkillsSection from './components/SkillsSection';
import ProjectCard from './components/ProjectCard';
import { FeaturesCards } from './components/FeaturesCard';
import ContactUs from './components/ContactUs';

const PROJECTS: {
  img: string;
  title: string;
  description: string;
  gradient: [string, string];
  skills: string[];
  fullDescription: string;
  imageCredit?: React.ReactNode;
}[] = [
  {
    img: 'glass-cloud-icon.png',
    title: 'Climate Data Warehouse',
    description: 'Data warehouse to analyze climate policies',
    gradient: ['#0d1c16', '#0d1530'],
    skills: ['GCP', 'dbt', 'SQL', 'Data Engineering', 'ETL'],
    fullDescription:
      'Developed in GCP and dbt a comprehensive data warehouse to take several climate datasets through transformation layers. The project analyzes the effects of environmental policy on climate patterns and provides insights for policy makers. Implemented efficient data pipelines and transformation logic to handle large-scale climate data.',
    imageCredit: (
      <>
        Illustration by{' '}
        <a href="https://icons8.com/illustrations/author/AJeVuFhkCuqC" target="_blank" rel="noopener noreferrer">
          ekzi.letters Ouch!
        </a>
      </>
    ),
  },
  {
    img: 'fluid-shopping-basket.png',
    title: 'Grocery Recommender System',
    description: 'ML-powered product recommendation system',
    gradient: ['#130d22', '#0d1530'],
    skills: ['Python', 'Machine Learning', 'SMOTE', 'Feature Engineering', 'scikit-learn'],
    fullDescription:
      'Feature engineered and used Machine Learning to create an intelligent method of recommending products to likely customers. Implemented SMOTE for handling imbalanced datasets and applied various ML algorithms to predict customer purchasing patterns.',
    imageCredit: (
      <>
        Illustration by{' '}
        <a href="https://icons8.com/illustrations/author/AJeVuFhkCuqC" target="_blank" rel="noopener noreferrer">
          ekzi.letters Ouch!
        </a>
      </>
    ),
  },
  {
    img: 'comp_setup.png',
    title: 'Personal Website',
    description: 'Personal Website',
    gradient: ['#0d1530', '#160d30'],
    skills: ['React', 'TypeScript', 'CSS', 'Mantine UI', 'Framer Motion'],
    fullDescription:
      'This frontend website was created through React, open-source libraries, and TypeScript. Features include particle backgrounds, animated hero section, 3D tilt cards, typewriter effects, and smooth scroll-triggered animations throughout.',
    imageCredit: (
      <>
        None
      </>
    ),
  },
  {
    img: 'music-app.png',
    title: 'Cheap Cheap Tickets',
    description: 'Full-stack ticket marketplace platform',
    gradient: ['#1e0d0d', '#0d1530'],
    skills: ['React', 'Flask', 'PostgreSQL', 'REST API', 'Python'],
    fullDescription:
      'Implemented a full-stack website in React, Flask, PostgreSQL, and with REST API. The platform allows users to buy and sell event tickets with secure authentication, real-time availability updates, and integrated payment processing.',
    imageCredit: (
      <>
        <a href="https://iconscout.com/3d-icons/music-app" target="_blank" rel="noopener noreferrer">
          Music App
        </a>{' '}
        by{' '}
        <a href="https://iconscout.com/contributors/uigo" target="_blank" rel="noopener noreferrer">
          Creasheeps
        </a>{' '}
        on <a href="https://iconscout.com" target="_blank" rel="noopener noreferrer">IconScout</a>
      </>
    ),
  },
  {
    img: 'binary-coding.png',
    title: 'PintOS',
    description: 'Custom operating system',
    gradient: ['#0d1a0d', '#160d30'],
    skills: ['C', 'Operating Systems', 'Concurrency', 'Memory Management', 'Low-level Programming'],
    fullDescription:
      'Built an operating system from scratch with priority donation, page replacement algorithms, and synchronization mechanisms. Implemented thread scheduling, file system operations, and virtual memory management.',
    imageCredit: (
      <>
        <a href="https://iconscout.com/3d-icons/binary-coding" target="_blank" rel="noopener noreferrer">
          Binary Coding
        </a>{' '}
        by{' '}
        <a href="https://iconscout.com/contributors/iqonic-design" target="_blank" rel="noopener noreferrer">
          iqonic.design
        </a>
      </>
    ),
  },
  {
    img: 'system.png',
    title: 'System Emulator',
    description: 'Processor emulator with optimization',
    gradient: ['#0d0d22', '#1a0d16'],
    skills: ['C', 'Assembly', 'Computer Architecture', 'Pipeline Optimization', 'Systems Programming'],
    fullDescription:
      'Developed the software for a processor emulator under the PIPE- optimization technique. Implemented instruction pipelining, hazard detection, and forwarding logic to maximize throughput.',
    imageCredit: (
      <>
        <a href="https://iconscout.com/3d-icons/system" target="_blank" rel="noopener noreferrer">
          System
        </a>{' '}
        by{' '}
        <a href="https://iconscout.com/contributors/tamry-studio" target="_blank" rel="noopener noreferrer">
          Tamry Studio
        </a>{' '}
        on <a href="https://iconscout.com" target="_blank" rel="noopener noreferrer">IconScout</a>
      </>
    ),
  },
];

const App: React.FC = () => {
  return (
    <MantineProvider>
      <div className="app">
        {/* Animated mesh-gradient background — swap activeEffect in demo.tsx to change style */}
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <DemoOne />
        </div>
        <Navbar />

        <main className="main-content">
          {/* Hero / About */}
          <HeroSection />

          {/* About extended bio */}
          <section className="about-bio">
            <div className="bio-inner">
              <motion.div
                className="bio-grid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="bio-paragraph">
                  I recently graduated with a Bachelor's in Computer Science at the{' '}
                  <span className="accent">University of Texas at Austin</span>, complementing my major
                  with a certificate in Applied Statistical Modeling and a minor in Statistics and Data Sciences.
                  My primary areas of interest lie at the intersection of machine learning, data science, and software engineering.
                </p>
                <p className="bio-paragraph">
                  Beyond academics, I helped found a startup called{' '}
                  <span className="accent">Gmango AI</span>, which operates at the intersection of{' '}
                  <strong>AI and healthcare</strong>. I've loved working in a fast-paced, dynamic environment
                  where I can make a meaningful impact.
                </p>
                <p className="bio-paragraph">
                  In 2025, I interned at <span className="accent">American Airlines</span>, where I
                  expanded and redesigned the <strong>Flight Attendant Standby Tool</strong> — an ML model
                  that helps prevent <strong>100s of crew delays</strong> on every Crew Scheduler's monitor
                  at the Integrated Operations Center.
                </p>
                <p className="bio-paragraph">
                  In my final semester at UT Austin, I led a team of developers called{' '}
                  <span className="accent">Curricular Analytics</span> at the Center for Teaching and Learning.
                  Our goal was to build a web app that analyzes degree plans to identify{' '}
                  <strong>bottlenecks in college majors</strong>. I presented to over{' '}
                  <strong>60 faculty administrators</strong>.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Skills */}
          <SkillsSection />

          {/* Projects */}
          <section id="projects" className="projects-section">
            <div className="section-inner">
              <motion.div
                className="section-label"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {'<'}<span style={{ color: '#6abf7b' }}>projects</span>{' />'}
              </motion.div>

              <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Things I've Built
              </motion.h2>

              <motion.p
                className="section-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Some projects are not publicly available — feel free to reach out to learn more.
              </motion.p>

              <div className="projects-grid">
                {PROJECTS.map((project, index) => (
                  <ProjectCard key={project.title} {...project} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <FeaturesCards />

          {/* Contact */}
          <ContactUs />
        </main>

        <footer className="footer">
          <p>
            Designed &amp; built by <span className="accent">Hudson Whipple</span> · {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </MantineProvider>
  );
};

export default App;
