import React from 'react';

export function useInView<T extends Element>(ref: React.RefObject<T | null>) {
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  dy?: number;
  duration?: number;
  style?: React.CSSProperties;
  className?: string;
};

export function Reveal({ children, delay = 0, dy = 28, duration = 720, style, className }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : `translateY(${dy}px)`,
        transition: `opacity ${duration}ms cubic-bezier(.2,.8,.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(.2,.8,.2,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Counter({
  to,
  duration = 1400,
  formatter = (n: number) => String(n),
  style,
}: {
  to: number;
  duration?: number;
  formatter?: (n: number) => string;
  style?: React.CSSProperties;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} style={style}>
      {formatter(val)}
    </span>
  );
}

export function Magnetic({
  children,
  strength = 14,
  style,
}: {
  children: React.ReactNode;
  strength?: number;
  style?: React.CSSProperties;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [t, setT] = React.useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    setT({
      x: ((e.clientX - cx) / r.width) * strength,
      y: ((e.clientY - cy) / r.height) * strength,
    });
  };
  const onLeave = () => setT({ x: 0, y: 0 });
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        display: 'inline-block',
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: 'transform .25s cubic-bezier(.2,.8,.2,1)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function useTilt({ max = 8 }: { max?: number } = {}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ rx: 0, ry: 0, sx: 50, sy: 50, active: false });

  const onMouseMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({
      rx: (0.5 - py) * max,
      ry: (px - 0.5) * max,
      sx: px * 100,
      sy: py * 100,
      active: true,
    });
  };
  const onMouseLeave = () => setTilt({ rx: 0, ry: 0, sx: 50, sy: 50, active: false });

  return {
    ref,
    onMouseMove,
    onMouseLeave,
    tilt,
    transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
  };
}
