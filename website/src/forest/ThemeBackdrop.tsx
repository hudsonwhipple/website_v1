import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';
import { usePrefersReducedMotion } from './animations';

const MESH_COLORS = ['#07110c', '#0d2218', '#143826', '#0a1a12'];

/** Slow dark-green mesh gradient with a soft top light and film grain. */
export function ThemeBackdrop() {
  const reduced = usePrefersReducedMotion();
  return (
    <div className="backdrop" aria-hidden="true">
      <MeshGradient
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        colors={MESH_COLORS}
        speed={reduced ? 0 : 0.35}
      />
      <div className="backdrop-light" />
      <div className="backdrop-grain" />
    </div>
  );
}
