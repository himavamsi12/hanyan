import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import DataRain from "@/components/DataRain";
import { ReturnArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description: "Hanyan Software Solutions brings high-level skill and expertise to the enterprise data platform.",
};

// TODO: confirm these figures reflect Hanyan before going live
const stats = [
  ["150+", "Organisations trust us with their data platforms"],
  ["40+", "Permanent data platform consultants"],
  ["24/7", "Always-on DBA monitoring and support"],
  ["23+", "Years of absolute data excellence"],
];

const pillars = [
  ["01", "Modernise", "Move to current, supported platforms and the cloud to cut cost, gain new capabilities and meet growing demand."],
  ["02", "Optimise", "Tune performance, right-size infrastructure and control Azure spend so every workload runs efficiently."],
  ["03", "Protect", "Secure, monitor and govern your data estate with certified processes and 24/7 oversight."],
];

const partners = [
  "Microsoft Solutions Partner", "Microsoft CSP Direct", "AWS Partner Network", "Google Cloud Partner",
  "Oracle", "Trellix", "PostgreSQL", "MongoDB",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        label="About Hanyan"
        title="Enterprise data platform advisory & consulting"
        text="Organisations increasingly recognise that real bottom-line benefits come from focusing on their core business and co-sourcing everything else. Hanyan applies high-level skill and expertise to the enterprise data platform on our clients' behalf."
      />

      <section className="split row">
        <div className="split__copy reveal">
          <span className="label">Who we are</span>
          <h2>A specialist partner for the enterprise data platform</h2>
          <p className="lead">We offer end-to-end, cost-effective data platform and Azure consulting and support. Our services are structured so you can choose the engagement model that suits you, from a one-off health check to a fully managed 24/7 DBA service.</p>
          <ul className="checks">
            <li><span className="tick" />Advisory-led transformation and modernisation programmes</li>
            <li><span className="tick" />Managed DBA services at a fixed monthly cost</li>
            <li><span className="tick" />Azure administration and cost oversight</li>
            <li><span className="tick" />Security and compliance assurance</li>
          </ul>
          <div><Link href="/consulting" className="btn btn--primary">Our consulting services <ReturnArrow /></Link></div>
        </div>
        <div className="split__visual bg-panel" aria-hidden="true">
          <svg viewBox="0 0 600 520" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <circle cx="300" cy="260" r="150" fill="none" stroke="#0A1C48" strokeOpacity=".35" strokeDasharray="5 6" />
            <rect x="240" y="200" width="120" height="120" fill="#0A1C48" />
            <text x="300" y="266" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="#FFFFFF">YOUR DATA</text>
            {[["Advise", 300, 110], ["Build", 170, 335], ["Run", 430, 335]].map(([t, x, y]) => (
              <g key={t as string}>
                <rect x={(x as number) - 60} y={(y as number) - 22} width="120" height="44" fill="#FFFFFF" stroke="#0A1C48" strokeDasharray="4 4" />
                <text x={x as number} y={(y as number) + 5} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="15" fill="#0A1C48">{t}</text>
              </g>
            ))}
          </svg>
        </div>
      </section>

      <section className="stats row">
        {stats.map(([n, l]) => (
          <div key={l} className="stat reveal"><strong>{n}</strong><span>{l}</span></div>
        ))}
      </section>
      <div className="hatch" />

      <section className="dark row" id="excellence">
        <DataRain cols={130} rows={8} seed={19} density={0.7} colors={["#16274F", "#1F2F56", "#2A3A5F", "#344368"]} />
        <div className="pad" style={{ position: "relative", paddingBottom: "2.5rem" }}>
          <span className="label label--light">Absolute Data Excellence</span>
          <h2 style={{ maxWidth: "36rem" }}>Built on three pillars: Modernise, Optimise, Protect</h2>
        </div>
        <div className="pillars" style={{ position: "relative", borderTop: "1px solid rgba(255,255,255,.1)" }}>
          {pillars.map(([n, t, d]) => (
            <div key={t} className="pillar">
              <span className="pillar__n">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div style={{ height: "7rem" }} />
      </section>
      <div className="hatch" />

      <section className="row" id="partners">
        <div className="pad">
          <div className="head reveal">
            <span className="label">Vendor Relationships</span>
            <h2>Partnered with the platforms you rely on</h2>
            <p>As a Microsoft Direct Cloud Solution Provider and Data &amp; AI Solutions partner, we offer a full portfolio of Azure services and licensing to support your digital transformation.</p>
          </div>
        </div>
        <div className="partners">
          {partners.map((p) => <div key={p}>{p}</div>)}
        </div>
      </section>
      <div className="hatch" />

      <section className="split row" id="security">
        <div className="split__copy reveal">
          <span className="label">ISO/IEC 27001:2022</span>
          <h2>Security is in our DNA</h2>
          <p className="lead">Our certified information security management system gives highly regulated clients peace of mind. Access, change and incident processes are controlled, audited and continuously improved.</p>
          <ul className="checks">
            <li><span className="tick" />Certified information security management</li>
            <li><span className="tick" />Least-privilege access to client environments</li>
            <li><span className="tick" />Audited change and incident management</li>
          </ul>
        </div>
        <div className="split__visual bg-panel" aria-hidden="true">
          <svg viewBox="0 0 600 520" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <path d="M300 90l130 50v90c0 86-56 150-130 180-74-30-130-94-130-180v-90z" fill="#FFFFFF" stroke="#0A1C48" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M245 260l40 40 75-80" stroke="#0A1C48" strokeWidth="14" fill="none" strokeLinecap="square" />
          </svg>
        </div>
      </section>
      <div className="hatch" />

      <section className="final row" id="careers">
        <span className="label">Careers</span>
        <h2>Build your career at Hanyan</h2>
        <p className="sub">If you&apos;re passionate about databases, data platforms and driving value through data insight, we&apos;d like to hear from you.</p>
        <p className="muted">&nbsp;</p>
        <Link href="/contact" className="btn btn--primary">Get in touch <ReturnArrow /></Link>
      </section>
    </>
  );
}
