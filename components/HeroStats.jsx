'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { label: 'Bots / APIs built', value: 40, suffix: '+' },
  { label: 'Uptime', value: 99, suffix: '.9%' },
  { label: 'Requests / day', value: 500, suffix: 'K+' },
];

function Counter({ value, suffix, started, delay }) {
  const [n, setN] = useState(0);
  const fired = useRef(false);

  useEffect(() => {
    if (!started || fired.current) return;
    fired.current = true;

    const duration = 1400;
    const t0 = performance.now() + delay;
    const frame = (now) => {
      const p = Math.min(Math.max((now - t0) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [started, delay, value]);

  return (
    <strong>
      {n}
      {suffix}
    </strong>
  );
}

export default function HeroStats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="hero-meta reveal d4" ref={ref}>
      {STATS.map((s, i) => (
        <div className="m" key={s.label}>
          <Counter value={s.value} suffix={s.suffix} started={started} delay={i * 180} />
          {s.label}
        </div>
      ))}
    </div>
  );
}
