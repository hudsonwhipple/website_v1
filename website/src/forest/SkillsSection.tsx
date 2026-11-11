import React from 'react';
import { SKILL_GROUPS, SKILL_USES } from './data';
import { Reveal } from './animations';

/** Skills that were used in at least one of the same places as `skill`. */
function relatedTo(skill: string): Set<string> {
  const places = SKILL_USES[skill] || [];
  const out = new Set<string>();
  Object.entries(SKILL_USES).forEach(([other, where]) => {
    if (other !== skill && where.some((w) => places.includes(w))) out.add(other);
  });
  return out;
}

export function SkillsSection() {
  const [active, setActive] = React.useState<string | null>(null);
  const related = React.useMemo(() => (active ? relatedTo(active) : new Set<string>()), [active]);
  const uses = active ? SKILL_USES[active] : null;
  const activeColor = SKILL_GROUPS.find((g) => active && g.skills.includes(active))?.accent;

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">Skills</h2>
          <p className="skills-readout" aria-live="polite">
            {active && uses ? (
              <>
                <strong style={{ '--c': activeColor } as React.CSSProperties}>{active}</strong> <span className="where">in {uses.join(', ')}</span>
              </>
            ) : (
              'Pick a skill to see where I used it'
            )}
          </p>
        </Reveal>
        <Reveal>
          <dl
            className={`skill-groups${active ? ' has-active' : ''}`}
            onMouseLeave={() => setActive(null)}
          >
            {SKILL_GROUPS.map((g) => (
              <div
                className="skill-group"
                key={g.id}
                style={{ '--c': g.accent } as React.CSSProperties}
              >
                <dt className="skill-group-title">
                  <span className="dot" aria-hidden="true" />
                  {g.title}
                </dt>
                <dd className="skill-items">
                  {g.skills.map((s) => {
                    const cls = `skill${active === s ? ' is-active' : ''}${related.has(s) ? ' is-related' : ''}`;
                    return SKILL_USES[s] ? (
                      <button
                        key={s}
                        type="button"
                        className={cls}
                        aria-pressed={active === s}
                        onMouseEnter={() => setActive(s)}
                        onFocus={() => setActive(s)}
                        onClick={() => setActive(s)}
                      >
                        {s}
                      </button>
                    ) : (
                      <span key={s} className={cls}>
                        {s}
                      </span>
                    );
                  })}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
