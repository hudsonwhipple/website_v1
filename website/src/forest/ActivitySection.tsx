import React from 'react';
import ContributionSkyline, { DAY_MS, dayMs, toKey } from '../components/ui/contribution-skyline';
import { CONTACT } from './data';
import { CONTRIBUTIONS } from './contributions';
import { Reveal } from './animations';

// Lightest to heaviest day, ending on the site's lime accent.
const PALETTE = ['#1f4a22', '#3a7d24', '#6fb52b', '#a3e635'];

const DAYS = (() => {
  const start = dayMs(CONTRIBUTIONS.from);
  return CONTRIBUTIONS.counts.map((count, i) => ({ date: toKey(start + i * DAY_MS), count }));
})();

export function ActivitySection() {
  const github = CONTACT.social.find((s) => s.label === 'GitHub');
  return (
    <section id="activity" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">GitHub activity</h2>
          {github && (
            <a href={github.href} target="_blank" rel="noopener noreferrer" className="link section-link">
              {github.handle}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          )}
        </Reveal>
        <Reveal>
          <ContributionSkyline data={DAYS} endDate={CONTRIBUTIONS.to} palette={PALETTE} className="activity-sky" />
        </Reveal>
      </div>
    </section>
  );
}
