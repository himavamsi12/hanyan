/**
 * Datashake-style UI illustrations (cards, chips, charts) with database content.
 * Palette: Hanyan navy + white only (lighter shades are navy mixed with white).
 */
import DataRain from "./DataRain";

const N = "#0A1C48";
const G = "#5B6474";
const S = "#94A0B8";
const L3 = "#C9CFDB";
const L2 = "#DFE3EA";
const L1 = "#EEF0F4";
const W = "#FFFFFF";
const F = "Inter, Arial, sans-serif";
const fill = { position: "absolute" as const, inset: 0, width: "100%", height: "100%" };

function Label({ x, y, text, count, anchor = "middle" }: { x: number; y: number; text: string; count: string; anchor?: "middle" | "start" }) {
  const tw = text.length * 7.6;
  const sx = anchor === "middle" ? x - (tw + 34) / 2 : x;
  return (
    <g>
      <text x={sx} y={y} fontFamily={F} fontSize="14" fill={N}>{text}</text>
      <rect x={sx + tw + 6} y={y - 11} width={28} height={14} fill={W} stroke={N} strokeWidth=".8" />
      <text x={sx + tw + 20} y={y - 1} textAnchor="middle" fontFamily={F} fontSize="8.5" fill={N}>{count}</text>
    </g>
  );
}
function Chip({ x, y, w, t, solid = false }: { x: number; y: number; w: number; t: string; solid?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={26} fill={solid ? N : L1} stroke={N} strokeOpacity={solid ? 1 : 0.45} strokeDasharray={solid ? undefined : "3 3"} />
      <text x={x + w / 2} y={y + 17} textAnchor="middle" fontFamily={F} fontSize="11.5" fill={solid ? W : N}>{t}</text>
    </g>
  );
}
function chipRow(items: string[], y: number, cx: number, gap = 6, solid = false) {
  const ws = items.map((t) => t.length * 6.6 + 22);
  const total = ws.reduce((a, b) => a + b, 0) + gap * (items.length - 1);
  let x = cx - total / 2;
  return items.map((t, i) => {
    const el = <Chip key={t} x={x} y={y} w={ws[i]} t={t} solid={solid} />;
    x += ws[i] + gap;
    return el;
  });
}

/* ======================= TAB ILLUSTRATIONS (600 x 520) ======================= */

export function SourceTargetChips() {
  return (
    <svg viewBox="0 0 600 520" style={fill}>
      <Label x={300} y={110} text="Current estate" count="18" />
      {chipRow(["SQL Server 2012", "SQL Server 2016", "Oracle 12c"], 128, 300)}
      {chipRow(["MySQL 5.7", "Windows Server 2012", "MariaDB 10.3"], 162, 300)}
      <g stroke={N} strokeOpacity=".5" strokeDasharray="4 4" fill="none" className="flow">
        <path d="M220 198 V240 H300 V270" /><path d="M380 198 V240 H300" />
      </g>
      <rect x="292" y="262" width="16" height="16" fill={N} />
      <Label x={300} y={318} text="Target platform" count="5" />
      {chipRow(["Azure SQL", "Managed Instance", "PostgreSQL Flexible"], 336, 300, 6, true)}
      {chipRow(["MySQL on Azure", "Oracle on Azure VMs"], 370, 300, 6, true)}
      <g transform="translate(130 420)">
        <rect width="340" height="44" fill={W} stroke={L3} />
        <text x="16" y="27" fontFamily={F} fontSize="12" fill={N}>Migration wave</text>
        <rect x="120" y="18" width="150" height="8" fill={L2} /><rect x="120" y="18" width="112" height="8" fill={N} />
        <text x="324" y="27" textAnchor="end" fontFamily={F} fontSize="12" fill={G}>3 of 4</text>
      </g>
    </svg>
  );
}

export function SpeedCompare() {
  return (
    <svg viewBox="0 0 600 520" style={fill}>
      <g transform="translate(70 90)">
        <rect x="290" y="0" width="150" height="34" fill={W} stroke={L3} />
        <text x="365" y="22" textAnchor="middle" fontFamily={F} fontSize="13" fill={N}>Queries per second</text>
        <rect x="0" y="50" width="110" height="80" fill={L1} stroke={L3} strokeDasharray="4 4" />
        <text x="130" y="96" fontFamily={F} fontSize="14" fill={G}>Before tuning</text>
        <rect x="0" y="170" width="360" height="90" fill={N} />
        <g transform="translate(26 197)" fill={W}>
          <rect x="14" y="0" width="7" height="14" /><rect x="14" y="22" width="7" height="14" />
          <rect x="0" y="15" width="14" height="7" /><rect x="22" y="15" width="14" height="7" />
        </g>
        <text x="390" y="230" fontFamily={F} fontSize="34" fill={N}>3x</text>
      </g>
      <g transform="translate(70 380)">
        <rect width="460" height="96" fill={W} stroke={L3} />
        <rect x="16" y="16" width="8" height="8" fill={N} />
        <text x="32" y="25" fontFamily={F} fontSize="11" fill={G}>1,284 queries tuned</text>
        <text x="16" y="52" fontFamily={F} fontSize="13" fill={N}>Index plan applied to orders.customer_id</text>
        <text x="16" y="74" fontFamily={F} fontSize="11" fill={G}>Average response 2.4s → 0.3s · no code changes needed</text>
        <text x="444" y="25" textAnchor="end" fontFamily={F} fontSize="11" fill={N}>View all</text>
      </g>
    </svg>
  );
}

export function QuarterReport() {
  return (
    <svg viewBox="0 0 600 520" style={fill}>
      <rect x="70" y="60" width="460" height="400" fill={W} stroke={L3} strokeDasharray="4 4" />
      <text x="100" y="104" fontFamily={F} fontSize="17" fill={N}>Report</text>
      <text x="500" y="104" textAnchor="end" fontFamily={F} fontSize="13" fill={S}>Q4</text>
      <text x="100" y="146" fontFamily={F} fontSize="15" fill={N}>One version of the truth for leadership</text>
      <text x="100" y="172" fontFamily={F} fontSize="12.5" fill={G}>Finance, sales and operations now report from a single</text>
      <text x="100" y="191" fontFamily={F} fontSize="12.5" fill={G}>governed Power BI model, refreshed every morning.</text>
      <text x="100" y="218" fontFamily={F} fontSize="12.5" fill={N} textDecoration="underline">11,234 report views</text>
      <g transform="translate(100 240)">
        {[60, 90, 70, 120, 100, 140, 130].map((h, i) => <rect key={i} x={i * 40} y={120 - h * 0.8} width="24" height={h * 0.8} fill={i === 5 ? N : L2} />)}
      </g>
      <rect x="100" y="372" width="400" height="66" fill={L1} />
      <text x="116" y="396" fontFamily={F} fontSize="11" fill={S}>Actions</text>
      <text x="116" y="420" fontFamily={F} fontSize="13" fill={N}>Roll out the same model to the regional teams</text>
    </svg>
  );
}

// coarse land mask for an orthographic-ish dotted globe (rows top→bottom)
const LAND = [
  "..........................",
  "......###....#####........",
  "....######..#########.....",
  "...#######..##########....",
  "....#####....########.##..",
  ".....####...#######...#...",
  "......##....######........",
  ".......###...####.....##..",
  "........####..###....####.",
  "........####...##.....##..",
  ".........###...#..........",
  "..........#...............",
];
export function DottedGlobe() {
  const cx = 300, cy = 270, r = 210;
  const dots: React.ReactNode[] = [];
  LAND.forEach((row, ri) => {
    [...row].forEach((c, ci) => {
      if (c !== "#") return;
      for (let a = 0; a < 2; a++) for (let b = 0; b < 2; b++) {
        const x = 90 + ci * 16 + a * 8;
        const y = 90 + ri * 30 + b * 15;
        if ((x - cx) ** 2 + (y - cy) ** 2 < (r - 8) ** 2) dots.push(<rect key={`${ri}-${ci}-${a}-${b}`} x={x} y={y} width="4" height="4" fill={L3} />);
      }
    });
  });
  const pins = [[240, 150], [170, 205], [330, 400], [390, 230], [470, 330], [300, 190]];
  return (
    <svg viewBox="0 0 600 540" style={fill}>
      <circle cx={cx} cy={cy} r={r} fill={W} stroke={N} strokeOpacity=".5" strokeDasharray="5 5" />
      {dots}
      <g fill="none" stroke={N} strokeOpacity=".5" strokeDasharray="4 4">
        <path d="M170 205 Q 205 140 240 150" /><path d="M240 150 Q 320 160 390 230" /><path d="M390 230 Q 440 270 470 330" /><path d="M240 150 Q 300 280 330 400" />
      </g>
      {pins.map(([x, y], i) => <rect key={i} x={x - 6} y={y - 9} width="12" height="18" fill={N} className={i % 2 ? "pulse-dot" : undefined} />)}
      <g transform="translate(380 40)">
        <rect width="180" height="64" fill={N} />
        <text x="16" y="26" fontFamily={F} fontSize="11.5" fill={L3}>Azure regions managed</text>
        <text x="16" y="50" fontFamily={F} fontSize="18" fill={W}>6 · 24/7</text>
      </g>
    </svg>
  );
}

/* ======================= USE-CASE ILLUSTRATIONS (380 x 260) ======================= */

export function RiskAlert() {
  return (
    <svg viewBox="0 0 380 260">
      <rect x="120" y="14" width="140" height="28" fill={L1} stroke={N} strokeOpacity=".45" strokeDasharray="3 3" />
      <path d="M134 35l7-13 7 13z" fill={N} /><text x="198" y="33" textAnchor="middle" fontFamily={F} fontSize="12.5" fill={N}>Potential risk</text>
      <rect x="30" y="54" width="320" height="104" fill={W} />
      <text x="46" y="76" fontFamily={F} fontSize="10" fill={S}>Production cluster</text>
      <text x="46" y="97" fontFamily={F} fontSize="12.5" fill={N}>Transaction log growing quickly.</text>
      <text x="46" y="116" fontFamily={F} fontSize="11" fill={G}>Log backups are behind schedule. An on-call</text>
      <text x="46" y="132" fontFamily={F} fontSize="11" fill={G}>DBA has been alerted and is investigating.</text>
      {[["CPU", "42%"], ["Memory", "61%"], ["Risk", "High"]].map(([k, v], i) => (
        <g key={k}>
          <rect x={30 + i * 108} y="166" width="104" height="64" fill={W} stroke={i === 2 ? N : "none"} strokeOpacity=".4" strokeDasharray="3 3" />
          <text x={44 + i * 108} y="190" fontFamily={F} fontSize="11" fill={G}>{k}</text>
          <text x={44 + i * 108} y="215" fontFamily={F} fontSize="15" fill={N} fontWeight={i === 2 ? 600 : 400}>{v}</text>
        </g>
      ))}
    </svg>
  );
}

export function TrendForecast() {
  return (
    <svg viewBox="0 0 380 260" preserveAspectRatio="none">
      <rect x="265" y="0" width="115" height="260" fill={L1} />
      <path d="M0 200 L30 180 L60 190 L95 160 L125 185 L160 150 L190 160 L225 120 L250 125 L265 140 L265 260 L0 260Z" fill={L1} />
      <path d="M0 200 L30 180 L60 190 L95 160 L125 185 L160 150 L190 160 L225 120 L250 125 L265 140" stroke={N} strokeWidth="1.6" fill="none" />
      <path d="M265 140 L300 80 L340 70 L380 20" stroke={N} strokeWidth="1.6" strokeDasharray="5 4" fill="none" />
      <circle cx="265" cy="140" r="4.5" fill={N} stroke={W} strokeWidth="2" />
      <rect x="20" y="20" width="9" height="9" fill={N} /><text x="36" y="29" fontFamily={F} fontSize="12" fill={N}>Current</text><text x="36" y="45" fontFamily={F} fontSize="10" fill={G}>1,240 queries/sec</text>
      <rect x="20" y="60" width="9" height="9" fill={L3} /><text x="36" y="69" fontFamily={F} fontSize="12" fill={N}>After tuning</text><text x="36" y="85" fontFamily={F} fontSize="10" fill={G}>3,900 queries/sec</text>
    </svg>
  );
}

export function MigrationChips() {
  return (
    <svg viewBox="0 0 380 260">
      <Label x={190} y={34} text="Source" count="6" />
      {chipRow(["SQL Server", "Oracle", "MySQL", "MariaDB"], 46, 190, 5)}
      {chipRow(["PostgreSQL", "Windows Server"], 78, 190, 5)}
      <path d="M190 112 V142" stroke={N} strokeOpacity=".5" strokeDasharray="3 3" />
      <Label x={190} y={164} text="Target on Azure" count="5" />
      {chipRow(["Azure SQL", "Managed Instance", "PostgreSQL"], 176, 190, 5, true)}
      {chipRow(["MySQL", "Oracle on Azure VMs"], 208, 190, 5, true)}
    </svg>
  );
}

export function PolicyEvent() {
  return (
    <svg viewBox="0 0 380 260">
      <rect x="80" y="16" width="230" height="74" fill={W} stroke={N} strokeOpacity=".3" strokeDasharray="4 4" />
      <text x="98" y="40" fontFamily={F} fontSize="11" fill={S}>Policy</text>
      <rect x="222" y="26" width="74" height="22" fill={N} />
      <text x="259" y="41" textAnchor="middle" fontFamily={F} fontSize="10.5" fill={W}>Approved</text>
      <text x="98" y="72" fontFamily={F} fontSize="12" fill={N}>Mask card data in non-production</text>
      <path d="M190 90 V114" stroke={N} strokeOpacity=".4" strokeDasharray="3 3" />
      <rect x="40" y="114" width="300" height="124" fill={W} stroke={N} strokeOpacity=".3" strokeDasharray="4 4" />
      <path d="M58 130l7 3v5c0 4-3 7-7 8.5-4-1.5-7-4.5-7-8.5v-5z" fill={N} />
      <text x="74" y="142" fontFamily={F} fontSize="12.5" fill={N}>DB Shield</text><text x="136" y="142" fontFamily={F} fontSize="10" fill={S}>4m ago</text>
      <line x1="58" x2="322" y1="154" y2="154" stroke={L2} />
      <text x="58" y="176" fontFamily={F} fontSize="12" fill={N}>Blocked: unusual bulk export</text>
      <text x="58" y="198" fontFamily={F} fontSize="11" fill={G}>A session from an unknown host tried to read</text>
      <text x="58" y="214" fontFamily={F} fontSize="11" fill={G}>the customers table. Access denied and logged.</text>
    </svg>
  );
}

export function ScanGrid() {
  const flags: [number, number, "hi" | "mid"][] = [[60, 60, "hi"], [100, 150, "hi"], [250, 30, "mid"], [300, 130, "mid"], [180, 180, "mid"], [330, 200, "hi"], [40, 200, "mid"]];
  return (
    <svg viewBox="0 0 380 260" preserveAspectRatio="xMidYMid slice">
      <DataRain cols={38} rows={18} seed={31} density={0.5} colors={[L1, L2, L1, "#E6E9EE"]} className="" />
      {flags.map(([x, y, k], i) => (
        <rect key={i} x={x} y={y} width="10" height="30" fill={k === "hi" ? N : L3} className={k === "hi" ? "pulse-dot" : undefined} />
      ))}
      <rect x="118" y="108" width="144" height="42" fill={W} stroke={N} strokeOpacity=".35" strokeDasharray="3 3" />
      <g transform="translate(136 121)">
        <rect width="16" height="16" fill="none" stroke={N} strokeWidth="2" strokeDasharray="10 6">
          <animateTransform attributeName="transform" type="rotate" from="0 8 8" to="360 8 8" dur="2s" repeatCount="indefinite" />
        </rect>
      </g>
      <text x="164" y="134" fontFamily={F} fontSize="14" fill={N}>Scanning…</text>
    </svg>
  );
}

export function ServiceReport() {
  return (
    <svg viewBox="0 0 380 260">
      <rect x="30" y="22" width="320" height="238" fill={W} stroke={N} strokeOpacity=".3" strokeDasharray="4 4" />
      <text x="50" y="52" fontFamily={F} fontSize="13" fill={N}>Report</text><text x="330" y="52" textAnchor="end" fontFamily={F} fontSize="11" fill={S}>Monthly</text>
      <text x="50" y="82" fontFamily={F} fontSize="12" fill={N}>Platform health improved again this month</text>
      <text x="50" y="102" fontFamily={F} fontSize="10.5" fill={G}>All production instances stayed within performance</text>
      <text x="50" y="117" fontFamily={F} fontSize="10.5" fill={G}>targets. Two upgrades are scheduled. Key points:</text>
      <text x="50" y="140" fontFamily={F} fontSize="10.5" fill={N} textDecoration="underline">Patching 100% complete</text>
      <rect x="50" y="156" width="280" height="90" fill={L1} />
      <text x="64" y="178" fontFamily={F} fontSize="10" fill={S}>Actions</text>
      <text x="64" y="198" fontFamily={F} fontSize="11" fill={N}>Upgrade reporting server to SQL Server 2022</text>
      <text x="64" y="216" fontFamily={F} fontSize="11" fill={N}>Right-size two Azure VMs to cut monthly spend</text>
    </svg>
  );
}
