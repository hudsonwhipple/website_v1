export const FOREST = {
  id: 'forest',
  name: 'Lush Evergreen',
  bg: { base: '#0e2118', ink: '#04100a', noise: 0.9 },
  text: {
    primary: '#f0fdf4',
    secondary: 'rgba(240,253,244,0.62)',
    muted: 'rgba(240,253,244,0.38)',
    mono: 'rgba(163,230,53,0.75)',
  },
  italic: '#a3e635',
  techAccents: ['#a3e635', '#fbbf24', '#fb7185', '#67e8f9', '#c4b5fd'],
  expAccents: ['#a3e635', '#fbbf24', '#fb7185', '#67e8f9'],
  backdropBlobs: ['#15803d', '#65a30d', '#0f766e', '#f59e0b', '#be123c'],
  surface: {
    glass: 'rgba(240,253,244,0.035)',
    glassStrong: 'rgba(240,253,244,0.06)',
    card: 'rgba(6,16,11,1)',
    cardStrong: 'rgba(10,22,15,1)',
    border: 'rgba(163,230,53,0.14)',
    hi: 'rgba(255,255,255,0.14)',
  },
};

export type Theme = typeof FOREST;
