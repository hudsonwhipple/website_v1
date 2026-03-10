import React from 'react';
import { motion } from 'framer-motion';
import { IconCode, IconDeviceMobile, IconDatabase, IconCloud, IconBrain } from '@tabler/icons-react';
import {
  SiOpenjdk, SiC, SiPython, SiJavascript, SiDart, SiApple,
  SiReact, SiFlutter, SiFlask, SiPostgresql, SiMongodb,
  SiGooglecloud, SiAmazon, SiDocker, SiDatabricks,
  SiPytorch, SiNumpy, SiPandas,
} from 'react-icons/si';
import { TbDatabase, TbBrandGoogle } from 'react-icons/tb';
import styles from './SkillsSection.module.css';

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

interface Skill {
  name: string;
  Icon: IconComponent;
}

interface Category {
  title: string;
  CategoryIcon: IconComponent;
  color: string;
  skills: Skill[];
}

const CATEGORIES: Category[] = [
  {
    title: 'Languages',
    CategoryIcon: IconCode as IconComponent,
    color: '#3b82f6',
    skills: [
      { name: 'Java', Icon: SiOpenjdk as IconComponent },
      { name: 'C', Icon: SiC as IconComponent },
      { name: 'Python', Icon: SiPython as IconComponent },
      { name: 'JavaScript', Icon: SiJavascript as IconComponent },
      { name: 'Dart', Icon: SiDart as IconComponent },
      { name: 'Objective-C', Icon: SiApple as IconComponent },
      { name: 'SQL', Icon: TbDatabase as IconComponent },
    ],
  },
  {
    title: 'Frontend & Mobile',
    CategoryIcon: IconDeviceMobile as IconComponent,
    color: '#06b6d4',
    skills: [
      { name: 'React', Icon: SiReact as IconComponent },
      { name: 'Flutter', Icon: SiFlutter as IconComponent },
    ],
  },
  {
    title: 'Backend & Databases',
    CategoryIcon: IconDatabase as IconComponent,
    color: '#41e26e',
    skills: [
      { name: 'Flask', Icon: SiFlask as IconComponent },
      { name: 'PostgreSQL', Icon: SiPostgresql as IconComponent },
      { name: 'NoSQL', Icon: SiMongodb as IconComponent },
    ],
  },
  {
    title: 'Cloud & DevOps',
    CategoryIcon: IconCloud as IconComponent,
    color: '#10b981',
    skills: [
      { name: 'GCP', Icon: SiGooglecloud as IconComponent },
      { name: 'AWS', Icon: SiAmazon as IconComponent },
      { name: 'Docker', Icon: SiDocker as IconComponent },
      { name: 'Databricks', Icon: SiDatabricks as IconComponent },
    ],
  },
  {
    title: 'ML & AI',
    CategoryIcon: IconBrain as IconComponent,
    color: '#41e26e',
    skills: [
      { name: 'PyTorch', Icon: SiPytorch as IconComponent },
      { name: 'Google Colab', Icon: TbBrandGoogle as IconComponent },
      { name: 'NumPy', Icon: SiNumpy as IconComponent },
      { name: 'Pandas', Icon: SiPandas as IconComponent },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className={styles.section}>
      <motion.div
        className={styles.sectionLabel}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {'<'}<span>skills</span>{' />'}
      </motion.div>

      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {CATEGORIES.map((cat) => (
          <motion.div key={cat.title} className={styles.categoryCard} variants={rowVariants}>
            <div
              className={styles.categoryHeader}
              style={{ '--cat-color': cat.color } as React.CSSProperties}
            >
              <span className={styles.categoryIconWrap} style={{ color: cat.color }}>
                <cat.CategoryIcon size={16} />
              </span>
              <span className={styles.categoryTitle}>{cat.title}</span>
              <span className={styles.categoryCount} style={{ color: cat.color }}>
                {cat.skills.length}
              </span>
            </div>

            <motion.div className={styles.skillsRow} variants={containerVariants}>
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillChip}
                  variants={skillVariants}
                  whileHover={{ scale: 1.08, y: -3 }}
                  style={{ '--chip-color': cat.color } as React.CSSProperties}
                >
                  <span className={styles.skillIcon} style={{ color: cat.color }}>
                    <skill.Icon size={16} />
                  </span>
                  <span className={styles.skillName}>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
