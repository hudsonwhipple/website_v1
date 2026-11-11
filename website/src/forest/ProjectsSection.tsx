import React from 'react';
import { PROJECTS, Project } from './data';
import { Reveal } from './animations';
import { ProjectVisual } from './ProjectVisual';

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">Projects</h2>
          <p className="section-note">Selected work, 2024 to now</p>
        </Reveal>
        <ul className="projects">
          {PROJECTS.map((p, i) => (
            <Reveal as="li" key={p.id} delay={Math.min(i, 3) * 60}>
              <ProjectRow project={p} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectRow({ project: p }: { project: Project }) {
  return (
    <article
      className={`proj${p.link ? ' has-link' : ''}`}
      style={{ '--c': p.accent } as React.CSSProperties}
    >
      <div>
        <h3 className="proj-title">
          {p.link ? (
            <a href={p.link.href} target="_blank" rel="noopener noreferrer">
              {p.title}
            </a>
          ) : (
            p.title
          )}
        </h3>
        <p className="proj-context">{p.context}</p>
        {p.link && (
          <div className="proj-go" aria-hidden="true">
            {p.link.label}
            <span className="arrow">↗</span>
          </div>
        )}
      </div>
      <div className="proj-body">
        <p className="proj-desc">{p.description}</p>
        <ul className="proj-stack" aria-label="Built with">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
      <div className="proj-side">
        <ProjectVisual id={p.id} />
        <div className="proj-metric">{p.metric.value}</div>
        <div className="proj-metric-label">{p.metric.label}</div>
      </div>
    </article>
  );
}
