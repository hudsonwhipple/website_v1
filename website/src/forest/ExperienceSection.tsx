import React from 'react';
import { EDUCATION, EXPERIENCES } from './data';
import { Reveal } from './animations';

const AXIS_START = 2023;

const PHASE_KINDS = [
  ['intern', 'Intern'],
  ['part', 'Part-time'],
  ['full', 'Full-time'],
] as const;

/** 'YYYY-MM' as months since the start of the axis. */
const months = (ym: string) => (+ym.slice(0, 4) - AXIS_START) * 12 + (+ym.slice(5, 7) - 1);

export function ExperienceSection() {
  const [activeId, setActiveId] = React.useState(EXPERIENCES[0].id);

  // The axis runs from 2023 to the end of the current year.
  const today = new Date();
  const now = (today.getFullYear() - AXIS_START) * 12 + today.getMonth() + today.getDate() / 31;
  const years = Math.max(1, today.getFullYear() - AXIS_START + 1);
  const total = years * 12;
  const pct = (m: number) => `${(Math.min(Math.max(m, 0), total) / total) * 100}%`;
  const bar = (start: number, end: number) => ({
    left: pct(start),
    width: `${((Math.min(end, total) - Math.max(start, 0)) / total) * 100}%`,
  });

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">Experience</h2>
          <p className="section-note">Pick a role on the timeline</p>
        </Reveal>

        <Reveal className="tl">
          <div className="tl-axis" aria-hidden="true">
            {Array.from({ length: years }, (_, i) => (
              <span key={i} style={{ left: pct(i * 12) }}>
                {AXIS_START + i}
              </span>
            ))}
            <span className="tl-now-label" style={{ left: pct(now) }}>
              now
            </span>
          </div>

          <div className="tl-rows">
            <div className="tl-grid" aria-hidden="true">
              {Array.from({ length: years + 1 }, (_, i) => (
                <i key={i} style={{ left: pct(i * 12) }} />
              ))}
              <i className="tl-now" style={{ left: pct(now) }} />
            </div>

            {EXPERIENCES.map((e, i) => {
              const active = e.id === activeId;
              const segs = e.phases ?? [{ kind: 'full' as const, label: e.role, when: e.period, span: e.span }];
              const ongoing = !segs[segs.length - 1].span[1];
              return (
                <button
                  key={e.id}
                  type="button"
                  className={`tl-row${active ? ' is-active' : ''}`}
                  style={{ '--c': e.accent, '--i': i } as React.CSSProperties}
                  aria-pressed={active}
                  onMouseEnter={() => setActiveId(e.id)}
                  onFocus={() => setActiveId(e.id)}
                  onClick={() => setActiveId(e.id)}
                >
                  <span className="tl-label">
                    <span className="tl-company">{e.company}</span>
                    <span className="tl-role">{e.role}</span>
                  </span>
                  <span className="tl-track">
                    {segs.map((p, k) => (
                      <span
                        key={k}
                        className={`tl-bar is-${p.kind}`}
                        style={
                          {
                            ...bar(months(p.span[0]), p.span[1] ? months(p.span[1]) : now),
                            '--k': k,
                          } as React.CSSProperties
                        }
                        title={e.phases ? `${p.label} · ${p.when}` : undefined}
                      >
                        {!e.phases && <span className="tl-bar-text">{p.when}</span>}
                      </span>
                    ))}
                    {ongoing && <span className="tl-pulse" style={{ left: pct(now) }} />}
                  </span>
                </button>
              );
            })}

            <div className="tl-row tl-row-edu" style={{ '--i': EXPERIENCES.length } as React.CSSProperties}>
              <span className="tl-label">
                <span className="tl-company">{EDUCATION[0].school}</span>
                <span className="tl-role">{EDUCATION.map((ed) => `${ed.short} ${ed.period}`).join(' · ')}</span>
              </span>
              <span className="tl-track" aria-hidden="true">
                {EDUCATION.map((ed) => {
                  const start = ed.span[0] ? months(ed.span[0]) : -1;
                  const end = ed.span[1] ? months(ed.span[1]) : total + 1;
                  const cls = `tl-bar tl-seg${start < 0 ? ' fade-left' : ''}${end > total ? ' fade-right' : ''}`;
                  return (
                    <span key={ed.degree} className={cls} style={bar(start, end)}>
                      <span className="tl-bar-text is-short">{ed.short} CS</span>
                    </span>
                  );
                })}
              </span>
            </div>
          </div>

          <ul className="tl-legend" aria-hidden="true">
            {PHASE_KINDS.map(([kind, label]) => (
              <li key={kind}>
                <span className={`tl-swatch is-${kind}`} />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="exp-details">
          {EXPERIENCES.map((e) => {
            const active = e.id === activeId;
            return (
              <article
                key={e.id}
                className={`exp-detail${active ? ' is-active' : ''}`}
                style={{ '--c': e.accent } as React.CSSProperties}
                aria-hidden={!active}
              >
                <div className="exp-detail-head">
                  <h3 className="exp-detail-role">{e.role}</h3>
                  <p className="exp-detail-company">{e.company}</p>
                  <p className="exp-detail-meta">
                    {e.period} · {e.location}
                  </p>
                  {e.phases && (
                    <ul className="exp-detail-phases">
                      {e.phases.map((p) => (
                        <li key={p.when}>
                          <span className={`tl-swatch is-${p.kind}`} aria-hidden="true" />
                          <span>{p.label}</span>
                          <span className="when">{p.when}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="exp-detail-body">
                  <p className="exp-detail-blurb">{e.blurb}</p>
                  {e.skills && (
                    <ul className="exp-detail-skills" aria-label="Skills used">
                      {e.skills.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {e.highlights && (
                  <dl className="exp-detail-stats">
                    {e.highlights.map((h) => (
                      <div key={h.label}>
                        <dt>{h.value}</dt>
                        <dd>{h.label}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
