'use client';

import { useState } from 'react';

export default function Contact() {
  const [state, setState] = useState('idle'); // idle | sending | sent

  const onSubmit = (e) => {
    e.preventDefault();
    if (state === 'sending') return;
    setState('sending');
    setTimeout(() => {
      e.target.reset();
      setState('sent');
      setTimeout(() => setState('idle'), 6000);
    }, 900);
  };

  const sending = state === 'sending';

  return (
    <section id="contact">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s talk about your backend project</h2>
          <p>Whether it&apos;s a bot, an API, or a whole streaming pipeline — I&apos;ll respond within one working day.</p>

          <div className="contact-methods">
            <a href="mailto:sudeeptelegram@gmail.com" className="method">
              <span className="label">Email</span>
              <span className="value">sudeeptelegram@gmail.com</span>
            </a>
            <a href="https://t.me/Z0iiw" target="_blank" rel="noopener noreferrer" className="method">
              <span className="label">Telegram</span>
              <span className="value">t.me/Z0iiw</span>
            </a>
            <a href="https://github.com/SUDEEPBOTS" target="_blank" rel="noopener noreferrer" className="method">
              <span className="label">GitHub</span>
              <span className="value">github.com/SUDEEPBOTS</span>
            </a>
            <div className="method">
              <span className="label">Based in</span>
              <span className="value">Delhi, India</span>
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

          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? 'Sending…' : 'Send message'}
          </button>

          <div className={`form-success ${state === 'sent' ? 'show' : ''}`}>
            Thank you — your message has been sent. I&apos;ll be in touch shortly.
          </div>
        </form>
      </div>
    </section>
  );
}
