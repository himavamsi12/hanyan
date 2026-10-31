/**
 * Animated "circuit" background: dashed traces flow toward the centre and
 * small data packets travel along each trace, ending in a blinking node.
 */
const traces = [
  { d: "M0 340 H150 V280 H330 V200 H420", dur: 5.5, begin: 0 },
  { d: "M120 0 V60 H200 V150 H380", dur: 4.5, begin: 1.2 },
  { d: "M1260 120 H1120 V40 H1060", dur: 4, begin: 0.6 },
  { d: "M1060 0 V200 H880 V250 H780", dur: 5, begin: 2 },
  { d: "M1260 340 H1100 V230 H960 V290", dur: 4.8, begin: 0.3 },
  { d: "M460 420 V360 H560 V300", dur: 3.6, begin: 1.6 },
  { d: "M820 420 V340 H900 V290", dur: 3.8, begin: 2.6 },
  { d: "M0 120 H60 V200 H250", dur: 4.2, begin: 3 },
];

const end = (d: string) => {
  // walk the path commands to find the final point
  let x = 0, y = 0;
  const cmds = d.match(/[MHV][^MHV]*/g)!;
  for (const c of cmds) {
    const v = c.slice(1).trim().split(/\s+/).map(Number);
    if (c[0] === "M") [x, y] = v;
    else if (c[0] === "H") x = v[0];
    else if (c[0] === "V") y = v[0];
  }
  return { x, y };
};

export default function CircuitBg() {
  return (
    <svg className="circuit" viewBox="0 0 1260 420" preserveAspectRatio="none" aria-hidden="true">
      {traces.map((t, i) => {
        const e = end(t.d);
        return (
          <g key={i}>
            <path d={t.d} fill="none" stroke="#0A1C48" strokeOpacity=".4" vectorEffect="non-scaling-stroke" className="circuit__trace" />
            <rect x="-6" y="-3.5" width="12" height="7" fill="#0A1C48">
              <animateMotion path={t.d} dur={`${t.dur}s`} begin={`${t.begin}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.9;1" dur={`${t.dur}s`} begin={`${t.begin}s`} repeatCount="indefinite" />
            </rect>
            <rect x={e.x - 5} y={e.y - 5} width="10" height="10" fill="#0A1C48" className="circuit__node" style={{ animationDelay: `${(t.begin + t.dur * 0.9).toFixed(2)}s`, animationDuration: `${t.dur}s` }} />
          </g>
        );
      })}
    </svg>
  );
}
