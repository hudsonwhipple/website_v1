import React from 'react';

export function TechIcon({ slug, size = 22, color }: { slug: string; size?: number; color?: string }) {
  const [errored, setErrored] = React.useState(false);
  const hex = (color || 'ffffff').replace('#', '');

  if (slug === 'awslambda' || slug === 'amazon' || slug === 'aws') {
    return (
      <div style={{ width: size, height: size, flexShrink: 0, display: 'flex' }}>
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke={color || '#ffffff'}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 7c0 2 4 3.6 9 3.6S21 9 21 7s-4-3.6-9-3.6S3 5 3 7" />
          <path d="M3 7v5c0 2 4 3.6 9 3.6s9-1.6 9-3.6V7" opacity="0.6" />
          <path d="M3 12v5c0 2 4 3.6 9 3.6s9-1.6 9-3.6v-5" opacity="0.35" />
        </svg>
      </div>
    );
  }

  if (errored) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: Math.round(size * 0.22),
          background: `linear-gradient(135deg, ${color || '#ffffff'}, ${color || '#ffffff'}99)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0a0a0a',
          fontFamily: 'Bricolage Grotesque, sans-serif',
          fontSize: Math.round(size * 0.5),
          fontWeight: 700,
          flexShrink: 0,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35)',
        }}
      >
        {slug?.[0]?.toUpperCase() || '·'}
      </div>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${hex}`}
      width={size}
      height={size}
      alt=""
      style={{ display: 'block', flexShrink: 0 }}
      draggable={false}
      onError={() => setErrored(true)}
    />
  );
}
