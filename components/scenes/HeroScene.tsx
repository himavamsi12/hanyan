"use client";

import DataRain from "../DataRain";
import { HyMark } from "../Logo";
import { useCountUp, useTyping } from "./useAnim";

function SrcIcon() {
  return <i className="sc-src" />;
}

/** Hero: database events floating over data rain, a live search and a results panel. */
export default function HeroScene() {
  const q = useTyping("slow queries on prod-sql-01", { hold: 3200 });
  const count = useCountUp(1284, { every: 7000 });

  return (
    <div className="scene scene-hero" aria-hidden="true">
      <DataRain cols={60} rows={18} seed={3} density={0.42} fadeDown colors={["#EEF0F4", "#E3E7EE", "#D5DBE5"]} className="rain scene-hero__rain" />

      {/* floating source cards */}
      <div className="sc-card sc-fade" style={{ left: "8%", top: "26%", width: "34%" }}>
        <div className="sc-card__head"><SrcIcon />SQL Server <span>4m ago</span></div>
        <p>Long-running query on the orders table during peak load.</p>
        <div className="sk-line" /><div className="sk-line w60" />
      </div>

      {/* search */}
      <div className="sc-search" style={{ left: "30%", top: "10%", width: "52%" }}>
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="8.5" cy="8.5" r="5.5" /><path d="M13 13l4 4" /></svg>
        <span>{q}</span><b className="caret" />
      </div>

      {/* divider + engine */}
      <div className="sc-line" />
      <div className="sc-node"><HyMark mono className="sc-node__mark" /></div>
      <div className="sc-drops">
        {[30, 66].map((l, i) => <i key={l} style={{ left: `${l}%`, animationDelay: `${i * 0.45}s` }} />)}
      </div>

      {/* results */}
      <div className="sc-results">
        <div className="sc-results__bar">
          <span className="meter">{Array.from({ length: 7 }).map((_, i) => <i key={i} className={i < 5 ? "on" : ""} />)}</span>
          <b>{count}</b> health checks completed
          <span className="exp">Export as <u>API Call</u> <u>PDF/CSV</u></span>
        </div>
        <div className="sc-results__item">
          <div className="tags"><span>Real-Time</span><span>SQL Server</span></div>
          <p>Missing index on orders.customer_id detected. Query time cut from 2.4s to 0.3s.</p>
          <small>Hanyan DBA <em>November 21, 14:25</em></small>
        </div>
      </div>
    </div>
  );
}
