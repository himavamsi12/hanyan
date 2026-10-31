"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) return <p className="news-ok">Thank you! You&apos;re subscribed.</p>;

  return (
    <form
      className="news-form"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to your email provider
        setDone(true);
      }}
    >
      <div className="field-wrap">
        <label htmlFor="news-email">Email<span style={{ color: "var(--red)" }}>*</span></label>
        <input id="news-email" type="email" required />
      </div>
      <button className="btn btn--primary" type="submit" style={{ gap: 0, paddingInline: "2.5rem" }}>Submit</button>
    </form>
  );
}
