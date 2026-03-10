import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

const ROLES = [
  'Software Engineer',
  'ML Engineer',
  'Full-Stack Developer',
  'Data Scientist',
  'Startup Builder',
];

const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
  }, [charIndex, deleting, roleIndex]);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 22}deg) rotateX(${y * -22}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(900px) rotateY(-4deg) rotateX(2deg) scale(1)';
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.textBlock}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.greeting} variants={itemVariants}>
            Hi, I'm
          </motion.p>

          <motion.h1 className={styles.name} variants={itemVariants}>
            Hudson<br />
            <span className={styles.nameAccent}>Whipple</span>
          </motion.h1>

          <motion.div className={styles.roleRow} variants={itemVariants}>
            <span className={styles.rolePrefix}>{'// '}</span>
            <span className={styles.roleText}>{displayed}</span>
            <span className={styles.cursor}>|</span>
          </motion.div>

          <motion.div className={styles.bio} variants={itemVariants}>
            <p>
              CS student at <span className={styles.accentText}>UT Austin</span> specializing in machine learning,
              data science &amp; software engineering. Co-founder of{' '}
              <span className={styles.accentText}>Gmango AI</span> — building intelligent healthcare tools.
            </p>
          </motion.div>

          <motion.div className={styles.ctaRow} variants={itemVariants}>
            <a
              href="#projects"
              className={styles.ctaPrimary}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={styles.ctaSecondary}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.profileBlock}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
        >
          {/* Decorative background blobs */}
          <div className={styles.blobBlue} />
          <div className={styles.blobPurple} />

          {/* The glass card itself */}
          <div
            ref={cardRef}
            className={styles.glassCard}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Top bar chrome */}
            <div className={styles.cardChrome}>
              <span className={styles.chromeDot} style={{ background: '#f87171' }} />
              <span className={styles.chromeDot} style={{ background: '#fbbf24' }} />
              <span className={styles.chromeDot} style={{ background: '#34d399' }} />
              <span className={styles.chromeName}>hudson_whipple.jpg</span>
            </div>

            {/* Photo */}
            <div className={styles.photoWrap}>
              <img
                src="/profile_pic_sq.jpg"
                alt="Hudson Whipple"
                className={styles.profileImage}
              />
              {/* Subtle gradient overlay at bottom */}
              <div className={styles.photoGradient} />
            </div>

            {/* Card footer stat row */}
            <div className={styles.cardFooter}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>UT Austin</span>
                <span className={styles.statLabel}>CS &amp; Stats</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statValue}>3+ yrs</span>
                <span className={styles.statLabel}>Experience</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statValue}>6 projects</span>
                <span className={styles.statLabel}>Shipped</span>
              </div>
            </div>
          </div>

          {/* Floating badges outside the card */}
          <div className={styles.badge} style={{ top: '-5%', right: '-8%' }}>
            <span className={styles.badgeDot} style={{ background: '#3b82f6' }} />
            Machine Learning
          </div>
          <div className={styles.badge} style={{ bottom: '18%', left: '-12%' }}>
            <span className={styles.badgeDot} style={{ background: '#a855f7' }} />
            Full-Stack Dev
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
