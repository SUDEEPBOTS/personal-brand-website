'use client';

import Magnetic from './Magnetic';
import Parallax from './Parallax';

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <Parallax speed={0.06}>
        <div className="container">
          <div className="cta-inner reveal">
            <h2>Have a backend project in mind?</h2>
            <p>Let&apos;s talk — I&apos;ll respond within one working day.</p>
            <Magnetic>
              <a href="#contact" className="btn btn-cta">Start a conversation</a>
            </Magnetic>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
