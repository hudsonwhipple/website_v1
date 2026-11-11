import React from 'react';
import { usePrefersReducedMotion } from './animations';

const TRACK = 'M12,24a48,17 0 1,0 96,0a48,17 0 1,0 -96,0';
const WAVE = [8, 14, 22, 30, 18, 36, 26, 40, 24, 34, 16, 28, 20, 12, 8];

/** Small drawing for a project row. Colour comes from the row's `--c`. */
export function ProjectVisual({ id }: { id: string }) {
  const reduced = usePrefersReducedMotion();
  const body = draw(id, reduced);
  if (!body) return null;
  return (
    <svg
      className="proj-visual"
      viewBox="0 0 120 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {body}
    </svg>
  );
}

function draw(id: string, reduced: boolean): React.ReactNode {
  switch (id) {
    // Accuracy after each stage: base 58.9, LoRA 70.5, GRPO 72.0.
    case 'shrinkwrap':
      return (
        <>
          <path className="faint" d="M8,44H112M8,30H112M8,16H112" strokeWidth="1" strokeDasharray="1 5" />
          <path d="M10,37 60,16 110,13.4" />
          <circle cx="10" cy="37" r="3" fill="var(--ink)" />
          <circle cx="60" cy="16" r="3" fill="var(--ink)" />
          <circle cx="110" cy="13.4" r="3.5" fill="currentColor" />
        </>
      );
    // Four gates on an oval, one lap every 3.86 s (the measured mean lap).
    case 'drone':
      return (
        <>
          <path className="faint" d={TRACK} />
          <path d="M60,2V12M60,36V46M7,24H17M103,24H113" strokeWidth="2" />
          <circle r="3.5" fill="currentColor" stroke="none" cx={reduced ? 86 : 0} cy={reduced ? 39 : 0}>
            {!reduced && <animateMotion dur="3.86s" repeatCount="indefinite" path={TRACK} />}
          </circle>
        </>
      );
    // Phone in front of a tablet.
    case 'pirho':
      return (
        <>
          <rect className="faint" x="62" y="7" width="50" height="36" rx="4" />
          <path className="faint" d="M82,15H104M82,22H98M82,29H104M82,36H94" strokeWidth="1" />
          <rect x="36" y="2" width="30" height="44" rx="6" fill="var(--ink)" />
          <rect x="41" y="8" width="20" height="13" rx="2" fill="currentColor" stroke="none" opacity="0.55" />
          <path d="M41,27H61M41,33H55M41,39H58" strokeWidth="1.2" />
        </>
      );
    // 9 benchmarks by 6 backends.
    case 'bench':
      return (
        <g stroke="none" fill="currentColor">
          {Array.from({ length: 54 }, (_, i) => {
            const c = i % 9;
            const r = Math.floor(i / 9);
            return (
              <circle
                key={i}
                cx={12 + c * 12}
                cy={5 + r * 7.6}
                r="2.2"
                opacity={0.22 + (((c * 7 + r * 13) % 10) / 10) * 0.78}
              />
            );
          })}
        </g>
      );
    case 'voice':
      return (
        <g className="wave" stroke="none" fill="currentColor">
          {WAVE.map((h, i) => (
            <rect
              key={i}
              x={8 + i * 7.3}
              y={24 - h / 2}
              width="3"
              height={h}
              rx="1.5"
              style={{ animationDelay: `${-i * 0.11}s` }}
            />
          ))}
        </g>
      );
    // Error before (5.5 min) and after (3.6 min), to scale.
    case 'aa':
      return (
        <g stroke="none" fill="currentColor">
          <rect className="faint" x="10" y="11" width="100" height="9" rx="4.5" />
          <rect x="44.5" y="28" width="65.5" height="9" rx="4.5" />
        </g>
      );
    // Seven sources into one schema.
    case 'climate':
      return (
        <>
          {[4, 10.7, 17.3, 24, 30.7, 37.3, 44].map((y) => (
            <path key={y} d={`M8,${y}C44,${y} 52,24 82,24`} opacity="0.6" />
          ))}
          <path d="M82,24H104" strokeWidth="2" />
          <rect x="104" y="18" width="12" height="12" rx="3" fill="currentColor" stroke="none" />
        </>
      );
    default:
      return null;
  }
}
