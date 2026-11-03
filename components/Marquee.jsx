'use client';

export default function Marquee({ items = [] }) {
  const doubled = [...items, ...items];
  return (
    <div className="stack-list animating">
      <div className="stack-track">
        {doubled.map((t, i) => (
          <li key={`${t}-${i}`}>{t}</li>
        ))}
      </div>
    </div>
  );
}
