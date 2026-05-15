import React from 'react';
import { Theme } from './theme';
import { TECH_CATEGORIES } from './data';
import { TechIcon } from './TechIcon';
import { Reveal, useInView } from './animations';

type Item = { name: string; slug: string; cat: string; color: string; catTitle: string };

export function TechHoneycomb({ theme, padding = 56 }: { theme: Theme; padding?: number }) {
  const T = theme;
  const cats = TECH_CATEGORIES.map((c, i) => ({
    ...c,
    color: T.techAccents[i % T.techAccents.length],
  }));
  const [hover, setHover] = React.useState<Item | null>(null);

  const items: Item[] = React.useMemo(() => {
    const out: Item[] = [];
    cats.forEach((cat) => {
      cat.skills.forEach((sk) => {
        out.push({ ...sk, cat: cat.id, color: cat.color, catTitle: cat.title });
      });
    });
    return out;
  }, [cats]);

  const rowCounts: number[] = [];
  let remaining = items.length;
  let big = true;
  while (remaining > 0) {
    const c = big ? 6 : 5;
    rowCounts.push(Math.min(c, remaining));
    remaining -= Math.min(c, remaining);
    big = !big;
  }

  const maxRow = Math.max(...rowCounts);

  // Measure available width so hex size scales with viewport.
  const stageWrapRef = React.useRef<HTMLDivElement | null>(null);
  const [stageWidth, setStageWidth] = React.useState(0);
  React.useEffect(() => {
    if (!stageWrapRef.current) return;
    const el = stageWrapRef.current;
    const ro = new ResizeObserver(([entry]) => {
      setStageWidth(entry.contentRect.width);
    });
    ro.observe(el);
    setStageWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  // Hexagon width derived from container width; capped so it doesn't oversize.
  // Layout uses `(maxRow + 0.5) * HEX_W` of horizontal space.
  const HEX_W = stageWidth > 0 ? Math.min(160, stageWidth / (maxRow + 0.5)) : 140;
  const HEX_H = HEX_W * (104 / 92);
  const ICON_SIZE = Math.max(22, Math.round(HEX_W * 0.32));
  const LABEL_SIZE = Math.max(9, Math.round(HEX_W * 0.085));
  const ROW_OVERLAP = 0.27;

  const cells: { item: Item; x: number; y: number }[] = [];
  let idx = 0;
  rowCounts.forEach((cnt, r) => {
    const offset = (r % 2) * (HEX_W / 2);
    const y = r * HEX_H * (1 - ROW_OVERLAP);
    for (let i = 0; i < cnt; i++) {
      if (idx >= items.length) break;
      const x = i * HEX_W + offset;
      cells.push({ item: items[idx], x, y });
      idx++;
    }
  });

  const totalW = (maxRow + 0.5) * HEX_W;
  const totalH = (rowCounts.length - 1) * HEX_H * (1 - ROW_OVERLAP) + HEX_H;

  return (
    <div id="stack" className="forest-section" style={{ position: 'relative', padding, display: 'flex', flexDirection: 'column', color: T.text.primary }}>
      <Reveal dy={24}>
      <div className="forest-honeycomb-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
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
            ◆ Tech Stack
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
            A <em style={{ color: T.italic, fontStyle: 'italic' }}>honeyed</em>
            <br />
            comb of tools.
          </div>
        </div>

        <div
          style={{
            minHeight: 92,
            width: 300,
            padding: '16px 20px',
            borderRadius: 16,
            background: hover ? `linear-gradient(135deg, ${hover.color}30, ${T.surface.glass})` : T.surface.glass,
            border: `1px solid ${hover ? hover.color + '55' : T.surface.border}`,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            transition: 'all .25s',
            boxShadow: `inset 0 1px 0 ${T.surface.hi}`,
          }}
          className="forest-honeycomb-readout"
        >
          {hover ? (
            <>
              <div
                style={{
                  fontSize: 10,
                  fontFamily: 'Bricolage Grotesque, sans-serif',
                  fontWeight: 700,
                  color: hover.color,
                  letterSpacing: '0.06em',
                  marginBottom: 6,
                  textTransform: 'uppercase',
                }}
              >
                {hover.catTitle}
              </div>
              <div
                style={{
                  fontFamily: 'Instrument Serif',
                  fontStyle: 'italic',
                  fontSize: 30,
                  color: T.text.primary,
                  lineHeight: 1,
                }}
              >
                {hover.name}
              </div>
            </>
          ) : (
            <div
              style={{
                fontSize: 11,
                color: T.text.muted,
                fontFamily: 'Bricolage Grotesque, sans-serif',
                fontWeight: 700,
                letterSpacing: '0.06em',
              }}
            >
              HOVER A CELL TO INSPECT
              <div
                style={{
                  marginTop: 8,
                  fontFamily: 'Inter',
                  textTransform: 'none',
                  letterSpacing: 0,
                  color: T.text.secondary,
                  lineHeight: 1.5,
                }}
              >
                {items.length} tools across {cats.length} disciplines.
              </div>
            </div>
          )}
        </div>
      </div>
      </Reveal>

      <HoneycombGrid
        wrapRef={stageWrapRef}
        cells={cells}
        totalW={totalW}
        totalH={totalH}
        HEX_W={HEX_W}
        HEX_H={HEX_H}
        iconSize={ICON_SIZE}
        labelSize={LABEL_SIZE}
        hover={hover}
        setHover={setHover}
        T={T}
      />
    </div>
  );
}

function HoneycombGrid({
  wrapRef,
  cells,
  totalW,
  totalH,
  HEX_W,
  HEX_H,
  iconSize,
  labelSize,
  hover,
  setHover,
  T,
}: {
  wrapRef: React.MutableRefObject<HTMLDivElement | null>;
  cells: { item: Item; x: number; y: number }[];
  totalW: number;
  totalH: number;
  HEX_W: number;
  HEX_H: number;
  iconSize: number;
  labelSize: number;
  hover: Item | null;
  setHover: (i: Item | null) => void;
  T: Theme;
}) {
  const inView = useInView(wrapRef);
  return (
    <div
      ref={wrapRef}
      style={{
        flex: 1,
        position: 'relative',
        marginTop: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: totalH + 20,
        width: '100%',
      }}
    >
      <div className="forest-honeycomb-stage" style={{ position: 'relative', width: totalW, height: totalH }}>
        {cells.map(({ item, x, y }, i) => {
          const isHover = hover && hover.name === item.name;
          const dim = !!hover && hover.cat !== item.cat;
          const revealDelay = i * 35;
          return (
              <div
                key={item.name + item.cat}
                onMouseEnter={() => setHover(item)}
                onMouseLeave={() => setHover(null)}
                style={{
                  position: 'absolute',
                  left: x,
                  top: y,
                  width: HEX_W,
                  height: HEX_H,
                  transform: !inView
                    ? 'translateY(20px) scale(0.85)'
                    : isHover
                      ? 'translateY(-6px) scale(1.08)'
                      : 'translateY(0) scale(1)',
                  transition: !inView
                    ? `transform .65s cubic-bezier(.2,.8,.2,1) ${revealDelay}ms, opacity .55s ${revealDelay}ms`
                    : 'transform .25s cubic-bezier(.2,.7,.3,1), opacity .2s',
                  opacity: !inView ? 0 : dim ? 0.35 : 1,
                  cursor: 'pointer',
                  zIndex: isHover ? 5 : 1,
                  filter: isHover ? `drop-shadow(0 8px 24px ${item.color}aa)` : 'none',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    background: isHover
                      ? `radial-gradient(circle at 50% 0%, ${item.color}88, ${item.color}22 60%, ${item.color}10 100%)`
                      : `radial-gradient(circle at 50% 0%, ${item.color}3a, ${item.color}14 55%, ${T.surface.glass} 100%)`,
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    transition: 'background .25s',
                  }}
                >
                  {/* Glass top-edge highlight */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '4%',
                      left: '12%',
                      right: '12%',
                      height: '32%',
                      clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                      background: `linear-gradient(180deg, ${isHover ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.16)'}, transparent)`,
                      pointerEvents: 'none',
                      transition: 'background .25s',
                    }}
                  />
                  {/* Hex border + inner glow */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 2,
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      border: `1.5px solid ${item.color}${isHover ? 'cc' : '44'}`,
                      pointerEvents: 'none',
                      boxShadow: isHover
                        ? `inset 0 0 32px ${item.color}66, inset 0 2px 0 rgba(255,255,255,0.25)`
                        : `inset 0 0 16px ${item.color}1f, inset 0 1px 0 rgba(255,255,255,0.18)`,
                      transition: 'border-color .25s, box-shadow .25s',
                    }}
                  />
                  <TechIcon slug={item.slug} size={iconSize} color={isHover ? '#ffffff' : item.color} />
                  <div
                    style={{
                      marginTop: Math.max(6, Math.round(HEX_W * 0.08)),
                      fontSize: labelSize,
                      letterSpacing: '0.08em',
                      color: isHover ? T.text.primary : T.text.secondary,
                      fontFamily: 'Bricolage Grotesque, sans-serif',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      textShadow: isHover ? `0 0 12px ${item.color}aa` : 'none',
                      transition: 'color .2s, text-shadow .2s',
                    }}
                  >
                    {HEX_W < 110 && item.name.length > 8 ? item.name.slice(0, 7) + '…' : item.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
}
