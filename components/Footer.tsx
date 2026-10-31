import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import DataRain from "./DataRain";
import { ReturnArrow } from "./Icons";

const cols: { title: string; links: [string, string][] }[] = [
  {
    title: "Solutions",
    links: [
      ["Database Administration & Support", "/solutions#db-management"],
      ["Database Health Check", "/solutions#db-management"],
      ["DB Shield Security & Compliance", "/solutions#db-management"],
      ["SQL Server to Azure", "/solutions#azure-db"],
      ["Open Source Databases on Azure", "/solutions#azure-db"],
      ["Oracle to Azure", "/solutions#azure-db"],
      ["Microsoft Fabric", "/solutions#bi-ai"],
      ["Power BI", "/solutions#bi-ai"],
    ],
  },
  {
    title: "Consulting",
    links: [
      ["Data Platform Modernisation", "/consulting#modernisation"],
      ["Database Consulting", "/consulting#database"],
      ["BI Consulting", "/consulting#bi"],
      ["Azure Consulting", "/consulting#azure"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Partners", "/about#partners"],
      ["Careers", "/about#careers"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Terms of Service", "#"],
      ["Privacy Policy", "#"],
    ],
  },
];

const socials = [
  { label: "LinkedIn", d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21H9z" },
  { label: "Facebook", d: "M14 8h3V4h-3c-2.8 0-4 1.8-4 4.5V11H7v4h3v9h4v-9h3l1-4h-4V8.8c0-.5.3-.8 1-.8z" },
  { label: "YouTube", d: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15V9l5.2 3z" },
  { label: "X", d: "M17.5 3h3.3l-7.2 8.2L22 21h-6.6l-5.2-6.8L4.3 21H1l7.7-8.8L.6 3h6.8l4.7 6.2zm-1.2 16h1.8L6.4 4.9H4.4z" },
];

export default function Footer() {
  return (
    <footer className="frame wrap">
      <div className="hatch" />
      <div className="news row">
        <h3>Get database insights delivered fresh</h3>
        <NewsletterForm />
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href="#" aria-label={s.label}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.d} /></svg>
              </a>
            ))}
          </div>
          <Link href="/contact" className="btn btn--primary">Talk to an expert <ReturnArrow /></Link>
        </div>
        <div className="footer-cols">
          {cols.map((c) => (
            <div key={c.title}>
              <h5>{c.title}</h5>
              <ul>
                {c.links.map(([label, href]) => (
                  <li key={label}><Link href={href}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <DataRain cols={130} rows={9} seed={23} density={0.6} />
        <div>All Rights Reserved © {new Date().getFullYear()}<br />Hanyan Software Solutions</div>
        <div>
          <nav>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
