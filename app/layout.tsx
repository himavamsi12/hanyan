import type { Metadata } from "next";
import { Archivo, Geist, Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: "400", variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Hanyan Software Solutions | Database Consulting, Data Platform & Azure Services",
    template: "%s | Hanyan Software Solutions",
  },
  description:
    "Hanyan modernises data platforms, optimises database performance and delivers seamless Azure integration, with 24/7 expert DBA support.",
  icons: { icon: "/assets/hy-mark.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${archivo.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Enables scroll-reveal animations only when JS runs, so content never stays hidden */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Header />
        <main className="frame">{children}</main>
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
