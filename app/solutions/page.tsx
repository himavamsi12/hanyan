import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon, ReturnArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Database management, Azure database, and Azure BI & AI solutions from Hanyan.",
};

const groups = [
  {
    id: "db-management",
    label: "Database Management",
    icon: "db",
    intro: "Administration, health checks, security and compliance that improve performance while lowering cost and risk.",
    items: [
      ["db", "Database Administration & Support Service", "A 24/7 remote service at a fixed monthly cost that keeps your database environment reliable, robust and performing at its best."],
      ["pulse", "Database System Health Check Service", "Find out whether your database is running optimally, and diagnose problems before performance issues or downtime affect your users."],
      ["shield", "Database Security & Compliance with DB Shield", "A 24/7 fixed-cost service that protects databases on your network with preconfigured defences, and helps you build a custom security policy."],
    ],
  },
  {
    id: "azure-db",
    label: "Azure Database",
    icon: "cloud",
    intro: "Move database workloads to Azure for scalability, flexibility, security and performance, at lower cost.",
    items: [
      ["cloud", "Migrate your SQL Server(s) to Azure", "Bring scalability, flexibility, security and performance to SQL Server workloads while reducing infrastructure, maintenance and support costs."],
      ["stack", "Run MySQL, MariaDB or PostgreSQL in Azure", "Run open-source database workloads on Azure with enterprise-grade scale and security, and lower infrastructure and support costs."],
      ["rocket", "Lift & Shift your Oracle Database to Azure", "Move Oracle workloads to Azure and reduce both infrastructure and Oracle licensing costs."],
    ],
  },
  {
    id: "bi-ai",
    label: "Azure BI & AI",
    icon: "chart",
    intro: "Power BI, Microsoft Fabric and Azure Synapse Analytics, delivered on governed and trusted data foundations.",
    items: [
      ["flow", "Data Integration & Ingestion Services", "Modernise data integration with governed pipelines, trusted data foundations and scalable outcomes."],
      ["layers", "Microsoft Fabric Services", "Adopt Microsoft Fabric, the unified, AI-ready analytics platform. Our Modernise, Optimise, Protect framework ensures seamless migration, governance and long-term success."],
      ["chart", "Microsoft Power BI Services", "Modernise your reporting with enterprise governance, secure data models and trusted insights at scale."],
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumb="Solutions"
        label="Solutions"
        title="Managed database, Azure and BI solutions"
        text="Fixed-cost, 24/7 managed services and proven migration and analytics solutions that keep your data platform modern, optimised and protected."
      />

      <section className="row" data-tabs="">
        <div className="tabstrip" role="tablist" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {groups.map((g, i) => (
            <button key={g.id} className={`tabs__btn${i === 0 ? " is-active" : ""}`} data-tab-id={g.id} role="tab">
              <span style={{ display: "inline-flex", width: "1.1rem", height: "1.1rem" }}><Icon name={g.icon} /></span>{g.label}
            </button>
          ))}
        </div>
        {groups.map((g, i) => (
          <div key={g.id} id={g.id} className={`tabs__panel${i === 0 ? " is-active" : ""}`} style={{ scrollMarginTop: "6rem" }}>
            <div className="pad" style={{ paddingBottom: "3rem" }}>
              <div className="head">
                <span className="label">{g.label} Solutions</span>
                <h2>{g.label}</h2>
                <p>{g.intro}</p>
              </div>
            </div>
            <div className="sol-cards" style={{ borderTop: "1px solid var(--border)" }}>
              {g.items.map(([ic, t, d]) => (
                <div key={t} className="sol-card">
                  <span className="ico-box"><Icon name={ic} /></span>
                  <h4>{t}</h4>
                  <p>{d}</p>
                  <Link href="/contact" className="link-arrow">Enquire <ReturnArrow /></Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <div className="hatch" />

      <section className="row">
        <div className="pad" style={{ paddingBottom: "3rem" }}>
          <div className="head reveal">
            <span className="label">Products</span>
            <h2>Technology we deliver and support</h2>
          </div>
        </div>
        <div className="sol-cards" style={{ borderTop: "1px solid var(--border)" }}>
          {[
            ["db", "Database Management Systems", "We follow a heterogeneous database technology and services strategy, with expertise across a full range of database technologies."],
            ["shield", "Trellix Database Security", "Find and protect sensitive information in databases from accidental leakage and intentional exposure, while keeping performance high and access managed."],
            ["cloud", "Microsoft Cloud Solution Provider", "As a Microsoft Direct CSP we offer a full portfolio of Azure services and licensing to support your digital transformation."],
          ].map(([ic, t, d]) => (
            <div key={t} className="sol-card reveal">
              <span className="ico-box"><Icon name={ic} /></span>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <Link href="/contact" className="bar-cta">Fixed monthly cost. 24/7 coverage. Talk to an expert <ReturnArrow /></Link>
    </>
  );
}
