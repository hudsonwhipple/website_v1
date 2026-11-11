import React from 'react';
import { EDUCATION, EXPERIENCES } from './data';
import { Reveal } from './animations';

const DOTS = ['var(--accent)', 'var(--amber)', 'var(--sky)', 'var(--coral)'];

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">Experience</h2>
        </Reveal>
        <ul className="exp-list">
          {EXPERIENCES.map((e, i) => (
            <Reveal as="li" key={e.id} delay={Math.min(i, 3) * 60}>
              <article className="exp">
                <div className="exp-period">{e.period}</div>
                <div>
                  <h3 className="exp-company">
                    <span
                      className="dot"
                      style={{ '--c': DOTS[i % DOTS.length] } as React.CSSProperties}
                      aria-hidden="true"
                    />
                    {e.company}
                  </h3>
                  <p className="exp-role">{e.role}</p>
                </div>
                <p className="exp-blurb">{e.blurb}</p>
              </article>
            </Reveal>
          ))}
        </ul>
        <Reveal className="edu">
          <span className="edu-label">Education</span>
          {EDUCATION.map((ed) => (
            <span key={ed.degree}>
              {ed.degree}, {ed.school} <span className="muted">· {ed.period}</span>
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
