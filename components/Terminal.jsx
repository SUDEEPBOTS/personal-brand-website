'use client';

import { useEffect, useState } from 'react';

const LINES = [
  { prompt: '$', text: 'yiki upload ./demo.mp4 --chunked --on video' },
  { prompt: '…', text: 'chunk 1/24 uploaded (4.2 MB) · 210ms' },
  { prompt: '…', text: 'chunk 12/24 uploaded (4.2 MB) · 198ms' },
  { prompt: '✓', text: 'done — stream ready at /v/demo-8f2a' },
];

export default function Terminal() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= LINES.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 700);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section id="terminal">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Showcase</span>
          <h2>Built to be fast</h2>
          <p>A real output from the YIKIBOX upload CLI.</p>
        </div>

        <div className="terminal reveal">
          <div className="terminal-bar">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">yikibox — zsh</span>
          </div>
          <div className="terminal-body">
            {LINES.slice(0, visible).map((line, i) => (
              <div className="terminal-line" key={i}>
                <span className="terminal-prompt">{line.prompt}</span>
                <span className="terminal-text">{line.text}</span>
              </div>
            ))}
            <span className="terminal-caret" />
          </div>
        </div>
      </div>
    </section>
  );
}
