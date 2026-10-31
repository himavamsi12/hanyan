import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to a Hanyan database expert.",
};

// TODO: replace with Hanyan's real contact details
const info = [
  ["pin", "Head Office", "Your street address, City, Country"],
  ["mail", "Email", "hello@hanyan.example"],
  ["phone", "Phone", "+00 000 000 0000"],
  ["clock", "24/7 Support", "support@hanyan.example"],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        label="Contact Us"
        title="Talk to our data experts"
        text="Tell us about your data platform and we'll get back to you within one business day."
      />
      <section className="contact row">
        <div className="contact__info">
          <h2>Get in touch</h2>
          <p className="muted" style={{ fontSize: "1.1rem" }}>Every enquiry goes to the right specialist, whether you need a health check, a migration or round-the-clock support.</p>
          <div className="info-list">
            {info.map(([ic, t, d]) => (
              <div key={t}>
                <span className="ico-box" style={{ margin: 0 }}><Icon name={ic} /></span>
                <span>{t}<small>{d}</small></span>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
