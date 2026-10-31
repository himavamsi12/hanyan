import { HyMark } from "../Logo";

/* ---------- The Problem: scattered DB events with errors ---------- */
type Ev = { x: number; y: number; w: number; src: string; ago: string; text: string; lines?: boolean; stars?: boolean };
type Er = { x: number; y: number; t: string };

// three rows; every element in a row is joined by one continuous dashed line
const events: Ev[] = [
  { x: 14, y: 4, w: 28, src: "SQL Server", ago: "4h ago", text: "Nightly batch overran by three hours. Queries on the orders table are timing out." },
  { x: 58, y: 4, w: 30, src: "Power BI", ago: "3h ago", text: "Finance and sales dashboards show different revenue figures for the same month.", stars: true },
  { x: 4, y: 38, w: 27, src: "Oracle", ago: "1d ago", text: "Licence audit notice received. Nobody is sure which cores are in use." },
  { x: 47, y: 38, w: 25, src: "Azure", ago: "3m ago", text: "Monthly cloud bill up again.", lines: true },
  { x: 14, y: 70, w: 28, src: "Backups", ago: "4d ago", text: "Restore test failed. Last verified backup is eleven days old." },
  { x: 58, y: 70, w: 30, src: "Security", ago: "5h ago", text: "Shared admin accounts and no record of who changed what.", lines: true },
];
const errors: Er[] = [
  { x: 1, y: 6, t: "Endpoint deprecated" },
  { x: 45, y: 6, t: "Query timeout" },
  { x: 34, y: 40, t: "Disk at 95%" },
  { x: 76, y: 40, t: "Login failed" },
  { x: 45, y: 72, t: "Replication lag" },
];
// connector y positions (header line of each row) and vertical links between rows
const rows = [10, 44, 76];
const links = [
  "M28 22 C 28 30, 17 30, 17 38",   // SQL Server -> Oracle
  "M73 24 C 73 32, 60 30, 60 38",   // Power BI -> Azure
  "M17 58 C 17 64, 28 64, 28 70",   // Oracle -> Backups
  "M60 54 C 60 62, 73 62, 73 70",   // Azure -> Security
];

export function ProblemScene() {
  return (
    <div className="scene scene-problem" aria-hidden="true">
      <svg className="sp-links" viewBox="0 0 100 100" preserveAspectRatio="none">
        <g fill="none" stroke="#0A1C48" strokeOpacity=".4" strokeDasharray="5 5" vectorEffect="non-scaling-stroke">
          <path d={`M3 ${rows[0]} H88`} vectorEffect="non-scaling-stroke" />
          <path d={`M10 ${rows[1]} H86`} vectorEffect="non-scaling-stroke" />
          <path d={`M14 ${rows[2]} H88`} vectorEffect="non-scaling-stroke" />
          {links.map((d) => <path key={d} d={d} vectorEffect="non-scaling-stroke" />)}
        </g>
      </svg>
      {events.map((e, i) => (
        <div key={i} className="sp-card" style={{ left: `${e.x}%`, top: `${e.y}%`, width: `${e.w}%`, animationDelay: `${i * -1.1}s` }}>
          <div className="sc-card__head"><i className="sc-src" />{e.src} <span>{e.ago}</span></div>
          <p>{e.text}</p>
          {e.lines && <><div className="sk-line" /><div className="sk-line w60" /></>}
          {e.stars && <div className="stars">★★★★<em>★</em></div>}
        </div>
      ))}
      {errors.map((e, i) => (
        <div key={i} className="sp-err" style={{ left: `${e.x}%`, top: `${e.y}%`, animationDelay: `${i * 0.7}s` }}>
          <b><svg viewBox="0 0 12 12"><path d="M6 1l5 10H1z" fill="currentColor" /></svg>Error</b><span>×</span>
          <small>{e.t}</small>
        </div>
      ))}
    </div>
  );
}

/* ---------- Reliable partner: tags feeding a console window ---------- */
export function ConsoleScene() {
  return (
    <div className="scene scene-console" aria-hidden="true">
      <div className="cs-tags">
        <span>On-premises <em>18</em></span>
        <span className="alt">Cloud instances <em>26</em></span>
      </div>
      <svg className="cs-links" viewBox="0 0 400 60" preserveAspectRatio="none">
        <g fill="none" stroke="#0A1C48" strokeOpacity=".5" strokeDasharray="3 3">
          <path d="M30 0 V25 H15 V60" /><path d="M70 0 V35 H95 V60" /><path d="M190 0 V25 H170 V60" /><path d="M240 0 V35 H265 V60" />
        </g>
        <g fill="#0A1C48"><rect x="12" y="20" width="6" height="6" className="pulse-dot" /><rect x="92" y="40" width="6" height="6" /><rect x="167" y="44" width="6" height="6" className="pulse-dot" /><rect x="262" y="22" width="6" height="6" /></g>
      </svg>
      <div className="cs-window">
        <div className="cs-brand"><HyMark mono className="cs-brand__mark" /><b>HANYAN</b></div>
        <div className="cs-grid">
          <div>
            <h6>Instances</h6>
            <div className="cs-search"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="8.5" cy="8.5" r="5.5" /><path d="M13 13l4 4" /></svg>prod-*</div>
            <h6 style={{ marginTop: "1.6rem" }}>Filters</h6>
            {["Engine", "Environment", "Region", "Health", "Owner"].map((f, i) => (
              <div key={f} className="cs-filter"><i className={i === 1 || i === 3 ? "on" : ""} />{f}</div>
            ))}
          </div>
          <div>
            <h6>Health</h6>
            {[["prod-sql-01", "OK"], ["prod-ora-02", "OK"], ["prod-pg-03", "TUNE"], ["prod-sql-04", "OK"]].map(([n, s], i) => (
              <div key={n} className="cs-row" style={{ animationDelay: `${i * 0.35}s` }}>
                <div><b>{n}</b><span className={s === "TUNE" ? "warn" : ""}>{s}</span></div>
                <i style={{ width: "80%" }} /><i style={{ width: "55%" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
