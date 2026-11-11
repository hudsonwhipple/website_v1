import React from 'react';
import { CONTACT } from './data';
import { Reveal } from './animations';

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div>
          <Reveal>
            <h1 className="hero-name">
              Hudson <em>Whipple</em>
            </h1>
          </Reveal>
          <Reveal delay={90}>
            <p className="hero-lead">
              ML engineer and computer science master&rsquo;s student at UT Austin.
            </p>
            <p className="hero-bio">
              At <strong>Gmango AI</strong> I build LLM systems for healthcare, including a voice agent
              used by 3,000+ people and the evaluation platform behind our model choices. Before that I
              worked on crew-delay prediction at <strong>American Airlines</strong>. On my own time I
              shipped a recipe app to the App Store, and I train small models on a laptop.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="hero-actions">
              <a href="#projects" className="btn">
                See projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 5v14M6 13l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="link">
                Email
              </a>
              {CONTACT.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link">
                  {s.label}
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} className="portrait-wrap">
          <Portrait />
        </Reveal>
      </div>
    </section>
  );
}

/** Photo that tilts toward the cursor, over an offset gradient block. */
function Portrait() {
  const ref = React.useRef<HTMLDivElement>(null);
  const set = (rx: number, ry: number, sx: number, sy: number) => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
    el.style.setProperty('--sx', `${sx}%`);
    el.style.setProperty('--sy', `${sy}%`);
  };
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    set((0.5 - py) * 7, (px - 0.5) * 7, px * 100, py * 100);
  };
  return (
    <div className="portrait" ref={ref} onMouseMove={onMove} onMouseLeave={() => set(0, 0, 50, 50)}>
      <div className="portrait-block" aria-hidden="true" />
      <div className="portrait-card">
        <img src="/profile_pic_sq.jpg" alt="Portrait of Hudson Whipple" />
        <div className="portrait-sheen" aria-hidden="true" />
        <div className="portrait-cap">
          <span className="dot" />
          Austin, TX
        </div>
      </div>
      <div className="portrait-chip">
        <span>
          <span className="dot" />
          <span>
            ML at <b>Gmango AI</b>
          </span>
        </span>
        <span>
          <span className="dot" style={{ '--c': 'var(--amber)' } as React.CSSProperties} />
          <span>
            MS CS at <b>UT Austin</b>
          </span>
        </span>
      </div>
    </div>
  );
}
