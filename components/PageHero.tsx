import Link from "next/link";
import { HyMark } from "./Logo";
import DataRain from "./DataRain";

export default function PageHero({
  crumb,
  label,
  title,
  text,
  children,
}: {
  crumb: string;
  label: string;
  title: React.ReactNode;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero row">
      <div className="page-hero__copy">
        <div className="crumbs"><Link href="/">Home</Link> / {crumb}</div>
        <span className="label">{label}</span>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
        {children && <div style={{ marginTop: "2rem" }}>{children}</div>}
      </div>
      <div className="page-hero__visual">
        <DataRain cols={60} rows={22} seed={11} density={0.5} fadeDown />
        <div className="hy-big float">
          <HyMark mono className="" />
        </div>
      </div>
    </section>
  );
}
