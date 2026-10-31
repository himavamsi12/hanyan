import Link from "next/link";

/** Hanyan "HY" mark + wordmark, recreated in SVG from the brand logo. */
export function HyMark({ light = false, mono = false, className = "logo__mark" }: { light?: boolean; mono?: boolean; className?: string }) {
  const id = light ? "d" : "l";
  if (mono) {
    return (
      <svg className={className} viewBox="225 120 425 228" aria-hidden="true">
        <path d="M230 128H312V207H392L436 265H312V345H230Z" fill="#0A1C48" />
        <path d="M345 126H447L541 248V341H451V262Z" fill="#0A1C48" />
        <path d="M549 126H645L541 248L497 191Z" fill="#6C7790" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="225 120 425 228" aria-hidden="true">
      <defs>
        <linearGradient id={`hyL-${id}`} x1="0" y1="0" x2=".4" y2="1">
          <stop offset="0" stopColor="#55A8F7" />
          <stop offset="1" stopColor="#2563F0" />
        </linearGradient>
        <linearGradient id={`hyR-${id}`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2E6BF2" />
          <stop offset="1" stopColor="#1A3FC4" />
        </linearGradient>
      </defs>
      <path className="hy-h" d="M230 128H312V207H392L436 265H312V345H230Z" fill="#0D1B45" />
      <path d="M345 126H447L541 248V341H451V262Z" fill={`url(#hyL-${id})`} />
      <path d="M549 126H645L541 248L497 191Z" fill={`url(#hyR-${id})`} />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`logo${light ? " logo--light" : ""}`} aria-label="Hanyan Software Solutions, home">
      <HyMark light={light} />
      <span className="logo__text">
        <span className="logo__name">HANYAN</span>
        <span className="logo__tag">SOFTWARE SOLUTIONS</span>
      </span>
    </Link>
  );
}
