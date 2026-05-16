import React from 'react';
import { Theme } from './theme';
import { CONTACT } from './data';
import { Reveal, Magnetic, useTilt, Counter } from './animations';

export function Nav({ theme: T }: { theme: Theme }) {
  return (
    <div
      className="forest-nav"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 56px',
        borderBottom: `1px solid ${T.surface.border}`,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: T.surface.glass,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        gap: 16,
        flexWrap: 'wrap',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 9,
            background: `linear-gradient(135deg, ${T.italic}, ${T.expAccents[1]})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: 19,
            color: T.bg.ink,
            fontWeight: 600,
            boxShadow: `0 0 16px ${T.italic}66`,
          }}
        >
          h
        </div>
        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: 22,
            fontWeight: 400,
            color: T.text.primary,
            letterSpacing: '-0.01em',
            lineHeight: 1,
          }}
        >
          Hudson Whipple
        </div>
      </div>
      <div className="forest-nav-links" style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
        {['About', 'Stack', 'Experience', 'Projects', 'Contact'].map((l, i) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontSize: 13,
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontWeight: 700,
              color: i === 0 ? T.italic : T.text.secondary,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            {l.toLowerCase()}
          </a>
        ))}
      </div>
      <a
        href={`mailto:${CONTACT.email}`}
        style={{
          padding: '8px 16px',
          borderRadius: 999,
          background: T.surface.glass,
          border: `1px solid ${T.surface.border}`,
          fontSize: 12,
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontWeight: 700,
          color: T.text.secondary,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        Get in touch →
      </a>
    </div>
  );
}

export function Hero({ theme: T }: { theme: Theme }) {
  return (
    <div
      id="about"
      className="forest-hero"
      style={{ padding: '80px 56px 88px', position: 'relative' }}
    >
      <Reveal delay={0} dy={16}>
        <div
          style={{
            fontFamily: 'Bricolage Grotesque, sans-serif',
            fontWeight: 700,
            fontSize: 11,
            color: T.text.mono,
            letterSpacing: '0.08em',
            marginBottom: 32,
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span style={{ width: 24, height: 1, background: T.italic, display: 'inline-block' }} />
          Engineer · Austin, TX · 2026
        </div>
      </Reveal>

      <div
        className="forest-hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.65fr 1fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div>
          <Reveal delay={120} dy={32}>
            <h1
              className="forest-hero-title"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 124,
                lineHeight: 0.92,
                letterSpacing: '-0.035em',
                color: T.text.primary,
                fontWeight: 400,
                margin: '0 0 18px',
              }}
            >
              Hudson <em style={{ color: T.italic, fontStyle: 'italic' }}>Whipple</em>
            </h1>
          </Reveal>

          <Reveal delay={220} dy={24}>
            <div
              className="forest-hero-sub"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 36,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: T.text.secondary,
                fontWeight: 400,
                maxWidth: 620,
                marginBottom: 26,
              }}
            >
              Building <em style={{ color: T.italic, fontStyle: 'italic' }}>thoughtful</em> software at the{' '}
              <em style={{ color: T.expAccents[1], fontStyle: 'italic' }}>edges</em> of ML &amp; product.
            </div>
          </Reveal>

          <Reveal delay={320} dy={20}>
            <div style={{ fontSize: 15, lineHeight: 1.65, color: T.text.secondary, maxWidth: 540, marginBottom: 14 }}>
              UT Austin CS grad working on{' '}
              <span style={{ color: T.text.primary, fontWeight: 500 }}>AI for healthcare</span> at a startup I
              co-founded, with stops in airline operations ML, academic analytics, and systems research along the
              way.
            </div>
          </Reveal>
          <Reveal delay={400} dy={20}>
            <div style={{ fontSize: 15, lineHeight: 1.65, color: T.text.secondary, maxWidth: 540 }}>
              I care about{' '}
              <span style={{ color: T.text.primary, fontWeight: 500 }}>shipping things people use</span> —
              end-to-end, not just the modeling.
            </div>
          </Reveal>

          <Reveal delay={500} dy={18}>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <Magnetic strength={10}>
                <a
                  href="#projects"
                  style={{
                    display: 'inline-block',
                    padding: '13px 22px',
                    borderRadius: 999,
                    background: T.italic,
                    color: T.bg.ink,
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    boxShadow: `0 8px 24px ${T.italic}55, inset 0 1px 0 rgba(255,255,255,0.4)`,
                  }}
                >
                  See projects →
                </a>
              </Magnetic>
              <Magnetic strength={6}>
                <a
                  href={`mailto:${CONTACT.email}`}
                  style={{
                    display: 'inline-block',
                    padding: '13px 22px',
                    borderRadius: 999,
                    background: T.surface.glass,
                    border: `1px solid ${T.surface.border}`,
                    backdropFilter: 'blur(8px)',
                    color: T.text.primary,
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                >
                  {CONTACT.email}
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} dy={32} style={{ display: 'flex', justifyContent: 'center' }}>
          <HeroPortrait theme={T} />
        </Reveal>
      </div>
    </div>
  );
}

function HeroPortrait({ theme: T }: { theme: Theme }) {
  const tilt = useTilt({ max: 6 });
  return (
    <div
      className="forest-portrait"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        maxWidth: 420,
        width: '100%',
      }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          aspectRatio: '4 / 5',
          background: T.surface.glass,
          border: `1px solid ${T.surface.border}`,
          boxShadow: `inset 0 1px 0 ${T.surface.hi}, 0 24px 60px rgba(0,0,0,0.55), 0 0 80px ${T.italic}26`,
          transform: tilt.transform,
          transition: 'transform .4s cubic-bezier(.2,.8,.2,1)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 220,
            height: 220,
            background: `radial-gradient(circle, ${T.italic}55, transparent 70%)`,
            filter: 'blur(22px)',
            pointerEvents: 'none',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        <img
          src="/profile_pic_sq.jpg"
          alt="Hudson Whipple"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            filter: 'saturate(1.06) contrast(1.04)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${tilt.tilt.sx}% ${tilt.tilt.sy}%, ${T.italic}33, transparent 50%)`,
            mixBlendMode: 'screen',
            opacity: tilt.tilt.active ? 1 : 0,
            transition: 'opacity .3s',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '52%',
            background: 'linear-gradient(180deg, transparent, rgba(4,16,10,0.85) 65%, rgba(4,16,10,0.96))',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        <div style={{ position: 'absolute', left: 22, right: 22, bottom: 22, zIndex: 3 }}>
          <div
            style={{
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontWeight: 700,
              fontSize: 11,
              color: T.italic,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            ◆ Hudson Whipple
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 32,
              lineHeight: 1.02,
              color: T.text.primary,
              letterSpacing: '-0.01em',
              marginBottom: 8,
            }}
          >
            Founding Engineer.
          </div>
          <div style={{ fontSize: 13, color: T.text.secondary, fontWeight: 500 }}>
            @ Gmango AI · Austin, TX
          </div>
        </div>
      </div>

      <div
        style={{
          padding: '14px 18px',
          borderRadius: 14,
          background: T.surface.glass,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: `1px solid ${T.surface.border}`,
          boxShadow: `inset 0 1px 0 ${T.surface.hi}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ color: T.text.secondary }}>UT Austin '26</span>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: T.text.muted, flexShrink: 0 }} />
        <span style={{ color: T.text.secondary }}>CS · AI/ML</span>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: T.text.muted, flexShrink: 0 }} />
        <span style={{ color: T.italic }}>Founder</span>
      </div>
    </div>
  );
}

export function SignatureStrip({ theme: T }: { theme: Theme }) {
  const items: Array<{ v?: string; count?: number; suffix?: string; l: string }> = [
    { v: 'Gmango AI', l: 'FOUNDING ENGINEER' },
    { v: 'PiRho', l: 'CO-FOUNDER' },
    { v: 'UT Austin', l: 'BACHELOR IN CS' },
    { count: 4, suffix: ' yrs', l: 'BUILDING' },
  ];

  return (
    <Reveal dy={20}>
    <div
      className="forest-signature"
      style={{
        margin: '0 56px 72px',
        padding: '24px 36px',
        borderRadius: 22,
        background: T.surface.glass,
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: `1px solid ${T.surface.border}`,
        boxShadow: `inset 0 1px 0 ${T.surface.hi}, 0 12px 36px rgba(0,0,0,0.45)`,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 28,
      }}
    >
      {items.map((it, i) => (
        <div
          key={it.l}
          className="forest-signature-cell"
          style={{
            borderLeft: i === 0 ? 'none' : `1px solid ${T.surface.border}`,
            paddingLeft: i === 0 ? 0 : 24,
          }}
        >
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 30,
              color: T.text.primary,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            {it.count != null ? (
              <Counter to={it.count} duration={1400} formatter={(n) => `${n}${it.suffix || ''}`} />
            ) : (
              it.v
            )}
          </div>
          <div
            style={{
              fontSize: 10,
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontWeight: 700,
              color: T.text.muted,
              letterSpacing: '0.08em',
              marginTop: 6,
            }}
          >
            {it.l}
          </div>
        </div>
      ))}
    </div>
    </Reveal>
  );
}

export function Footer({ theme: T }: { theme: Theme }) {
  return (
    <div
      className="forest-footer"
      style={{
        marginTop: 64,
        padding: '36px 56px',
        borderTop: `1px solid ${T.surface.border}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 18,
      }}
    >
      <div
        style={{
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontWeight: 700,
          fontSize: 11,
          color: T.text.muted,
          letterSpacing: '0.04em',
        }}
      >
        © {new Date().getFullYear()} · DESIGNED &amp; BUILT BY HUDSON WHIPPLE
      </div>
      <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
        {[
          { l: 'GitHub', href: CONTACT.social[0].href },
          { l: 'LinkedIn', href: CONTACT.social[1].href },
          { l: 'Email', href: `mailto:${CONTACT.email}` },
        ].map((s) => (
          <a
            key={s.l}
            href={s.href}
            style={{
              fontSize: 12,
              color: T.text.secondary,
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            {s.l.toLowerCase()} →
          </a>
        ))}
      </div>
    </div>
  );
}
