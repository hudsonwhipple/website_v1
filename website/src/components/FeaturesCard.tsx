import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeaturesCard.module.css';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

const EXPERIENCES: Experience[] = [
  {
    role: 'SWE & ML Engineer',
    company: 'Gmango AI',
    period: '2023 – Present',
    description:
      'Founding Engineer at a tech startup at the intersection of AI and healthcare. Built the full mobile frontend in Flutter — including checkout, user management, and marketplace — and working on AI-powered analysis of image scans.',
    image: 'Gmango_logo.png',
    tags: ['AI/ML', 'Dart', 'Flutter', 'Backend', 'Mobile', 'Startup', 'Python', 'REST API'],
    color: '#06b6d4',
  },
  {
    role: 'Data Scientist Intern',
    company: 'American Airlines',
    period: 'Summer 2025',
    description:
      'Expanded and redesigned the Flight Attendant Standby Tool — an ML model that prevents hundreds of crew delays across every Crew Scheduler monitor at the Integrated Operations Center. Built daily model performance monitoring and conducted live testing before deploying the new model to production.',
    image: 'american_airlines.png',
    tags: ['Machine Learning', 'Python', 'Databricks', 'SQL','Data Engineering', 'MLOps'],
    color: '#3b82f6',
  },
  {
    role: 'Data Analyst / SWE',
    company: 'Curricular Analytics — UT Austin CTL',
    period: '2024 – 2026',
    description:
      'Led a team of developers building a web app that analyzes degree plans using live data to identify bottlenecks in college majors. Presented a prototype to 60+ faculty administrators and collaborating with stakeholders to drive data-informed academic planning.',
    image: 'UT_Austin.png',
    tags: ['React', 'Data Analysis', 'PostgreSQL', 'Python'],
    color: '#41e26e',
  },
  {
    role: 'Undergraduate Researcher',
    company: 'Code Assist — UT Austin',
    period: '2023',
    description:
      'Developed unit tests for an AI auto-grading application, including multi-threading tests. Implemented API endpoints in the backend for user management against a PostgreSQL database.',
    image: 'UT_Austin.png',
    tags: ['Python', 'PostgreSQL', 'Testing', 'REST API'],
    color: '#10b981',
  },
];

const SKILL_TAG_COLORS = ['#3b82f6', '#41e26e', '#06b6d4', '#10b981', '#41e26e'];

export function FeaturesCards() {
  return (
    <section id="experience" className={styles.section}>
      <motion.div
        className={styles.sectionLabel}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {'<'}<span>experience</span>{' />'}
      </motion.div>

      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Where I've Worked
      </motion.h2>

      <div className={styles.timeline}>
        <div className={styles.timelineLine} />

        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <div
              className={styles.timelineNode}
              style={{ '--node-color': exp.color } as React.CSSProperties}
            >
              <span className={styles.nodeRing} />
            </div>

            <div
              className={styles.card}
              style={{ '--card-color': exp.color } as React.CSSProperties}
            >
              <div className={styles.cardTop}>
                <div className={styles.logoWrap}>
                  <img src={exp.image} alt={exp.company} className={styles.logo} />
                </div>
                <div className={styles.meta}>
                  <span className={styles.period}>{exp.period}</span>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company} style={{ color: exp.color }}>
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className={styles.cardDivider} />
              <p className={styles.description}>{exp.description}</p>

              <div className={styles.tags}>
                {exp.tags.map((tag, j) => (
                  <span
                    key={j}
                    className={styles.tag}
                    style={{ '--tag-color': SKILL_TAG_COLORS[j % SKILL_TAG_COLORS.length] } as React.CSSProperties}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
