'use client';

import { useEffect, useRef, useState } from 'react';

const SKILLS = [
  { name: 'Go / Golang', value: 92 },
  { name: 'Python (Pyrogram)', value: 90 },
  { name: 'Telegram / MTProto', value: 95 },
  { name: 'Streaming / FFmpeg', value: 88 },
  { name: 'Redis / Docker', value: 85 },
  { name: 'Cloudflare / Edge', value: 82 },
];

function SkillBar({ skill, started, delay }) {
  const [w, setW] = useState(0);
  const fired = useRef(false);

  useEffect(() => {
    if (!started || fired.current) return;
    fired.current = true;
    const t = setTimeout(() => setW(skill.value), delay);
    return () => clearTimeout(t);
  }, [started, delay, skill.value]);

  return (
    <div className="skill">
      <div className="skill-head">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-value">{w}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${w}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
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
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Capabilities</span>
          <h2>Depth where it matters</h2>
          <p>Focused expertise, not a mile-wide list.</p>
        </div>

        <div className="skills-grid reveal" ref={ref}>
          {SKILLS.map((s, i) => (
            <SkillBar key={s.name} skill={s} started={started} delay={i * 140} />
          ))}
        </div>
      </div>
    </section>
  );
}
