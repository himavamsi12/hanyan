"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowRight, Chevron } from "./Icons";

type MenuLink = { href: string; title: string; desc?: string; badge?: string };
type Menu = { label: string; cols: { title: string; links: MenuLink[] }[]; feature?: { eyebrow: string; text: string; href: string; cta: string } };

const menus: Menu[] = [
  {
    label: "About",
    cols: [
      {
        title: "Company",
        links: [
          { href: "/about", title: "About Hanyan", desc: "Who we are and how we work" },
          { href: "/about#excellence", title: "Absolute Data Excellence", desc: "Our Modernise, Optimise, Protect model" },
          { href: "/about#partners", title: "Vendor Relationships", desc: "Microsoft, AWS, Oracle and more" },
          { href: "/about#security", title: "ISO 27001 Certification", desc: "Security built into every engagement" },
          { href: "/about#careers", title: "Careers", desc: "Build a career in data" },
        ],
      },
    ],
    feature: {
      eyebrow: "Our story",
      text: "Organisations get real bottom-line benefits by focusing on their core business and co-sourcing the rest.",
      href: "/about",
      cta: "Read more",
    },
  },
  {
    label: "Consulting",
    cols: [
      {
        title: "Consulting services",
        links: [
          { href: "/consulting#modernisation", title: "Data Platform Modernisation", desc: "Lower cost, newer features, room to grow" },
          { href: "/consulting#database", title: "Database Consulting", desc: "Performance tuning to cloud migration" },
          { href: "/consulting#bi", title: "Business Intelligence Consulting", desc: "Analytics, reporting and visualisation" },
          { href: "/consulting#azure", title: "Azure Consulting", desc: "Migrate, optimise and build on Azure" },
        ],
      },
    ],
    feature: {
      eyebrow: "Engagement",
      text: "End-to-end, cost-effective consulting with the engagement model that suits you.",
      href: "/contact",
      cta: "Talk to an expert",
    },
  },
  {
    label: "Solutions",
    cols: [
      {
        title: "Database Management",
        links: [
          { href: "/solutions#db-management", title: "DBA & Support Service" },
          { href: "/solutions#db-management", title: "System Health Check" },
          { href: "/solutions#db-management", title: "Security & Compliance", badge: "DB SHIELD" },
        ],
      },
      {
        title: "Azure Database",
        links: [
          { href: "/solutions#azure-db", title: "SQL Server to Azure" },
          { href: "/solutions#azure-db", title: "MySQL, MariaDB & PostgreSQL" },
          { href: "/solutions#azure-db", title: "Oracle to Azure" },
        ],
      },
      {
        title: "Azure BI & AI",
        links: [
          { href: "/solutions#bi-ai", title: "Data Integration & Ingestion" },
          { href: "/solutions#bi-ai", title: "Microsoft Fabric", badge: "NEW" },
          { href: "/solutions#bi-ai", title: "Microsoft Power BI" },
        ],
      },
    ],
  },
];

/**
 * Navbar menu switch. While false, menu items are shown but have no
 * dropdowns and aren't clickable. Set to true to re-enable navigation.
 */
const NAV_ENABLED = false;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  return (
    <header className="navbar">
        <div className="navbar__inner">
          <Logo />
          {NAV_ENABLED ? (
          <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
              {menus.map((m) => (
                <div key={m.label} className={`nav__item${expanded === m.label ? " is-expanded" : ""}`}>
                  <button
                    className="nav__link"
                    aria-expanded={expanded === m.label}
                    onClick={() => setExpanded(expanded === m.label ? null : m.label)}
                  >
                    {m.label} <Chevron />
                  </button>
                  <div className={`mega ${m.cols.length + (m.feature ? 1 : 0) >= 3 ? "mega--3" : "mega--2"}`}>
                    {m.cols.map((c) => (
                      <div key={c.title}>
                        <div className="mega__title">{c.title}</div>
                        {c.links.map((l) => (
                          <Link key={l.title} className="mega__link" href={l.href}>
                            <strong>
                              {l.title}
                              {l.badge && <span className="badge-new">{l.badge}</span>}
                            </strong>
                            {l.desc && <span>{l.desc}</span>}
                          </Link>
                        ))}
                      </div>
                    ))}
                    {m.feature && (
                      <div className="mega__feature">
                        <span className="eyebrow" style={{ margin: 0 }}>{m.feature.eyebrow}</span>
                        <h5>{m.feature.text}</h5>
                        <Link className="link-arrow" href={m.feature.href}>
                          {m.feature.cta} <ArrowRight />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="nav__item">
                <Link className="nav__link" href="/#case-studies">Case Studies</Link>
              </div>
            </nav>
          ) : (
            <nav className={`nav nav--disabled${open ? " is-open" : ""}`} aria-label="Main">
              {[...menus.map((m) => m.label), "Case Studies"].map((label) => (
                <div key={label} className="nav__item">
                  <span className="nav__link" aria-disabled="true">{label}</span>
                </div>
              ))}
            </nav>
          )}
          <div className="nav__cta">
            <Link href="/contact" className="btn btn--dashed nav__contact">Contact</Link>
            <Link href="/contact" className="btn btn--dark">Talk to an expert</Link>
            <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
    </header>
  );
}
