"use client";

import { useEffect, useState } from "react";
import DataRain from "../DataRain";
import { HyMark } from "../Logo";
import { useTyping } from "./useAnim";

const ranges = [
  ["This Week", "5 Jan – 11 Jan"],
  ["This Month", "1 Jan – 31 Jan"],
  ["This Quarter", "1 Jan – 31 Mar"],
  ["This Year", "1 Jan – 31 Dec"],
  ["Custom Range", ""],
];

/** Dark "engine" scene: sources on the left, query + time range in the middle, results on the right. */
export default function SolutionScene() {
  const q = useTyping('"prod-*" AND wait > 2s OR "deadlock"', { speed: 60, hold: 2400 });
  const [sel, setSel] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSel((s) => (s + 1) % 4), 1800);
    return () => clearInterval(t);
  }, []);

  // highlight boolean operators like a query editor
  const parts = q.split(/(\bAND\b|\bOR\b)/);

  return (
    <div className="scene scene-dark" aria-hidden="true">
      <DataRain cols={120} rows={5} seed={9} density={0.95} fadeDown colors={["#1F2F56", "#2A3A5F", "#344368", "#3F4E73"]} className="rain scene-dark__rain" />
      <div className="sd-col sd-left">
        {[["SQL Server", "12"], ["Oracle", "4"], ["PostgreSQL", "7"]].map(([t, n]) => (
          <div key={t} className="sd-src"><span>{t}</span><em>{n}</em></div>
        ))}
      </div>
      <div className="sd-col sd-right">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="sd-out">
            <i style={{ width: "30%" }} /><i style={{ width: "30%" }} /><i style={{ width: "92%" }} /><i style={{ width: "48%" }} /><i style={{ width: "40%" }} />
          </div>
        ))}
      </div>
      <svg className="sd-links" viewBox="0 0 1000 560" preserveAspectRatio="none">
        <g fill="none" stroke="#5A6888" strokeDasharray="5 5">
          <path d="M150 150 H220 V230 H330" /><path d="M150 300 H330" /><path d="M150 450 H220 V370 H330" />
          <path d="M670 230 H760 V150 H850" /><path d="M670 300 H850" /><path d="M670 370 H760 V450 H850" />
        </g>
      </svg>
      <div className="sd-engine">
        <div className="sd-engine__title"><HyMark light className="sd-engine__mark" />Hanyan Engine</div>
        <div className="sd-query">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="8.5" cy="8.5" r="5.5" /><path d="M13 13l4 4" /></svg>
          <span>{parts.map((p, i) => (p === "AND" || p === "OR" ? <mark key={i}>{p}</mark> : <span key={i}>{p}</span>))}</span><b className="caret" />
        </div>
        <div className="sd-ranges">
          {ranges.map(([t, d], i) => (
            <div key={t} className={i === sel ? "on" : ""}>{t} <small>{d}</small><i /></div>
          ))}
        </div>
        <div className="sd-params">
          <small>Parameters</small>
          <div><span>Instance</span><span>Database</span><span>Query</span><span>Wait type</span><span>Boolean search</span></div>
        </div>
      </div>
    </div>
  );
}
