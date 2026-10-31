import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon, ReturnArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Consulting Services",
  description: "Data platform modernisation, database consulting, BI consulting and Azure consulting from Hanyan.",
};

const N = "#0A1C48";
const F = "Inter, Arial, sans-serif";
const box = { position: "absolute" as const, inset: 0, width: "100%", height: "100%" };

const services = [
  {
    id: "modernisation",
    icon: "rocket",
    label: "Data Platform Modernisation",
    title: "Modernise your data platform",
    text: "Modernise your data platform to reduce cost, take advantage of the latest features and technologies, and meet growing demand.",
    points: [
      "Upgrades off end-of-support SQL Server, Oracle and Windows Server",
      "Re-platforming to Azure SQL, managed instances or open-source engines",
      "Licensing reviews to reduce total cost of ownership",
      "Roadmaps aligned to business growth",
    ],
    art: (
      <svg viewBox="0 0 600 520" style={box}>
        <g transform="translate(60 120)">
          <rect width="200" height="150" fill="#FFFFFF" stroke={N} strokeOpacity=".35" strokeDasharray="4 4" />
          <text x="18" y="34" fontFamily={F} fontSize="15" fill={N}>Legacy version</text>
          <rect x="18" y="48" width="100" height="20" fill="#EEF0F3" /><text x="68" y="62" textAnchor="middle" fontFamily={F} fontSize="10" fill={N}>End of support</text>
          <rect x="18" y="88" width="160" height="7" fill="#EEF0F3" /><rect x="18" y="104" width="110" height="7" fill="#EEF0F3" />
        </g>
        <path d="M268 195 H330" stroke={N} strokeWidth="1.5" className="flow" />
        <path d="M324 188l9 7-9 7" stroke={N} strokeWidth="1.5" fill="none" />
        <g transform="translate(340 90)">
          <rect width="200" height="210" fill={N} />
          <text x="18" y="34" fontFamily={F} fontSize="15" fill="#FFFFFF">Modern platform</text>
          {["Supported & secure", "Lower licence cost", "Ready to scale"].map((t, i) => (
            <g key={t}><rect x="18" y={62 + i * 40} width="14" height="14" fill="#FFFFFF" /><text x="42" y={74 + i * 40} fontFamily={F} fontSize="12.5" fill="#FFFFFF">{t}</text></g>
          ))}
        </g>
        <g transform="translate(60 350)">
          <rect width="480" height="70" fill="#FFFFFF" stroke={N} strokeOpacity=".2" />
          <rect x="20" y="30" width="440" height="10" fill="#EEF0F3" /><rect x="20" y="30" width="320" height="10" fill={N} />
        </g>
      </svg>
    ),
  },
  {
    id: "database",
    icon: "db",
    label: "Database Consulting Services",
    title: "Databases that perform, scale and stay secure",
    text: "From performance tuning to cloud migrations, we make sure your databases run efficiently, scale, stay secure and support your business goals.",
    points: [
      "Performance tuning and query optimisation",
      "High availability and disaster recovery design",
      "Cloud migration planning and execution",
      "SQL Server, Oracle, PostgreSQL, MySQL, MariaDB, MongoDB and Cosmos DB",
    ],
    art: (
      <svg viewBox="0 0 600 520" style={box}>
        <g transform="translate(190 90)">
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(0 ${i * 100})`}>
              <rect width="220" height="80" fill={i === 1 ? N : "#FFFFFF"} stroke={N} strokeDasharray={i === 1 ? undefined : "4 4"} />
              <rect x="18" y="20" width="12" height="12" fill={i === 1 ? "#FFFFFF" : N} />
              <text x="40" y="31" fontFamily={F} fontSize="13" fill={i === 1 ? "#FFFFFF" : N}>{["Primary replica", "Listener", "Secondary replica"][i]}</text>
              <rect x="18" y="50" width="140" height="7" fill={i === 1 ? "#2F3F66" : "#EEF0F3"} />
            </g>
          ))}
        </g>
        <path d="M300 170 V190 M300 270 V290" stroke={N} strokeWidth="1.5" className="flow" />
      </svg>
    ),
  },
  {
    id: "bi",
    icon: "chart",
    label: "Business Intelligence Consulting",
    title: "Turn data into better decisions",
    text: "Empower your business with advanced analytics, reporting and data visualisation, driving better decision-making and efficiency.",
    points: [
      "Microsoft Power BI reporting and governance",
      "Microsoft Fabric and Azure Synapse Analytics",
      "Data integration and ingestion pipelines",
      "Secure, trusted semantic models",
    ],
    art: (
      <svg viewBox="0 0 600 520" style={box}>
        <rect x="60" y="70" width="480" height="380" fill="#FFFFFF" stroke={N} strokeOpacity=".3" strokeDasharray="4 4" />
        <text x="90" y="112" fontFamily={F} fontSize="16" fill={N}>Dashboard</text>
        {[120, 180, 140, 230, 200, 260].map((h, i) => (
          <rect key={i} x={100 + i * 66} y={410 - h} width="40" height={h} fill={i === 5 ? N : "#DADDE4"} />
        ))}
        <path d="M120 300 L186 250 L252 280 L318 200 L384 220 L450 160" stroke={N} strokeWidth="2" fill="none" strokeDasharray="5 4" />
      </svg>
    ),
  },
  {
    id: "azure",
    icon: "cloud",
    label: "Azure Consulting Services",
    title: "Get the full power of Azure",
    text: "Use the full power of Azure, whether you're migrating to the cloud, optimising performance or building data-driven applications.",
    points: [
      "Azure migration assessments and landing zones",
      "Azure administration and cost oversight",
      "Microsoft Direct CSP licensing",
      "Data-driven application architecture",
    ],
    art: (
      <svg viewBox="0 0 600 520" style={box}>
        <path d="M180 300a70 70 0 0 1 12-139 100 100 0 0 1 190 20 62 62 0 0 1 24 119z" fill={N} />
        <g stroke={N} strokeWidth="1.5" className="flow"><path d="M230 300v60" /><path d="M300 300v80" /><path d="M370 300v60" /></g>
        {[[200, 360], [270, 380], [340, 360]].map(([x, y]) => (
          <rect key={x} x={x} y={y} width="60" height="34" fill="#FFFFFF" stroke={N} strokeDasharray="4 4" />
        ))}
      </svg>
    ),
  },
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        crumb="Consulting"
        label="Consulting Services"
        title="Enterprise data platform and Azure consulting"
        text="Hanyan offers end-to-end, cost-effective enterprise data platform and Azure consulting and support. Our services are structured so you can choose the engagement model that suits your needs."
      />
      <nav className="jump row">
        {services.map((s) => <a key={s.id} href={`#${s.id}`}>{s.label}</a>)}
      </nav>
      <div className="hatch" />

      {services.map((s) => (
        <div key={s.id}>
          <section id={s.id} className="split row detail">
            <div className="split__copy reveal">
              <div className="icon-label"><span className="ico-box"><Icon name={s.icon} /></span>{s.label}</div>
              <h2>{s.title}</h2>
              <p className="lead">{s.text}</p>
              <ul className="checks">
                {s.points.map((p) => <li key={p}><span className="tick" />{p}</li>)}
              </ul>
              <div><Link href="/contact" className="btn btn--primary">Talk to an expert <ReturnArrow /></Link></div>
            </div>
            <div className="split__visual bg-panel" aria-hidden="true">{s.art}</div>
          </section>
          <div className="hatch" />
        </div>
      ))}

      <Link href="/contact" className="bar-cta">Not sure where to start? Book a free health check <ReturnArrow /></Link>
    </>
  );
}
