const TOOLS = [
  'Go / Golang',
  'Python',
  'JavaScript',
  'SQL',
  'Bash',
  'MTProto',
  'Redis',
  'Docker',
];

export default function Stack() {
  return (
    <div className="stack">
      <div className="container">
        <span className="stack-label">Core stack</span>
        <ul className="stack-list">
          {TOOLS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
