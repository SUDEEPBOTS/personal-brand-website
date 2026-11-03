const BADGES = [
  { label: 'Go / Golang', note: 'Production services' },
  { label: 'Docker', note: 'Containerized infra' },
  { label: 'Cloudflare Workers', note: 'Edge & caching' },
  { label: 'Telegram / MTProto', note: 'Deep platform' },
];

export default function Badges() {
  return (
    <div className="badges">
      <div className="container">
        <span className="badges-label">Certified &amp; battle-tested</span>
        <div className="badges-row">
          {BADGES.map((b) => (
            <div className="badge reveal" key={b.label}>
              <span className="badge-name">{b.label}</span>
              <span className="badge-note">{b.note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
