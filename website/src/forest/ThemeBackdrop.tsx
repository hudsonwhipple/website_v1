import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';
import { Theme } from './theme';

export function ThemeBackdrop({ theme, density = 1.6 }: { theme: Theme; density?: number }) {
  const blobs = React.useMemo(() => {
    const colors = theme.backdropBlobs;
    return Array.from({ length: Math.round(6 * density) }, (_, i) => ({
      c: colors[i % colors.length],
      x: 10 + ((i * 137) % 80),
      y: 10 + ((i * 89) % 80),
      s: 260 + ((i * 197) % 320),
      d: 22 + (i % 5) * 6,
    }));
  }, [density, theme.backdropBlobs]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: `radial-gradient(ellipse at top, ${theme.bg.base} 0%, ${theme.bg.ink} 60%, ${theme.bg.ink} 100%)`,
      }}
    >
      {/* Fluid mesh-gradient shader — deep forest motion under the atmosphere */}
      <MeshGradient
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.85 }}
        colors={['#04100a', '#0e2118', '#0f3b24', '#143d2a', '#06160d']}
        speed={0.6}
      />

      {blobs.map((b, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.s,
            height: b.s,
            borderRadius: '50%',
            background: b.c,
            filter: 'blur(90px)',
            opacity: 0.55,
            mixBlendMode: 'screen',
            animation: `gb-float-${i % 4} ${b.d}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      <ForestAtmosphere />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255,255,255,${0.03 * theme.bg.noise}) 1px, transparent 1px)`,
          backgroundSize: '3px 3px',
          opacity: 0.7,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function ForestAtmosphere() {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '-15%',
          width: '95%',
          height: '70%',
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(ellipse, rgba(254,243,199,0.17), rgba(163,230,53,0.07) 30%, transparent 70%)',
          filter: 'blur(24px)',
          pointerEvents: 'none',
          mixBlendMode: 'screen',
        }}
      />
      {[
        { x: 10, w: 120, r: -14, op: 0.18 },
        { x: 24, w: 80, r: -18, op: 0.13 },
        { x: 40, w: 140, r: -12, op: 0.17 },
        { x: 55, w: 90, r: -16, op: 0.12 },
        { x: 68, w: 150, r: -10, op: 0.2 },
        { x: 82, w: 100, r: -14, op: 0.15 },
        { x: 92, w: 80, r: -20, op: 0.11 },
      ].map((ray, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${ray.x}%`,
            top: '-15%',
            width: ray.w,
            height: '150%',
            background:
              'linear-gradient(180deg, rgba(254,240,138,0.55), rgba(190,242,100,0.32) 30%, rgba(163,230,53,0.11) 60%, transparent 88%)',
            filter: 'blur(14px)',
            transform: `rotate(${ray.r}deg)`,
            transformOrigin: 'top center',
            opacity: ray.op,
            mixBlendMode: 'screen',
            pointerEvents: 'none',
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 40%, transparent 0%, transparent 45%, rgba(4,16,10,0.65) 100%)',
          pointerEvents: 'none',
        }}
      />
      {Array.from({ length: 18 }, (_, i) => (
        <div
          key={`m${i}`}
          style={{
            position: 'absolute',
            left: `${(i * 53) % 100}%`,
            top: `${10 + ((i * 71) % 80)}%`,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            borderRadius: '50%',
            background: i % 3 === 0 ? '#fef3c7' : i % 3 === 1 ? '#a3e635' : '#86efac',
            boxShadow: `0 0 ${6 + (i % 4) * 2}px ${i % 3 === 0 ? '#fde68a' : '#a3e635'}`,
            opacity: 0.6,
            animation: `drift-up ${8 + (i % 5)}s ease-in-out ${i * 0.4}s infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '35%',
          background:
            'linear-gradient(180deg, transparent, rgba(20,83,45,0.25) 45%, rgba(15,46,29,0.5) 100%)',
          pointerEvents: 'none',
        }}
      />
    </>
  );
}
