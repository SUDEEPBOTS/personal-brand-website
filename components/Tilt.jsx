'use client';

import { useRef } from 'react';

export default function Tilt({ children, max = 6 }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', `${px * max * 2}deg`);
    el.style.setProperty('--rx', `${-py * max * 2}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div ref={ref} className="tilt" onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}
