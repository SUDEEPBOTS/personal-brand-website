'use client';

import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s talk about your project</h2>
          <p>Tell me where you are and where you&apos;d like to be. I&apos;ll reply within one working day.</p>

          <div className="contact-methods">
            <a href="mailto:hello@arjun.dev" className="method">
              <span className="label">Email</span>
              <span className="value">hello@arjun.dev</span>
            </a>
            <a href="tel:+919999999999" className="method">
              <span className="label">Phone</span>
              <span className="value">+91 99999 99999</span>
            </a>
            <div className="method">
              <span className="label">Based in</span>
              <span className="value">Mumbai, India</span>
            </div>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="you@company.com" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="What is this about?" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="A few lines about your project..." required></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send message</button>

          <div className={`form-success ${sent ? 'show' : ''}`}>
            Thank you — your message has been sent. I&apos;ll be in touch shortly.
          </div>
        </form>
      </div>
    </section>
  );
}
