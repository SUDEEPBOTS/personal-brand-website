const CLIENTS = [
  'Yukisbox',
  'YukiAPI',
  'Telegram Networks',
  'Community Platforms',
  'Streaming Startups',
];

export default function Clients() {
  return (
    <div className="clients">
      <div className="container">
        <span className="clients-label">Trusted by teams building at scale</span>
        <div className="clients-row">
          {CLIENTS.map((c) => (
            <span className="client-name" key={c}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
