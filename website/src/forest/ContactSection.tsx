import React from 'react';
import { CONTACT } from './data';
import { Reveal } from './animations';

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<number | undefined>(undefined);
  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">Get in touch</h2>
        </Reveal>
        <Reveal>
          <p className="contact-lead">
            I&rsquo;m open to ML and software engineering roles. Email is the fastest way to reach me.
          </p>
          <div className="contact-email-row">
            <a href={`mailto:${CONTACT.email}`} className="contact-email">
              {CONTACT.email}
            </a>
            <button type="button" className={`copy${copied ? ' is-copied' : ''}`} onClick={copy}>
              <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <div className="contact-links">
            {CONTACT.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link">
                {s.label}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
            <a href={`tel:${CONTACT.phone.replace(/[^\d+]/g, '')}`} className="link">
              {CONTACT.phone}
            </a>
            <span className="contact-plain">{CONTACT.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Hudson Whipple</span>
        <span>Built with React and TypeScript</span>
      </div>
    </footer>
  );
}
