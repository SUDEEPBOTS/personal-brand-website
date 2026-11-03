const WORDS = [
  'Backend Systems',
  'Telegram Bots',
  'Streaming Engines',
  'High-Concurrency APIs',
  'MTProto',
  'Cloud Infrastructure',
];

const ROW = [...WORDS, ...WORDS];

export default function Banner() {
  return (
    <div className="banner" aria-hidden="true">
      <div className="banner-track">
        {ROW.map((w, i) => (
          <span className="banner-word" key={i}>{w}<em>·</em></span>
        ))}
      </div>
    </div>
  );
}
