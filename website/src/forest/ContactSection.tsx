import React from 'react';
import { Theme } from './theme';
import { CONTACT } from './data';
import { Reveal, Magnetic } from './animations';

export function ContactSection({ theme, padding = 56 }: { theme: Theme; padding?: number }) {
  const T = theme;
  const accent = T.italic;
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [focus, setFocus] = React.useState<string | null>(null);

  const onChange =
    (k: 'name' | 'email' | 'message') =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  return (
    <div id="contact" className="forest-section" style={{ position: 'relative', padding, color: T.text.primary }}>
      <Reveal dy={20}>
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
        ◆ Contact
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
        Let's <em style={{ color: T.italic, fontStyle: 'italic' }}>grow</em> something.
      </div>
      </Reveal>

      <div className="forest-contact-grid" style={{ marginTop: 44, display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 32 }}>
        <Reveal dy={28} delay={120} style={{ display: 'flex' }}>
        <div
          style={{
            padding: 36,
            width: '100%',
            borderRadius: 22,
            background: T.surface.glass,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${T.surface.border}`,
            boxShadow: `inset 0 1px 0 ${T.surface.hi}, 0 12px 32px rgba(0,0,0,0.45)`,
            display: 'flex',
            flexDirection: 'column',
            gap: 26,
          }}
        >
          <div style={{ fontSize: 14, color: T.text.secondary, lineHeight: 1.7 }}>
            Currently open to new opportunities and collaborations. Whether you have a question, an idea, or just
            want to say hi —{' '}
            <span style={{ color: T.text.primary, fontWeight: 500 }}>my inbox is always open.</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <ContactRow theme={T} accent={accent} icon={<MailIcon />} label="EMAIL" value={CONTACT.email} />
            <ContactRow theme={T} accent={accent} icon={<PhoneIcon />} label="PHONE" value={CONTACT.phone} />
            <ContactRow theme={T} accent={accent} icon={<PinIcon />} label="LOCATION" value={CONTACT.location} />
          </div>

          <div
            style={{
              paddingTop: 22,
              borderTop: `1px solid ${T.surface.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontWeight: 700,
                color: T.text.muted,
                letterSpacing: '0.06em',
              }}
            >
              FOLLOW
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {CONTACT.social.map((s, i) => (
                <SocialTile
                  key={s.label}
                  theme={T}
                  accent={T.techAccents[i % T.techAccents.length]}
                  social={s}
                />
              ))}
            </div>
          </div>
        </div>
        </Reveal>

        <Reveal dy={28} delay={220} style={{ display: 'flex' }}>
        <div
          style={{
            padding: 36,
            width: '100%',
            borderRadius: 22,
            background: `linear-gradient(155deg, ${accent}1a, ${T.surface.glass} 40%, ${T.surface.glassStrong})`,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${T.surface.border}`,
            boxShadow: `inset 0 1px 0 ${T.surface.hi}, 0 18px 44px rgba(0,0,0,0.55)`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -60,
              right: -60,
              width: 220,
              height: 220,
              background: `radial-gradient(circle, ${accent}55, transparent 70%)`,
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div
              style={{
                fontFamily: 'Instrument Serif',
                fontSize: 30,
                fontStyle: 'italic',
                color: T.text.primary,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              Send a note.
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Field
                theme={T}
                accent={accent}
                label="NAME"
                value={form.name}
                onChange={onChange('name')}
                focused={focus === 'name'}
                onFocus={() => setFocus('name')}
                onBlur={() => setFocus(null)}
                placeholder="Your name"
              />
              <Field
                theme={T}
                accent={accent}
                label="EMAIL"
                value={form.email}
                onChange={onChange('email')}
                focused={focus === 'email'}
                onFocus={() => setFocus('email')}
                onBlur={() => setFocus(null)}
                placeholder="your@email.com"
                type="email"
              />
            </div>

            <Field
              theme={T}
              accent={accent}
              label="MESSAGE"
              value={form.message}
              onChange={onChange('message')}
              focused={focus === 'message'}
              onFocus={() => setFocus('message')}
              onBlur={() => setFocus(null)}
              placeholder="Tell me about your project, idea, or just say hi…"
              multiline
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 8,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontFamily: 'Bricolage Grotesque, sans-serif',
                  fontWeight: 700,
                  color: T.text.muted,
                  letterSpacing: '0.06em',
                }}
              >
                Typically responds within 24h
              </div>
              <Magnetic strength={10}>
              <button
                type="button"
                onClick={() => {
                  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
                    `Hi from ${form.name || 'a visitor'}`,
                  )}&body=${encodeURIComponent(form.message)}`;
                }}
                style={{
                  padding: '14px 28px',
                  borderRadius: 999,
                  background: accent,
                  color: T.bg.ink,
                  fontSize: 14,
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  boxShadow: `0 8px 24px ${accent}55, inset 0 1px 0 rgba(255,255,255,0.4)`,
                  letterSpacing: '-0.01em',
                }}
              >
                Send
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              </Magnetic>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </div>
  );
}

function Field({
  theme: T,
  accent,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  multiline = false,
  focused,
  onFocus,
  onBlur,
}: {
  theme: Theme;
  accent: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}) {
  const baseStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 10,
    background: focused ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.25)',
    border: `1px solid ${focused ? accent + '88' : T.surface.border}`,
    color: T.text.primary,
    fontSize: 14,
    fontFamily: 'Inter',
    outline: 'none',
    transition: 'all .2s',
    boxShadow: focused
      ? `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 3px ${accent}22`
      : 'inset 0 1px 0 rgba(255,255,255,0.04)',
    resize: 'none',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label
        style={{
          fontSize: 10,
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontWeight: 700,
          color: focused ? accent : T.text.muted,
          letterSpacing: '0.08em',
          transition: 'color .2s',
        }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          style={baseStyle}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          style={baseStyle}
        />
      )}
    </div>
  );
}

function ContactRow({
  theme: T,
  accent,
  icon,
  label,
  value,
}: {
  theme: Theme;
  accent: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 11,
          background: `linear-gradient(135deg, ${accent}26, ${T.surface.glass})`,
          border: `1px solid ${accent}33`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: accent,
          flexShrink: 0,
          boxShadow: `inset 0 1px 0 ${T.surface.hi}`,
        }}
      >
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div
          style={{
            fontSize: 9,
            fontFamily: 'Bricolage Grotesque, sans-serif',
            fontWeight: 700,
            color: T.text.muted,
            letterSpacing: '0.08em',
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: 15, color: T.text.primary, fontWeight: 500 }}>{value}</div>
      </div>
    </div>
  );
}

function SocialTile({
  theme: T,
  accent,
  social,
}: {
  theme: Theme;
  accent: string;
  social: { label: string; handle: string; href: string };
}) {
  const Icon = social.label === 'GitHub' ? GitHubIcon : LinkedInIcon;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        flex: 1,
        padding: '14px 16px',
        borderRadius: 14,
        background: T.surface.glassStrong,
        backdropFilter: 'blur(8px)',
        border: `1px solid ${T.surface.border}`,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        transition: 'all .2s',
        boxShadow: `inset 0 1px 0 ${T.surface.hi}`,
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          background: `${accent}26`,
          border: `1px solid ${accent}55`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: accent,
        }}
      >
        <Icon />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: T.text.primary }}>{social.label}</div>
        <div
          style={{
            fontSize: 10,
            color: T.text.muted,
            fontFamily: 'Bricolage Grotesque, sans-serif',
            fontWeight: 700,
          }}
        >
          {social.handle}
        </div>
      </div>
    </a>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.56 12 19.79 19.79 0 0 1 1.47 3.4 2 2 0 0 1 3.44 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
