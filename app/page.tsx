import Link from "next/link";
import DataRain from "@/components/DataRain";
import Typer from "@/components/Typer";
import CircuitBg from "@/components/CircuitBg";
import { Icon, Plus, ReturnArrow } from "@/components/Icons";
import {
  DottedGlobe, MigrationChips, PolicyEvent, QuarterReport, RiskAlert, ScanGrid, ServiceReport,
  SourceTargetChips, SpeedCompare, TrendForecast,
} from "@/components/Illustrations";
import HeroScene from "@/components/scenes/HeroScene";
import SolutionScene from "@/components/scenes/SolutionScene";
import { ConsoleScene, ProblemScene } from "@/components/scenes/StaticScenes";

const F = "Inter, Arial, sans-serif";

/* ---------- small SVG helpers for the illustrations ---------- */

const faqs: [string, React.ReactNode][] = [
  ["What does Hanyan do?", "We modernise data platforms, optimise database performance and integrate them seamlessly with Azure. We deliver this through consulting, managed 24/7 DBA services and security and compliance services."],
  ["Which database platforms do you support?", "Microsoft SQL Server and Azure SQL, Oracle Database, PostgreSQL, MySQL, MariaDB, EnterpriseDB, MongoDB, Azure Cosmos DB and Amazon RDS, across Microsoft Azure, AWS and Google Cloud."],
  ["How is Hanyan different from hiring in-house DBAs?", "You get a whole team of specialists across many technologies, available 24/7, for a predictable fixed monthly cost and without the recruitment, training and retention overhead."],
  ["Can you help us get off unsupported database versions?", "Yes. Data Platform Modernisation upgrades or re-platforms end-of-support SQL Server, Oracle and Windows Server estates, on-premises or into Azure."],
  ["How long does a health check take?", "A Database System Health Check is a short, focused engagement. You receive clear findings and a prioritised roadmap, so you know exactly what to fix first."],
  ["What engagement models do you offer?", <ul key="m"><li>Advisory-led transformation</li><li>Modernisation programmes</li><li>Managed DBA services</li><li>Azure administration and cost oversight</li><li>Security and compliance assurance</li></ul>],
  ["Is Hanyan compliant with security standards?", "We are ISO/IEC 27001:2022 certified. Our DB Shield service adds preconfigured defences and custom security policies for your database environment."],
  ["Can you help with Microsoft Fabric and Power BI?", "Yes. We build data integration and ingestion pipelines, lead Microsoft Fabric adoption and deliver governed Power BI reporting with secure data models."],
  ["Do you resell Azure licensing?", "As a Microsoft Direct Cloud Solution Provider (CSP), we offer a full portfolio of Azure services and licensing, with cost oversight built in."],
  ["What support do you provide?", "Always-on DBAs monitor and support mission-critical systems around the clock, delivered remotely, with phone, email and portal channels."],
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero row">
        <div className="hero__copy">
          <Link href="/solutions#azure-db" className="chip-note">SQL Server 2016 support has ended. Plan your upgrade →</Link>
          <h1>
            Modernise. Optimise. Protect.<br />Absolute data excellence for <span className="accent">enterprise databases</span>
          </h1>
          <div className="hero__bottom">
            <p>Replace fragmented database support with one trusted partner for consulting, 24/7 administration and Azure, across every major platform.</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn--primary">Talk to an expert <ReturnArrow /></Link>
              <Link href="/consulting" className="btn btn--dashed">Explore our services</Link>
            </div>
          </div>
        </div>
        <div className="hero__visual"><HeroScene /></div>
      
      </section>

      {/* ================= PLATFORM STRIP ================= */}
      <section className="row">
        <div className="strip-title">Certified expertise across every major database and cloud platform</div>
        <div className="strip">
          {[
            ["SQL Server", "Relational", <svg key="a" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3" fill="#0A1C48" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6c0 1.7-3.6 3-8 3S4 7.7 4 6z" fill="#0A1C48" /></svg>],
            ["Oracle", "Enterprise", <svg key="b" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="5" fill="none" stroke="#0A1C48" strokeWidth="3" /></svg>],
            ["PostgreSQL", "Open source", <svg key="c" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#0A1C48" /><path d="M8 9h5a2.5 2.5 0 0 1 0 5H10v4" stroke="#FFFFFF" strokeWidth="2" fill="none" /></svg>],
            ["MongoDB", "NoSQL", <svg key="d" viewBox="0 0 24 24"><path d="M12 2c4 4 5 8 4 12-1 3-3 5-4 8-1-3-3-5-4-8-1-4 0-8 4-12z" fill="#0A1C48" /></svg>],
            ["Azure", "Cloud platform", <svg key="e" viewBox="0 0 24 24"><path d="M10 3L3 20h6l8-17z" fill="#0A1C48" /><path d="M13 8l8 13H8l6-3z" fill="#0A1C48" /></svg>],
            ["Power BI", "Analytics", <svg key="f" viewBox="0 0 24 24"><rect x="4" y="11" width="4" height="10" fill="#DADDE4" /><rect x="10" y="7" width="4" height="14" fill="#0A1C48" /><rect x="16" y="3" width="4" height="18" fill="#0A1C48" /></svg>],
          ].map(([name, cat, icon]) => (
            <div className="strip__cell" key={name as string}>
              <div className="strip__mark">{icon}{name}</div>
              <small>{cat}</small>
            </div>
          ))}
        </div>
      </section>
      <div className="hatch" />

      {/* ================= THE PROBLEM ================= */}
      <section className="row">
        <div className="pad" style={{ paddingBottom: "3rem" }}>
          <div className="head reveal">
            <span className="label label--red">The Problem</span>
            <h2>You&apos;re running the business on fragile data platforms</h2>
            <p>Your data powers every decision, yet most teams rely on ageing, patched-together database estates to keep it running.</p>
          </div>
        </div>
        <div className="inset" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="hatch-side" />
          <div className="inset__main">
            <ProblemScene />
            <div style={{ borderTop: "1px solid var(--border)" }}>
              <div className="text-block reveal">
              Juggling unsupported versions, ad-hoc fixes and stretched in-house skills means your team is always firefighting. Performance problems drain hours, licensing surprises hit the budget, and when a server fails, your reporting and operations go down with it.
            </div>
            </div>
          </div>
          <div className="hatch-side" />
        </div>
      </section>

      {/* ================= THE SOLUTION ================= */}
      <section className="row">
        <div className="pad" style={{ paddingBottom: "3rem" }}>
          <div className="head reveal">
            <span className="label">The Solution</span>
            <h2>One trusted partner for your entire data estate</h2>
            <p style={{ color: "var(--ink)" }}>Hanyan gives you the reliable, expertly managed data platform your business has always needed.</p>
          </div>
        </div>
        <div className="inset" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="hatch-side" />
          <div className="inset__main">
            <SolutionScene />
            <div className="text-cta reveal">
              <p>We bring SQL Server, Oracle, open-source and NoSQL databases under one expert team, on-premises or in the cloud. We modernise what&apos;s ageing, tune what&apos;s slow and protect what matters, so your data is always available and your team can focus on the business.</p>
              <Link href="/consulting" className="btn btn--primary">See how we work <ReturnArrow /></Link>
            </div>
          </div>
          <div className="hatch-side" />
        </div>
        <div className="features" style={{ borderTop: "1px solid var(--border)" }}>
          {[
            ["clock", "24/7 global support", "Always-on DBAs keep mission-critical systems healthy around the clock"],
            ["shield", "ISO 27001 certified", "Security is in our DNA, with certified, audited processes"],
            ["coin", "Cheaper and better", "A flexible model that cuts cost without cutting service quality"],
            ["stack", "Every platform", "SQL Server, Oracle, open source and NoSQL under one roof"],
            ["award", "23+ years", "Decades of absolute data excellence for the enterprise"],
          ].map(([ic, t, d]) => (
            <div className="feature reveal" key={t}>
              <div className="ico-box"><Icon name={ic} /></div>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="hatch" />

      {/* ================= RAIN HEADLINE ================= */}
      <section className="rain-band row">
        <DataRain cols={130} rows={12} seed={5} density={0.6} fadeDown />
        <h2>What would you achieve with a fully optimised data platform?</h2>
        <Typer words={["Faster queries at peak load", "Lower Azure and licensing spend", "Zero unplanned downtime", "Audit-ready security", "One version of the truth in Power BI"]} />
      </section>
      <div className="hatch" />

      {/* ================= RELIABLE PARTNER ================= */}
      <section className="split row bg-panel">
        <div className="split__copy reveal">
          <h2>Your most reliable partner for database consulting at scale</h2>
          <p className="lead">Hanyan powers data-driven organisations, from transaction processing and analytics to regulatory reporting and AI.</p>
          <ul className="checks">
            <li><span className="tick" />Assess, modernise and manage databases across every platform</li>
            <li><span className="tick" />Focus on your business, not on managing infrastructure</li>
          </ul>
          <div><Link href="/contact" className="btn btn--primary">Book a consultation <ReturnArrow /></Link></div>
        </div>
        <div className="split__visual bg-panel" aria-hidden="true"><ConsoleScene /></div>
      </section>
      <div className="hatch" />

      {/* ================= SERVICES (TABS) ================= */}
      <section className="row" data-tabs="">
        <div className="tabstrip" role="tablist">
          {[
            ["Modernisation", "rocket", "#0A1C48"],
            ["Database", "db", "#0A1C48"],
            ["Business Intelligence", "chart", "#0A1C48"],
            ["Azure", "cloud", "#0A1C48"],
          ].map(([t, ic, c], i) => (
            <button key={t} className={`tabs__btn${i === 0 ? " is-active" : ""}`} role="tab" style={{ ["--tab-color" as string]: c }}>
              <span style={{ color: c, display: "inline-flex", width: "1.1rem", height: "1.1rem" }}><Icon name={ic} /></span>{t}
            </button>
          ))}
        </div>

        {/* Modernisation */}
        <div className="tabs__panel is-active">
          <div className="split">
            <div className="split__copy">
              <div className="icon-label"><span className="ico-box"><Icon name="rocket" /></span>Data Platform Modernisation</div>
              <h2>Modernise without the migration headaches</h2>
              <p className="lead">Modernise your data platform to reduce cost, take advantage of the latest features and technologies, and meet growing demand. We plan and deliver every step, so your business keeps running throughout.</p>
              <ul className="checks">
                <li><span className="tick" />Upgrades off end-of-support SQL Server, Oracle and Windows Server</li>
                <li><span className="tick" />Re-platforming to Azure SQL, managed instances or open source</li>
                <li><span className="tick" />Licensing reviews that lower total cost of ownership</li>
              </ul>
            </div>
            <div className="split__visual bg-panel" aria-hidden="true"><SourceTargetChips /></div>
          </div>
        </div>

        {/* Database consulting */}
        <div className="tabs__panel">
          <div className="split">
            <div className="split__copy">
              <div className="icon-label"><span className="ico-box ico-box--orange"><Icon name="db" /></span>Database Consulting</div>
              <h2>Databases that perform, scale and stay secure</h2>
              <p className="lead">From performance tuning to cloud migrations, we make sure your databases run efficiently, scale, stay secure and support your business goals.</p>
              <ul className="checks">
                <li><span className="tick tick--orange" />Performance tuning and query optimisation</li>
                <li><span className="tick tick--orange" />High availability and disaster recovery design</li>
                <li><span className="tick tick--orange" />Specialists across relational, open-source and NoSQL engines</li>
              </ul>
            </div>
            <div className="split__visual bg-panel" aria-hidden="true"><SpeedCompare /></div>
          </div>
        </div>

        {/* BI */}
        <div className="tabs__panel">
          <div className="split">
            <div className="split__copy">
              <div className="icon-label"><span className="ico-box ico-box--purple"><Icon name="chart" /></span>Business Intelligence</div>
              <h2>Turn trusted data into better decisions</h2>
              <p className="lead">Empower your business with advanced analytics, reporting and data visualisation that drive better decisions and efficiency.</p>
              <ul className="checks">
                <li><span className="tick tick--purple" />Microsoft Power BI reporting and governance</li>
                <li><span className="tick tick--purple" />Microsoft Fabric and Azure Synapse Analytics</li>
                <li><span className="tick tick--purple" />Governed pipelines and secure semantic models</li>
              </ul>
            </div>
            <div className="split__visual bg-panel" aria-hidden="true"><QuarterReport /></div>
          </div>
        </div>

        {/* Azure */}
        <div className="tabs__panel">
          <div className="split">
            <div className="split__copy">
              <div className="icon-label"><span className="ico-box ico-box--green"><Icon name="cloud" /></span>Azure Consulting</div>
              <h2>Get the full power of Azure, at the right cost</h2>
              <p className="lead">Use the full power of Azure, whether you&apos;re migrating to the cloud, optimising performance or building data-driven applications.</p>
              <ul className="checks">
                <li><span className="tick tick--green" />Migration assessments and landing zones</li>
                <li><span className="tick tick--green" />Azure administration and cost oversight</li>
                <li><span className="tick tick--green" />Microsoft Direct CSP licensing</li>
              </ul>
            </div>
            <div className="split__visual bg-panel" aria-hidden="true"><DottedGlobe /></div>
          </div>
        </div>
      </section>
      <div className="hatch" />

      {/* ================= FREE HEALTH CHECK (DARK) ================= */}
      <section className="dark row">
        <DataRain cols={130} rows={8} seed={13} density={0.75} colors={["#16274F", "#1F2F56", "#2A3A5F", "#344368"]} />
        <div className="offer">
          <div className="offer__left">
            <span className="label label--light">Free Database Health Check</span>
            <p className="sub">Test your environment with Hanyan, <em>for free.</em></p>
            <div className="offer__cta">
              <p>We&apos;ll assess your databases to show you where performance, security and cost can improve.</p>
              <Link href="/contact" className="btn btn--white">Start your free health check <ReturnArrow /></Link>
            </div>
          </div>
          <div className="offer__right">
            <h3>Find hidden risks in your data platform before they turn into outages.</h3>
            <div className="offer-grid">
              {["Free, no-commitment assessment", "Performance & security review", "Clear findings report", "Prioritised improvement roadmap"].map((t) => (
                <div key={t}><span className="tick" style={{ margin: "0 auto 1rem" }} />{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="hatch" />

      {/* ================= USE CASES ================= */}
      <section className="row" id="solutions">
        <div className="uc-head">
          <div className="reveal">
            <span className="label">Power Your Data</span>
            <h2>What leading enterprises rely on Hanyan for</h2>
          </div>
          <p className="reveal">From round-the-clock administration and performance tuning to cloud migration and compliance, we support every stage of your data platform with deep, certified expertise.</p>
        </div>
        <div className="inset">
          <div className="hatch-side" />
          <div className="inset__main">
            <div className="uc-grid">
              <article className="uc">
                <div className="uc__art" aria-hidden="true"><RiskAlert /></div>
                <div className="uc__body"><h3>24/7 Database Administration</h3><p>Detect issues before they escalate. Always-on DBAs monitor, patch and back up mission-critical systems, all at a fixed monthly cost.</p></div>
              </article>
              <article className="uc">
                <div className="uc__art" aria-hidden="true"><TrendForecast /></div>
                <div className="uc__body"><h3>Performance Tuning</h3><p>Find and fix bottlenecks before users notice. Tune queries, indexes and configuration so your databases scale with demand.</p></div>
              </article>
              <article className="uc">
                <div className="uc__art" aria-hidden="true"><MigrationChips /></div>
                <div className="uc__body"><h3>Cloud Migration</h3><p>Move SQL Server, Oracle and open-source workloads to Azure with lower infrastructure, maintenance and licensing costs.</p></div>
              </article>
              <article className="uc">
                <div className="uc__art" aria-hidden="true"><PolicyEvent /></div>
                <div className="uc__body"><h3>Security &amp; Compliance</h3><p>Protect sensitive data with DB Shield&apos;s preconfigured defences, custom policies and full audit trails for regulators.</p></div>
              </article>
              <article className="uc">
                <div className="uc__art" aria-hidden="true"><ScanGrid /></div>
                <div className="uc__body"><h3>Database Health Check</h3><p>Find out whether your databases are running at their best, and diagnose problems before performance issues or downtime reach your users.</p></div>
              </article>
              <article className="uc">
                <div className="uc__art" aria-hidden="true"><ServiceReport /></div>
                <div className="uc__body"><h3>BI &amp; Executive Reporting</h3><p>Give leadership trusted insight with governed Power BI and Microsoft Fabric reporting, plus clear monthly service reports from your DBA team.</p></div>
              </article>
            </div>
            <Link href="/contact" className="bar-cta">Talk to an expert <ReturnArrow /></Link>
          </div>
          <div className="hatch-side" />
        </div>
      </section>
      <div className="hatch" />

      {/* ================= QUOTE / PILLARS ================= */}
      <section className="row quote" data-tabs="">
        <div className="quote__main">
          <DataRain cols={10} rows={30} seed={17} density={0.55} />
          <div className="tabs__panel is-active">
            <blockquote>&ldquo;We modernise data platforms so our clients can cut cost, adopt the latest technology and grow without limits. Every migration is planned, tested and delivered with zero surprises.&rdquo;</blockquote>
            <cite>Modernise<span>The Hanyan approach</span></cite>
          </div>
          <div className="tabs__panel">
            <blockquote>&ldquo;We tune and right-size every workload, from query plans to Azure subscriptions, so your platform delivers more performance for less spend.&rdquo;</blockquote>
            <cite>Optimise<span>The Hanyan approach</span></cite>
          </div>
          <div className="tabs__panel">
            <blockquote>&ldquo;Security is in our DNA. Certified processes, 24/7 monitoring and DB Shield keep your most sensitive data protected and audit-ready.&rdquo;</blockquote>
            <cite>Protect<span>The Hanyan approach</span></cite>
          </div>
        </div>
        <div className="quote__tabs">
          <button className="tabs__btn is-active quote__tab quote__tab--orange">Modernise <small>Data Platform Modernisation</small></button>
          <button className="tabs__btn quote__tab quote__tab--purple">Optimise <small>Performance &amp; cost</small></button>
          <button className="tabs__btn quote__tab quote__tab--yellow">Protect <small>Security &amp; compliance</small></button>
        </div>
      </section>
      <div className="hatch" />

      {/* ================= FAQ ================= */}
      <section className="row faq" id="faq">
        <div className="faq__aside">
          <span className="label">FAQs</span>
          <h2>Your questions, answered</h2>
          <p>Can&apos;t find what you&apos;re looking for? Our database experts are happy to help.</p>
          <Link href="/contact" className="btn btn--dashed">Contact us</Link>
        </div>
        <div className="faq__list">
          {faqs.map(([q, a]) => (
            <div className="acc__item" key={q}>
              <button className="acc__q" aria-expanded="false"><span>{q}</span><span className="acc__icon"><Plus /></span></button>
              <div className="acc__a"><div>{typeof a === "string" ? <p>{a}</p> : a}</div></div>
            </div>
          ))}
        </div>
      </section>
      <div className="hatch" />

      {/* ================= FINAL CTA ================= */}
      <section className="final row">
        <CircuitBg />
        <span className="label">Get Started</span>
        <h2>Talk to our data experts</h2>
        <p className="sub">Schedule a quick call to see how Hanyan can modernise, optimise and protect your data platform.</p>
        <p className="muted">Trusted by over 150 organisations worldwide</p>
        <Link href="/contact" className="btn btn--primary">Talk to an expert <ReturnArrow /></Link>
      </section>
    </>
  );
}
