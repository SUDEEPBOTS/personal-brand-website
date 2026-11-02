const TOOLS = [
  'HTML / CSS',
  'JavaScript',
  'React',
  'Next.js',
  'UI Design',
  'Responsive',
  'SEO',
];

export default function Stack() {
  return (
    <div className="stack">
      <div className="container">
        <span className="stack-label">Toolkit</span>
        <ul className="stack-list">
          {TOOLS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
