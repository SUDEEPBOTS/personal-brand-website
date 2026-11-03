'use client';

import { useState } from 'react';

const TESTIMONIALS = [
  {
    quote:
      'Sudeep built our media streaming pipeline and API layer. Hundreds of thousands of requests a day, and it never blinks.',
    name: 'Product Lead',
    role: 'Yukisbox',
  },
  {
    quote:
      'He joined our team mid-project and untangled a bottleneck we had struggled with for weeks. Deep, rare capability.',
    name: 'Engineering Manager',
    role: 'Startup · Delhi',
  },
  {
    quote:
      'The bot infrastructure he designed handles heavy group traffic flawlessly. It just works, quietly, at scale.',
    name: 'Community Admin',
    role: 'Telegram Network',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Testimonials</span>
          <h2>What people say</h2>
          <p>Trusted by teams running production systems.</p>
        </div>

        <div className="testimonial reveal">
          <div className="testimonial-quote">
            &ldquo;{t.quote}&rdquo;
          </div>
          <div className="testimonial-cite">
            <strong>{t.name}</strong>
            <span>{t.role}</span>
          </div>
          <div className="testimonial-nav">
            <button onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous">←</button>
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                className={`dotnav ${idx === i ? 'active' : ''}`}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
            <button onClick={() => setI((i + 1) % TESTIMONIALS.length)} aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
