const METRICS = [
  { value: '500K+', label: 'API requests / day' },
  { value: '99.9%', label: 'Uptime' },
  { value: '40+', label: 'Bots & systems shipped' },
  { value: '8', label: 'Edge regions' },
];

export default function Metrics() {
  return (
    <div className="metrics">
      <div className="container">
        {METRICS.map((m) => (
          <div className="metric reveal" key={m.label}>
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
