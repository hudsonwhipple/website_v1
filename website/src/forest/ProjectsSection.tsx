import React from 'react';
import { Theme } from './theme';
import { PROJECTS } from './data';
import { Reveal } from './animations';

export function ProjectsSection({ theme, padding = 56 }: { theme: Theme; padding?: number }) {
  const T = theme;
  const accents = T.techAccents;

  return (
    <div
      id="projects"
      className="forest-section"
      style={{ position: 'relative', padding, display: 'flex', flexDirection: 'column', color: T.text.primary }}
    >
      <Reveal dy={24}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
        <div>
          <div
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontWeight: 700,
              fontSize: 11,
              color: T.text.mono,
              letterSpacing: '0.06em',
              marginBottom: 12,
              textTransform: 'uppercase',
            }}
          >
            ◆ Projects
          </div>
          <div
            style={{
              fontFamily: 'Instrument Serif',
              fontSize: 76,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: T.text.primary,
            }}
            className="forest-section-title"
          >
            Things I've <em style={{ color: T.italic, fontStyle: 'italic' }}>built</em>.
          </div>
          <div style={{ marginTop: 14, fontSize: 15, color: T.text.secondary, maxWidth: 540, lineHeight: 1.55 }}>
            Some are shipped, some are research, some are play. A few are private — feel free to reach out for a
            closer look.
          </div>
        </div>
        <div
          style={{
            fontFamily: 'Bricolage Grotesque, sans-serif',
            fontWeight: 700,
            fontSize: 11,
            color: T.text.muted,
            letterSpacing: '0.06em',
          }}
        >
          {PROJECTS.length} ENTRIES
        </div>
      </div>
      </Reveal>

      <div className="forest-projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 70} dy={28}>
            <ProjectCard project={p} theme={T} accent={accents[i % accents.length]} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  theme: T,
  accent,
}: {
  project: typeof PROJECTS[number];
  theme: Theme;
  accent: string;
}) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        borderRadius: 20,
        background: hover
          ? `linear-gradient(165deg, ${accent}30, ${T.surface.glassStrong} 50%, ${T.surface.glass})`
          : `linear-gradient(165deg, ${accent}1f, ${T.surface.glass} 60%, ${T.surface.glassStrong})`,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${hover ? accent + '66' : T.surface.border}`,
        boxShadow: hover
          ? `0 18px 44px rgba(0,0,0,0.55), 0 0 40px ${accent}33, inset 0 1px 0 ${T.surface.hi}`
          : `0 10px 28px rgba(0,0,0,0.45), inset 0 1px 0 ${T.surface.hi}`,
        overflow: 'hidden',
        transition: 'all .3s cubic-bezier(.2,.7,.3,1)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          position: 'relative',
          height: 168,
          background: `linear-gradient(135deg, ${accent}1a, rgba(0,0,0,0.2))`,
          borderBottom: `1px solid ${T.surface.border}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 180,
            height: 180,
            background: `radial-gradient(circle, ${accent}66, transparent 70%)`,
            transform: `translate(-50%,-50%) scale(${hover ? 1.15 : 1})`,
            filter: 'blur(24px)',
            transition: 'transform .4s',
            pointerEvents: 'none',
          }}
        />
        <img
          src={`/${project.image}`}
          alt=""
          style={{
            position: 'relative',
            width: 96,
            height: 96,
            objectFit: 'contain',
            transform: hover ? 'scale(1.08) rotate(-3deg)' : 'scale(1) rotate(0deg)',
            transition: 'transform .4s cubic-bezier(.2,.7,.3,1)',
            filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.4))',
          }}
        />
      </div>

      <div style={{ padding: '20px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div
          style={{
            fontFamily: 'Instrument Serif',
            fontStyle: 'italic',
            fontSize: 24,
            lineHeight: 1.1,
            color: T.text.primary,
            letterSpacing: '-0.01em',
          }}
        >
          {project.title}
        </div>
        <div style={{ fontSize: 12.5, color: T.text.secondary, lineHeight: 1.55, flex: 1 }}>
          {project.description}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 4 }}>
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 10,
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontWeight: 700,
                padding: '3px 9px',
                background: `${accent}18`,
                color: accent,
                border: `1px solid ${accent}33`,
                borderRadius: 999,
                letterSpacing: '0.04em',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${accent}, transparent 70%)`,
          opacity: hover ? 1 : 0.5,
          transition: 'opacity .3s',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
