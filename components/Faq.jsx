'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'What kind of projects do you usually take on?',
    a: 'I focus on backend-heavy work: Telegram bots, high-concurrency APIs, media streaming engines, and cloud infrastructure. I work across Go, Python, and the ecosystem around them.',
  },
  {
    q: 'How fast can you deliver a project?',
    a: 'A focused bot or API typically ships in 1–3 weeks. Larger systems like a streaming engine take longer — I always agree on a clear timeline before starting.',
  },
  {
    q: 'Do you work with existing teams?',
    a: 'Yes. I often join teams that need a deep backend specialist — whether it is scaling an existing service, architecting a new one, or debugging a critical performance issue.',
  },
  {
    q: 'How do we communicate during the project?',
    a: 'Preferably Telegram, mostly on a shared channel with your team. I keep updates regular and keep the code in your repo from day one.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Common questions</h2>
          <p>Everything you might want to know before we start.</p>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item reveal ${isOpen ? 'open' : ''}`} key={i}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? '300px' : '0' }}>
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
