'use client';

import { useRef } from 'react';

// Cursor-following spotlight glow on a card.
export default function Spotlight({ children }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty('--sx', `${x}px`);
    el.style.setProperty('--sy', `${y}px`);
  };

  return (
    <div ref={ref} className="spotlight" onMouseMove={onMove}>
      {children}
    </div>
  );
}
