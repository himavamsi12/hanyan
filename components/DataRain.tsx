/**
 * Decorative "data rain": columns of small vertical blocks. Uses a seeded
 * pseudo-random generator so server and client render the same markup.
 */
export default function DataRain({
  cols = 60,
  rows = 14,
  seed = 7,
  colors = ["#E6E9EF", "#D7DCE5", "#C5CCD8", "#B3BBCB"],
  density = 0.55,
  className = "rain",
  fadeDown = false,
  height,
}: {
  cols?: number;
  rows?: number;
  seed?: number;
  colors?: string[];
  density?: number;
  className?: string;
  fadeDown?: boolean;
  /** explicit height when nested inside another SVG */
  height?: number;
}) {
  let s = seed;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  const cw = 10;
  const ch = 14;
  const rects: React.ReactNode[] = [];
  for (let c = 0; c < cols; c++) {
    // each column gets its own phase so the downward waves are staggered
    const phase = rand() * 4;
    for (let r = 0; r < rows; r++) {
      const p = fadeDown ? density * (1 - r / rows) : density * (0.35 + r / rows);
      if (rand() < p) {
        const h = ch * (1 + Math.floor(rand() * 2));
        rects.push(
          <rect
            key={`${c}-${r}`}
            x={c * cw + 2}
            y={r * ch}
            width={cw - 4}
            height={h - 3}
            fill={colors[Math.floor(rand() * colors.length)]}
            style={{ animationDelay: `${(r * 0.16 + phase - 4).toFixed(2)}s` }}
          />
        );
      }
    }
  }
  return (
    <svg className={className} viewBox={`0 0 ${cols * cw} ${rows * ch}`} preserveAspectRatio="none" height={height} aria-hidden="true">
      <g className="rain-cells">{rects}</g>
    </svg>
  );
}
