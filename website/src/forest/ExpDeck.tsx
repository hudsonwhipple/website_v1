import React from 'react';
import { Theme } from './theme';
import { EXPERIENCES } from './data';
import { Reveal } from './animations';

export function ExpDeck({ theme, padding = 56 }: { theme: Theme; padding?: number }) {
  const T = theme;
  const exps = EXPERIENCES.map((e, i) => ({ ...e, color: T.expAccents[i % T.expAccents.length] }));
  const [active, setActive] = React.useState(0);

  return (
    <div
      id="experience"
      className="forest-section"
      style={{
        position: 'relative',
        padding,
        display: 'flex',
        flexDirection: 'column',
        color: T.text.primary,
        minHeight: 720,
      }}
    >
      <Reveal dy={24}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
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
            ◆ Experience
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
            Where I've <em style={{ color: T.italic, fontStyle: 'italic' }}>worked</em>.
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
          {String(active + 1).padStart(2, '0')} / {String(exps.length).padStart(2, '0')}
        </div>
      </div>
      </Reveal>

      <Reveal dy={32} delay={120}>
      <div className="forest-deck-wrap" style={{ display: 'flex', flex: 1, gap: 32, marginTop: 32, minHeight: 0 }}>
        <div
          className="forest-deck-stack"
          style={{
            flex: '1 1 50%',
            position: 'relative',
            perspective: '1600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 640,
            minWidth: 0,
          }}
        >
          <div style={{ position: 'relative', width: 440, height: 600, maxWidth: '100%', transformStyle: 'preserve-3d' }}>
            {exps.map((exp, i) => {
              const offset = i - active;
              const isActive = offset === 0;
              const z = -Math.abs(offset) * 72;
              const x = offset * 22;
              const y = Math.abs(offset) * 12;
              const rot = offset * -4;
              const opacity = Math.abs(offset) > 3 ? 0 : 1 - Math.abs(offset) * 0.18;
              return (
                <div
                  key={exp.id}
                  onClick={() => setActive(i)}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    transform: `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${rot}deg)`,
                    transition: 'transform .5s cubic-bezier(.2,.7,.3,1), opacity .3s',
                    opacity,
                    cursor: isActive ? 'default' : 'pointer',
                    zIndex: exps.length - Math.abs(offset),
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 24,
                      backgroundColor: T.surface.card,
                      backgroundImage: `linear-gradient(155deg, ${exp.color}33 0%, ${T.surface.cardStrong} 38%, ${T.surface.card} 100%)`,
                      border: `1px solid ${T.surface.border}`,
                      boxShadow: isActive
                        ? `0 30px 80px rgba(0,0,0,0.6), 0 0 60px ${exp.color}44, inset 0 1px 0 ${T.surface.hi}`
                        : `0 14px 40px rgba(0,0,0,0.5), inset 0 1px 0 ${T.surface.hi}`,
                      padding: 36,
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: -40,
                        right: -40,
                        width: 180,
                        height: 180,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${exp.color}66, transparent 70%)`,
                        filter: 'blur(20px)',
                        pointerEvents: 'none',
                      }}
                    />

                    <div
                      style={{
                        fontFamily: 'Bricolage Grotesque, sans-serif',
                        fontWeight: 700,
                        fontSize: 10,
                        color: exp.color,
                        letterSpacing: '0.06em',
                        marginBottom: 12,
                      }}
                    >
                      {exp.period.toUpperCase()}
                    </div>

                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 18,
                        background: T.surface.glassStrong,
                        backdropFilter: 'blur(8px)',
                        border: `1px solid ${T.surface.hi}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 22,
                        boxShadow: `inset 0 1px 0 ${T.surface.hi}, 0 4px 12px rgba(0,0,0,0.3)`,
                      }}
                    >
                      <img src={`/${exp.image}`} alt="" style={{ width: 56, height: 56, objectFit: 'contain' }} />
                    </div>

                    <div
                      style={{
                        fontFamily: 'Instrument Serif',
                        fontSize: 40,
                        fontStyle: 'italic',
                        lineHeight: 1.05,
                        color: T.text.primary,
                        marginBottom: 6,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {exp.role}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: exp.color, marginBottom: 20 }}>
                      {exp.company}
                    </div>

                    <div style={{ fontSize: 14, color: T.text.secondary, lineHeight: 1.65, flex: 1 }}>
                      {exp.blurb}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
                      {exp.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: 11,
                            fontFamily: 'Bricolage Grotesque, sans-serif',
                            fontWeight: 700,
                            padding: '4px 9px',
                            background: `${exp.color}22`,
                            color: exp.color,
                            border: `1px solid ${exp.color}44`,
                            borderRadius: 999,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="forest-deck-roles" style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 4, minWidth: 0 }}>
          <div
            style={{
              fontSize: 10,
              fontFamily: 'Bricolage Grotesque, sans-serif',
              fontWeight: 700,
              color: T.text.muted,
              letterSpacing: '0.08em',
              marginBottom: 4,
            }}
          >
            ROLES
          </div>
          {exps.map((exp, i) => {
            const isActive = i === active;
            return (
              <div
                key={exp.id}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                style={{
                  padding: '14px 16px',
                  borderRadius: 14,
                  background: isActive
                    ? `linear-gradient(135deg, ${exp.color}22, ${T.surface.glass})`
                    : T.surface.glass,
                  border: `1px solid ${isActive ? exp.color + '55' : T.surface.border}`,
                  backdropFilter: 'blur(12px)',
                  cursor: 'pointer',
                  transition: 'all .25s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  boxShadow: isActive
                    ? `0 6px 22px rgba(0,0,0,0.3), inset 0 1px 0 ${T.surface.hi}`
                    : `inset 0 1px 0 ${T.surface.hi}`,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 9,
                    background: T.surface.glassStrong,
                    border: `1px solid ${T.surface.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <img src={`/${exp.image}`} alt="" style={{ width: 22, height: 22, objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: isActive ? T.text.primary : T.text.secondary,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {exp.company}
                  </div>
                  <div
                    style={{
                      fontSize: 11.5,
                      color: T.text.muted,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {exp.role} · {exp.period}
                  </div>
                </div>
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: isActive ? exp.color : 'transparent',
                    boxShadow: isActive ? `0 0 12px ${exp.color}` : 'none',
                    flexShrink: 0,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      </Reveal>
    </div>
  );
}
