"use client";

import { useState } from "react";
import { ReturnArrow } from "./Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send to your backend / email service
        setSent(true);
        e.currentTarget.reset();
      }}
    >
      <div className="form__row">
        <div className="field"><label htmlFor="fn">First name<b>*</b></label><input id="fn" name="firstName" required /></div>
        <div className="field"><label htmlFor="ln">Last name<b>*</b></label><input id="ln" name="lastName" required /></div>
      </div>
      <div className="form__row">
        <div className="field"><label htmlFor="em">Work email<b>*</b></label><input id="em" name="email" type="email" required /></div>
        <div className="field"><label htmlFor="co">Company</label><input id="co" name="company" /></div>
      </div>
      <div className="field">
        <label htmlFor="int">I&apos;m interested in</label>
        <select id="int" name="interest" defaultValue="Database System Health Check">
          <option>Database System Health Check</option>
          <option>Data Platform Modernisation</option>
          <option>Database Consulting</option>
          <option>Managed DBA &amp; Support (24/7)</option>
          <option>DB Shield Security &amp; Compliance</option>
          <option>Azure Migration / Consulting</option>
          <option>BI, Fabric &amp; Power BI</option>
        </select>
      </div>
      <div className="field"><label htmlFor="msg">How can we help?</label><textarea id="msg" name="message" rows={5} /></div>
      <button className="btn btn--primary" type="submit">Send message <ReturnArrow /></button>
      {sent && <div className="form__ok">Thanks! An expert will be in touch shortly.</div>}
    </form>
  );
}
