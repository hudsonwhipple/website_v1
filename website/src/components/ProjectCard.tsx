import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '@mantine/core';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  gradient: [string, string];
  skills: string[];
  fullDescription: string;
  imageCredit?: React.ReactNode;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  img,
  gradient,
  skills,
  fullDescription,
  imageCredit,
  index = 0,
}) => {
  const [opened, setOpened] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const measureRowRef = useRef<HTMLDivElement>(null);
  const moreMeasureRef = useRef<HTMLSpanElement>(null);
  const [visibleSkillCount, setVisibleSkillCount] = useState(skills.length);

  useLayoutEffect(() => {
    const container = tagsContainerRef.current;
    const measureRow = measureRowRef.current;
    const moreEl = moreMeasureRef.current;
    if (!container || !measureRow || !moreEl || skills.length === 0) {
      setVisibleSkillCount(skills.length);
      return;
    }

    const compute = () => {
      const available = container.clientWidth;
      if (available <= 0) return;

      const chips = measureRow.querySelectorAll<HTMLElement>('[data-skill-chip]');
      const widths = Array.from(chips).map((c) => c.offsetWidth);
      const moreW = moreEl.offsetWidth;
      const gap = (() => {
        const g = getComputedStyle(container).columnGap || getComputedStyle(container).gap;
        const n = parseFloat(g);
        return Number.isFinite(n) ? n : 6;
      })();

      let sum = 0;
      let n = 0;
      for (let i = 0; i < skills.length; i++) {
        const chipW = widths[i] ?? 0;
        const nextSum = sum + (n > 0 ? gap : 0) + chipW;
        const remainingAfter = skills.length - i - 1;
        const trailer = remainingAfter > 0 ? moreW + gap : 0;
        if (nextSum + trailer > available) break;
        sum = nextSum;
        n++;
      }

      setVisibleSkillCount(n);
    };

    const ro = new ResizeObserver(() => compute());
    ro.observe(container);
    compute();
    return () => ro.disconnect();
  }, [skills]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  const SKILL_COLORS = ['#7eb8d4', '#6abf7b', '#7eb8d4', '#6abf7b', '#6abf7b', '#ec4899'];
  const gradientStyle = `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
        className={styles.cardWrapper}
      >
        <div
          ref={cardRef}
          className={styles.card}
          style={{ background: gradientStyle }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => setOpened(true)}
        >
          {/* Animated gradient border on hover */}
          <div className={styles.glowBorder} />

          {/* SVG / image zone — no own background, inherits card gradient */}
          <div className={styles.imageContainer}>
            {/* Noise texture overlay for depth */}
            <div className={styles.noiseOverlay} />

            <img src={img} alt={title} className={styles.projectImage} />

            <div className={styles.imageOverlay}>
              <span className={styles.viewBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                View Details
              </span>
            </div>
          </div>

          {/* Glass card body */}
          <div className={styles.cardBody}>
            <div ref={measureRowRef} className={styles.tagsMeasure} aria-hidden>
              {skills.map((skill, i) => (
                <span
                  key={i}
                  data-skill-chip
                  className={styles.tag}
                  style={{ '--tag-color': SKILL_COLORS[i % SKILL_COLORS.length] } as React.CSSProperties}
                >
                  {skill}
                </span>
              ))}
              <span ref={moreMeasureRef} className={styles.tagMore}>
                + more
              </span>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div ref={tagsContainerRef} className={styles.tags}>
              {skills.slice(0, visibleSkillCount).map((skill, i) => (
                <span
                  key={i}
                  className={styles.tag}
                  style={{ '--tag-color': SKILL_COLORS[i % SKILL_COLORS.length] } as React.CSSProperties}
                >
                  {skill}
                </span>
              ))}
              {visibleSkillCount < skills.length ? (
                <span className={styles.tagMore}>+ more</span>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={title}
        size="lg"
        centered
        classNames={{
          content: styles.modalContent,
          header: styles.modalHeader,
          title: styles.modalTitle,
          body: styles.modalBody,
          close: styles.modalClose,
        }}
      >
        {/* Gradient header in modal */}
        <div className={styles.modalImageWrap} style={{ background: gradientStyle }}>
          <div className={styles.noiseOverlay} />
          <img src={img} alt={title} className={styles.modalImage} />
        </div>
        <div className={styles.modalSection}>
          <h4 className={styles.modalSectionLabel}>About this project</h4>
          <p className={styles.modalText}>{fullDescription}</p>
          {imageCredit != null && (
            <div className={styles.modalCitation}>
              <span className={styles.modalCitationLabel}>Image credit</span>
              <span className={styles.modalCitationText}>{imageCredit}</span>
            </div>
          )}
        </div>
        <div className={styles.modalSection}>
          <h4 className={styles.modalSectionLabel}>Technologies</h4>
          <div className={styles.modalTags}>
            {skills.map((skill, i) => (
              <span
                key={i}
                className={styles.modalTag}
                style={{ '--tag-color': SKILL_COLORS[i % SKILL_COLORS.length] } as React.CSSProperties}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
